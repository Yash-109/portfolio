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

      <Section id="skills" title="Skills & Technologies" badge="16 technologies" tinted>
        <SkillsGrid />
      </Section>

      <Section id="projects" title="Projects" badge="3 projects">
        <FeaturedProjects />
      </Section>

      <Section id="certifications" title="Certifications" badge="5 certifications" tinted>
        <Certifications />
      </Section>

      <Section id="education" title="Education" badge="3 qualifications">
        <ExperienceEducation />
      </Section>

      <Section id="contact" title="Get In Touch" tinted>
        <Contact />
      </Section>
    </main>
  );
}
