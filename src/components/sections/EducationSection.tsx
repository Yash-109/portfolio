"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGraduationCap, FaBook, FaBookOpen, FaMapMarkerAlt } from "react-icons/fa";
import { staggerContainer, staggerItem } from "@/animations/stagger";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

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
    cardGradient: "from-teal-500/10 to-cyan-600/10",
    iconGradient: "from-teal-500 to-cyan-600",
    scoreColor: "#2dd4bf",
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

const containerVariants = staggerContainer;
const cardVariants      = staggerItem;

export default function EducationSection() {
  const reduced = useReducedMotion() ?? false;
  const { ref, isVisible } = useScrollReveal();
  return (
    <Section id="education">
      <SectionHeader title="Education" />
      <motion.div
        ref={ref}
        role="list"
        aria-label="Educational Qualifications"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
          {educationData.map((edu) => (
            <motion.div
              key={edu.title}
              role="listitem"
              variants={cardVariants}
              whileHover={reduced ? {} : { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              className="group relative z-0 hover:z-10"
            >
              {/* Card */}
              <div
                className="relative h-full flex flex-col overflow-hidden bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.08] rounded-2xl backdrop-blur-sm p-8 hover:border-teal-500/40 hover:from-white/[0.1] hover:to-white/[0.04] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
              >

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 rounded-t-2xl" />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                {/* Corner accent */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${edu.iconGradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                {/* Year badge — absolutely positioned top-right */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-lg text-teal-300 text-xs font-medium whitespace-nowrap z-20">
                  {edu.year}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full gap-4">

                  {/* Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${edu.iconGradient} text-white shadow-lg shrink-0`}>
                    {edu.icon}
                  </div>

                  {/* Title + institution + location — right-padded to avoid year overlap */}
                  <div className="pr-20 flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {edu.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <FaMapMarkerAlt className="w-3 h-3 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${edu.statusBg} ${edu.statusText} ${edu.statusBorder}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {edu.status}
                    </span>
                  </div>

                  {/* Score — pushed to bottom */}
                  <div className="mt-auto pt-3 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold tabular-nums" style={{ color: edu.scoreColor }}>
                        {edu.score}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {edu.scoreLabel}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </Section>
  );
}
