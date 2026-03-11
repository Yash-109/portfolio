"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";

const SKILL_CHIPS = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Python",
  "ML Engineering",
];

const MINI_STATS = [
  { value: "8.1",  label: "CGPA at CHARUSAT" },
  { value: "3rd",  label: "Year (2023-2027)"  },
  { value: "2+",   label: "Production Apps"   },
  { value: "1 mo", label: "ML Internship"     },
];

const TECH_TAGS = ["Next.js 15", "ML Engineering", "System Design"];

export default function AboutSection() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">

      {/* LEFT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: reduced ? 0 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-[55%] min-w-0 flex flex-col gap-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
        >
          Who I Am
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg text-white/80 leading-relaxed"
        >
          I am a Full-Stack Developer and ML Engineer pursuing B.Tech in
          Computer Science at CHARUSAT (2023-2027), currently in my 3rd
          year with an 8.1 CGPA.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-base md:text-lg text-white/80 leading-relaxed"
        >
          I build production-grade applications from trading analytics
          platforms with real-time charts and risk engines, to e-commerce
          systems with payment integration and admin dashboards. I also apply
          machine learning to real business problems, backed by an internship
          at Vaishnav Technologies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base md:text-lg text-white/80 leading-relaxed"
        >
          I write clean, structured code and care deeply about performance,
          edge cases, and the user experience under imperfect conditions. Every
          project is a chance to raise my own standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.48, duration: 0.4 }}
          className="flex flex-wrap gap-2 pt-1"
        >
          {SKILL_CHIPS.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.28 }}
              className="px-4 py-2 rounded-full text-xs font-semibold cursor-default select-none bg-teal-500/10 border border-teal-500/25 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-200"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="pt-2"
        >
          <a
            href="/Yash_Parmar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 text-sm font-bold shadow-[0_4px_20px_rgba(20,184,166,0.4)] hover:shadow-[0_8px_32px_rgba(20,184,166,0.6)] hover:scale-[1.04] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 overflow-hidden w-fit outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <Download size={16} strokeWidth={2.5} className="relative z-10 shrink-0" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN */}
      <motion.div
        initial={{ opacity: 0, x: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-[45%] min-w-0 flex flex-col gap-3"
      >
        {/* Availability Banner */}
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-emerald-400 font-medium text-sm">Available for Opportunities</span>
          <span className="ml-auto text-xs text-white/40 whitespace-nowrap">Freelance and Full-Time</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {MINI_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
              <p className="text-xs text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Info Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Quick Info</p>
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            <span className="text-sm text-white/60">Navsari, Gujarat</span>
          </div>
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            <span className="text-sm text-white/60">CHARUSAT University</span>
          </div>
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            <span className="text-sm text-white/60">Open to Freelance and FT</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            <span className="text-sm text-white/60">India - Remote friendly</span>
          </div>
        </div>

        {/* Tech Focus Card */}
        <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/20 rounded-xl p-4">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Currently focused on</p>
          <div className="flex flex-wrap gap-2">
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="bg-teal-500/15 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
