import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Surface from "@/components/Surface";
import SkillsGrid from "@/components/SkillsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    
    <main className="bg-[#0F172A] text-white">
      <Hero />

      <Section id="about" title="About">
        <Surface className="max-w-4xl p-10">
          <div className="space-y-6 text-center">
            <p className="text-slate-300 leading-relaxed text-lg">
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
        </Surface>
      </Section>

      <Section id="skills" title="Skills & Technologies">
        <div className="max-w-5xl mx-auto">
          <SkillsGrid />
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <FeaturedProjects />
      </Section>

      <Section id="certifications" title="Certifications">
        <Certifications />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </main>
  );
}
