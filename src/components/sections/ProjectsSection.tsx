"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { staggerContainer, staggerItem } from "@/animations/stagger";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Project {
  id:          string;
  title:       string;
  description: string;
  techStack:   string[];
  link:        string;
  github:      string | null;
  comingSoon?: boolean;
}

const PROJECTS: Project[] = [
  {
    id:          "electrotrack",
    title:       "Electrotrack",
    description: "Full-stack e-commerce platform for electronics with Razorpay payments and admin dashboard.",
    techStack:   ["Next.js 15", "TypeScript", "MongoDB", "NextAuth.js", "Razorpay"],
    link:        "/projects/electrotrack",
    github:      "https://github.com/Yash-109/Electrotrack",
  },
  {
    id:          "tradejournal",
    title:       "TradeJournal Pro+",
    description: "Multi-market trading analytics platform with rule-based scoring and behavioral tracking.",
    techStack:   ["Next.js", "Node.js", "MongoDB", "JWT", "Recharts"],
    link:        "/projects/tradejournal",
    github:      "https://github.com/Yash-109/Trading-Journal",
  },
  {
    id:          "ml-predictor",
    title:       "ML Risk Predictor",
    description: "Machine learning model for predictive risk analysis and pattern recognition.",
    techStack:   ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Flask"],
    link:        "/projects/ml-predictor",
    github:      null,
    comingSoon:  true,
  },
];

const containerVariants = staggerContainer;
const cardVariants      = staggerItem;

/* ─── Single Project Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, reduced }: { project: Project; reduced: boolean }) {
  return (
    <motion.div
      role="listitem"
      variants={cardVariants}
      whileHover={reduced ? {} : { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={reduced ? {} : { scale: 0.98 }}
      className="group relative z-0 h-full hover:z-10"
    >
      {/* Card shell */}
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-2xl p-8 bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-teal-500/50 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(20,184,166,0.14)] transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 rounded-t-2xl" />
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        />

        {/* Top row: Coming Soon badge OR GitHub icon */}
        <div className="relative z-10 flex items-start justify-between mb-5">
          {project.comingSoon ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-500/10 border border-gray-500/30 text-gray-400">
              Coming Soon
            </span>
          ) : (
            <span />
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              onClick={e => e.stopPropagation()}
              className="text-gray-500 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-teal-400 rounded outline-none"
            >
              <Github className="w-5 h-5" />
            </a>
          ) : (
            <span />
          )}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col flex-1 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/60 leading-relaxed mt-2 flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.slice(0, 5).map(tech => (
              <span
                key={tech}
                className="text-xs bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-full px-3 py-1 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4">
            {project.comingSoon ? (
              <span className="text-sm text-white/30 flex items-center gap-1 cursor-not-allowed select-none">
                View Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            ) : (
              <PrimaryButton
                href={project.link}
                variant="ghost"
                size="sm"
              >
                View Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
  const reduced = useReducedMotion() ?? false;
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <motion.div
        ref={ref}
        role="list"
        aria-label="Featured Projects"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} reduced={reduced} />
        ))}
      </motion.div>
    </Section>
  );
}
