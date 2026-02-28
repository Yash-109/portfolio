"use client";

import { useState, FormEvent, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AtSign,
  MapPin,
  Clock,
  Briefcase,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import AnimatedInput from "./ui/AnimatedInput";

/* ─────────────────────────── constants ────────────────────────────── */

const socialLinks = [
  {
    id: "email",
    label: "Email",
    value: "yashparmar1027@gmail.com",
    href: "mailto:yashparmar1027@gmail.com",
    icon: Mail,
    color: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.35)",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Yash-109",
    href: "https://github.com/Yash-109",
    icon: Github,
    color: "from-gray-500 to-gray-300",
    glow: "rgba(161,161,170,0.25)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Yash Parmar",
    href: "https://linkedin.com/in/yash-parmar-b99796289",
    icon: Linkedin,
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(37,99,235,0.35)",
  },
];

const quickInfoItems = [
  { icon: Clock, label: "Response Time", value: "24–48 hours" },
  { icon: MapPin, label: "Location", value: "India (Remote)" },
  { icon: Briefcase, label: "Open to", value: "Freelance & Full-time" },
];

/* ─────────────────────────── helpers ──────────────────────────────── */

interface ConfettiParticle {
  id: number;
  color: string;
  delay: number;
  x: number;
  y: number;
  rotate: number;
}

/* ─────────────────────────── component ────────────────────────────── */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiParticles, setConfettiParticles] = useState<ConfettiParticle[]>([]);

  /* client-only confetti (avoids hydration mismatch from Math.random) */
  useEffect(() => {
    const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"];
    setConfettiParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        delay: i * 0.05,
        x: (Math.random() - 0.5) * 300,
        y: -120 - Math.random() * 80,
        rotate: Math.random() * 720 - 360,
      }))
    );
  }, []); // runs once on client mount only

  /* validation function wrapped in useCallback */
  const validateFields = useCallback(() => {
    const errors: Record<string, string> = {};
    const valid: Record<string, boolean> = {};

    if (formData.name.length > 0) {
      if (formData.name.length < 2) errors.name = "Name must be at least 2 characters";
      else if (formData.name.length > 50) errors.name = "Name must be less than 50 characters";
      else valid.name = true;
    }
    if (formData.email.length > 0) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        errors.email = "Please enter a valid email address";
      else valid.email = true;
    }
    if (formData.subject.length > 0) {
      if (formData.subject.length < 3) errors.subject = "Subject must be at least 3 characters";
      else if (formData.subject.length > 100) errors.subject = "Subject must be less than 100 characters";
      else valid.subject = true;
    }
    if (formData.message.length > 0) {
      if (formData.message.length < 10) errors.message = "Message must be at least 10 characters";
      else if (formData.message.length > 500) errors.message = "Message must be less than 500 characters";
      else valid.message = true;
    }

    setValidationErrors(errors);
    setValidFields(valid);
  }, [formData]);

  /* debounced real-time validation */
  useEffect(() => {
    const timer = setTimeout(() => validateFields(), 500);
    return () => clearTimeout(timer);
  }, [formData, validateFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validate all fields immediately before submission
    validateFields();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (Object.keys(validationErrors).length > 0) {
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
      setErrorMessage("Email service not configured. Please contact me directly at yashparmar1027@gmail.com");
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
      setShowConfetti(true);
      setIsFlipped(true);

      setTimeout(() => {
        setIsFlipped(false);
        setShowConfetti(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setValidFields({});
        setTimeout(() => setStatus("idle"), 300);
      }, 3500);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error?.text || "Failed to send message. Please email me directly at yashparmar1027@gmail.com");
    }
  };

  /* ─── render ─── */
  return (
    <div className="relative py-8 overflow-hidden">
      {/* ── decorative orbs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── section badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            Let's build something together
          </span>
        </motion.div>

        {/* ── two-column grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* ══════════ LEFT COLUMN ══════════ */}
          <div className="space-y-10">
            {/* headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                <span className="text-white">Ready to </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  collaborate?
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Whether it's a freelance project, full-time role, or just a chat about tech — my inbox is always open.
              </p>
            </motion.div>

            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-semibold">
                Available for new opportunities
              </span>
            </motion.div>

            {/* social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-3"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                Find me on
              </p>
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target={link.id !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/8 hover:border-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    style={{
                      boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${link.glow}, 0 2px 20px rgba(0,0,0,0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.2)";
                    }}
                  >
                    {/* icon circle */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${link.color} bg-opacity-20 flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-white font-semibold text-sm truncate">{link.value}</p>
                    </div>

                    {/* arrow */}
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="p-6 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">
                Quick info
              </p>
              <div className="grid grid-cols-3 gap-4">
                {quickInfoItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.04 }}
                      className="group flex flex-col gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm font-semibold text-white leading-snug">{item.value}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ══════════ RIGHT COLUMN (form) ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* card glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-lg opacity-60" />

            <AnimatePresence mode="wait">
              {!isFlipped ? (
                /* ── form side ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                  className="relative glass rounded-3xl p-8 md:p-10"
                >
                  {/* form header */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-1">Send a message</h4>
                    <p className="text-gray-500 text-sm">I'll get back to you within 24–48 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <AnimatedInput
                      id="name"
                      name="name"
                      type="text"
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      icon={<User className="w-5 h-5" />}
                      error={validationErrors.name}
                      isValid={validFields.name}
                      required
                    />

                    <AnimatedInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<AtSign className="w-5 h-5" />}
                      error={validationErrors.email}
                      isValid={validFields.email}
                      required
                    />

                    <AnimatedInput
                      id="subject"
                      name="subject"
                      type="text"
                      label="Subject"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formData.subject}
                      onChange={handleChange}
                      icon={<Mail className="w-5 h-5" />}
                      error={validationErrors.subject}
                      isValid={validFields.subject}
                      required
                    />

                    <AnimatedInput
                      id="message"
                      name="message"
                      type="textarea"
                      label="Message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      icon={<MessageSquare className="w-5 h-5" />}
                      error={validationErrors.message}
                      isValid={validFields.message}
                      rows={5}
                      required
                    />

                    {/* error banner */}
                    <AnimatePresence>
                      {status === "error" && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -8, height: 0 }}
                          className="p-4 bg-red-500/10 border border-red-500/40 rounded-xl text-red-400 text-sm"
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: status !== "loading" ? 1.02 : 1 }}
                      whileTap={{ scale: status !== "loading" ? 0.97 : 1 }}
                      className={`
                        w-full h-14 rounded-xl
                        flex items-center justify-center gap-3
                        text-white font-semibold text-base
                        transition-all duration-300 shine-effect
                        ${status === "loading"
                          ? "bg-gray-700 cursor-not-allowed opacity-70"
                          : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:shadow-2xl hover:shadow-indigo-500/40"
                        }
                      `}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                /* ── success side ── */
                <motion.div
                  key="success"
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                  className="relative glass rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center min-h-[540px] text-center overflow-hidden"
                >
                  {/* confetti */}
                  {showConfetti &&
                    confettiParticles.map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                        animate={{ x: p.x, y: p.y, opacity: 0, scale: 0, rotate: p.rotate }}
                        transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
                        className="confetti-particle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ backgroundColor: p.color }}
                      />
                    ))}

                  {/* big check */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.25, 1] }}
                    transition={{ duration: 0.6, times: [0, 0.65, 1] }}
                    className="w-24 h-24 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-8"
                  >
                    <CheckCircle2 className="w-14 h-14 text-emerald-400" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-white mb-3"
                  >
                    Message Sent! 🎉
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="text-gray-400 text-lg max-w-xs"
                  >
                    Thank you for reaching out! I'll respond within 24–48 hours.
                  </motion.p>

                  {/* decorative orbs behind success */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
