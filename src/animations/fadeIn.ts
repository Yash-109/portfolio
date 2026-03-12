import type { Variants } from "framer-motion";

export const fadeInVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeInInitial    = { opacity: 0 } as const;
export const fadeInAnimate    = { opacity: 1 } as const;
export const fadeInTransition = { duration: 0.5 } as const;
