import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  title:    string;   // kept for aria/SEO — each section renders its own heading
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
