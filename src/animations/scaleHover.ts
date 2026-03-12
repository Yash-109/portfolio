/** Drop-in motion props for interactive cards and buttons */
export const scaleHoverProps = {
  whileHover: { scale: 1.04 },
  whileTap:   { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
} as const;

/** Lighter scale for large cards */
export const scaleHoverCardProps = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap:   { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
} as const;
