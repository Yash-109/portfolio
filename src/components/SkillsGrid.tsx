"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiGit,
  SiPostman,
  SiFramer,
} from "react-icons/si";
import { type IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
  gradient: string;
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Machine Learning & AI",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    ],
  },
  {
    title: "Tools & Animation",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <div className="space-y-10">
      {skillGroups.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: groupIndex * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <div
              className={`h-1 w-12 rounded-full bg-gradient-to-r ${group.gradient}`}
            />
            <h4
              className={`text-base font-bold tracking-wide bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}
            >
              {group.title}
            </h4>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {group.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                <div
                  className="
                    relative overflow-hidden
                    bg-slate-900/60 backdrop-blur-sm
                    border border-slate-700/50
                    rounded-xl
                    p-4
                    flex flex-col items-center gap-3
                    text-center
                    shadow-lg
                    transition-all duration-300
                    hover:border-slate-600
                    hover:shadow-2xl
                    hover:shadow-blue-500/10
                    cursor-default
                  "
                >
                  {/* Icon */}
                  <div className="relative">
                    <skill.icon
                      className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Hover gradient overlay */}
                  <div
                    className={`
                      absolute inset-0 
                      bg-gradient-to-br ${group.gradient}
                      opacity-0 group-hover:opacity-5
                      transition-opacity duration-300
                      rounded-xl
                    `}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
