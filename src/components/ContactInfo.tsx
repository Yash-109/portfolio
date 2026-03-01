"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Clock, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import StatusBadge from "./ui/StatusBadge";
import ContactStat from "./ui/ContactStat";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "yashparmar1027@gmail.com",
    href: "mailto:yashparmar1027@gmail.com",
    icon: Mail,
    accent: "group-hover:text-sky-400",
    iconBg: "group-hover:bg-sky-500/10 group-hover:border-sky-500/40",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Yash-109",
    href: "https://github.com/Yash-109",
    icon: Github,
    accent: "group-hover:text-slate-200",
    iconBg: "group-hover:bg-slate-600/20 group-hover:border-slate-500/40",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Yash Parmar",
    href: "https://linkedin.com/in/yash-parmar-b99796289",
    icon: Linkedin,
    accent: "group-hover:text-blue-400",
    iconBg: "group-hover:bg-blue-500/10 group-hover:border-blue-500/40",
  },
];

const stats = [
  { icon: Clock, title: "Response", value: "24–48 hrs" },
  { icon: MapPin, title: "Location", value: "India · Remote" },
  { icon: Briefcase, title: "Open to", value: "Freelance & FT" },
];

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.2 + i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <StatusBadge />
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
          Open to full-time roles, freelance projects, and anything exciting in
          between. Drop me a line — I read every message.
        </p>
      </motion.div>

      {/* Thin divider */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="h-px bg-gradient-to-r from-indigo-500/40 via-slate-700 to-transparent"
      />

      {/* Contact links */}
      <div className="space-y-3">
        {contactLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== "email" ? "_blank" : undefined}
              rel={link.id !== "email" ? "noopener noreferrer" : undefined}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="group flex items-center gap-4 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${link.iconBg}`}
              >
                <Icon className={`w-4 h-4 text-slate-400 transition-colors duration-200 ${link.accent}`} />
              </div>

              {/* Labels */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-0.5">
                  {link.label}
                </p>
                <p className={`text-sm font-medium text-slate-300 transition-colors duration-200 truncate ${link.accent}`}>
                  {link.value}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </motion.a>
          );
        })}
      </div>

      {/* Thin divider */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-px bg-gradient-to-r from-indigo-500/30 via-slate-700 to-transparent"
      />

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="grid grid-cols-3 gap-3"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
          >
            <ContactStat icon={stat.icon} title={stat.title} value={stat.value} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
