import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Surface from "@/components/Surface";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceEducation from "@/components/ExperienceEducation";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Hero />

      {/* Credibility Metrics */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 pt-12">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          
          <div className="space-y-2">
            <p className="text-3xl font-semibold">4+ Projects</p>
            <p className="text-gray-400">Full-stack and ML systems built with production-style architecture.</p>
          </div>

          <div className="space-y-2">
            <p className="text-3xl font-semibold">Rule-Based Engine</p>
            <p className="text-gray-400">Designed modular scoring and evaluation logic.</p>
          </div>

          <div className="space-y-2">
            <p className="text-3xl font-semibold">Multi-Market Analytics</p>
            <p className="text-gray-400">Session, strategy, and behavioral performance tracking.</p>
          </div>

        </div>
      </section>

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

      <Section id="experience" title="Experience & Education">
        <ExperienceEducation />
      </Section>

      <Section id="projects" title="Projects">
        <FeaturedProjects />
      </Section>

      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </main>
  );
}
