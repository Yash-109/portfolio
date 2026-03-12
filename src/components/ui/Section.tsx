import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  tinted?:  boolean;
  children: ReactNode;
}

export default function Section({ id, tinted, children }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "relative py-28 md:py-32 overflow-x-hidden",
        tinted ? "bg-white/[0.018]" : "",
      ].join(" ")}
    >
      {/* Top separator — bolder teal glow line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent pointer-events-none shadow-[0_1px_12px_rgba(20,184,166,0.25)]" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent pointer-events-none" />
      {/* Subtle ambient side accents */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-px h-2/3 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-px h-2/3 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
