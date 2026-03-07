import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  title:    string;   // kept for aria/SEO — each section renders its own heading
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
