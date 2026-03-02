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
  visible:  { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* ─── Single Project Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, reduced }: { project: Project; reduced: boolean }) {
  const accent = project.comingSoon ? "#a855f7" : "#3b82f6";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={reduced ? {} : { y: -12, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      {/* Card shell */}
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-2xl p-8 transition-all duration-300"
        style={{
          background:     "rgba(15,23,42,0.75)",
          border:         "1px solid rgba(148,163,184,0.12)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = accent + "66";
          el.style.boxShadow   = `0 0 0 1px ${accent}33, 0 20px 60px ${accent}25, 0 8px 32px ${accent}15`;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(148,163,184,0.12)";
          el.style.boxShadow   = "none";
        }}
      >
        {/* Subtle dot texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(148,163,184,0.07) 1px, transparent 1px)",
            backgroundSize:  "20px 20px",
          }}
        />

        {/* Ambient gradient on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${accent}0d 0%, transparent 60%)`,
          }}
        />

        {/* Top row: Coming Soon badge OR GitHub icon */}
        <div className="relative z-10 flex items-start justify-between mb-5">
          {/* Left: Coming Soon badge */}
          {project.comingSoon ? (
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(168,85,247,0.12)",
                border:     "1px solid rgba(168,85,247,0.3)",
                color:      "#c084fc",
              }}
            >
              Coming Soon
            </span>
          ) : (
            <span /> /* spacer */
          )}

          {/* Right: GitHub icon */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              onClick={e => e.stopPropagation()}
              className="transition-colors duration-200"
              style={{ color: "rgba(148,163,184,0.5)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(148,163,184,0.5)"; }}
            >
              <Github className="w-5 h-5" />
            </a>
          ) : (
            <span /> /* spacer */
          )}
        </div>

        {/* Main content (grows to fill card) */}
        <div className="relative z-10 flex flex-col flex-1 space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white leading-snug transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${accent === "#3b82f6" ? "#60a5fa, #a78bfa" : "#c084fc, #f472b6"})`,
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed flex-1" style={{ color: "#94a3b8" }}>
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 5).map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-default"
                style={{
                  background:  "rgba(30,41,59,0.8)",
                  border:      "1px solid rgba(148,163,184,0.15)",
                  color:       "#94a3b8",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.borderColor = accent + "55";
                  el.style.boxShadow   = `0 0 8px ${accent}30`;
                  el.style.color       = "#e2e8f0";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.borderColor = "rgba(148,163,184,0.15)";
                  el.style.boxShadow   = "none";
                  el.style.color       = "#94a3b8";
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Case Study button */}
          <div className="pt-4">
            {project.comingSoon ? (
              <button
                disabled
                title="Coming Soon"
                className="inline-flex items-center gap-2 text-base font-medium cursor-not-allowed select-none"
                style={{ color: "rgba(148,163,184,0.35)" }}
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={project.link}
                className="inline-flex items-center gap-2 text-base font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: "#60a5fa" }}
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
    <div className="space-y-6">
      {/* Section intro row — matches SkillsGrid pattern */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <p
          className="font-mono font-semibold tracking-wide"
          style={{ fontSize: "0.78rem", color: "#14b8a6", letterSpacing: "0.12em" }}
        >
          // projects
        </p>
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} reduced={reduced} />
        ))}
      </motion.div>
    </div>
  );
}
