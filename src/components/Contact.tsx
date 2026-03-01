"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactFormNew from "./ContactFormNew";

export default function Contact() {
  return (
    <div className="relative">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-indigo-500/5 blur-[80px]" />
      </div>

      {/* Centered intro */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-400 text-base mb-12 max-w-lg mx-auto"
      >
        Whether it's a freelance project, full-time role, or just a chat about
        tech — my inbox is always open.
      </motion.p>

      {/* Two-column grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ContactInfo />
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <ContactFormNew />
        </motion.div>
      </div>
    </div>
  );
}
