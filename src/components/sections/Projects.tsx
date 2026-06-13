"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
  id: "mkphotography",

  title: "MK Photography",

  subtitle: "Professional Photography Studio & Passport Photo Services",

  description:
    "A high-converting local photography business platform designed to increase Google visibility, generate WhatsApp inquiries, and transform local search traffic into real customer bookings through a fast, mobile-first experience.",

  bullets: [
    "Mobile-first photography experience optimized for local Pune customers",
    "Integrated WhatsApp inquiry system focused on faster lead conversion",
    "Trust-driven UI showcasing reviews, portfolio work, and service credibility",
    "Local SEO architecture targeting Bibwewadi and Pune photography searches"
  ],

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion"
  ],

  liveUrl: "https://mk-photography-orcin.vercel.app",

  gradientClass: "from-zinc-950 via-neutral-900 to-stone-950",

  themeColor: "text-amber-400",

  bulletColor: "text-amber-500",

  imagePath: "/assets/mk-photography.png"
},
  {
    id: "tasveerphotography",
    title: "Tasveer Photography",
    subtitle: "Luxury Wedding Photography & Cinematography",
    description:
      "A cinematic wedding portfolio platform engineered to elevate brand trust, showcase emotional storytelling, and convert social media visitors into premium client inquiries through a refined luxury-focused digital experience.",

    bullets: [
      "Immersive cinematic gallery experience optimized for mobile users",
      "High-conversion WhatsApp inquiry flow integrated across all key sections",
      "Luxury editorial-inspired UI focused on trust and premium positioning",
      "Local SEO architecture designed for Pune wedding photography searches"
    ],

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],

    liveUrl: "https://tasveer-delta.vercel.app/",

    gradientClass: "from-black via-zinc-900 to-stone-900",

    themeColor: "text-gold-400",

    bulletColor: "text-gold-500",

    imagePath: "/assets/tasveer.png"
  },

  {
    id: "syncflow",
    title: "SyncFlow",
    subtitle: "Collaborative MERN Board",
    description:
      "A real-time project management workspace enabling seamless multi-client boards synchronization, granular roles authentication, and continuous activity logs.",

    bullets: [
      "Socket.io event distribution loop for sub-100ms syncs",
      "Covering PostgreSQL index operations fetching logs under 45ms",
      "Granular state-free authentication using secure HTTP-only cookies",
      "Custom responsive drag-and-drop workspace UI frameworks"
    ],

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io"
    ],

    liveUrl: "https://syncflow-xnch.onrender.com/",

    gradientClass: "from-blue-950 to-cyan-900/60",

    themeColor: "text-purple-400",

    bulletColor: "text-purple-500",

    imagePath: "/assets/Syncflow.png"
  },

  {
    id: "buildwise",
    title: "BuildWise",
    subtitle: "AI GitHub Code Auditor",
    description:
      "An automated compliance auditor that scans Pull Requests via GitHub webhooks for performance leaks, security flaws, and technical debt in real-time.",

    bullets: [
      "Event-triggered GitHub webhook validation pipelines",
      "Redis cached token queues completing audits in under 1.5s",
      "Vector embedding semantic search targeting zero false-positives",
      "Stateless security reviews mapping API parameters in real-time"
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Redis",
      "GitHub API",
      "OpenAI"
    ],

    liveUrl: "https://github.com/AtulJamdar/BuildWise",

    gradientClass: "from-zinc-900 to-zinc-800",

    themeColor: "text-zinc-400",

    bulletColor: "text-zinc-500",

    imagePath: "/assets/Buildwise.png"
  },

  {
    id: "webcustomizer",
    title: "Web Customizer",
    subtitle: "Manifest V3 Style Injector",
    description:
      "A developer sandbox Chrome Extension that intercepts Content Security Policies (CSP) and injects custom CSS styling layers natively onto live URLs.",

    bullets: [
      "Manifest v3 isolated context-scripts styling injections",
      "CORS headers interception securely injecting scripts under 5ms",
      "Strict DOM sanitization loops preventing cross-site scripting (XSS)",
      "Syncing custom design tokens inside browser storage APIs"
    ],

    stack: [
      "JavaScript",
      "Chrome Manifest v3",
      "DOM Sanitizer",
      "Tailwind CSS"
    ],

    liveUrl: "https://github.com/AtulJamdar/Web-Customizer",

    gradientClass: "from-purple-950 to-pink-955/40",

    themeColor: "text-emerald-400",

    bulletColor: "text-emerald-500",

    imagePath: "/assets/web_coustomizer.png"
  }
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIdx(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px", // Detect when a project card is in the center 40% of viewport
        threshold: 0.3
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="bg-black w-full text-white pt-20 md:pt-32 pb-16 overflow-visible">
      <div className="pt-5 px-4 md:px-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2">
            Code Meets Creativity
          </h2>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Crafted </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Projects
            </span>
          </div>
        </div>

        {/* Splits Showcase Container */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left Column: Desktop STICKY descriptions panel (md:block) */}
            <div className="w-full md:w-1/2 pr-0 md:pr-10 relative hidden md:block">
              
              {/* DESKTOP ONLY: Sticky Descriptions panel that is perfectly centered and uses ease-left / ease-right transitions */}
              <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
                <div className="h-[480px] flex flex-col justify-center items-center max-w-lg mx-auto w-full px-8 text-center">
                  <AnimatePresence mode="wait">
                    {PROJECTS.map((project, index) => {
                      if (index !== activeIdx) return null;
                      return (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="space-y-6 flex flex-col items-center justify-center w-full"
                        >
                          {/* Heading marker */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-1 w-10 bg-purple-500 rounded-full" />
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight text-center">
                              {project.title}
                            </h3>
                          </div>

                          {/* Subtitle & description */}
                          <div className="space-y-2 text-center flex flex-col items-center">
                            <span className="text-[10px] font-bold font-mono tracking-widest text-purple-400 uppercase block">
                              {project.subtitle}
                            </span>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center max-w-md">
                              {project.description}
                            </p>
                          </div>

                          {/* Technical checklist bullets */}
                          <div className="space-y-3 w-full max-w-md text-left flex flex-col items-start px-2">
                            {project.bullets.map((bullet, idx) => (
                              <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08 + 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <span className={`${project.bulletColor} mt-0.5 font-bold font-mono text-sm`}>+</span>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{bullet}</p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Tech stack row */}
                          <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {project.stack.map((tech, techIdx) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIdx * 0.05 + 0.3 }}
                                className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-white transition-colors cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {/* Action trigger */}
                          <div className="pt-4 flex justify-center">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 text-white font-mono text-xs font-semibold hover:border-white/20 transition-all duration-300 group"
                            >
                              <span>Visit Live System</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-450 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>

                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* MOBILE ONLY Stacked list (displays standard flow) */}
            <div className="w-full md:hidden pr-0 relative">
              <div className="space-y-8 my-8">
                {PROJECTS.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">💻</span>
                        <div>
                          <span className="text-[10px] font-bold font-mono tracking-widest text-purple-400 block uppercase">
                            {project.subtitle}
                          </span>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                      
                      {/* Image inside mobile card */}
                      <div className={`w-full h-44 rounded-xl overflow-hidden bg-gradient-to-b ${project.gradientClass} flex items-center justify-center p-3 my-4 border border-white/5`}>
                        <img 
                          src={project.imagePath} 
                          alt={project.title} 
                          className="object-contain w-full h-full rounded-lg"
                        />
                      </div>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <ul className="mt-4 space-y-2 text-[11px] text-zinc-300">
                        {project.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">+</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-850 text-[9px] font-mono text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-center text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Visit Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Desktop scrolling project image cards over WHOLE height of the screen */}
            <div className="hidden md:block w-1/2 pl-6">
              <div className="space-y-24">
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    data-index={index}
                    className="min-h-screen py-24 flex items-center justify-center relative w-full"
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full h-[540px] block relative"
                    >
                      <div className="w-full h-full cursor-pointer relative group">
                        
                        {/* Dynamic backdrop shadow blur */}
                        <div className="absolute -inset-1 bg-gradient-to-b from-purple-800/10 to-indigo-800/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                        
                        {/* Project Card (using whole screen space layout) */}
                        <div className={`w-full h-full bg-gradient-to-b ${project.gradientClass} overflow-hidden rounded-[32px] border border-white/5 hover:border-white/10 flex flex-col justify-between relative shadow-2xl p-8 hover:shadow-purple-500/5 transition-all duration-500`}>
                          
                          {/* Top Row: Info Title & Icon */}
                          <div className="flex justify-between items-start z-10 w-full pointer-events-none">
                            <h4 className="text-white text-xl sm:text-2xl font-bold max-w-[80%] font-sans tracking-tight leading-snug">
                              {project.subtitle}
                            </h4>
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300 shadow-md">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Static Image Mockup rendering the actual downloaded screenshot asset */}
                          <div className="flex-1 w-full flex items-center justify-center mt-12 relative rounded-2xl overflow-hidden pointer-events-none group-hover:scale-[1.03] transition-transform duration-500 ease-out origin-bottom">
                            <img 
                              src={project.imagePath} 
                              alt={project.title} 
                              className="object-contain w-full h-full max-h-[380px] p-2 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
                            />
                          </div>

                        </div>

                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
