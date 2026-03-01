"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Download, Linkedin } from "lucide-react";

const techStack = [
  { name: "React",      dot: "#61DAFB" },
  { name: "Next.js",    dot: "#ffffff" },
  { name: "TypeScript", dot: "#3178C6" },
  { name: "Node.js",    dot: "#68A063" },
  { name: "MongoDB",    dot: "#47A248" },
  { name: "Python",     dot: "#F7C948" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const nameVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, type: "spring", stiffness: 80 } },
};

const ROLES = ["Full-Stack Developer", "Problem Solver", "Software Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let i = typing ? 0 : current.length;
    let alive = true;

    const tick = setInterval(() => {
      if (!alive) return;
      if (typing) {
        i++;
        setDisplayed(current.slice(0, i));
        if (i >= current.length) {
          clearInterval(tick);
          setTimeout(() => { if (alive) setTyping(false); }, 2600);
        }
      } else {
        i--;
        setDisplayed(current.slice(0, i));
        if (i <= 0) {
          clearInterval(tick);
          setRoleIndex((r) => (r + 1) % ROLES.length);
          setTimeout(() => { if (alive) setTyping(true); }, 400);
        }
      }
    }, typing ? 95 : 48);

    return () => { alive = false; clearInterval(tick); };
  }, [roleIndex, typing]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/6 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/4 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center"
        >

          {/* ── LEFT: Photo ── */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[360px] md:h-[360px]">

              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(20,184,166,0.0) 0%, rgba(20,184,166,0.55) 45%, rgba(6,182,212,0.5) 55%, rgba(20,184,166,0.0) 100%)",
                  padding: "2px",
                  borderRadius: "9999px",
                }}
              />
              {/* Mask inner circle to show only ring */}
              <div className="absolute inset-[2px] rounded-full bg-[#030d18] pointer-events-none" />

              {/* Soft glow */}
              <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-2xl pointer-events-none scale-110" />

              {/* Photo */}
              <div className="relative w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
                <Image
                  src="/profile.jpg"
                  alt="Yash Parmar"
                  fill
                  className="object-cover object-top scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col gap-5 mt-6 lg:mt-0">

            {/* Availability tag */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-[11px] font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name — spring entrance */}
            <motion.h1
              variants={nameVariant}
              className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.02]"
            >
              Yash Parmar
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={item} className="h-9 flex items-center">
              <span className="text-xl md:text-2xl font-semibold text-teal-300 tracking-tight">
                {displayed}
                <span className="inline-block w-[2px] h-6 ml-0.5 bg-teal-400 align-middle rounded-full animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-gray-400 text-[15px] leading-7 max-w-md">
              I build scalable web applications focused on clean architecture,
              performance, and structured problem-solving.
            </motion.p>

            {/* Tagline */}
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="h-px w-8 bg-teal-500/30 shrink-0" />
              <p className="text-gray-500 text-sm italic">
                Building at the intersection of performance and design.
              </p>
            </motion.div>

            {/* Location line */}
            <motion.div variants={item} className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={13} className="text-teal-500/70" strokeWidth={2} />
              <span>Gujarat, India</span>
              <span className="mx-1.5 text-gray-700">·</span>
              <span>Open to Remote &amp; Relocation</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex items-center gap-3 flex-wrap pt-1">
              {/* Primary — solid */}
              <a
                href="/Yash_Parmar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#020c14] text-sm font-semibold transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(20,184,166,0.35)] hover:shadow-[0_0_32px_rgba(20,184,166,0.55)]"
              >
                <Download size={15} strokeWidth={2.5} />
                Download Resume
              </a>
              {/* Secondary — outlined */}
              <a
                href="https://linkedin.com/in/yash-parmar-b99796289"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/15 text-gray-300 text-sm font-semibold hover:border-teal-500/50 hover:text-teal-300 hover:bg-teal-500/5 transition-all duration-200 active:scale-95"
              >
                <Linkedin size={15} strokeWidth={2} />
                LinkedIn
              </a>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={item} className="pt-5 border-t border-white/[0.07]">
              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600 font-semibold mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map(({ name, dot }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 text-sm font-medium hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-500/5 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: dot }} />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}