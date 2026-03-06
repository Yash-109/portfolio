"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactInput from "./ui/ContactInput";

const RATE_LIMIT_SECONDS = 30;

export default function ContactFormNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Honeypot — must remain empty for legitimate submissions
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Rate-limiting countdown
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, []);

  const startCooldown = () => {
    setCooldown(RATE_LIMIT_SECONDS);
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current!);
          cooldownRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name must be less than 50 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        break;
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3) return "Subject must be at least 3 characters";
        if (value.length > 100) return "Subject must be less than 100 characters";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        if (value.length > 500) return "Message must be less than 500 characters";
        break;
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate live only after the field has been blurred once
    if (touched[name]) {
      const error = validateField(name, value);
      setValidationErrors((prev) => ({ ...prev, [name]: error }));
    }

    if (errorMessage) setErrorMessage("");
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setValidationErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check — silently reject bot submissions
    if (honeypot) return;

    setStatus("loading");
    setErrorMessage("");

    // Mark all fields as touched so errors become visible
    setTouched({ name: true, email: true, subject: true, message: true });

    // Validate all fields
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setStatus("error");
      setErrorMessage("Please fix the errors below before submitting");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateAdmin = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN;
    const templateUser = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateAdmin || !templateUser || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service not configured. Please contact me directly at yashparmar1027@gmail.com"
      );
      return;
    }

    try {
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Yash Parmar",
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateAdmin, emailParams, publicKey);
      await emailjs.send(serviceId, templateUser, emailParams, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setValidationErrors({});
      setTouched({});
      startCooldown();
    } catch (error: unknown) {
      const message =
        typeof error === "object" && error !== null && "text" in error && typeof (error as { text: unknown }).text === "string"
          ? (error as { text: string }).text
          : "Failed to send message. Please email me directly at yashparmar1027@gmail.com";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  const handleSendAnother = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const isSubmitDisabled = status === "loading" || cooldown > 0;

  /* ── render ── */
  return (
    <div className="relative">
      {/* Stronger layered glow behind the card */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/25 via-violet-500/10 to-indigo-500/15 blur-2xl -z-10" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/30 via-transparent to-violet-500/20 blur-lg -z-10" />

      {/* Card — glassmorphism with border glow */}
      <div className="rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-slate-700/60 overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.08)] ring-1 ring-indigo-500/10">
        {/* Top accent bar — gradient shimmer */}
        <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            /* ─── Success state — glassmorphism + particles ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative p-10 md:p-12 flex flex-col items-center justify-center text-center min-h-[440px] gap-6 overflow-hidden"
              role="status"
              aria-live="polite"
            >
              {/* Success bg shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

              {/* Celebration particles */}
              {[...Array(12)].map((_, k) => (
                <motion.span
                  key={k}
                  className="absolute w-1 h-1 rounded-full pointer-events-none"
                  style={{
                    background: ["#6366f1","#8b5cf6","#10b981","#f59e0b","#ec4899"][k % 5],
                    left: `${10 + (k * 7.5) % 80}%`,
                    top: `${15 + (k * 11) % 70}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 1, 0],
                    y: [0, -(30 + (k % 3) * 20)],
                    x: [0, ((k % 2 === 0 ? 1 : -1) * (10 + (k % 4) * 8))],
                  }}
                  transition={{ delay: 0.2 + k * 0.06, duration: 1.1, ease: "easeOut" }}
                />
              ))}

              {/* Animated check circle */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: [0, 1.18, 1], rotate: [-15, 5, 0] }}
                transition={{ type: "spring", stiffness: 320, damping: 20, delay: 0.1 }}
                className="relative w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                {/* Pulse ring */}
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
                <CheckCircle2 className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" aria-hidden="true" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 22 }}
              >
                <p className="text-2xl font-bold text-white mb-2 tracking-tight">Message Sent!</p>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {cooldown > 0 ? (
                  <p className="text-xs text-slate-500">
                    You can send another message in{" "}
                    <span className="tabular-nums text-slate-400 font-medium">{cooldown}s</span>
                  </p>
                ) : (
                  <motion.button
                    onClick={handleSendAnother}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 underline-offset-4 hover:underline font-medium"
                  >
                    Send another message
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ) : (
            /* ─── Form state ─── */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-10"
            >
              {/* Form Header */}
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">Send a Message</h3>
                <p className="text-sm text-slate-500">I&apos;ll get back to you within 24–48 hours</p>
              </div>

              {/* Visually hidden live region announces general errors to screen readers */}
              <div role="status" aria-live="assertive" aria-atomic="true" className="sr-only">
                {status === "error" && errorMessage ? errorMessage : ""}
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="space-y-5"
              >
                {/* Honeypot — visually hidden, bots fill it, humans don't */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", top: "-9999px", visibility: "hidden" }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <ContactInput
                  label="Name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={validationErrors.name}
                  placeholder="Your name"
                  required
                />

                <ContactInput
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={validationErrors.email}
                  placeholder="your.email@example.com"
                  required
                />

                <ContactInput
                  label="Subject"
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={validationErrors.subject}
                  placeholder="What's this about?"
                  required
                />

                <ContactInput
                  label="Message"
                  id="message"
                  as="textarea"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={validationErrors.message}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  showCounter
                  maxLength={500}
                  required
                />

                {/* Error banner */}
                <AnimatePresence>
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="text-red-400 text-sm bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit — gradient + larger + stronger shadow */}
                <motion.button
                  type="submit"
                  disabled={isSubmitDisabled}
                  aria-disabled={isSubmitDisabled}
                  whileHover={!isSubmitDisabled ? { scale: 1.015, y: -1 } : {}}
                  whileTap={!isSubmitDisabled ? { scale: 0.975 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`
                    w-full rounded-xl px-6 py-3.5 font-semibold text-white text-sm
                    flex items-center justify-center gap-2.5
                    transition-all duration-200 min-h-[48px]
                    ${
                      isSubmitDisabled
                        ? "bg-slate-700 cursor-not-allowed opacity-60 shadow-none"
                        : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-[0_4px_24px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_32px_rgba(99,102,241,0.55)]"
                    }
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : cooldown > 0 ? (
                    <span>Wait <span className="tabular-nums font-bold">{cooldown}s</span> before resending</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
