"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Award } from "lucide-react";
import {
  AnimatedTerminal,
  AnimatedCalendar
} from "@/components/ui/AnimatedIcons";
import HoverContainer from "@/components/ui/HoverContainer";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-500 hover:text-white transition-colors uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            &gt; Back to Core System
          </a>
        </div>

        {/* Page Header */}
        <SectionReveal className="space-y-4">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary uppercase">
            ENGINEERING OPERATIONS HISTORY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Cravita Mission Log & Audits.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            A comprehensive, data-backed record of my software engineering residency at Cravita Technologies. I engineered high-concurrency APIs, integrated real-time data syncs, and audited legacy queries to optimize system response rates.
          </p>
        </SectionReveal>

        {/* Residency Details */}
        <div className="space-y-12">
          
          {/* Main Card: Cravita Residency */}
          <CardGlass className="relative overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 w-[250px] h-[250px] rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Residency Meta (col-span-4) */}
              <div className="lg:col-span-4 space-y-4">
                <HoverContainer className="space-y-4">
                  {(isHov) => (
                    <>
                      <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit text-brand-primary">
                        <AnimatedTerminal className="w-5 h-5" isHovered={isHov} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Cravita Technologies</h3>
                        <p className="text-xs text-zinc-400 font-mono mt-1">SOFTWARE ENGINEER RESIDENT</p>
                      </div>
                    </>
                  )}
                </HoverContainer>
                <HoverContainer className="flex items-center gap-2 text-xs text-zinc-500 font-mono cursor-pointer hover:text-white transition-colors duration-200">
                  {(isHov) => (
                    <>
                      <AnimatedCalendar className="w-4 h-4" isHovered={isHov} />
                      <span>June 2024 — December 2024</span>
                    </>
                  )}
                </HoverContainer>
              </div>

              {/* Right Column: Narrative & Technical Work (col-span-8) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-2">OPERATIONAL OVERVIEW</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    At Cravita Technologies, I was integrated into the core product team, responsible for scoping, optimizing, and deploying high-performance enterprise applications. I refactored legacy database setups and automated build pipelines to optimize release speeds.
                  </p>
                </div>

                {/* Scoped operations details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="font-bold text-zinc-400 block mb-1.5 uppercase font-mono tracking-wider">1. API OPTIMIZATION</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Refactored REST endpoints using asynchronous Node.js loops. Configured Redis cache variables and serverless execution caching rules, reducing average system latencies by 70%.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-400 block mb-1.5 uppercase font-mono tracking-wider">2. REAL-TIME DATA SYNC</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Constructed collaborative drag-and-drop workspace boards using WebSockets. Implemented atomic payload checks and dirty-read mitigations to prevent database conflicts.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-400 block mb-1.5 uppercase font-mono tracking-wider">3. RBAC AUTH ARCHITECTURE</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Replaced cookie-based session stores with encrypted state-free JWTs inside secure HTTP-only cookies. Engineered granular Role-Based Access Controls (RBAC) layers at API entry boundaries.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-400 block mb-1.5 uppercase font-mono tracking-wider">4. CI/CD AUTOMATION</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Built continuous integration and testing workflows in GitHub Actions. Integrated lint checking, automated test runs, static optimizations, and Vercel CDN cache clears on commit push triggers.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "Redis", "GitHub Actions", "JWT", "RBAC"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[9px] font-mono text-zinc-400 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Measurable impact */}
                <div className="flex items-center gap-2 pt-4 text-xs font-mono text-zinc-400 border-t border-white/5">
                  <Award className="w-4 h-4 text-emerald-500" />
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
