"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Triggers visibility once when the referenced element enters the viewport.
 * Respects `prefers-reduced-motion` — immediately marks as visible so reduced-
 * motion users skip the reveal delay entirely.
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, options]);

  return { ref, isVisible };
}
