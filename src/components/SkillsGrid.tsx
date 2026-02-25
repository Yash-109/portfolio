"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "MongoDB"],
  },
  {
    title: "Animation",
    skills: ["Framer Motion"],
  },
  {
    title: "Machine Learning",
    skills: ["Machine Learning"],
  },
];

export default function SkillsGrid() {
  return (
    <div className="space-y-8">
      {skillGroups.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: groupIndex * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h4 className="text-sm font-semibold tracking-wide text-indigo-400">
            {group.title}
          </h4>

          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="
                  bg-slate-800/60
                  border border-slate-700
                  rounded-xl
                  px-4 py-2
                  text-sm
                  text-slate-300
                  shadow-sm
                  transition-all
                  hover:border-indigo-500/60
                  hover:shadow-[0_6px_20px_rgba(79,70,229,0.15)]
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
