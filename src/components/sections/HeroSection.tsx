"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight, Github, Linkedin } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

/* ─────────────────────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────────────────────── */
const ROLES = ["Full-Stack Developer", "ML Engineer", "Next.js Developer"];

const TECH_STACK = [
  { name: "React", dot: "#61DAFB" },
  { name: "Next.js", dot: "#ffffff" },
  { name: "TypeScript", dot: "#3178C6" },
  { name: "Node.js", dot: "#68A063" },
  { name: "MongoDB", dot: "#47A248" },
  { name: "Python", dot: "#F7C948" },
];

const WORDS = ["Yash", "Parmar"];

/* ─────────────────────────────────────────────────────────────────────────────
   Typewriter hook  (all loop state in refs — zero extra re-renders)
───────────────────────────────────────────────────────────────────────────── */
function useTypewriter(roles: string[]) {
  const [displayed, setDisplayed] = useState("");
  const charRef = useRef(0);
  const roleRef = useRef(0);
  const phaseRef = useRef<"typing" | "reading" | "deleting" | "waiting">(
    "typing",
  );
  const ticksRef = useRef(0);

  useEffect(() => {
    const TICK_MS = 65;
    const READ_TICKS = Math.round(2000 / TICK_MS);
    const WAIT_TICKS = Math.round(450 / TICK_MS);

    const id = setInterval(() => {
      const role = roles[roleRef.current];
      switch (phaseRef.current) {
        case "typing": {
          const next = charRef.current + 1;
          charRef.current = next;
          setDisplayed(role.slice(0, next));
          if (next >= role.length) {
            phaseRef.current = "reading";
            ticksRef.current = READ_TICKS;
          }
          break;
        }
        case "reading": {
          if (ticksRef.current > 0) ticksRef.current--;
          else phaseRef.current = "deleting";
          break;
        }
        case "deleting": {
          const next = charRef.current - 1;
          charRef.current = next;
          setDisplayed(role.slice(0, next));
          if (next <= 0) {
            roleRef.current = (roleRef.current + 1) % roles.length;
            phaseRef.current = "waiting";
            ticksRef.current = WAIT_TICKS;
          }
          break;
        }
        case "waiting": {
          if (ticksRef.current > 0) ticksRef.current--;
          else phaseRef.current = "typing";
          break;
        }
      }
    }, TICK_MS);

    return () => clearInterval(id);
  }, [roles]);

  return displayed;
}

/* ─────────────────────────────────────────────────────────────────────────────
   3-D Photo Card with mouse-tracking tilt
───────────────────────────────────────────────────────────────────────────── */
function PhotoCard({ reduced }: { reduced: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    rawX.set(ny * -24);
    rawY.set(nx * 24);
  }
  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      {...(!reduced && {
        animate: { opacity: 1, x: 0, y: [0, -8, 0] },
        transition: {
          opacity: { duration: 0.7, delay: 0.35 },
          x: { duration: 0.7, delay: 0.35, ease: "easeOut" },
          y: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        },
      })}
      className="flex justify-center lg:justify-end"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          reduced
            ? {}
            : {
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative cursor-default"
      >
        {/* Ambient glow behind circle */}
        <motion.div
          aria-hidden
          className="absolute pointer-events-none rounded-full z-0"
          style={{
            inset: "-20%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.22) 0%, transparent 70%)",
            filter: "blur(28px)",
          }}
          animate={reduced ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Floating circle with image */}
        <div
          className="relative z-10 overflow-hidden rounded-full"
          style={{
            width: "min(240px, 72vw)",
            height: "min(240px, 72vw)",
            boxShadow:
              "0 0 0 3px rgba(20,184,166,0.7), 0 0 60px rgba(20,184,166,0.2)",
            transform: reduced ? undefined : "translateZ(20px)",
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Yash Parmar - Full-Stack Developer"
            fill
            priority
            className="object-cover object-center"
            sizes="240px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HeroSection
───────────────────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const displayed = useTypewriter(ROLES);
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/3  left-1/4  w-[500px] h-[500px] rounded-full bg-teal-500/8  blur-[160px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-blue-500/6  blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/*
          Mobile:  single col, photo first (order-1), text second (order-2)
          Desktop: 55 / 45 grid — text left, photo right
        */}
        <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
          {/* ── TEXT COLUMN ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* [1] Status badge */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* [2] Name — word-level slide-up stagger */}
            <h1
              className="font-extrabold text-white leading-[1.05] mt-3 sm:mt-5"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                letterSpacing: "-0.03em",
              }}
              aria-label="Yash Parmar"
            >
              {WORDS.map((word, wi) => (
                <span
                  key={wi}
                  className="inline-block overflow-hidden mr-[0.5em] last:mr-0"
                  style={{ lineHeight: 1.08 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{
                      y: prefersReduced ? 0 : "100%",
                      opacity: prefersReduced ? 0 : 1,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + wi * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* [3] Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center"
              style={{ minHeight: "2.6rem" }}
            >
              <span
                className="font-semibold tracking-tight"
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                  color: "#14b8a6",
                }}
              >
                {displayed}
                {/* Blinking cursor */}
                <motion.span
                  className="inline-block ml-[2px] w-[2px] h-[0.85em] bg-teal-400 align-middle rounded-sm"
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </span>
            </motion.div>

            {/* [4] Bio */}
            <motion.p
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              style={{
                color: "#94a3b8",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              I build scalable web applications focused on clean architecture,
              performance, and structured problem-solving.
            </motion.p>

            {/* [5] Italic tagline — blockquote style */}

            {/* [6] Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="flex items-center gap-2"
              style={{ color: "#94a3b8", fontSize: "0.925rem" }}
            >
              <MapPin
                size={16}
                color="#14b8a6"
                strokeWidth={2}
                className="shrink-0"
              />
              <span>Navsari, Gujarat</span>
            </motion.div>

            {/* [7] CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {/* Primary: View Projects */}
              <PrimaryButton href="#projects" className="w-full sm:w-auto">
                View Projects
                <ArrowRight size={16} strokeWidth={2.5} />
              </PrimaryButton>

              {/* Secondary: Contact Me */}
              <PrimaryButton
                href="#contact"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Contact Me
              </PrimaryButton>
            </motion.div>

            {/* [7.5] Social icon links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <PrimaryButton
                href="https://github.com/Yash-109"
                target="_blank"
                variant="ghost"
                aria-label="GitHub"
                className="text-sm"
              >
                <Github size={15} strokeWidth={2} />
                GitHub
              </PrimaryButton>

              <PrimaryButton
                href="https://linkedin.com/in/yash-parmar-b99796289"
                target="_blank"
                variant="ghost"
                aria-label="LinkedIn"
                className="text-sm"
              >
                <Linkedin size={15} strokeWidth={2} />
                LinkedIn
              </PrimaryButton>
            </motion.div>

            {/* [8] Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="pt-3 border-t border-white/10"
            >
              <p className="text-xs tracking-[0.2em] text-slate-500 uppercase mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map(({ name, dot }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.25 + i * 0.07, duration: 0.3 }}
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2.5 rounded-full text-xs font-semibold
                      border border-teal-500/30 bg-teal-500/10 text-teal-300
                      cursor-default select-none
                      hover:bg-teal-500/15 hover:border-teal-400/50
                      hover:shadow-[0_4px_14px_rgba(20,184,166,0.18)]
                      hover:-translate-y-0.5 active:translate-y-0
                      transition-all duration-200
                    "
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: dot }}
                    />
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── PHOTO COLUMN ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <PhotoCard reduced={prefersReduced} />
          </div>
        </div>
      </div>
    </section>
  );
}
