"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROW_1 = [
  { name: "HTML", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css3", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "ReactJS", slug: "react", color: "61DAFB" },
  { name: "NextJS", slug: "nextdotjs", color: "FFFFFF" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
];

const ROW_2 = [
  { name: "Framer Motion", slug: "framermotion", color: "F50057" },
  { name: "Shadcn", slug: "shadcnui", color: "FFFFFF" },
  { name: "NodeJS", slug: "nodedotjs", color: "339933" },
  { name: "ExpressJS", slug: "express", color: "FFFFFF" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "SQL", slug: "postgresql", color: "4169E1" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF" },
];

const ROW_3 = [
  { name: "Postman", slug: "postman", color: "FF6C37" },
  { name: "Java", slug: "java", color: "FFFFFF" },
  { name: "npm", slug: "npm", color: "CB3837" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "REST API", slug: "postman", color: "FF6C37" },
  { name: "Python", slug: "python", color: "3776AB" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the header block itself
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  // Map progress to pathLength to draw the whole triangle sequentially from the very start
  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="techstack"
      className="min-h-screen w-full pt-24 sm:pt-40 bg-black text-white py-12 sm:py-20 relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Block with Animated Wireframe Triangle */}
        <div ref={headerRef} className="flex flex-col items-center justify-center mb-10 sm:mb-16">
          <div className="relative w-full flex flex-col items-center justify-center mb-5">
            
            {/* Animated Geometry Triangle Backdrop */}
            <div className="absolute w-40 h-40 sm:w-64 sm:h-64" style={{ zIndex: 0 }}>
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 sm:opacity-40">
                <motion.path
                  d="M 50,10 L 10,90 L 90,90 Z"
                  stroke="#a855f7" // Purple-500 matching theme
                  strokeWidth="1.5"
                  fill="none"
                  style={{ pathLength }}
                />
              </svg>
            </div>

            {/* Typography */}
            <div className="relative pt-4 sm:pt-6 backdrop-blur-xs mt-24 sm:mt-32 z-10 text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">
                Better than yesterday.
              </p>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-5xl font-bold tracking-tight"
              >
                My Tech Stack
              </motion.h2>
            </div>

          </div>
        </div>

        {/* Dynamic Pills Row Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 sm:mt-10 flex flex-col gap-2 sm:gap-3 items-center justify-center"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            {ROW_1.map((tech) => (
              <motion.div
                key={tech.name}
                variants={pillVariants}
                whileHover={{ scale: 1.05, borderColor: "#a855f7", backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                className="rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-colors duration-300 cursor-default shadow-md"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  <img
                    alt={tech.name}
                    loading="lazy"
                    width="20"
                    height="20"
                    className="object-contain w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  />
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            {ROW_2.map((tech) => (
              <motion.div
                key={tech.name}
                variants={pillVariants}
                whileHover={{ scale: 1.05, borderColor: "#a855f7", backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                className="rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-colors duration-300 cursor-default shadow-md"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  <img
                    alt={tech.name}
                    loading="lazy"
                    width="20"
                    height="20"
                    className="object-contain w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  />
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            {ROW_3.map((tech) => (
              <motion.div
                key={tech.name}
                variants={pillVariants}
                whileHover={{ scale: 1.05, borderColor: "#a855f7", backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                className="rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-colors duration-300 cursor-default shadow-md"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  <img
                    alt={tech.name}
                    loading="lazy"
                    width="20"
                    height="20"
                    className="object-contain w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  />
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
