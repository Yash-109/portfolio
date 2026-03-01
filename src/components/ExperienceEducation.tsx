"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  location?: string;
  duration: string;
  status?: string;
  details: string[];
  icon: ReactNode;
  gradient: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    title: "Machine Learning Intern",
    organization: "Vaishnav Technologies",
    duration: "May – June 2025",
    details: [
      "Worked on machine learning model development and implementation tasks",
      "Applied ML algorithms for real-world business problems",
      "Collaborated with team on data preprocessing and model optimization"
    ],
    icon: <FaBriefcase className="w-5 h-5" />,
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    type: "education",
    title: "B.Tech in Computer Science Engineering",
    organization: "Charotar University of Science and Technology",
    location: "CHARUSAT",
    duration: "2023 – 2027",
    status: "Currently in 3rd Year",
    details: [
      "CGPA: 8.1/10.0",
      "Focus on Full-Stack Development, Machine Learning, and System Design",
      "Active participation in technical projects and innovation"
    ],
    icon: <FaGraduationCap className="w-5 h-5" />,
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ExperienceEducation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative"
        >
          {/* Timeline Card */}
          <div
            className="
              relative
              bg-slate-900/60
              border border-slate-800
              rounded-2xl
              p-8
              backdrop-blur-md
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              hover:border-slate-700
              transition-all
              duration-300
              overflow-hidden
              group
            "
          >
            {/* Gradient Glow Effect */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-10
                bg-gradient-to-br ${item.gradient}
                transition-opacity duration-500
              `}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div
                  className={`
                    flex items-center justify-center
                    w-12 h-12
                    rounded-xl
                    bg-gradient-to-br ${item.gradient}
                    text-white
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  {item.icon}
                </div>

                {/* Title & Organization */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-300 font-medium">
                    {item.organization}
                  </p>
                  {item.location && (
                    <div className="flex items-center gap-2 mt-1 text-slate-400 text-sm">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Duration Badge */}
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    bg-slate-800/80
                    border border-slate-700
                    text-slate-300
                    text-sm
                    whitespace-nowrap
                  "
                >
                  <FaCalendarAlt className="w-3 h-3" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Status Badge (if applicable) */}
              {item.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  {item.status}
                </div>
              )}

              {/* Details List */}
              <ul className="space-y-2 mt-4">
                {item.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.gradient} flex-shrink-0`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Corner Accent */}
            <div
              className={`
                absolute -bottom-6 -right-6
                w-24 h-24
                rounded-full
                bg-gradient-to-br ${item.gradient}
                opacity-5
                group-hover:opacity-10
                transition-opacity
                duration-500
              `}
            />
          </div>

          {/* Connector Line (not on last item) */}
          {index < timelineData.length - 1 && (
            <div
              className="
                absolute left-[2.25rem] top-[5.5rem]
                w-0.5 h-8
                bg-gradient-to-b from-slate-700 to-transparent
                z-0
              "
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
