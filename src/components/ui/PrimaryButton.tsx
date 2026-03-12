"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children:      ReactNode;
  href?:         string;
  download?:     boolean | string;
  target?:       "_blank" | "_self";
  rel?:          string;
  onClick?:      () => void;
  disabled?:     boolean;
  type?:         "button" | "submit" | "reset";
  className?:    string;
  variant?:      "solid" | "ghost";
  size?:         "sm" | "md";
  "aria-label"?: string;
}

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
  variant = "solid",
  size = "md",
  "aria-label": ariaLabel,
}: PrimaryButtonProps) {
  const reduced = useReducedMotion() ?? false;

  /* ─── Base styles ─── */
  const baseClasses = "inline-flex items-center gap-2 cursor-pointer transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  /* ─── Size variants ─── */
  const sizeClasses = size === "sm" 
    ? "px-4 py-1.5 text-xs font-medium"
    : "px-6 py-2.5 text-sm font-medium";

  /* ─── Variant styles ─── */
  const variantClasses = variant === "solid"
    ? "bg-gradient-to-r from-teal-500 to-cyan-400 text-white shadow-[0_0_18px_rgba(20,184,166,0.35)] hover:shadow-[0_0_24px_rgba(20,184,166,0.45)]"
    : "border border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_12px_rgba(20,184,166,0.2)]";

  const motionProps = {
    whileHover: disabled || reduced ? {} : { scale: 1.03 },
    whileTap:   disabled || reduced ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  };

  const combinedClass = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

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
        {children}
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
      {children}
    </motion.button>
  );
}
