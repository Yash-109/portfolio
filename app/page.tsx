import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Page() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Hero />

      <Section id="about" title="About">
        <p className="text-slate-300 max-w-2xl">Placeholder content.</p>
      </Section>

      <Section id="projects" title="Projects">
        <p className="text-slate-300 max-w-2xl">Placeholder content.</p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-slate-300 max-w-2xl">Placeholder content.</p>
      </Section>
    </main>
  );
}
