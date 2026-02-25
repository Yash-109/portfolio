import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal stagger>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
