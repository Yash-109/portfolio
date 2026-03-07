"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    accent:   "#a855f7",
    gradient: "from-purple-500 to-pink-400",
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
  accent,
  index,
  reduced,
}: {
  skill:   Skill;
  accent:  string;
  index:   number;
  reduced: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.28, delay: index * 0.055 }}
      whileHover={reduced ? {} : { scale: 1.06, transition: { duration: 0.18 } }}
      className="group cursor-default"
    >
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl h-[88px] sm:h-[104px] border transition-all duration-300"
        style={{
          background:     "rgba(15,23,42,0.75)",
          borderColor:    "rgba(148,163,184,0.12)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = accent + "55";
          el.style.boxShadow   = `0 0 0 1px ${accent}22, 0 8px 32px ${accent}20`;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(148,163,184,0.12)";
          el.style.boxShadow   = "none";
        }}
      >
        {/* Ambient icon glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${skill.color}18 0%, transparent 70%)`,
          }}
        />

        <skill.icon
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        />

        <span
          className="relative z-10 text-xs font-semibold text-center leading-tight transition-colors duration-300 group-hover:text-white"
          style={{ color: "#94a3b8" }}
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
  groupIndex,
  reduced,
}: {
  group:      SkillGroup;
  groupIndex: number;
  reduced:    boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ type: "spring", stiffness: 70, damping: 18, delay: groupIndex * 0.1 }}
      /* isolate = new stacking context, overflow-hidden = cards never escape panel */
      className="isolate rounded-2xl overflow-hidden"
      style={{
        border:     "1px solid rgba(148,163,184,0.08)",
        background: "rgba(15,23,42,0.4)",
      }}
    >
      {/* Panel header */}
      <div
        className="relative flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(148,163,184,0.08)" }}
      >
        {/* Vertical accent bar */}
        <div className={`shrink-0 h-6 w-1 rounded-full bg-gradient-to-b ${group.gradient}`} />

        <h4 className={`text-sm font-bold tracking-wide bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
          {group.title}
        </h4>

        {/* Subtle left-to-right tint */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ background: `linear-gradient(90deg, ${group.accent}, transparent 60%)` }}
        />
      </div>

      {/* Skills grid */}
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
          {group.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              accent={group.accent}
              index={i}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────────────────── */
export default function SkillsGrid() {
  const reduced    = useReducedMotion() ?? false;
  const totalSkills = skillGroups.reduce((s, g) => s + g.skills.length, 0);

  return (
    <div className="space-y-8">
      {/* Intro row */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : -10 }}
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
            Tech Stack
          </span>
        </div>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{
            border:     "1px solid rgba(20,184,166,0.25)",
            background: "rgba(20,184,166,0.06)",
            color:      "#5eead4",
          }}
        >
          {totalSkills} technologies
        </span>
      </motion.div>

      {skillGroups.map((group, i) => (
        <SkillGroupPanel
          key={group.title}
          group={group}
          groupIndex={i}
          reduced={reduced}
        />
      ))}
    </div>
  );
}