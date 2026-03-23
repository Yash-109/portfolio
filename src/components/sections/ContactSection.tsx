"use client";

import { motion } from "framer-motion";
import ContactInfo from "@/components/ContactInfo";
import ContactFormNew from "@/components/ContactFormNew";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection() {
  return (
    <Section id="contact" tinted>
      <SectionHeader title="Get In Touch" />
      <div role="region" aria-label="Contact" className="relative">
        {/* Background ambient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-56 -left-56 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-[120px]" />
          <div className="absolute -bottom-56 -right-56 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px]" />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="lg:border-r lg:border-white/10 lg:pr-10"
          >
            <ContactInfo />
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="lg:pl-4"
          >
            <ContactFormNew />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
