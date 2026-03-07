"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";
import { SiCoursera, SiNvidia } from "react-icons/si";

interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  skills: string[];
  file: string;
  category: "development" | "ml-ai" | "cloud" | "dsa";
  gradient: string;
  icon: ReactNode;
  score?: string;
  certId?: string;
}

const certificates: Certificate[] = [
  {
    id: "mern-stack",
    name: "MERN Stack Development",
    organization: "Coursera",
    date: "August 2025",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    file: "/certificates/MernStack.pdf",
    category: "development",
    gradient: "from-green-500 to-emerald-600",
    icon: <SiCoursera className="w-6 h-6" />,
  },
  {
    id: "ml-python",
    name: "Machine Learning with Python",
    organization: "IBM / Coursera",
    date: "August 2025",
    skills: ["Python", "ML Algorithms", "Classification", "Regression"],
    file: "/certificates/MachineLearningWithPython.pdf",
    category: "ml-ai",
    gradient: "from-blue-500 to-indigo-600",
    icon: <FaCertificate className="w-6 h-6" />,
  },
  {
    id: "ai-jetson",
    name: "AI on Jetson Nano",
    organization: "NVIDIA",
    date: "January 2025",
    skills: ["Edge AI", "Computer Vision", "Deep Learning", "IoT"],
    file: "/certificates/AI Jetson Nano.pdf",
    category: "ml-ai",
    gradient: "from-green-600 to-teal-600",
    icon: <SiNvidia className="w-6 h-6" />,
    certId: "Xe8g5Ds19yu6WRq48u6EGA",
  },
  {
    id: "dsa-java",
    name: "Data Structures & Algorithms",
    organization: "NPTEL (IIT Kharagpur)",
    date: "Oct 2024",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    file: "/certificates/Data Structure and Algorithms using Java (1).pdf",
    category: "dsa",
    gradient: "from-orange-500 to-red-600",
    icon: <FaAward className="w-6 h-6" />,
    score: "52%",
  },
  {
    id: "solutions-arch",
    name: "Solutions Architecture",
    organization: "Forage Platform",
    date: "February 2025",
    skills: ["Cloud Architecture", "Scalable Systems", "Infrastructure Design"],
    file: "/certificates/Solutions Architecture Job Simulations.pdf",
    category: "cloud",
    gradient: "from-purple-500 to-pink-600",
    icon: <FaCertificate className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Certifications() {
  return (
    <div className="space-y-8">
      {/* Section header row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="relative z-10 flex items-center gap-2">
          <span
            className="inline-block w-6 h-px shrink-0 rounded-full"
            style={{ background: "linear-gradient(to right, #14b8a6, rgba(20,184,166,0.15))" }}
          />
          <span
            className="text-xs font-semibold tracking-[0.18em] uppercase"
            style={{ color: "#14b8a6" }}
          >
            Certifications
          </span>
        </div>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{
            border: "1px solid rgba(20,184,166,0.25)",
            background: "rgba(20,184,166,0.06)",
            color: "#5eead4",
          }}
        >
          {certificates.length} certifications
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="group relative h-full"
        >
          <div className="relative h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

            {/* Decorative corner orb */}
            <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">

              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg mb-5 shrink-0`}>
                {cert.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 leading-snug">
                {cert.name}
              </h3>

              {/* Provider */}
              <p className="text-gray-400 text-sm font-semibold mb-2">
                {cert.organization}
              </p>

              {/* Date + optional score */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="w-3 h-3" />
                  {cert.date}
                </span>
                {cert.score && (
                  <span className="flex items-center gap-1.5">
                    <FaAward className="w-3 h-3" />
                    {cert.score}
                  </span>
                )}
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-2.5 py-1 text-xs bg-gray-700/40 border border-gray-700 rounded-lg text-gray-400">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>

              {/* Cert ID */}
              {cert.certId && (
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <p className="text-xs text-gray-600 truncate">ID: {cert.certId}</p>
                </div>
              )}

              {/* Download button — appears on hover */}
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Certificate"
                title="Download Certificate"
                onClick={e => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
              >
                <FaDownload className="w-3.5 h-3.5" />
                Download
              </a>

            </div>
          </div>
        </motion.div>
      ))}
      </motion.div>
    </div>
  );
}
