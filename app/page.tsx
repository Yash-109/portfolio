import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Surface from "@/components/Surface";
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

            <div className="pt-6">
              <a
                href="/Yash_Parmar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>View Resume</span>
              </a>
            </div>
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

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>
    </main>
  );
}
