import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AboutSection from "@/components/sections/AboutSection";
import SkillsGrid from "@/components/SkillsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    
    <main className="text-white">
      <Hero />

      <Section id="about" title="About">
        <AboutSection />
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

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>
    </main>
  );
}
