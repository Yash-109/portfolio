"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/* ---------------------------------------------------------------------------
   Types
--------------------------------------------------------------------------- */
interface StatDef {
  numericTarget: number;
  decimals:      number;
  suffix:        string;
  label:         string;
}

/* ---------------------------------------------------------------------------
   Data
--------------------------------------------------------------------------- */
const STATS: StatDef[] = [
  { numericTarget: 2,   decimals: 0, suffix: "+", label: "Production Apps Shipped" },
  { numericTarget: 5,   decimals: 0, suffix: "+", label: "Certifications Earned"   },
  { numericTarget: 8.1, decimals: 1, suffix: "",  label: "CGPA at CHARUSAT"        },
];

/* ---------------------------------------------------------------------------
   Count-up  (rAF ease-out triggered by Framer Motion useInView)
--------------------------------------------------------------------------- */
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
  const isInView = useInView(spanRef, { once: true, amount: 0.4 });
  const started  = useRef(false);

  useEffect(() => {
    if (!isInView || started.current || !spanRef.current) return;
    started.current = true;

    if (reduced) {
      spanRef.current.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    const DURATION = 1500;
    const startTs  = performance.now();

    const tick = (now: number) => {
      const t     = Math.min((now - startTs) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 2);
      if (spanRef.current) {
        spanRef.current.textContent = (eased * target).toFixed(decimals) + suffix;
      }
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, decimals, suffix, reduced]);

  return <span ref={spanRef}>{"0" + suffix}</span>;
}

/* ---------------------------------------------------------------------------
   Stat Card  (3-D left-border style, animated count-up)
--------------------------------------------------------------------------- */
function StatCard({
  stat,
  index,
  reduced,
}: {
  stat:    StatDef;
  index:   number;
  reduced: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : -20, scale: reduced ? 1 : 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        type:    "spring",
        stiffness: 80,
        damping:   18,
        delay:   0.3 + index * 0.15,
      }}
      whileHover={
        reduced
          ? {}
          : {
              x:         4,
              borderColor: "rgba(20,184,166,0.4)",
              boxShadow: "0 10px 30px rgba(20,184,166,0.1)",
            }
      }
      className="flex items-center gap-5 px-6 py-5 rounded-xl cursor-default transition-colors duration-300"
      style={{
        background:  "rgba(15, 23, 42, 0.9)",
        border:      "1px solid rgba(20,184,166,0.15)",
        borderLeft:  "3px solid #14b8a6",
      }}
    >
      <div
        className="font-extrabold tabular-nums shrink-0"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#14b8a6", lineHeight: 1 }}
      >
        <CountUp
          target={stat.numericTarget}
          decimals={stat.decimals}
          suffix={stat.suffix}
          reduced={reduced}
        />
      </div>
      <div style={{ fontSize: "0.875rem", color: "#94a3b8" }}>{stat.label}</div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
   AboutSection
--------------------------------------------------------------------------- */
export default function AboutSection() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="relative">
      {/* Decorative oversized "ABOUT" text — purely visual, no interaction */}
      <div
        aria-hidden
        className="absolute top-[-20px] left-[-20px] pointer-events-none select-none whitespace-nowrap font-black leading-none"
        style={{
          fontSize:   "clamp(8rem, 15vw, 14rem)",
          fontWeight:  900,
          color:      "rgba(255,255,255,0.02)",
          zIndex:      0,
        }}
      >
        ABOUT
      </div>

      {/* All real content sits above the decorative text */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT: section label + heading + stat cards ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.1 }}
          className="order-2 lg:order-1 flex flex-col gap-6"
        >
          {/* Section label */}
          <p
            className="font-mono font-semibold"
            style={{ fontSize: "0.875rem", color: "#14b8a6" }}
          >
            // about me
          </p>

          {/* Heading */}
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Who I Am
          </h2>

          {/* Stat cards — horizontal scroll on mobile, vertical stack on desktop */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} reduced={reduced} />
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: bio paragraphs + chips + resume button ──────────── */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.2 }}
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          {/* Para 1 — slightly brighter intro */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{ color: "#e2e8f0", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.8 }}
          >
            I&apos;m a Full-Stack Developer and ML Engineer pursuing B.Tech in
            Computer Science at CHARUSAT (2023&ndash;2027), currently in my 3rd
            year with an 8.1 CGPA.
          </motion.p>

          {/* Para 2 */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{ color: "#94a3b8", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.8 }}
          >
            I build production-grade applications &mdash; from trading analytics
            platforms with real-time charts and risk engines, to e-commerce
            systems with payment integration and admin dashboards. I also apply
            machine learning to real business problems, backed by an internship
            at Vaishnav Technologies.
          </motion.p>

          {/* Para 3 */}
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{ color: "#94a3b8", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.8 }}
          >
            I write clean, structured code and care deeply about performance,
            edge cases, and the user experience under imperfect conditions. Every
            project is a chance to raise my own standard.
          </motion.p>

        </motion.div>

      </div>
    </div>
  );
}
