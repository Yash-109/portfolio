import { ReactNode } from "react";

interface SectionProps {
  id: string;
  tinted?: boolean;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="relative py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
