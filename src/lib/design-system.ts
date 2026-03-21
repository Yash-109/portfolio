import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Unified Design System
 * Single source of truth for animation variants, class constants, and spacing tokens.
 * All section components should import from here to ensure visual consistency.
 */

import type { Variants } from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────

/** Stagger container — wraps card lists */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

/** Card entry — fade up with spring */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

/** Section header / intro row entry — fade down */
export const fadeInDown = {
  initial: { opacity: 0, y: -10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
} as const;

/** Slide in from left */
export const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay: 0.15, ease: "easeOut" },
} as const;

/** Slide in from right */
export const slideInRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay: 0.25, ease: "easeOut" },
} as const;

// ─── Interaction Tokens ────────────────────────────────────────────────────

/** Standard card hover lift — y:-6 scale:1.02 */
export const HOVER_LIFT = {
  y: -6,
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 },
} as const;

/** Tap press feedback */
export const TAP_PRESS = { scale: 0.98 } as const;

/** Scroll viewport trigger — fires once, 80px before element enters viewport */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

// ─── Class Strings ─────────────────────────────────────────────────────────

/** Unified glassmorphism card base */
export const CARD_BASE =
  "relative h-full flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10";

/** Standard icon container (pair with a gradient bg class) */
export const ICON_CONTAINER =
  "flex items-center justify-center w-12 h-12 rounded-xl shadow-lg flex-shrink-0";

/** Unified skill / tech badge */
export const SKILL_BADGE =
  "px-2.5 py-1 text-xs bg-teal-500/10 border border-teal-500/20 rounded-lg text-teal-300 whitespace-nowrap hover:bg-teal-500/20 transition-colors duration-200";

/** Consistent focus ring across all interactive elements */
export const FOCUS_RING = "focus-visible:ring-2 focus-visible:ring-teal-400 outline-none";

/** Count / metadata badge (teal pill in section intro row) */
export const COUNT_BADGE =
  "text-xs font-mono px-3 py-1 rounded-full";

/** Hover gradient overlay (place inside card, absolute inset-0, z-0) */
export const HOVER_OVERLAY =
  "absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl";

// ─── Spacing Tokens ────────────────────────────────────────────────────────

export const SPACING = {
  /** Outer section container (handled by Section.tsx wrapper) */
  section: "py-12 sm:py-16 md:py-20 lg:py-24",
  /** Inner max-width container (handled by Section.tsx wrapper) */
  container: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
  /** Heading → content gap */
  headingToContent: "mb-12 md:mb-16",
  /** Card grid gap */
  cardGrid: "gap-6 md:gap-8",
  /** Card internal padding */
  cardPadding: "p-6 md:p-8",
} as const;
