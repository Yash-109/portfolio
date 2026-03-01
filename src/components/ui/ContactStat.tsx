"use client";

import { LucideIcon } from "lucide-react";

interface ContactStatProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function ContactStat({ icon: Icon, title, value }: ContactStatProps) {
  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-3.5 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 cursor-default">
      <Icon className="w-3.5 h-3.5 text-indigo-400 mb-2" />
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1">{title}</p>
      <p className="text-xs font-semibold text-white leading-snug">{value}</p>
    </div>
  );
}
