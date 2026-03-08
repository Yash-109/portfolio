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
      whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 320, damping: 22 } }}
      whileTap={{ scale: 0.98 }}
      className="relative p-4 rounded-2xl cursor-default
        bg-gray-900/50 backdrop-blur-sm border border-gray-800
        hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10
        transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-teal-500/15 border border-teal-500/25 shrink-0">
          <Icon className="w-3.5 h-3.5 text-teal-400" />
        </div>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold truncate">{title}</p>
      </div>
      <p className="text-sm font-semibold text-white leading-snug">{value}</p>
    </motion.div>
  );
}
