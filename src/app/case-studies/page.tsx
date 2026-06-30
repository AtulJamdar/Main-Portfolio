import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Cpu, Shield, Database, Award, Hourglass } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
        
        {/* Page Header */}
        <SectionReveal className="space-y-4">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary uppercase">
            ENGINEERING RESOLUTIONS LOGS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Systems Audit Case Studies.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            I solve complex architectural bottlenecks. Below are detailed, technical engineering post-mortems analyzing actual database query speedups, JS memory leaks fixes, and secure checkout systems.
          </p>
        </SectionReveal>

        {/* Case Studies list */}
        <div className="space-y-8">
          {[
            {
              title: "1. Resolving Sluggish Database Indexes",
              tagline: "POSTGRESQL // QUERY COVERING & EXECUTION PROFILES",
              problem: "A client's CRM workspace had table scans on a 2.5 million rows active database, leading to serverless lambdas timeout errors during analytics aggregations.",
              solution: "Audited queries using EXPLAIN ANALYZE. Removed redundant tables sweeps by building unified covering indices (combining customer_id and updated_at key arrays). Structured pgbouncer pooling limits to hold active server limits.",
              outcomes: "Query latency slashed from 8.4s to 42ms (-99.5%), saving the client $1,200/mo in serverless execution costs.",
              icon: <Database className="w-5 h-5 text-brand-primary" />
            },
            {
              title: "2. Garbage Collection & Memory Leaks Audit",
              tagline: "NODE.JS EVENT LOOPS // CHROMIUM V8 HEAP PARSING",
              problem: "A real-time Socket.io message hub began crash looping during peak hours, with server instances running out of memory (OOM).",
              solution: "Profiled heap profiles using Chrome DevTools. Discovered that active WebSocket references were being stored globally within an unpurged listeners array. Replaced standard listener arrays with WeakMap registers to allow garbage collection sweeps to purge closed references.",
              outcomes: "Server memory leak completely resolved. Maintainable steady-state RAM occupancy under 180MB across 12,000 concurrent sockets.",
              icon: <Cpu className="w-5 h-5 text-brand-secondary" />
            },
            {
              title: "3. Bulletproof Payment Webhooks Synchronization",
              tagline: "STRIPE CORE // RE-ENTRANCY LOCKS & TRANSACTION INTEGRITY",
              problem: "A fast-growing SaaS application suffered from double-billing conflicts due to Stripe webhooks retrying payload deliveries concurrently.",
              solution: "Implemented strict re-entrancy locks inside Redis database cache using customer invoice tokens. The webhook router queries the lock index, processing payloads sequentially, backed by robust database transaction rollbacks.",
              outcomes: "100% data integrity maintained. Eradicated double-billing errors entirely.",
              icon: <Shield className="w-5 h-5 text-brand-success" />
            }
          ].map((caseLog, idx) => (
            <CardGlass key={idx} className="relative overflow-hidden" delay={idx * 0.05}>
              <div className="absolute -top-1/4 -right-1/4 w-[250px] h-[250px] rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit">
                    {caseLog.icon}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    CASE_AUDIT // #{idx + 1}04
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{caseLog.title}</h3>
                  <p className="text-[10px] font-mono text-brand-primary font-bold uppercase mt-1 tracking-wider">{caseLog.tagline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs text-zinc-300">
                  <div className="leading-relaxed">
                    <span className="font-bold text-zinc-400 block mb-1 uppercase font-mono tracking-wider">THE BOTTLENECK</span>
                    {caseLog.problem}
                  </div>
                  <div className="leading-relaxed">
                    <span className="font-bold text-zinc-400 block mb-1 uppercase font-mono tracking-wider">ENGINEERED WORKFLOW</span>
                    {caseLog.solution}
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-center gap-2 pt-4 text-xs font-mono text-zinc-400 border-t border-white/5">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>MEASURABLE OUTCOME:</span>
                  <span className="text-emerald-400 font-bold">{caseLog.outcomes}</span>
                </div>

              </div>
            </CardGlass>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
