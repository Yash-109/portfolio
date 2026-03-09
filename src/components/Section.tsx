import { ReactNode } from "react";

interface SectionProps {
  id:        string;
  title:     string;
  subtitle?: string;
  badge?:    string;
  tinted?:   boolean;
  children:  ReactNode;
}

export default function Section({ id, title, subtitle, badge, tinted, children }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "relative py-28 sm:py-32 md:py-36 lg:py-44 overflow-hidden",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {/* Accent underline bar */}
          <div className="mt-4 mx-auto h-[3px] w-20 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-80 shadow-[0_0_10px_rgba(20,184,166,0.4)]" />
          {badge && (
            <div className="mt-5 flex justify-center">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  border:     "1px solid rgba(20,184,166,0.30)",
                  background: "rgba(20,184,166,0.08)",
                  color:      "#5eead4",
                }}
              >
                {badge}
              </span>
            </div>
          )}
          {subtitle && (
            <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
