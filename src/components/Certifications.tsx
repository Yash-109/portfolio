"use client";

import { motion } from "framer-motion";
import { FaDownload, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";
import { SiCoursera, SiNvidia } from "react-icons/si";

interface Certificate {
  id: number;
  name: string;
  organization: string;
  date: string;
  skills: string[];
  file: string;
  category: "development" | "ml-ai" | "cloud" | "dsa";
  gradient: string;
  icon: React.ReactNode;
  score?: string;
  certId?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
    >
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative"
        >
          {/* Certificate Card */}
          <div
            className="
              relative
              bg-slate-900/60
              border border-slate-800
              rounded-2xl
              p-6
              backdrop-blur-md
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              hover:border-slate-700
              transition-all
              duration-300
              overflow-hidden
              h-full
              flex
              flex-col
            "
          >
            {/* Gradient Glow Effect */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-10
                bg-gradient-to-br ${cert.gradient}
                transition-opacity duration-500
              `}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`
                    flex items-center justify-center
                    w-14 h-14
                    rounded-xl
                    bg-gradient-to-br ${cert.gradient}
                    text-white
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  {cert.icon}
                </div>

                {/* Download Button */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-10 h-10
                    rounded-lg
                    bg-slate-800/80
                    hover:bg-slate-700
                    text-slate-300
                    hover:text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                  aria-label="Download Certificate"
                >
                  <FaDownload className="w-4 h-4" />
                </a>
              </div>

              {/* Certificate Name */}
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {cert.name}
              </h3>

              {/* Organization */}
              <p className="text-slate-400 text-sm mb-3 font-medium">
                {cert.organization}
              </p>

              {/* Date & Score */}
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
                {cert.score && (
                  <div className="flex items-center gap-2">
                    <FaAward className="w-3 h-3" />
                    <span>{cert.score}</span>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1
                      text-xs
                      rounded-full
                      bg-slate-800/60
                      text-slate-300
                      border border-slate-700
                      hover:border-slate-600
                      transition-colors
                      duration-200
                    "
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span
                    className="
                      px-3 py-1
                      text-xs
                      rounded-full
                      bg-slate-800/60
                      text-slate-400
                      border border-slate-700
                    "
                  >
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>

              {/* Cert ID (if available) */}
              {cert.certId && (
                <div className="mt-3 pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-500 truncate">
                    ID: {cert.certId}
                  </p>
                </div>
              )}
            </div>

            {/* Decorative Corner Accent */}
            <div
              className={`
                absolute -bottom-8 -right-8
                w-32 h-32
                rounded-full
                bg-gradient-to-br ${cert.gradient}
                opacity-5
                group-hover:opacity-10
                transition-opacity
                duration-500
              `}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
