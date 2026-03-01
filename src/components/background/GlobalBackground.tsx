"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: "teal" | "indigo";
}

// ─── Constants ────────────────────────────────────────────────────────────────
const TEAL   = { r: 20,  g: 184, b: 166 };
const INDIGO = { r: 99,  g: 102, b: 241 };
const LINK_DIST  = 130;
const LINK_DIST2 = LINK_DIST * LINK_DIST; // skip sqrt in hot loop

// ─── Layer 1: Particle Network Canvas ────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef   = useRef<Dot[]>([]);
  const rafRef    = useRef<number>(0);
  const sizeRef   = useRef({ w: 0, h: 0 });

  const initDots = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const count    = isMobile ? 55 : 110;
    const speed    = 0.22;

    dotsRef.current = Array.from({ length: count }, () => ({
      x:   Math.random() * w,
      y:   Math.random() * h,
      vx:  (Math.random() - 0.5) * speed,
      vy:  (Math.random() - 0.5) * speed,
      hue: (Math.random() < 0.55 ? "teal" : "indigo") as "teal" | "indigo",
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const applySize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      sizeRef.current = { w, h };
      initDots(w, h);
    };

    applySize();

    const onResize = () => applySize();
    window.addEventListener("resize", onResize, { passive: true });

    const render = () => {
      const { w, h } = sizeRef.current;
      const dots = dotsRef.current;

      ctx.clearRect(0, 0, w, h);

      // Move
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }

      // Lines between close dots — O(n²), n ≤ 110 → max 5995 pairs
      for (let i = 0; i < dots.length - 1; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b  = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK_DIST2) continue;

          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.18;
          const c = a.hue === "teal" ? TEAL : INDIGO;
          ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha.toFixed(3)})`;
          ctx.lineWidth   = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Dots
      for (const d of dots) {
        const c = d.hue === "teal" ? TEAL : INDIGO;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},0.55)`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}

// ─── Layer 2: Dot-grid overlay (zero JS, pure CSS) ───────────────────────────
function GridLayer() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

// ─── Layer 3: Motion orbs ─────────────────────────────────────────────────────
interface OrbProps {
  size: number;
  color: string;
  xRange: [number, number];
  yRange: [number, number];
  duration: number;
  delay?: number;
}

const ORB_DEFS: OrbProps[] = [
  {
    size: 640,
    color: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 68%)",
    xRange: [-8, 6],
    yRange: [5, 22],
    duration: 24,
    delay: 0,
  },
  {
    size: 520,
    color: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 68%)",
    xRange: [58, 70],
    yRange: [42, 32],
    duration: 30,
    delay: -8,
  },
  {
    size: 420,
    color: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 68%)",
    xRange: [28, 18],
    yRange: [68, 58],
    duration: 38,
    delay: -15,
  },
];

function Orb({ size, color, xRange, yRange, duration, delay = 0 }: OrbProps) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position    : "absolute",
        top         : 0,
        left        : 0,
        width       : size,
        height      : size,
        background  : color,
        filter      : "blur(72px)",
        borderRadius: "50%",
        willChange  : "transform",
      }}
      animate={{
        x: xRange.map((v) => `${v}vw`),
        y: yRange.map((v) => `${v}vh`),
      }}
      transition={{
        duration,
        delay,
        repeat    : Infinity,
        repeatType: "mirror",
        ease      : "easeInOut",
      }}
    />
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020817]"
    >
      {/* Layer 1 — Particle network */}
      <ParticleCanvas />

      {/* Layer 2 — Dot grid */}
      <GridLayer />

      {/* Layer 3 — Blurred motion orbs */}
      {ORB_DEFS.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </div>
  );
}
