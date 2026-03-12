"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  stagger?: boolean
}

export default function Reveal({
  children,
  delay = 0,
  stagger = false,
}: RevealProps) {

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger ? 0.12 : 0,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : (
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        )}
    </motion.div>
  )
}