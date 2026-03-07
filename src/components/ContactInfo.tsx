"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Clock, MapPin, Briefcase } from "lucide-react";
import ContactStat from "./ui/ContactStat";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "yashparmar1027@gmail.com",
    href: "mailto:yashparmar1027@gmail.com",
    icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Yash-109",
    href: "https://github.com/Yash-109",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Yash Parmar",
    href: "https://linkedin.com/in/yash-parmar-b99796289",
    icon: Linkedin,
  },
];

const stats = [
  { icon: Clock, title: "Response", value: "24–48 hrs" },
  { icon: MapPin, title: "Location", value: "India · Remote" },
  { icon: Briefcase, title: "Open to", value: "Freelance & FT" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
      delay: 0.1 + i * 0.1,
    },
  }),
};

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Section label */}
      <motion.h3
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-white"
      >
        Get in Touch
      </motion.h3>

      {/* Contact cards */}
      <div className="space-y-4">
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
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/60 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 outline-none"
            >
              {/* Icon */}
              <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Icon className="w-5 h-5" />
              </div>

              {/* Labels */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400">{link.label}</p>
                <p className="text-white font-medium truncate">{link.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Quick stats */}
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
            <ContactStat icon={stat.icon} title={stat.title} value={stat.value} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
