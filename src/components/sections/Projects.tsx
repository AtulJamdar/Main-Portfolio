"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import SectionReveal from "../ui/SectionReveal";

function getTechIcon(tech: string) {
  const norm = tech.toLowerCase().trim();
  if (norm.includes("next.js") || norm.includes("next")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1ZM10.5 4.5V10.5H9.5V7.5L6.5 10.5H5.5V4.5H6.5V7.5L9.5 4.5H10.5Z" fill="currentColor"/>
      </svg>
    );
  }
  if (norm.includes("react")) {
    return (
      <svg className="w-5 h-5 text-cyan-400 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 0H2c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8.36 18.27c-.66.52-1.63.73-2.58.73-1.6 0-2.88-.86-3.41-2.22-.26-.64-.37-1.48-.37-2.61v-2h2.2v1.9c0 .7.12 1.16.36 1.41.25.23.63.35 1.14.35.53 0 .95-.14 1.25-.43.3-.29.45-.72.45-1.3v-4.13H9.4v8.3h-1.04zm9.36-2.57c0 2.22-1.78 3.57-4.3 3.57-1.37 0-2.48-.36-3.23-1.02l.9-1.65c.61.47 1.34.77 2.22.77 1.26 0 2.05-.59 2.05-1.45 0-.75-.54-1.21-2.03-1.76-2.02-.73-2.93-1.6-2.93-3.14 0-1.92 1.57-3.27 3.96-3.27 1.28 0 2.2.3 2.87.79l-.88 1.63c-.48-.33-1.14-.54-1.89-.54-.99 0-1.64.45-1.64 1.14 0 .66.45 1.05 1.83 1.58 2.22.84 3.24 1.7 3.24 3.36z"/>
      </svg>
    );
  }
  if (norm.includes("tailwind")) {
    return (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (norm.includes("framer motion") || norm.includes("framer")) {
    return (
      <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v12H12L0 0zm0 12h12l12 12H0V12z"/>
      </svg>
    );
  }
  if (norm.includes("node")) {
    return (
      <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 22V12" />
        <path d="M22 7l-10 5L2 7" />
      </svg>
    );
  }
  if (norm.includes("express")) {
    return (
      <svg className="w-5 h-5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }
  if (norm.includes("postgres")) {
    return (
      <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (norm.includes("socket")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (norm.includes("redis")) {
    return (
      <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (norm.includes("openai") || norm.includes("api") || norm.includes("github")) {
    return (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    );
  }
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="3" fill="#f7df1e" />
        <path d="M1.5 1.5h21v21h-21z" fill="#f7df1e" />
        <path d="M11.64 18.26c-.36.6-.96.96-1.86.96-1.14 0-1.86-.6-1.86-1.74v-5.22h1.68v5.16c0 .42.18.6.54.6s.54-.18.54-.6v-5.16h1.68v6.9c0 .06-.06.06-.06.06h-.42zm7.62-1.5c0 1.68-1.02 2.46-2.58 2.46-1.26 0-2.1-.54-2.58-1.2l1.26-.78c.36.48.78.72 1.32.72.6 0 .96-.3.96-.84 0-.54-.36-.78-1.26-1.2l-.42-.18c-1.38-.6-1.92-1.38-1.92-2.4 0-1.44.96-2.34 2.4-2.34 1.08 0 1.86.42 2.87.79l-.88 1.63c-.48-.33-1.14-.54-1.89-.54-.99 0-1.64.45-1.64 1.14 0 .66.45 1.05 1.83 1.58 2.22.84 3.24 1.7 3.24 3.36z" fill="black" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: "mkphotography",
    title: "MK Photography",
    subtitle: "Professional Photography Studio & Passport Photo Services",
    description:
      "A high-converting local photography business platform designed to increase Google visibility, generate WhatsApp inquiries, and transform local search traffic into real customer bookings through a fast, mobile-first experience.",
    bullets: [
      "Mobile-first experience optimized for local Pune customers",
      "Integrated WhatsApp inquiry conversion system",
      "Trust-driven UI showcasing reviews and portfolio work",
      "Local SEO architecture targeting local Pune searches",
      "Fast loading high-resolution image galleries",
      "Direct Google Maps integration for location reviews"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
      "High-conversion WhatsApp inquiry flow across all sections",
      "Luxury editorial-inspired UI focused on premium positioning",
      "Local SEO architecture for Pune wedding photography searches",
      "Optimized lazy-loading media grid arrays",
      "Secure online booking deposit framework"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
      "Socket.io event distribution loop for real-time sub-100ms syncs",
      "PostgreSQL index operations fetching logs under 45ms",
      "Granular state-free authentication using secure cookies",
      "Custom responsive drag-and-drop workspace UI",
      "Granular role-based user access controls",
      "Automatic board backups and data exports"
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
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
      "Redis cached token queues completing audits under 1.5s",
      "Vector embedding semantic search targeting zero false-positives",
      "Stateless security reviews mapping API parameters in real-time",
      "Automated code complexity assessment metrics",
      "Direct slack notifications for review alerts"
    ],
    stack: ["Next.js", "TypeScript", "Redis", "GitHub API", "OpenAI"],
    liveUrl: "https://github.com/AtulJamdar/BuildWise",
    gradientClass: "from-zinc-950 via-neutral-900 to-stone-950",
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
      "Manifest v3 isolated context-script styling injections",
      "CORS headers interception securely injecting scripts under 5ms",
      "Strict DOM sanitization loops preventing XSS attacks",
      "Syncing custom design tokens inside browser storage",
      "Real-time CSS sandbox live preview editors",
      "Export/import options for sharing styling profiles"
    ],
    stack: ["JavaScript", "Chrome Manifest v3", "DOM Sanitizer", "Tailwind CSS"],
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

  // FIX 1: Respect user's prefers-reduced-motion OS setting
  const shouldReduceMotion = useReducedMotion();

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
        rootMargin: "-30% 0px -30% 0px",
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
    <section id="projects" className="bg-black w-full text-white pt-20 md:pt-32 pb-16 overflow-visible relative z-10">
      <div className="pt-5 px-4 md:px-16 max-w-[94rem] mx-auto">

        {/* Section Header */}
        <SectionReveal className="text-center mb-12 sm:mb-20">
          <h2 className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2">
            Code Meets Creativity
          </h2>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Crafted </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Projects
            </span>
          </div>
        </SectionReveal>

        {/* Splits Showcase Container */}
        <SectionReveal delay={0.15} className="relative">
          <div className="flex flex-col md:flex-row items-stretch">

            {/* Left Column: Desktop scrolling project image cards */}
            <div className="hidden md:block w-1/2 pr-4">
              <div className="space-y-24">
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    data-index={index}
                    className="min-h-screen py-24 flex items-center justify-center relative w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      // FIX 2: Reduced from 0.65s — still smooth but snappier
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      // FIX 3: will-change only on the element that animates
                      style={{ willChange: "transform, opacity" }}
                      className="w-[88%] ml-auto h-[580px]"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full block relative"
                      >
                        <div className="w-full h-full cursor-pointer relative group">

                          {/* Dynamic backdrop shadow blur */}
                          <div className="absolute -inset-1 bg-[#182235]/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                          {/* Project Card */}
                          <div className="w-full h-full bg-[#182235] overflow-hidden rounded-[32px] border border-white/10 hover:border-white/20 flex flex-col justify-between relative shadow-2xl p-8 hover:shadow-[#182235]/10 transition-all duration-500">

                            {/* Top Row: Info Title */}
                            <div className="flex justify-between items-start z-10 w-full pointer-events-none">
                              <h4 className="text-white text-xl sm:text-2xl font-bold max-w-[95%] font-sans tracking-tight leading-snug">
                                {project.subtitle}
                              </h4>
                            </div>

                            {/* FIX 4: next/image instead of <img> — lazy by default, auto WebP, no layout shift */}
                            <div className="flex-1 w-full flex items-center justify-center mt-12 relative rounded-2xl overflow-hidden pointer-events-none group-hover:scale-[1.03] transition-transform duration-500 ease-out origin-bottom">
                              <Image
                                src={project.imagePath}
                                alt={project.title}
                                fill
                                // FIX 5: First project is above the fold — priority loads it eagerly (LCP fix)
                                // All others are lazy-loaded automatically
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 44vw"
                                className="object-contain p-2 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                              />
                            </div>

                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE ONLY Stacked list */}
            <div className="w-full md:hidden pr-0 relative">
              <div className="space-y-8 my-8">
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#182235] p-6 rounded-[24px] border border-white/10 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">💻</span>
                        <div>
                          <span className="text-[10px] font-bold font-mono tracking-widest text-blue-400 block uppercase">
                            {project.subtitle}
                          </span>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>

                      {/* FIX 4 (mobile): next/image here too */}
                      <div className="w-full h-44 rounded-xl overflow-hidden bg-[#131b2d] flex items-center justify-center p-3 my-4 border border-white/10 relative">
                        <Image
                          src={project.imagePath}
                          alt={project.title}
                          fill
                          // FIX 5 (mobile): only eager-load the first card
                          priority={index === 0}
                          sizes="(max-width: 768px) 90vw, 0vw"
                          className="object-contain rounded-lg p-2"
                        />
                      </div>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="mt-4 space-y-2 text-[11px] text-zinc-300">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-zinc-300 mt-0.5 font-bold font-mono">+</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {project.stack.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-[10px] font-medium text-white">
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-center text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Visit Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Desktop STICKY descriptions panel */}
            <div className="w-full md:w-1/2 pl-4 relative hidden md:block">
              <div className="sticky top-0 h-screen flex flex-col justify-center items-start">
                <div className="h-[520px] flex flex-col justify-center items-start max-w-2xl w-full px-8 text-left relative">
                  <AnimatePresence mode="wait">
                    {PROJECTS.map((project, index) => {
                      if (index !== activeIdx) return null;
                      return (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 80 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{
                            opacity: 0,
                            x: shouldReduceMotion ? 0 : -40,
                            transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                          }}
                          // FIX 6: Was 2.0s — that's way too slow, dropped to 0.55s
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          // FIX 3: will-change on the animated panel
                          style={{ willChange: "transform, opacity" }}
                          className="space-y-6 flex flex-col items-start justify-center w-full absolute inset-0 px-8 text-left"
                        >
                          {/* Heading marker & Title */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-1 w-10 bg-blue-500" />
                            <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
                              {project.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                            {project.description}
                          </p>

                          {/* Technical checklist bullets */}
                          <div className="space-y-4 w-full flex flex-col items-start">
                            {project.bullets.map((bullet, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                                className="flex items-start gap-3"
                              >
                                <span className="text-zinc-300 mt-0.5 font-bold font-mono text-sm">+</span>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{bullet}</p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Tech stack row */}
                          <div className="flex flex-wrap justify-start gap-3 mt-10 w-full">
                            {project.stack.map((tech, techIdx) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: techIdx * 0.04 }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs font-sans font-medium text-white hover:border-white/20 transition-all duration-300 cursor-default"
                              >
                                {getTechIcon(tech)}
                                <span>{tech}</span>
                              </motion.span>
                            ))}
                          </div>

                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}