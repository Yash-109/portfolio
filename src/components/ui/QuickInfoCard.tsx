"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

interface InfoItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function QuickInfoCard() {
  const [isHovered, setIsHovered] = useState(false);

  const infoItems: InfoItem[] = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      subtitle: "24-48 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      subtitle: "India (Remote)",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Open to",
      subtitle: "Freelance & Full-time",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      }}
      className="w-full max-w-[600px] mx-auto"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="glass glass-hover rounded-2xl p-8 relative overflow-hidden group"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Quick Info
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative flex flex-col items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item"
              >
                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: isHovered ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300"
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-1">{item.title}</p>
                  <p className="text-base font-semibold text-white">{item.subtitle}</p>
                </div>

                {/* Hover highlight */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
