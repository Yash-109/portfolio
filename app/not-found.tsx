"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-white flex items-center justify-center px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/8 via-cyan-600/8 to-teal-500/5 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-2xl mx-auto text-center space-y-8"
      >
        {/* 404 Number */}
        <motion.div variants={itemVariants}>
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <PrimaryButton onClick={() => router.back()} variant="ghost">
            Go Back
          </PrimaryButton>
          <PrimaryButton href="/" variant="solid">
            Go Home
          </PrimaryButton>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-wrap justify-center gap-6 text-sm"
        >
          <Link
            href="/projects"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            View Projects
          </Link>
          <span className="text-gray-700">•</span>
          <Link
            href="/#skills"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            Skills
          </Link>
          <span className="text-gray-700">•</span>
          <Link
            href="/#contact"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            Contact
          </Link>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          variants={itemVariants}
          className="pt-12"
        >
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </main>
  );
}
