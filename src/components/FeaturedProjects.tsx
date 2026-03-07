"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

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

const containerVariants = {
  hidden:   { opacity: 0 },
  visible:  { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* ─── Single Project Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, reduced }: { project: Project; reduced: boolean }) {
  const isBlue = !project.comingSoon;

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
        className={[
          "relative h-full flex flex-col overflow-hidden rounded-2xl p-6 md:p-8",
          "bg-gray-900/50 backdrop-blur-sm border transition-all duration-300",
          isBlue
            ? "border-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
            : "border-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10",
        ].join(" ")}
      >
        {/* Gradient overlay on hover */}
        <div
          className={[
            "absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl",
            isBlue ? "from-blue-900/20" : "from-purple-900/20",
          ].join(" ")}
        />

        {/* Top row: Coming Soon badge OR GitHub icon */}
        <div className="relative z-10 flex items-start justify-between mb-5">
          {project.comingSoon ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
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
          {/* Title — gradient on hover */}
          <h3
            className={[
              "text-2xl font-bold leading-snug transition-all duration-300",
              "text-white group-hover:text-transparent group-hover:bg-clip-text",
              isBlue
                ? "group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400"
                : "group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400",
            ].join(" ")}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed flex-1 text-slate-400">
            {project.description}
          </p>

          {/* Tech badges — pill style */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 5).map(tech => (
              <span
                key={tech}
                className={[
                  "px-3 py-1 text-xs font-medium rounded-full cursor-default transition-colors duration-200",
                  isBlue
                    ? "bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
                    : "bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20",
                ].join(" ")}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            {project.comingSoon ? (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg text-sm font-semibold cursor-not-allowed select-none bg-gray-800/50 border border-gray-700/50 text-gray-500"
              >
                View Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                href={project.link}
                className={[
                  "group/cta inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg text-sm font-semibold transition-all duration-300",
                  isBlue
                    ? "bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60"
                    : "bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/60",
                  "focus-visible:ring-2 focus-visible:ring-teal-400 outline-none",
                ].join(" ")}
              >
                View Case Study
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export default function FeaturedProjects() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="space-y-8">
      {/* Section intro row */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center justify-end"
      >
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{
            border:     "1px solid rgba(20,184,166,0.25)",
            background: "rgba(20,184,166,0.06)",
            color:      "#5eead4",
          }}
        >
          {PROJECTS.length} projects
        </span>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        role="list"
        aria-label="Featured Projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-2"
      >
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} reduced={reduced} />
        ))}
      </motion.div>
    </div>
  );
}
