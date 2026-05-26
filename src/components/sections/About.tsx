"use client";

import React from "react";
import { Check, ShieldCheck, Terminal, Users2, Database, LayoutTemplate, Network, Award } from "lucide-react";
import CardGlass from "../ui/CardGlass";
import SectionReveal from "../ui/SectionReveal";

const SKILL_DOMAINS = [
  {
    title: "Frontend Architecture",
    description: "Modular design systems, reactive UI components, bundle size optimization, and Core Web Vitals profiling.",
    icon: <LayoutTemplate className="w-4 h-4 text-brand-primary" />
  },
  {
    title: "Backend & Systems Design",
    description: "Robust REST/GraphQL APIs, cache tuning, complex PostgreSQL indexing, and asynchronous queue management.",
    icon: <Database className="w-4 h-4 text-emerald-400" />
  },
  {
    title: "Cloud & Devops Systems",
    description: "Vercel Enterprise, Cloudflare Edge Workers, Docker, AWS integration, and secure CI/CD build scripts.",
    icon: <Network className="w-4 h-4 text-indigo-400" />
  },
  {
    title: "Product Engineering",
    description: "Transforming customer funnels, payment flows (Stripe), and product strategy into technical realities.",
    icon: <Award className="w-4 h-4 text-amber-500" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Business-Focused Bio */}
          <div className="lg:col-span-6 space-y-6">
            <SectionReveal>
              <h2 className="text-xs font-bold font-mono tracking-widest text-brand-primary uppercase mb-3">
                ENGINEERING PHILOSOPHY
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Software exists to drive products, operations, and revenue.
              </h3>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-sm text-zinc-300 leading-relaxed">
                As a freelance software architect, I approach web engineering from a business outcome perspective. I specialize in building robust digital products, bulletproof APIs, and lightning-fast frontend platforms that load instantly, convert visitors, and stand the test of high traffic.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I avoid the typical developer traps: I don't write overly clever, unmaintainable code, and I don't build useless features. My approach is disciplined: structured TypeScript schemas, clear database models, robust automated tests, and edge-native deployments.
              </p>
            </SectionReveal>

            {/* List of guarantees */}
            <SectionReveal delay={0.3} className="space-y-3.5 pt-4">
              {[
                "Zero Technical Debt: Written for high team-handoff velocity.",
                "Sub-second Render Obsession: Focused on Core Web Vitals.",
                "Strategic Alignment: I review product design before writing a line of code.",
                "Client Transparency: Standard weekly sprint logs and staging links."
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-brand-success/15 border border-brand-success/20 text-brand-success">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300">{bullet}</span>
                </div>
              ))}
            </SectionReveal>
          </div>

          {/* Right Column: Expert Skills Domain Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_DOMAINS.map((domain, idx) => (
                <CardGlass key={idx} delay={idx * 0.05} hoverGlow className="p-5 md:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="p-2 rounded bg-zinc-900 border border-white/5 w-fit mb-4">
                      {domain.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{domain.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{domain.description}</p>
                  </div>
                </CardGlass>
              ))}
            </div>

            {/* Bottom micro quote card */}
            <SectionReveal delay={0.4} className="mt-6">
              <div className="glassmorphism rounded-xl p-4 border border-white/5 bg-zinc-950/60 flex items-center gap-4">
                <div className="p-2 rounded bg-zinc-900 border border-white/5">
                  <Terminal className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  &gt; <span className="text-white">jamdar --audit:</span> "Speed is a business strategy. A 100ms delay in page response times can drop conversions by 7%."
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
