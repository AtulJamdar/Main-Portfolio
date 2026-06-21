"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Rocket, BrainCircuit, Server, BarChart3, Workflow } from "lucide-react";

const SERVICES = [
  {
    title: "Full-Stack Development",
    tagline: "NEXT.JS & SECURE BACKENDS",
    description: "Engineering robust, end-to-end web applications. I construct modular controllers, secure databases (PostgreSQL/SQL), and type-safe systems that scale.",
    icon: <Cpu className="w-10 h-10 text-purple-400" />
  },
  {
    title: "SaaS Product Development",
    tagline: "PAYMENTS & SUBSCRIPTION ENGINES",
    description: "Building complete SaaS web platforms from database schemas to client payment checkouts. I integrate Stripe webhooks, user account settings, and analytics metrics.",
    icon: <Rocket className="w-10 h-10 text-purple-400" />
  },
  {
    title: "AI Integration Engineering",
    tagline: "LLM EMBEDDINGS & RAG SEARCH",
    description: "Incorporating custom AI and Large Language Model capabilities. Scoping document ingestion audits, vector database indexes (Pinecone), and semantic search RAG systems.",
    icon: <BrainCircuit className="w-10 h-10 text-purple-400" />
  },
  {
    title: "API Development & Caching",
    tagline: "LATENCY-OPTIMIZED REDIS PILES",
    description: "Designing secure, latency-optimized REST and WebSocket interfaces. Configured Redis cache variables and asynchronous event queues to reduce server loads.",
    icon: <Server className="w-10 h-10 text-purple-400" />
  },
  {
    title: "Dashboard & Analytics Systems",
    tagline: "METRICS VISUALIZERS & HEAP AUDITS",
    description: "Constructing high-throughput data aggregation dashboards. Building responsive charts and custom data aggregation queries to visualize key user operations.",
    icon: <BarChart3 className="w-10 h-10 text-purple-400" />
  },
  {
    title: "Custom Automation Tools",
    tagline: "GITHUB ACTIONS & CRON UTILITIES",
    description: "Eliminate manual operational errors by constructing automated pipelines. Setup cron database scripts, Slack warning syncs, and GitHub Actions continuous builds.",
    icon: <Workflow className="w-10 h-10 text-purple-400" />
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-32 bg-black w-full text-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-20 text-center font-bold"
        >
          <span className="text-white">What I </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Provide
          </span>
        </motion.div>

        {/* Responsive Grid/Slider Layout */}
        <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((srv, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="snap-center min-w-[80vw] md:min-w-0 h-[360px] sm:h-[380px] p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-300 group flex-shrink-0 md:flex-shrink"
              >
                <div>
                  {/* Static Icon Box */}
                  <div className="p-3 rounded-lg bg-zinc-950 border border-white/5 w-fit group-hover:border-purple-500/20 hover:bg-black transition-all duration-300 mb-4 sm:mb-6">
                    {srv.icon}
                  </div>

                  {/* Service Tagline & Title */}
                  <div className="mb-2">
                    <span className="text-[9px] font-bold font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                      {srv.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Service Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2">
                    {srv.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-3 sm:mt-4">
                  <button className="text-purple-400 hover:text-purple-300 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 group/btn cursor-pointer">
                    Learn more 
                    <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200">→</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
