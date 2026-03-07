"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ElementType } from "react";
import { Download, Rocket, Award, GraduationCap, Briefcase } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────────────────────────────────────── */
interface StatDef {
  numericTarget: number;
  decimals:      number;
  suffix:        string;
  label:         string;
  sublabel:      string;
  icon:          ElementType;
}

const STATS: StatDef[] = [
  {
    numericTarget: 2,
    decimals:      0,
    suffix:        "+",
    label:         "Production Apps",
    sublabel:      "Shipped & deployed",
    icon:          Rocket,
  },
  {
    numericTarget: 5,
    decimals:      0,
    suffix:        "+",
    label:         "Certifications",
    sublabel:      "IBM · NVIDIA · IIT KGP",
    icon:          Award,
  },
  {
    numericTarget: 8.1,
    decimals:      1,
    suffix:        "",
    label:         "CGPA",
    sublabel:      "at CHARUSAT University",
    icon:          GraduationCap,
  },
  {
    numericTarget: 1,
    decimals:      0,
    suffix:        " mo",
    label:         "Internship",
    sublabel:      "ML Intern · Vaishnav Tech",
    icon:          Briefcase,
  },
];

const SKILL_CHIPS = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Python",
  "ML Engineering",
];

/* ─────────────────────────────────────────────────────────────────────────────
   Count-up — rAF ease-out, fires once when card enters viewport
───────────────────────────────────────────────────────────────────────────── */
function CountUp({
  target,
  decimals,
  suffix,
  reduced,
}: {
  target:   number;
  decimals: number;
  suffix:   string;
  reduced:  boolean;
}) {
  const spanRef  = useRef<HTMLSpanElement>(null);
  const inView   = useInView(spanRef, { once: true, amount: 0.4 });
  const started  = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !spanRef.current) return;
    started.current = true;

    if (reduced) {
      spanRef.current.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    const DURATION = 1600;
    const startTs  = performance.now();

    const tick = (now: number) => {
      const t     = Math.min((now - startTs) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);          // cubic ease-out
      if (spanRef.current) {
        spanRef.current.textContent = (eased * target).toFixed(decimals) + suffix;
      }
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, decimals, suffix, reduced]);

  return (
    <span ref={spanRef} aria-label={`${target}${suffix}`}>
      {"0" + suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   StatCard — glassmorphism + teal left-bar + glow hover + count-up
───────────────────────────────────────────────────────────────────────────── */
function StatCard({
  stat,
  index,
  reduced,
}: {
  stat:    StatDef;
  index:   number;
  reduced: boolean;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24, scale: reduced ? 1 : 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type:      "spring",
        stiffness:  100,
        damping:    20,
        delay:      0.1 + index * 0.12,
      }}
      role="listitem"
      whileHover={
        reduced
          ? {}
          : {
              y:         -6,
              scale:     1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
      }
      whileTap={reduced ? {} : { scale: 0.98 }}
      className="group relative z-0 hover:z-10 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-default"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg shrink-0">
          <Icon size={20} strokeWidth={2} className="text-white" />
        </div>

        {/* Stat + labels */}
        <div>
          <h3
            className="font-bold text-white tabular-nums"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2rem)", lineHeight: 1 }}
          >
            <CountUp
              target={stat.numericTarget}
              decimals={stat.decimals}
              suffix={stat.suffix}
              reduced={reduced}
            />
          </h3>
          <p className="text-sm font-semibold text-white/90 mt-2">{stat.label}</p>
          <p className="text-xs text-gray-400 mt-0.5">{stat.sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   AboutSection
───────────────────────────────────────────────────────────────────────────── */
export default function AboutSection() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col gap-12 md:gap-16">

      {/* ── Single-column content block ── */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
        className="flex flex-col gap-6 max-w-3xl"
      >
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
        >
          Who I Am
        </motion.h3>
          {/* Para 1 — bright intro */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-slate-200 leading-relaxed"
          >
            I&apos;m a Full-Stack Developer and ML Engineer pursuing B.Tech in
            Computer Science at CHARUSAT (2023&ndash;2027), currently in my 3rd
            year with an 8.1 CGPA.
          </motion.p>

          {/* Para 2 */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed"
          >
            I build production-grade applications &mdash; from trading analytics
            platforms with real-time charts and risk engines, to e-commerce
            systems with payment integration and admin dashboards. I also apply
            machine learning to real business problems, backed by an internship
            at Vaishnav Technologies.
          </motion.p>

          {/* Para 3 */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed"
          >
            I write clean, structured code and care deeply about performance,
            edge cases, and the user experience under imperfect conditions. Every
            project is a chance to raise my own standard.
          </motion.p>

          {/* Skill chips */}
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
                className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default select-none
                           bg-teal-500/10 border border-teal-500/20 text-teal-300
                           hover:bg-teal-500/20 hover:border-teal-400/50
                           transition-colors duration-200"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          {/* Resume button */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.45 }}
            className="pt-4"
          >
            <a
              href="/Yash_Parmar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center gap-2
                px-7 py-3.5 min-h-[44px] rounded-xl
                bg-gradient-to-r from-teal-500 to-cyan-400
                text-slate-900 text-[15px] font-bold tracking-wide
                shadow-[0_4px_20px_rgba(20,184,166,0.4)]
                hover:shadow-[0_6px_32px_rgba(20,184,166,0.6)]
                hover:scale-[1.04] active:scale-[0.97]
                transition-all duration-300
                overflow-hidden w-fit
                focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 outline-none
              "
            >
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)" }}
              />
              <Download size={16} strokeWidth={2.5} className="relative z-10 shrink-0" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </motion.div>

      </motion.div>

      {/* ── Stat cards — full-width 4-col grid ── */}
      <div role="list" aria-label="Professional Statistics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} reduced={reduced} />
        ))}
      </div>
    </div>
  );
}
