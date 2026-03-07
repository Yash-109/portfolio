import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  title:    string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
