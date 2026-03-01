"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div aria-hidden="true" className="aurora-root">
      {/* Beam 1 — teal, top-left anchor */}
      <div className="aurora-beam aurora-beam-1" />
      {/* Beam 2 — cyan, right side */}
      <div className="aurora-beam aurora-beam-2" />
      {/* Beam 3 — sky-blue, bottom-center */}
      <div className="aurora-beam aurora-beam-3" />
      {/* Beam 4 — indigo, center-right, soft bridge to UI accent colors */}
      <div className="aurora-beam aurora-beam-4" />
      {/* Mouse-tracking radial spotlight */}
      <div ref={glowRef} className="aurora-mouse-glow" />
      {/* SVG fractal noise for depth / prevent flat look */}
      <div className="aurora-noise" />
    </div>
  );
}
