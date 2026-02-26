"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "tradejournal",
    title: "TradeJournal Pro+",
    description:
      "Multi-market trading analytics platform with rule-based scoring, session analytics, and behavioral tracking across Equity, F&O, and Forex.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JWT", "Recharts"],
    link: "/projects/tradejournal",
    featured: true,
  },
  {
    id: "electrotrack",
    title: "Electrotrack",
    description:
      "Real-time electrical consumption monitoring and analytics system with structured energy usage tracking and visualization.",
    techStack: ["React", "Python", "IoT", "Data Analytics"],
    link: "/projects/electrotrack",
    featured: false,
  },
  {
    id: "ml-disease-detection",
    title: "ML Disease Detection",
    description:
      "Machine learning model for early disease detection using medical imaging data with TensorFlow and OpenCV integration.",
    techStack: ["Python", "TensorFlow", "OpenCV", "ML"],
    link: "/projects/ml-disease-detection",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturedProjects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className={`group relative ${
            index === 0 ? "md:col-span-2 lg:col-span-3" : ""
          }`}
        >
          <Link href={project.link}>
            <div className="relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Featured Badge */}
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                    Featured Project
                  </span>
                )}

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-slate-800/60 text-gray-300 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                    <span>View Case Study</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* View All Projects Link */}
      <motion.div variants={cardVariants} className="md:col-span-2 lg:col-span-3">
        <Link
          href="/projects"
          className="group block relative bg-slate-900/20 backdrop-blur-sm border border-slate-800 border-dashed rounded-2xl p-8 text-center overflow-hidden transition-all duration-300 hover:border-blue-500/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative space-y-3">
            <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors">
              View All Projects
            </h3>
            <p className="text-gray-500 text-sm">
              Explore the complete collection of my work →
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
