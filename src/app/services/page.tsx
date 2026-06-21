import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Cpu, Rocket, BrainCircuit, Server, Workflow, BarChart3 } from "lucide-react";

export default function ServicesPage() {
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
            PRODUCT OPERATIONS CONTRACTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Specialized Technical Operations.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            I offer robust, zero-compromise engineering services for professional founders, startups, and product leads. From asynchronous backend frameworks to vector intelligence RAG search pipelines, I engineer high-performance systems.
          </p>
        </SectionReveal>

        {/* Deep Services Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {[
            {
              title: "Full-Stack Web Architectures",
              tagline: "NEXT.JS, NODE.JS, & STRICT TYPE ARCHITECTURES",
              desc: "Engineering secure, type-safe full-stack platforms. I map modular systems that guarantee strict data model validations, complete coverage, and reliable deployments.",
              specs: "Strict TypeScript, async Node loop optimizations, RESTful controllers, PostgreSQL coverings indices, and unified GraphQL schemas.",
              icon: <Cpu className="w-5 h-5 text-brand-primary" />
            },
            {
              title: "SaaS Product Development",
              tagline: "PAYMENTS, SUBSCRIPTIONS, & CUSTOM DASHBOARDS",
              desc: "Building complete SaaS web platforms from database architectures to customer invoice checks. Integrate Stripe webhooks, user account settings, and analytics metrics.",
              specs: "Stripe multi-tiered checkout integration, OAuth/JWT state-free accounts layers, robust webhooks databases transactions, and automated cron logs.",
              icon: <Rocket className="w-5 h-5 text-brand-secondary" />
            },
            {
              title: "Cognitive AI Integrations",
              tagline: "LLM WORKSPACES, VECTOR STORES, & RAG PIPELINES",
              desc: "Incorporate semantic intelligence capabilities directly into your digital product. Setup automated document data ingestion, customized assistant contexts, and vector stores.",
              specs: "OpenAI assistant completions, Pinecone DB semantic search grids, langchain context management, and token audit checks.",
              icon: <BrainCircuit className="w-5 h-5 text-fuchsia-400" />
            },
            {
              title: "API & High-Speed Caching",
              tagline: "LATENCY-TUNED REDIS ENDPOINTS & QUEUES",
              desc: "Constructing high-throughput, sub-second API layers. Setup Redis cache arrays, WebSocket event distribution structures, and asynchronous queues.",
              specs: "Redis connection pooling, Socket.io real-time event distributions, asynchronous message queue buffers, and request rate-limiting.",
              icon: <Server className="w-5 h-5 text-emerald-400" />
            },
            {
              title: "Custom Automation Pipelines",
              tagline: "GITHUB ACTIONS, WEBHOOKS, & DATABASES CRONS",
              desc: "Automate repetitive backend routines to drive company velocity. Build secure cron operations, sync Slack warnings, and automate continuous integration test pipelines.",
              specs: "GitHub Actions configurations, event-triggered webhooks maps, database aggregations sweeps, and transactional alert frameworks.",
              icon: <Workflow className="w-5 h-5 text-sky-400" />
            },
            {
              title: "Performance & Diagnostic Auditing",
              tagline: "CORE WEB VITALS PROFILE & RERENDER FIXES",
              desc: "Refactor slow legacy systems to maximize speed, conversion rates, and SEO indexing authority. I profile component structures to deliver sub-second rendering speeds.",
              specs: "Bundle separation splitters, database query optimizations, state managers profiling, and Lighthouse score audit reviews.",
              icon: <BarChart3 className="w-5 h-5 text-amber-500" />
            }
          ].map((srv, idx) => (
            <CardGlass key={idx} className="flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Header Icon & Tagline */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit">
                    {srv.icon}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    MODULE_{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                  <p className="text-[10px] font-mono text-brand-primary font-bold uppercase mt-1 tracking-wider">{srv.tagline}</p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">{srv.desc}</p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-white/5 space-y-2 text-xs">
                <span className="font-bold text-zinc-400 block uppercase font-mono tracking-wider">ENGINEERING SPECIFICATIONS</span>
                <p className="text-zinc-400 leading-relaxed font-mono text-[11px]">&gt; {srv.specs}</p>
              </div>

            </CardGlass>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
