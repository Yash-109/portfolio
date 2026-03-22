"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Clock, MapPin, Briefcase } from "lucide-react";
import ContactStat from "./ui/ContactStat";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "yashparmar1027@gmail.com",
    href: "mailto:yashparmar1027@gmail.com",
    icon: Mail,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Yash-109",
    href: "https://github.com/Yash-109",
    icon: Github,
    color: "from-slate-500 to-slate-400",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Yash Parmar",
    href: "https://linkedin.com/in/yash-parmar-b99796289",
    icon: Linkedin,
    color: "from-blue-500 to-blue-400",
  },
];

const stats = [
  { icon: Clock, title: "Response", value: "24–48 hrs" },
  { icon: MapPin, title: "Location", value: "India · Remote" },
  { icon: Briefcase, title: "Open to", value: "Freelance & Full-Time" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: 0.1 + i * 0.12,
    },
  }),
};

export default function ContactInfo() {
  const reduced = useReducedMotion() ?? false;
  return (
    <div className="space-y-5">
      {/* Contact link cards */}
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
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={
                reduced
                  ? {}
                  : {
                      y: -3,
                      scale: 1.01,
                      transition: {
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      },
                    }
              }
              whileTap={reduced ? {} : { scale: 0.98 }}
              className="group flex items-center gap-4 p-4 rounded-2xl outline-none bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 hover:from-white/10 hover:to-white/5 hover:shadow-[0_4px_20px_rgba(20,184,166,0.14)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              {/* Square icon badge */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                bg-gradient-to-br ${link.color} shadow-lg`}
              >
                <Icon size={18} strokeWidth={2} className="text-white" />
              </div>

              {/* Labels */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm text-slate-200 font-medium truncate group-hover:text-teal-300 transition-colors duration-200">
                  {link.value}
                </p>
              </div>

              {/* Subtle external indicator */}
              {link.id !== "email" && (
                <span className="text-slate-700 group-hover:text-teal-500 transition-colors duration-200 shrink-0">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </motion.a>
          );
        })}
      </div>

      {/* Quick info stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ContactStat
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
