import type { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeUpInitial    = { opacity: 0, y: 30 } as const;
export const fadeUpAnimate    = { opacity: 1, y: 0  } as const;
export const fadeUpTransition = { duration: 0.6, ease: "easeOut" } as const;
