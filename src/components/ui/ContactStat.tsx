"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactStatProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function ContactStat({ icon: Icon, title, value }: ContactStatProps) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 4px 20px rgba(99,102,241,0.15)" }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="rounded-xl bg-slate-900/60 border border-slate-800 p-3.5 hover:border-indigo-500/30 hover:bg-slate-900/90 transition-colors duration-200 cursor-default"
    >
      <Icon className="w-3.5 h-3.5 text-indigo-400 mb-2" />
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1">{title}</p>
      <p className="text-xs font-semibold text-white leading-snug">{value}</p>
    </motion.div>
  );
}
