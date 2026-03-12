import { ReactNode } from "react";

interface SectionProps {
  id:       string;
  tinted?:  boolean;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
