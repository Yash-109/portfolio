"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactInput from "./ui/ContactInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name must be less than 50 characters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        break;
      case "subject":
        if (value.length < 3) return "Subject must be at least 3 characters";
        if (value.length > 100) return "Subject must be less than 100 characters";
        break;
      case "message":
        if (value.length < 10) return "Message must be at least 10 characters";
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

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Clear general error message
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (value.trim()) {
      const error = validateField(name, value);
      if (error) {
        setValidationErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setValidationErrors({});

    // Validate all fields
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      } else {
        const error = validateField(key, value);
        if (error) errors[key] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setStatus("error");
      setErrorMessage("Please fix the errors before submitting");
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

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error?.text ||
          "Failed to send message. Please email me directly at yashparmar1027@gmail.com"
      );
    }
  };

  /* ── render ── */
  return (
    <div className="relative">
      {/* Subtle glow behind the card */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/10 blur-xl -z-10" />

      <div className="rounded-2xl bg-slate-900/80 backdrop-blur-lg border border-slate-800 overflow-hidden shadow-2xl">
        {/* Top accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent" />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            /* ─── Success state ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="p-10 flex flex-col items-center justify-center text-center min-h-[420px] gap-5"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.55, times: [0, 0.65, 1] }}
                className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl font-semibold text-white mb-2">Message Sent!</p>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            /* ─── Form state ─── */
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">Send a Message</h3>
                <p className="text-sm text-slate-500">I'll get back to you within 24–48 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <ContactInput
                  label="Name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
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
                  error={validationErrors.message}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                />

                {/* Error banner */}
                <AnimatePresence>
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-red-400 text-sm bg-red-500/8 border border-red-500/20 rounded-lg px-4 py-3"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status !== "loading" ? 1.01 : 1 }}
                  whileTap={{ scale: status !== "loading" ? 0.98 : 1 }}
                  className={`
                    w-full rounded-xl px-6 py-3 font-medium text-white text-sm
                    flex items-center justify-center gap-2
                    transition-colors duration-200 min-h-[44px]
                    ${
                      status === "loading"
                        ? "bg-slate-700 cursor-not-allowed opacity-60"
                        : "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
                    }
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
