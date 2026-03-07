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
        stiffness:  75,
        damping:    18,
        delay:      0.2 + index * 0.12,
      }}
      whileHover={
        reduced
          ? {}
          : {
              y:         -4,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
      }
      className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-default"
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
    <div className="relative">

      {/* ── Decorative oversized background text ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none whitespace-nowrap font-black leading-none"
        style={{
          fontSize:    "clamp(7rem, 14vw, 13rem)",
          color:       "rgba(255,255,255,0.025)",
          top:         "-0.15em",
          left:        "-0.05em",
          zIndex:       0,
          letterSpacing: "-0.04em",
        }}
      >
        ABOUT
      </div>

      {/* ── Ambient glow orb ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width:      "40vw",
          height:     "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
          filter:     "blur(60px)",
          top:        "20%",
          left:       "-10%",
          zIndex:      0,
        }}
      />

      {/* ── Content grid ── */}
      <div className="relative z-10 flex flex-col gap-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ─────── LEFT: label + heading ─────── */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ type: "spring", stiffness: 65, damping: 18, delay: 0.05 }}
          className="order-2 lg:order-1 flex flex-col gap-7"
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative z-10 flex items-center gap-2"
          >
            <span
              className="inline-block w-6 h-px shrink-0 rounded-full"
              style={{ background: "linear-gradient(to right, #14b8a6, rgba(20,184,166,0.15))" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#14b8a6" }}
            >
              About Me
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Who I Am
          </motion.h2>

        </motion.div>

        {/* ─────── RIGHT: bio + chips + button ─────── */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ type: "spring", stiffness: 65, damping: 18, delay: 0.15 }}
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          {/* Para 1 — bright intro */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              color:      "#e2e8f0",
              fontSize:   "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight:  1.85,
            }}
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
            style={{
              color:      "#94a3b8",
              fontSize:   "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight:  1.85,
            }}
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
            style={{
              color:      "#94a3b8",
              fontSize:   "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight:  1.85,
            }}
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
                whileHover={reduced ? {} : { scale: 1.07 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default select-none
                           transition-colors duration-200
                           hover:bg-teal-500/10 hover:border-teal-400/50"
                style={{
                  border:   "1px solid rgba(20,184,166,0.28)",
                  background: "rgba(20,184,166,0.06)",
                  color:    "#5eead4",
                }}
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
            className="pt-2"
          >
            <a
              href="/Yash_Parmar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center gap-2
                px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl
                bg-gradient-to-r from-teal-500 to-cyan-400
                text-slate-900 text-sm font-bold
                shadow-[0_4px_20px_rgba(20,184,166,0.4)]
                hover:shadow-[0_6px_32px_rgba(20,184,166,0.6)]
                hover:scale-[1.04] active:scale-[0.97]
                transition-all duration-300
                overflow-hidden w-fit
                focus-visible:ring-2 focus-visible:ring-teal-400 outline-none
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
        </div>

        {/* ── Stat cards — full-width 4-col grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </div>
  );
}
