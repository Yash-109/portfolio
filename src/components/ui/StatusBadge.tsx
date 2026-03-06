"use client";

import { motion } from "framer-motion";

export default function StatusBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.12)]"
      animate={{ boxShadow: ["0 0 12px rgba(16,185,129,0.1)", "0 0 22px rgba(16,185,129,0.22)", "0 0 12px rgba(16,185,129,0.1)"] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="text-[11px] font-semibold tracking-wide">Available for opportunities</span>
    </motion.div>
  );
}
