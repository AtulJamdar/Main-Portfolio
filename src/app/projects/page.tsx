"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "bookmyslot",
    title: "BookMySlot",
    subtitle: "Multi-Tenant Platform",
    description: "A premium multi-tenant scheduling platform built for local Indian service businesses, featuring database-level tenant isolation, dynamic slot generation, and a real-time owner dashboard.",
    bullets: [
      "JWT claim-based tenant isolation across layers",
      "Dynamic slot engine factoring staff hours",
      "Owner dashboard with revenue analytics",
      "Unified customer portal for discovery",
      "Asynchronous Nodemailer alerts",
      "Modular route-controller-service architecture"
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://book-my-slot-eight.vercel.app/",
    imagePath: "/assets/bookmyslot.png"
  },
  {
    id: "freelanceflow",
    title: "FreelanceFlow",
    subtitle: "Client Portal & Invoicing System",
    description: "A backend-focused MERN client portal that streamlines freelancer workflows, automating PDF invoice generation, payment tracking, and overdue reminders.",
    bullets: [
      "Modular Express route-controller-service structure",
      "Auto-sequenced PDF invoice generation engine",
      "node-cron scheduled jobs for overdue reminders",
      "Document-first workflow with PRDs and specs",
      "Centralized client, project, and milestone tracking",
      "Axios-driven React dashboard for payments"
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "PDFKit", "node-cron"],
    liveUrl: "https://freelance-flow-ruddy-xi.vercel.app/",
    imagePath: "/assets/freelanceflow.png"
  },
  {
    id: "mkphotography",
    title: "MK Photography",
    subtitle: "Professional Photography Studio",
    description: "A high-converting local photography business platform designed to increase Google visibility, generate WhatsApp inquiries, and transform local search traffic into bookings.",
    bullets: [
      "Mobile-first experience optimized for Pune customers",
      "Integrated WhatsApp inquiry conversion system",
      "Trust-driven UI showcasing reviews and portfolio",
      "Local SEO architecture targeting Pune searches",
      "Fast loading high-resolution image galleries",
      "Direct Google Maps integration for location reviews"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://mk-photography-orcin.vercel.app",
    imagePath: "/assets/mk-photography.png"
  },
  {
    id: "tasveerphotography",
    title: "Tasveer Photography",
    subtitle: "Luxury Wedding Photography",
    description: "A cinematic wedding portfolio platform engineered to elevate brand trust, showcase emotional storytelling, and convert social media visitors into premium client inquiries.",
    bullets: [
      "Immersive cinematic gallery optimized for mobile",
      "High-conversion WhatsApp inquiry flow across sections",
      "Luxury editorial-inspired UI focused on premium positioning",
      "Local SEO architecture for wedding searches",
      "Optimized lazy-loading media grid arrays",
      "Secure online booking deposit framework"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tasveer-delta.vercel.app/",
    imagePath: "/assets/tasveer.png"
  },
  {
    id: "syncflow",
    title: "SyncFlow",
    subtitle: "Collaborative MERN Board",
    description: "A real-time project management workspace enabling seamless multi-client boards synchronization, granular roles authentication, and continuous activity logs.",
    bullets: [
      "Socket.io event distribution loop for real-time sub-100ms syncs",
      "PostgreSQL index operations fetching logs under 45ms",
      "Granular state-free authentication using cookies",
      "Custom responsive drag-and-drop workspace UI",
      "Granular role-based user access controls",
      "Automatic board backups and data exports"
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
    liveUrl: "https://syncflow-xnch.onrender.com/",
    imagePath: "/assets/Syncflow.png"
  },
  {
    id: "buildwise",
    title: "BuildWise",
    subtitle: "AI GitHub Code Auditor",
    description: "An compliance auditor that scans Pull Requests via GitHub webhooks for performance leaks, security flaws, and technical debt in real-time.",
    bullets: [
      "Event-triggered GitHub webhook validation pipelines",
      "Redis cached token queues completing audits under 1.5s",
      "Vector embedding semantic search targeting zero false-positives",
      "Stateless security reviews mapping API parameters",
      "Automated code complexity assessment metrics",
      "Direct slack notifications for review alerts"
    ],
    stack: ["Next.js", "TypeScript", "Redis", "GitHub API", "OpenAI"],
    liveUrl: "https://github.com/AtulJamdar/BuildWise",
    imagePath: "/assets/Buildwise.png"
  },
  {
    id: "webcustomizer",
    title: "Web Customizer",
    subtitle: "Manifest V3 Style Injector",
    description: "A developer sandbox Chrome Extension that intercepts Content Security Policies (CSP) and injects custom CSS styling layers natively onto live URLs.",
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
    imagePath: "/assets/web_coustomizer.png"
  }
];

function getTechIcon(tech: string) {
  const norm = tech.toLowerCase().trim();
  if (norm.includes("next.js") || norm.includes("next")) {
    return (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1ZM10.5 4.5V10.5H9.5V7.5L6.5 10.5H5.5V4.5H6.5V7.5L9.5 4.5H10.5Z" fill="currentColor"/>
      </svg>
    );
  }
  if (norm.includes("react")) {
    return (
      <svg className="w-3.5 h-3.5 text-cyan-450 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 0H2c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8.36 18.27c-.66.52-1.63.73-2.58.73-1.6 0-2.88-.86-3.41-2.22-.26-.64-.37-1.48-.37-2.61v-2h2.2v1.9c0 .7.12 1.16.36 1.41.25.23.63.35 1.14.35.53 0 .95-.14 1.25-.43.3-.29.45-.72.45-1.3v-4.13H9.4v8.3h-1.04zm9.36-2.57c0 2.22-1.78 3.57-4.3 3.57-1.37 0-2.48-.36-3.23-1.02l.9-1.65c.61.47 1.34.77 2.22.77 1.26 0 2.05-.59 2.05-1.45 0-.75-.54-1.21-2.03-1.76-2.02-.73-2.93-1.6-2.93-3.14 0-1.92 1.57-3.27 3.96-3.27 1.28 0 2.2.3 2.87.79l-.88 1.63c-.48-.33-1.14-.54-1.89-.54-.99 0-1.64.45-1.64 1.14 0 .66.45 1.05 1.83 1.58 2.22.84 3.24 1.7 3.24 3.36z"/>
      </svg>
    );
  }
  if (norm.includes("tailwind")) {
    return (
      <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (norm.includes("framer motion") || norm.includes("framer")) {
    return (
      <svg className="w-3.5 h-3.5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v12H12L0 0zm0 12h12l12 12H0V12z"/>
      </svg>
    );
  }
  if (norm.includes("node")) {
    return (
      <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 22V12" />
        <path d="M22 7l-10 5L2 7" />
      </svg>
    );
  }
  if (norm.includes("express")) {
    return (
      <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }
  if (norm.includes("postgres")) {
    return (
      <svg className="w-3.5 h-3.5 text-sky-450" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (norm.includes("mongo")) {
    return (
      <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c3 4 4 7.5 4 10.5a4 4 0 0 1-8 0C8 9.5 9 6 12 2z" />
        <path d="M12 13v9" />
      </svg>
    );
  }
  if (norm.includes("jwt")) {
    return (
      <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }
  if (norm.includes("nodemailer") || norm.includes("mail")) {
    return (
      <svg className="w-3.5 h-3.5 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    );
  }
  if (norm.includes("pdfkit") || norm.includes("pdf")) {
    return (
      <svg className="w-3.5 h-3.5 text-rose-450" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  }
  if (norm.includes("cron")) {
    return (
      <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  if (norm.includes("socket")) {
    return (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (norm.includes("redis")) {
    return (
      <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (norm.includes("openai") || norm.includes("api") || norm.includes("github")) {
    return (
      <svg className="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    );
  }
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="3" fill="#f7df1e" />
        <path d="M1.5 1.5h21v21h-21z" fill="#f7df1e" />
        <path d="M11.64 18.26c-.36.6-.96.96-1.86.96-1.14 0-1.86-.6-1.86-1.74v-5.22h1.68v5.16c0 .42.18.6.54.6s.54-.18.54-.6v-5.16h1.68v6.9c0 .06-.06.06-.06.06h-.42zm7.62-1.5c0 1.68-1.02 2.46-2.58 2.46-1.26 0-2.1-.54-2.58-1.2l1.26-.78c.36.48.78.72 1.32.72.6 0 .96-.3.96-.84 0-.54-.36-.78-1.26-1.2l-.42-.18c-1.38-.6-1.92-1.38-1.92-2.4 0-1.44.96-2.34 2.4-2.34 1.08 0 1.86.42 2.87.79l-.88 1.63c-.48-.33-1.14-.54-1.89-.54-.99 0-1.64.45-1.64 1.14 0 .66.45 1.05 1.83 1.58 2.22.84 3.24 1.7 3.24 3.36z" fill="black" />
      </svg>
    );
  }
  return null;
}

export default function ProjectsPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24 max-w-[94rem] mx-auto px-6 md:px-12 w-full space-y-16">
        
        {/* Page Header */}
        <SectionReveal className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-[10px] font-bold font-mono tracking-widest text-zinc-500 uppercase block mb-1">
            ALL PROJECTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Crafted <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive showcase of clean systems, responsive frontends, and optimized backend architectures I have engineered.
          </p>
        </SectionReveal>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {PROJECTS.map((proj, idx) => (
            <div 
              key={proj.id}
              className="relative group bg-[#182235] border border-white/10 rounded-[32px] overflow-hidden flex flex-col h-[520px] transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image Mockup Container */}
              <div className="relative w-full h-[220px] bg-zinc-950/80 overflow-hidden border-b border-white/5 flex items-center justify-center p-3 select-none">
                <Image 
                  src={proj.imagePath} 
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] origin-bottom"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight font-sans tracking-tight mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech stack row (limit to 3, and show +N indicator) */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {proj.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-sans font-medium text-white"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                    {proj.stack.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-sans font-medium text-zinc-400">
                        +{proj.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link Button */}
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/5 hover:bg-zinc-850 hover:border-white/10 text-xs font-mono font-bold text-white transition-all duration-300 group-hover:bg-zinc-800 cursor-pointer"
                  >
                    <span>Visit Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Absolute Hover Overlay Card */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-30 bg-[#121214]/98 border border-white/10 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl cursor-pointer text-left select-none"
                  >
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">About</h4>
                        <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                          {proj.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {proj.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="text-zinc-300 text-[11px] leading-relaxed flex items-start gap-2 font-sans">
                              <span className="text-zinc-500 mt-0.5 shrink-0">→</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest pt-4 border-t border-white/5 flex items-center justify-between">
                      <span>Click anywhere to visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                    </div>
                  </motion.a>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
