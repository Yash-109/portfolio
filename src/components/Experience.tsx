"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className="
          relative
          bg-slate-900/60
          border border-slate-800
          rounded-2xl
          p-8
          backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          hover:border-slate-700
          transition-all
          duration-300
          overflow-hidden
          group
        "
      >
        {/* Gradient Glow Effect */}
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-10
            bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500
            transition-opacity duration-500
          "
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-6">
          {/* Icon */}
          <div
            className="
              flex items-center justify-center
              w-14 h-14
              rounded-xl
              bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500
              text-white
              shadow-lg
              group-hover:scale-110
              transition-transform
              duration-300
              flex-shrink-0
            "
          >
            <FaBriefcase className="w-6 h-6" />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">
              Machine Learning Intern
            </h3>
            <p className="text-lg text-slate-300 font-medium mb-2">
              Vaishnav Technologies
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCalendarAlt className="w-3 h-3" />
              <span>May – June 2025</span>
            </div>
          </div>

          {/* Badge */}
          <div
            className="
              hidden sm:flex
              px-4 py-2
              rounded-lg
              bg-slate-800/80
              border border-slate-700
              text-slate-300
              text-sm
              whitespace-nowrap
            "
          >
            2 months
          </div>
        </div>

        {/* Decorative Corner Accent */}
        <div
          className="
            absolute -bottom-6 -right-6
            w-24 h-24
            rounded-full
            bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500
            opacity-5
            group-hover:opacity-10
            transition-opacity
            duration-500
          "
        />
      </motion.div>
    </motion.div>
  );
}
