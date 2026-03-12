"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "certifications",
  "education",
  "contact",
] as const;

/**
 * Tracks which section ID is currently closest to the top of the viewport.
 * Returns `null` when the user is at the very top of the page (< 80 px).
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 80) {
        setActiveSection(null);
        return;
      }

      let closest: string | null = null;
      let closestDist = Infinity;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const dist = Math.abs(el.getBoundingClientRect().top - 100);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }

      setActiveSection(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { activeSection };
}
