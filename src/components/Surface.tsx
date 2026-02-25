"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export default function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative
        bg-slate-900/70
        backdrop-blur-xl
        border border-slate-800
        rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        p-8 md:p-10
        transition-all
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  );
}
