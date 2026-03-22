"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const MINI_STATS = [
  { value: "8.1", label: "CGPA at CHARUSAT" },
  { value: "3rd", label: "Year (2023-2027)" },
  { value: "2+", label: "Production Apps" },
  { value: "ML Intern", label: "Vaishnav Technologies" },
];

const TECH_TAGS = ["Next.js 15", "ML Engineering", "System Design"];

export default function AboutSection() {
  const reduced = useReducedMotion() ?? false;

  return (
    <Section id="about">
      <SectionHeader title="About" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-stretch">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 max-w-xl lg:sticky lg:top-32"
        >
          <motion.h3
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white via-white to-teal-200/80 bg-clip-text text-transparent"
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
            Computer Science at CHARUSAT (2023-2027), currently in my 3rd year
            with an 8.1 CGPA.
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
            edge cases, and the user experience under imperfect conditions.
            Every project is a chance to raise my own standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.45 }}
            className="pt-2"
          >
            <PrimaryButton
              href="/Yash_Parmar_Resume.pdf"
              target="_blank"
              variant="ghost"
              aria-label="Download Resume"
            >
              <Download size={16} strokeWidth={2.5} />
              Download Resume
            </PrimaryButton>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 w-full"
        >
          {/* Availability Banner */}
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-emerald-400 font-medium text-sm">
              Available for Opportunities
            </span>
            <span className="ml-auto text-xs text-white/40 whitespace-nowrap">
              Freelance and Full-Time
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {MINI_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-b from-white/5 to-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
              >
                <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Info Card */}
          <div className="bg-gradient-to-b from-white/5 to-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-4 shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">
              Quick Info
            </p>
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
              <span className="text-sm text-white/60">
                Open to Freelance and Full-Time
              </span>
            </div>
            <div className="flex items-center gap-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              <span className="text-sm text-white/60">
                India - Remote friendly
              </span>
            </div>
          </div>

          {/* Tech Focus Card */}
          <div className="bg-gradient-to-b from-white/5 to-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-4 shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">
              Currently focused on
            </p>
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
    </Section>
  );
}
