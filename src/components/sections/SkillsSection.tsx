"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/stagger";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface Skill {
  name:  string;
  icon:  IconType;
  color: string;
}

interface SkillGroup {
  title:    string;
  accent:   string;
  gradient: string;
  skills:   Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title:    "Frontend Development",
    accent:   "#3b82f6",
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React",        icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",      icon: SiNextdotjs,  color: "#ffffff" },
      { name: "TypeScript",   icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript",   icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5",        icon: SiHtml5,      color: "#E34F26" },
      { name: "CSS3",         icon: SiCss3,       color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss,color: "#06B6D4" },
    ],
  },
  {
    title:    "Backend Development",
    accent:   "#22c55e",
    gradient: "from-green-500 to-emerald-400",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress,   color: "#ffffff" },
      { name: "MongoDB",    icon: SiMongodb,   color: "#47A248" },
    ],
  },
  {
    title:    "Machine Learning & AI",
    accent:   "#14b8a6",
    gradient: "from-teal-500 to-cyan-400",
    skills: [
      { name: "Python",     icon: SiPython,     color: "#F7C948" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV",     icon: SiOpencv,     color: "#5C3EE8" },
    ],
  },
  {
    title:    "Tools & Animation",
    accent:   "#f97316",
    gradient: "from-orange-500 to-red-400",
    skills: [
      { name: "Git",          icon: SiGit,     color: "#F05032" },
      { name: "Postman",      icon: SiPostman, color: "#FF6C37" },
      { name: "Framer Motion",icon: SiFramer,  color: "#8b5cf6" },
    ],
  },
];

/* ─── Skill Card ─────────────────────────────────────────────────────────── */
function SkillCard({
  skill,
  reduced,
}: {
  skill:   Skill;
  reduced: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={reduced ? {} : { scale: 1.04, y: -2, transition: { type: "spring", stiffness: 320, damping: 18 } }}
      className="group cursor-default"
      role="presentation"
    >
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/5 border border-white/10 hover:from-white/10 hover:to-white/5 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(20,184,166,0.15)] transition-all duration-200"
      >
        {/* Radial glow from icon color on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${skill.color}28 0%, transparent 68%)`,
          }}
        />

        <skill.icon
          className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          style={{ color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color}60)` }}
        />

        <span
          className="relative z-10 text-xs font-semibold text-center leading-tight transition-colors duration-300 text-slate-300 group-hover:text-white"
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Group Panel ─────────────────────────────────────────────────────────── */
function SkillGroupPanel({
  group,
  reduced,
}: {
  group:   SkillGroup;
  reduced: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="isolate rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.3),0_1px_0_0_rgba(255,255,255,0.06)_inset]"
    >
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${group.accent}90, transparent 70%)` }}
      />
      {/* Panel header */}
      <div
        className="relative flex items-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 overflow-hidden border-b border-white/10"
      >
        {/* Accent tint wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(90deg, ${group.accent}18 0%, transparent 55%)` }}
        />

        {/* Vertical accent bar */}
        <div className={`relative z-10 shrink-0 h-5 w-1 rounded-full bg-gradient-to-b ${group.gradient}`} />

        {/* Gradient title text */}
        <h4 className="relative z-10 text-sm font-semibold text-white uppercase tracking-widest">
          {group.title}
        </h4>

        {/* Skill count badge */}
        <span
          className="relative z-10 ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{
            background: `${group.accent}14`,
            border:     `1px solid ${group.accent}30`,
            color:      group.accent,
          }}
        >
          {group.skills.length}
        </span>
      </div>

      {/* Skills grid */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-3 gap-3 md:gap-4 w-full justify-items-stretch">
          {group.skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export default function SkillsSection() {
  const reduced = useReducedMotion() ?? false;
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section id="skills" tinted>
      <SectionHeader title="Skills & Technologies" />
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
      >
        {skillGroups.map((group) => (
          <SkillGroupPanel key={group.title} group={group} reduced={reduced} />
        ))}
      </motion.div>
    </Section>
  );
}
