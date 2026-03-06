"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactFormNew from "./ContactFormNew";

export default function Contact() {
  return (
    <div className="relative">
      {/* Background ambient orbs — larger + more vivid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-56 -left-56 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -bottom-56 -right-56 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* Centered intro */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-400 text-base mb-14 max-w-lg mx-auto leading-relaxed"
      >
        Whether it&apos;s a freelance project, full-time role, or just a chat about
        tech — my inbox is always open.
      </motion.p>

      {/* Two-column grid — wider gap */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <ContactInfo />
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        >
          <ContactFormNew />
        </motion.div>
      </div>
    </div>
  );
}
