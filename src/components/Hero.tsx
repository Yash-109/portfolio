"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0F172A]">
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Existing Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yash Parmar
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Full-Stack Developer · ML Engineer · DSA Enthusiast
          </p>
        </motion.div>
      </div>
    </section>
  );
}
