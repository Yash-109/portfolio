"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Machine Learning",
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="
            bg-slate-800/60
            border border-slate-700
            rounded-xl
            px-4 py-3
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
  );
}
