import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8 relative ${className}`}
    >
      {children}
    </section>
  );
}
