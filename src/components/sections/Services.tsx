"use client";

import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Full-Stack Development",
    tagline: "NEXT.JS & SECURE BACKENDS",
    description: "Engineering robust, end-to-end web applications. I construct modular controllers, secure databases (PostgreSQL/SQL), and type-safe systems that scale.",
    emoji: "💻"
  },
  {
    title: "SaaS Product Development",
    tagline: "PAYMENTS & SUBSCRIPTION ENGINES",
    description: "Building complete SaaS web platforms from database schemas to client payment checkouts. I integrate Stripe webhooks, user account settings, and analytics metrics.",
    emoji: "🚀"
  },
  {
    title: "AI Integration Engineering",
    tagline: "LLM EMBEDDINGS & RAG SEARCH",
    description: "Incorporating custom AI and Large Language Model capabilities. Scoping document ingestion audits, vector database indexes (Pinecone), and semantic search RAG systems.",
    emoji: "🧠"
  },
  {
    title: "API Development & Caching",
    tagline: "LATENCY-OPTIMIZED REDIS PILES",
    description: "Designing secure, latency-optimized REST and WebSocket interfaces. Configured Redis cache variables and asynchronous event queues to reduce server loads.",
    emoji: "⚡"
  },
  {
    title: "Dashboard & Analytics Systems",
    tagline: "METRICS VISUALIZERS & HEAP AUDITS",
    description: "Constructing high-throughput data aggregation dashboards. Building responsive charts and custom data aggregation queries to visualize key user operations.",
    emoji: "📊"
  },
  {
    title: "Custom Automation Tools",
    tagline: "GITHUB ACTIONS & CRON UTILITIES",
    description: "Eliminate manual operational errors by constructing automated pipelines. Setup cron database scripts, Slack warning syncs, and GitHub Actions continuous builds.",
    emoji: "🔄"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-32 bg-black w-full text-white overflow-hidden border-t border-zinc-900">
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

        {/* Horizontal Slider Layout */}
        <div className="overflow-x-auto pb-8 snap-x snap-mandatory flex gap-4 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-center min-w-[80vw] sm:min-w-[320px] md:min-w-[345px] h-[360px] sm:h-[400px] p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between border-transparent hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-300 group flex-shrink-0"
            >
              <div>
                {/* Emoji Icon */}
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                  {srv.emoji}
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
                <button className="text-purple-400 hover:text-purple-300 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 group/btn">
                  Learn more 
                  <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200">→</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
