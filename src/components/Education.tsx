"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  status?: string;
  score: string;
  gradient: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Charotar University of Science and Technology",
    location: "CHARUSAT",
    duration: "2023 – 2027",
    status: "Currently in 3rd Year",
    score: "CGPA: 8.1/10.0",
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "AB Higher Secondary School",
    location: "Navsari",
    duration: "2022 – 2023",
    score: "71.84%",
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "AB Higher Secondary School",
    location: "Navsari",
    duration: "2020 – 2021",
    score: "91.33%",
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Education() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          className="relative"
        >
          {/* Education Card */}
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
              group
              h-full
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
              {/* Icon */}
              <div
                className={`
                  flex items-center justify-center
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br ${item.gradient}
                  text-white
                  shadow-lg
                  mb-4
                  group-hover:scale-110
                  transition-transform
                  duration-300
                `}
              >
                <FaGraduationCap className="w-6 h-6" />
              </div>

              {/* Degree */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="text-slate-300 font-medium mb-3">
                {item.institution}
              </p>

              {/* Location (if applicable) */}
              {item.location && (
                <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              )}

              {/* Duration */}
              <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{item.duration}</span>
              </div>

              {/* Status Badge (if applicable) */}
              {item.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  {item.status}
                </div>
              )}

              {/* Score */}
              <div
                className={`
                  mt-4 pt-4 border-t border-slate-800
                  text-center
                `}
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.score}
                </div>
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div
              className={`
                absolute -bottom-6 -right-6
                w-20 h-20
                rounded-full
                bg-gradient-to-br ${item.gradient}
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
