"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";
import { SiCoursera, SiNvidia } from "react-icons/si";
import { staggerContainer, staggerItem } from "@/animations/stagger";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-teal-500 to-cyan-400",
    icon: <FaCertificate className="w-6 h-6" />,
  },
];

const containerVariants = staggerContainer;
const cardVariants      = staggerItem;

export default function CertificationsSection() {
  const reduced = useReducedMotion() ?? false;
  const { ref, isVisible } = useScrollReveal();
  return (
    <Section id="certifications" tinted>
      <SectionHeader title="Certifications" />
      <motion.div
          ref={ref}
          role="list"
          aria-label="Professional Certifications"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              role="listitem"
              variants={cardVariants}
              whileHover={reduced ? {} : { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              className="group relative z-0 hover:z-10 h-full"
            >
              <div
                className="relative h-full flex flex-col bg-gradient-to-b from-white/5 to-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 overflow-hidden hover:border-teal-500/40 hover:from-white/10 hover:to-white/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
              >

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 rounded-t-2xl" />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                {/* Decorative corner orb */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* Icon */}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg mb-5 shrink-0`}>
                    {cert.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Provider */}
                  <p className="text-white/50 text-sm font-semibold mb-2">
                    {cert.organization}
                  </p>

                  {/* Info Row (formerly Date) */}
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-5">
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

                  <div className="mt-auto flex flex-col gap-3">
                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-2 text-xs font-semibold bg-teal-500/10 border border-teal-500/25 rounded-full text-teal-300
                            hover:bg-teal-500/20 hover:border-teal-400/50 hover:-translate-y-0.5
                            hover:shadow-[0_4px_12px_rgba(20,184,166,0.15)]
                            transition-all duration-200 whitespace-nowrap cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-3 py-2 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-white/60 whitespace-nowrap cursor-default">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Cert ID */}
                    {cert.certId && (
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-white/30 truncate">ID: {cert.certId}</p>
                      </div>
                    )}

                    {/* Download button */}
                    <PrimaryButton
                      href={cert.file}
                      target="_blank"
                      variant="ghost"
                      size="sm"
                      className="mt-auto pt-4 w-full justify-center border-white/20 hover:border-teal-400/50"
                      aria-label="Download Certificate"
                    >
                      ↓ Download
                    </PrimaryButton>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </Section>
  );
}
