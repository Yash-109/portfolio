import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AboutSection from "@/components/sections/AboutSection";
import SkillsGrid from "@/components/SkillsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import ExperienceEducation from "@/components/ExperienceEducation";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="text-white">
      <Hero />

      <Section id="about" title="About">
        <AboutSection />
      </Section>

      <Section id="skills" title="Skills & Technologies">
        <SkillsGrid />
      </Section>

      <Section id="projects" title="Projects">
        <FeaturedProjects />
      </Section>

      <Section id="certifications" title="Certifications">
        <Certifications />
      </Section>

      <Section id="education" title="Experience & Education">
        <ExperienceEducation />
      </Section>

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>
    </main>
  );
}
