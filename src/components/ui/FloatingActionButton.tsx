"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect, useCallback } from "react";

interface FloatingActionButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
  color: "cyan" | "blue";
  position: "left" | "right";
}

export default function FloatingActionButton({
  icon,
  label,
  href,
  color,
  position,
}: FloatingActionButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = document.getElementById(`fab-${label}`);
    if (button) {
      const rect = button.getBoundingClientRect();
      setButtonPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, [label]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isHovered) return;

    const button = document.getElementById(`fab-${label}`);
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
    );

    // Only apply magnetic effect within 120px radius
    if (distance < 120) {
      const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
      const strength = Math.max(0, 1 - distance / 120) * 12; // Max 12px pull
      
      setMousePosition({
        x: Math.cos(angle) * strength,
        y: Math.sin(angle) * strength,
      });
    } else {
      setMousePosition({ x: 0, y: 0 });
    }
  }, [isHovered, label]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const colorClasses = {
    cyan: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-cyan-500/50",
    blue: "bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:shadow-blue-600/50",
  };

  const positionClasses = {
    left: "left-8",
    right: "right-8",
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} top-1/2 -translate-y-1/2 z-50 hidden md:block`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <a
        id={`fab-${label}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        className={`
          relative group flex items-center justify-center
          w-14 h-14 rounded-full
          ${colorClasses[color]}
          border border-white/10
          backdrop-blur-lg
          transition-all duration-300 ease-out
          hover:scale-125 hover:shadow-2xl
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
          ${color === "cyan" ? "focus:ring-cyan-500" : "focus:ring-blue-600"}
        `}
        aria-label={label}
      >
        <motion.div
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-6 h-6"
        >
          {icon}
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none border border-gray-700"
        >
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-gray-800 border-r border-b border-gray-700 rotate-45" />
        </motion.div>

        {/* Glow effect */}
        <div
          className={`
            absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${color === "cyan" ? "bg-cyan-500/20" : "bg-blue-600/20"}
            blur-xl
          `}
        />
      </a>
    </motion.div>
  );
}
