"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children:     ReactNode;
  /** Renders an <a> tag instead of <button> when provided */
  href?:        string;
  /** Pass `true` or a filename string to trigger file download */
  download?:    boolean | string;
  target?:      "_blank" | "_self";
  rel?:         string;
  onClick?:     () => void;
  disabled?:    boolean;
  type?:        "button" | "submit" | "reset";
  className?:   string;
  "aria-label"?: string;
}

const BASE =
  "group relative inline-flex items-center justify-center gap-2 " +
  "px-7 py-3.5 min-h-[44px] rounded-xl overflow-hidden " +
  "bg-gradient-to-r from-teal-500 to-cyan-400 " +
  "text-slate-900 text-[15px] font-bold tracking-wide " +
  "shadow-[0_4px_20px_rgba(20,184,166,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] " +
  "hover:shadow-[0_8px_32px_rgba(20,184,166,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none " +
  "transition-shadow duration-300 cursor-pointer";

export default function PrimaryButton({
  children,
  href,
  download,
  target,
  rel,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: PrimaryButtonProps) {
  const reduced = useReducedMotion() ?? false;

  const motionProps = {
    whileHover: disabled || reduced ? {} : { scale: 1.02, y: -2 },
    whileTap:   disabled || reduced ? {} : { scale: 0.97, y: 0 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  };

  const shimmer = (
    <span
      aria-hidden
      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)" }}
    />
  );

  const combinedClass = `${BASE} ${className}`.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        className={combinedClass}
        {...motionProps}
      >
        {shimmer}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClass}
      {...motionProps}
    >
      {shimmer}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
