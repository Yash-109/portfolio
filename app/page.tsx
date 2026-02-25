import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Surface from "@/components/Surface";
import SkillsGrid from "@/components/SkillsGrid";

export default function Page() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Hero />

      <Section id="about" title="About">
        <Surface className="max-w-5xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT COLUMN — ABOUT TEXT */}
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I am a full-stack developer focused on building scalable,
                high-performance web applications with strong architectural discipline.
              </p>

              <p className="text-slate-400 leading-relaxed">
                My interests include system design, machine learning integration,
                and crafting premium UI systems that balance aesthetics and performance.
              </p>

              <p className="text-slate-400 leading-relaxed">
                I value clean code, thoughtful structure, and measurable impact in every project.
              </p>
            </div>

            {/* RIGHT COLUMN — SKILLS GRID */}
            <div
              className="
                relative
                bg-slate-900/60
                border border-slate-800
                rounded-2xl
                p-6
                backdrop-blur-md
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              <SkillsGrid />
            </div>

          </div>
        </Surface>
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
