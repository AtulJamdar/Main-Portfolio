import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Shield, Cpu, Database, Server, Compass, Network, Award, Camera } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
        
        {/* Breadcrumb Navigation */}
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
            PRODUCT CASE STUDIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Deep-Dive Systems Architectures.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            I don't build basic templates or duplicate starter kits. Below are comprehensive technical breakdowns of real, high-throughput systems, detailing actual bottlenecks resolved, caching strategies selected, and compliance secure arrays.
          </p>
        </SectionReveal>

        {/* Detailed Projects Database */}
        <div className="space-y-12">
          {[
            {
              title: "MK Photography — Professional Studio Platform",
              tagline: "LOCAL SEO & HIGH-CONVERTING WHATSAPP INQUIRY FLOWS",
              desc: "A high-converting local photography business platform designed to increase Google visibility, generate WhatsApp inquiries, and transform local search traffic into real customer bookings through a fast, mobile-first experience.",
              challenge: "Attracting and converting local Pune photography customers who search on mobile devices and expect instant response rates.",
              architecture: "Configured a mobile-first responsive architecture utilizing Next.js, with integrated direct-link WhatsApp messaging arrays, Google Local Business schema structure, and sub-second static load times.",
              metrics: "98+ Lighthouse Performance index, +45% increase in WhatsApp lead inquiries, and top-ranking SEO visibility for targeted Pune keywords.",
              stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
              icon: <Camera className="w-5 h-5 text-amber-400" />
            },
            {
              title: "Tasveer Photography — Luxury Cinematic Portfolio",
              tagline: "HIGH-RESOLUTION MEDIA PIPELINES & LUXURY STORYTELLING",
              desc: "A cinematic wedding portfolio platform engineered to elevate brand trust, showcase emotional storytelling, and convert social media visitors into premium client inquiries through a refined luxury-focused digital experience.",
              challenge: "Presenting high-resolution cinematic portfolios and luxury wedding videos without causing mobile layout shifts or slow media load times.",
              architecture: "Implemented custom lazy-loading media pipelines, dynamic image optimization protocols, and structured high-conversion WhatsApp inquiry CTA flows optimized for mobile users.",
              metrics: "+50% booking consultation inquiries, sub-second media page loads, and elegant high-end brand placement.",
              stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
              icon: <Camera className="w-5 h-5 text-yellow-500" />
            },
            {
              title: "BuildWise — AI GitHub Code Auditor",
              tagline: "LLM EMBEDDINGS & EVENT-DRIVEN GitHub WEBHOOKS",
              desc: "BuildWise is an automated document-intelligence auditor designed to ingest GitHub Pull Requests and scan changed code arrays for anti-patterns, performance leaks, and security risks.",
              challenge: "Webhook operations must return a response in 3000ms. Mapping long file reviews directly to LLMs led to gateway timeouts.",
              architecture: "Constructed an async Redis message queue. The webhooks immediately validate payload tokens and returns a 202. The worker queue picks up the job, fetches changed diff hashes, and maps them to specialized vector contexts for GPT evaluations, completing the PR review in 1.4s.",
              metrics: "65% PR review turnaround speedup, 42% decrease in production bugs, and perfect 99.8% webhook uptime.",
              stack: ["Next.js", "TypeScript", "Redis", "GitHub API", "Node.js", "Tailwind CSS"],
              icon: <Cpu className="w-5 h-5 text-brand-primary" />
            },
            {
              title: "SyncFlow — Collaborative MERN PM SaaS",
              tagline: "REAL-TIME SOCKET DRISTRIBUTION & DATABASE OPTIMIZATION",
              desc: "An enterprise collaborative workspace platform designed for remote development teams, featuring real-time boards updates, granular authorization, and dynamic logs.",
              challenge: "Updating board structures across thousands of concurrent clients led to intense database query locking under typical REST paradigms.",
              architecture: "Configured Socket.io event distribution layer. Wrote specialized PostgreSQL transaction loops and database connection pools that hold active connections, executing workspace queries under 42ms.",
              metrics: "Sub-100ms collaborative board updates, +32% sales velocity, and 10k+ active workspaces.",
              stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
              icon: <Database className="w-5 h-5 text-brand-secondary" />
            },
            {
              title: "Web Customizer — Chrome Extensions Injector",
              tagline: "MANIFEST V3 PROTOCOLS & CSS PARSING INJECTS",
              desc: "A high-performance Manifest v3 browser extension allowing local designers to injection styling sheets onto live URLs during layout audits.",
              challenge: "Bypassing complex modern Content Security Policies (CSP) and CORS-protection rules without introducing browser rendering lag.",
              architecture: "Implemented isolated DOM sanitization pipelines and background content scripts. The extension intercepts header scopes and securely compiles layouts inside a sandboxed iframe under 5ms.",
              metrics: "Over 8,000+ active extension downloads and sub-second style rendering updates on all target URLs.",
              stack: ["JavaScript", "Chrome Manifest v3", "DOM Sanitizer", "Tailwind CSS", "CSS Parsers"],
              icon: <Compass className="w-5 h-5 text-brand-success" />
            }
          ].map((proj, idx) => (
            <CardGlass key={idx} className="relative overflow-hidden" delay={idx * 0.05}>
              <div className="absolute -top-1/4 -right-1/4 w-[250px] h-[250px] rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual Icon / Header Details (col-span-4) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit">
                    {proj.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{proj.title}</h3>
                    <p className="text-[10px] font-mono text-brand-primary font-bold uppercase tracking-wider mt-1">{proj.tagline}</p>
                  </div>
                </div>

                {/* Case Study Details (col-span-8) */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm text-zinc-300 leading-relaxed">{proj.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs">
                    <div>
                      <span className="font-bold text-zinc-400 block mb-1 uppercase font-mono tracking-wider">THE BOTTLENECK CHALLENGE</span>
                      <p className="text-zinc-400 leading-relaxed">{proj.challenge}</p>
                    </div>
                    <div>
                      <span className="font-bold text-zinc-400 block mb-1 uppercase font-mono tracking-wider">ENGINEERED ARCHITECTURE</span>
                      <p className="text-zinc-400 leading-relaxed">{proj.architecture}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[9px] font-mono text-zinc-400 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 text-xs font-mono text-zinc-400">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>MEASURABLE OUTCOME:</span>
                    <span className="text-emerald-400 font-bold">{proj.metrics}</span>
                  </div>
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
