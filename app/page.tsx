import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";

const SectionLoader = () => <div className="py-20 text-center text-white/30 text-sm">Loading...</div>;

const ProjectsSection       = dynamic(() => import("@/components/sections/ProjectsSection"),       { loading: () => <SectionLoader /> });
const CertificationsSection = dynamic(() => import("@/components/sections/CertificationsSection"), { loading: () => <SectionLoader /> });
const EducationSection      = dynamic(() => import("@/components/sections/EducationSection"),      { loading: () => <SectionLoader /> });
const ContactSection        = dynamic(() => import("@/components/sections/ContactSection"),        { loading: () => <SectionLoader /> });

export default function Page() {
  return (
    <main className="text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
