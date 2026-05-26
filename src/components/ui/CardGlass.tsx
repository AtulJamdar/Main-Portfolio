"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardGlassProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  delay?: number;
}

export default function CardGlass({
  children,
  className = "",
  hoverGlow = true,
  delay = 0,
}: CardGlassProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glassmorphism glow-card rounded-2xl p-6 md:p-8 relative overflow-hidden group ${className}`}
    >
      {/* Premium accent light top-border overlay */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      
      {/* Subtle radial inner glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-brand-primary/0 via-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/5 group-hover:via-brand-secondary/5 group-hover:to-transparent rounded-2xl transition-all duration-700 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
