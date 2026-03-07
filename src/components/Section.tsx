import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  title:    string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {/* Accent underline bar */}
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-80" />
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
