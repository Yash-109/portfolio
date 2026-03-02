"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaBookOpen, FaMapMarkerAlt } from "react-icons/fa";

interface EducationCard {
  title: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  statusBg: string;
  statusText: string;
  statusBorder: string;
  score: string;
  scoreLabel: string;
  cardGradient: string;
  iconGradient: string;
  scoreColor: string;
  icon: ReactNode;
}

const educationData: EducationCard[] = [
  {
    title: "B.Tech in Computer Science Engineering",
    institution: "Charotar University of Science and Technology",
    location: "CHARUSAT",
    year: "2023 – 2027",
    status: "Currently in 3rd Year",
    statusBg: "bg-green-500/20",
    statusText: "text-green-400",
    statusBorder: "border-green-500/30",
    score: "8.1/10",
    scoreLabel: "CGPA",
    cardGradient: "from-blue-500/10 to-indigo-600/10",
    iconGradient: "from-blue-500 to-indigo-600",
    scoreColor: "#60a5fa",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "AB School, Partapore",
    location: "Partapore, Gujarat",
    year: "2023",
    status: "Science Stream",
    statusBg: "bg-blue-500/20",
    statusText: "text-blue-400",
    statusBorder: "border-blue-500/30",
    score: "91.33%",
    scoreLabel: "Percentage",
    cardGradient: "from-green-500/10 to-teal-600/10",
    iconGradient: "from-green-500 to-teal-600",
    scoreColor: "#34d399",
    icon: <FaBook className="w-6 h-6" />,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "AB School, Partapore",
    location: "Partapore, Gujarat",
    year: "2021",
    status: "GSEB Board",
    statusBg: "bg-purple-500/20",
    statusText: "text-purple-400",
    statusBorder: "border-purple-500/30",
    score: "71.84%",
    scoreLabel: "Percentage",
    cardGradient: "from-orange-500/10 to-amber-600/10",
    iconGradient: "from-orange-500 to-amber-600",
    scoreColor: "#fb923c",
    icon: <FaBookOpen className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ExperienceEducation() {
  return (
    <div className="space-y-6">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <p
          className="font-mono font-semibold tracking-wide"
          style={{ fontSize: "0.78rem", color: "#14b8a6", letterSpacing: "0.12em" }}
        >
          // education
        </p>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{
            border: "1px solid rgba(20,184,166,0.25)",
            background: "rgba(20,184,166,0.06)",
            color: "#5eead4",
          }}
        >
          {educationData.length} qualifications
        </span>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {educationData.map((edu) => (
          <motion.div
            key={edu.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative z-10 hover:z-20"
          >
            {/* Card */}
            <div
              className="
                relative
                h-full
                flex flex-col
                bg-slate-900/70
                border border-slate-800
                rounded-2xl
                p-6
                backdrop-blur-md
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                hover:border-teal-500/25
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* Subtle gradient overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.cardGradient} pointer-events-none`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full gap-4">

                {/* Top row: icon + year badge */}
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex items-center justify-center
                      flex-shrink-0
                      w-12 h-12
                      min-w-[3rem]
                      rounded-xl
                      bg-gradient-to-br ${edu.iconGradient}
                      text-white
                      shadow-lg
                    `}
                  >
                    {edu.icon}
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-400 whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug">
                  {edu.title}
                </h3>

                {/* Institution + Location */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-slate-300">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Status badge */}
                <div>
                  <span
                    className={`
                      inline-flex items-center gap-1.5
                      px-3 py-1
                      rounded-full
                      border
                      text-xs font-medium
                      ${edu.statusBg} ${edu.statusText} ${edu.statusBorder}
                    `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                    {edu.status}
                  </span>
                </div>

                {/* Score — pushed to bottom */}
                <div className="mt-auto pt-3 border-t border-slate-800/60">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl font-extrabold tabular-nums"
                      style={{ color: edu.scoreColor }}
                    >
                      {edu.score}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {edu.scoreLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className={`
                  absolute -bottom-6 -right-6
                  w-24 h-24
                  rounded-full
                  bg-gradient-to-br ${edu.iconGradient}
                  opacity-5
                  group-hover:opacity-10
                  transition-opacity duration-500
                  pointer-events-none
                `}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
