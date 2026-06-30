"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { Award } from "lucide-react";
import {
  AnimatedTerminal,
  AnimatedCalendar
} from "@/components/ui/AnimatedIcons";
import HoverContainer from "@/components/ui/HoverContainer";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24 max-w-[94rem] mx-auto px-6 md:px-16 w-full space-y-16">
        
        {/* Page Header */}
        <SectionReveal className="space-y-4 max-w-5xl">
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest text-zinc-500 uppercase block mb-1">
            ENGINEERING OPERATIONS HISTORY
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none">
            Cravita Mission Log <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">& Audits.</span>
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 max-w-4xl leading-relaxed">
            A comprehensive, data-backed record of my software engineering residency at Cravita Technologies. I engineered high-concurrency APIs, integrated real-time data syncs, and audited legacy queries to optimize system response rates.
          </p>
        </SectionReveal>

        {/* Residency Details */}
        <div className="space-y-12">
          
          {/* Main Card: Cravita Residency */}
          <CardGlass className="relative overflow-hidden p-8 sm:p-12 rounded-[32px] bg-[#182235] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
            <div className="absolute -top-1/4 -right-1/4 w-[350px] h-[350px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Residency Meta (col-span-4) */}
              <div className="lg:col-span-4 space-y-6">
                <HoverContainer className="space-y-4">
                  {(isHov) => (
                    <>
                      <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 w-fit text-purple-450 shadow-inner">
                        <AnimatedTerminal className="w-6 h-6" isHovered={isHov} />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">Cravita Technologies</h3>
                        <p className="text-xs sm:text-sm text-purple-400 font-mono tracking-widest mt-1.5 uppercase font-bold">Software Engineer Resident</p>
                      </div>
                    </>
                  )}
                </HoverContainer>
                <HoverContainer className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-400 font-mono cursor-pointer hover:text-white transition-colors duration-200">
                  {(isHov) => (
                    <>
                      <AnimatedCalendar className="w-4 h-4" isHovered={isHov} />
                      <span>Nov 2025 — May 2026</span>
                    </>
                  )}
                </HoverContainer>
              </div>

              {/* Right Column: Narrative & Technical Work (col-span-8) */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-mono text-zinc-400 uppercase tracking-widest mb-3">Operational Overview</h4>
                  <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                    At Cravita Technologies, I was integrated into the core product team, responsible for scoping, optimizing, and deploying high-performance enterprise applications. I refactored legacy database setups and automated build pipelines to optimize release speeds.
                  </p>
                </div>

                {/* Scoped operations details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  <div>
                    <span className="font-bold text-zinc-350 block mb-2 uppercase font-mono tracking-wider text-xs sm:text-sm">1. API Optimization</span>
                    <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                      Refactored REST endpoints using asynchronous Node.js loops. Configured Redis cache variables and serverless execution caching rules, reducing average system latencies by 70%.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-350 block mb-2 uppercase font-mono tracking-wider text-xs sm:text-sm">2. Real-Time Data Sync</span>
                    <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                      Constructed collaborative drag-and-drop workspace boards using WebSockets. Implemented atomic payload checks and dirty-read mitigations to prevent database conflicts.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-350 block mb-2 uppercase font-mono tracking-wider text-xs sm:text-sm">3. RBAC Auth Architecture</span>
                    <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                      Replaced cookie-based session stores with encrypted state-free JWTs inside secure HTTP-only cookies. Engineered granular Role-Based Access Controls (RBAC) layers at API entry boundaries.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-350 block mb-2 uppercase font-mono tracking-wider text-xs sm:text-sm">4. CI/CD Automation</span>
                    <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                      Built continuous integration and testing workflows in GitHub Actions. Integrated lint checking, automated test runs, static optimizations, and Vercel CDN cache clears on commit push triggers.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2.5">
                  {["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "Redis", "GitHub Actions", "JWT", "RBAC"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full bg-zinc-950/60 border border-white/5 text-[11px] font-mono text-zinc-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Measurable impact */}
                <div className="flex items-center gap-2.5 pt-6 text-xs sm:text-sm font-mono text-zinc-400 border-t border-white/5">
                  <Award className="w-5 h-5 text-emerald-500" />
                  <span>MEASURABLE OUTCOME:</span>
                  <span className="text-emerald-400 font-bold">96.4% Sprint completion rate & 100% stable CI/CD passes.</span>
                </div>
              </div>

            </div>
          </CardGlass>

        </div>

      </main>

      <Footer />
    </div>
  );
}
