import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Terminal, Shield, Cpu, Zap, HeartHandshake, FileCheck } from "lucide-react";

export default function AboutPage() {
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
            ENGINEERING PHILOSOPHY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Speed is a Strategy, Design is a Feature.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            I don't approach development as a hobby. Software is a serious business engine. I build bulletproof TypeScript architectures and latency-optimized SaaS backends to solve tangible revenue bottlenecks and scale company operations.
          </p>
        </SectionReveal>

        {/* The Core Values Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          
          {/* Card 1: Zero-Debt TypeScript */}
          <CardGlass className="space-y-4">
            <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit text-brand-primary">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero-Debt TypeScript Architectures</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Clever but unreadable code is a liability. I construct clean, self-documenting TypeScript pipelines backed by strict generic schema checking. This ensures that any incoming developer can merge new code smoothly without breaking existing modules.
            </p>
          </CardGlass>

          {/* Card 2: Core Web Vitals Obsession */}
          <CardGlass className="space-y-4">
            <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit text-amber-500">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Core Web Vitals Obsession</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Performance is a user retention feature. Sub-second initial rendering means lower customer churn, higher organic search indexing authority, and superior interface fluidity. I audit react renders and chunk webpack build bundles to minimize load latencies.
            </p>
          </CardGlass>

          {/* Card 3: Enterprise Database Security */}
          <CardGlass className="space-y-4">
            <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit text-emerald-500">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Enterprise Database Security</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Data leaks can destroy a business. I implement strict validation schemas (Pydantic / Zod) at the API boundary, state-free JSON Web Tokens (JWT) inside HTTP-only cookies, roles-based permissions (RBAC) layers, and parameterized SQL query indexing.
            </p>
          </CardGlass>

          {/* Card 4: Product-First Engineering */}
          <CardGlass className="space-y-4">
            <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 w-fit text-indigo-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Product-First Engineering Guarantees</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Code exists to solve problems. I review design patterns, mapping actual system specs directly to user conversion funnels. By prioritizing client strategy before writing a line of code, I guarantee that our technological implementation drives real company outcomes.
            </p>
          </CardGlass>

        </div>

        {/* Custom bio quotes */}
        <SectionReveal className="mt-8">
          <div className="glassmorphism rounded-2xl p-6 border border-white/5 bg-zinc-950/60 flex flex-col sm:flex-row items-center gap-6">
            <div className="p-3 rounded bg-zinc-900 border border-white/5">
              <Terminal className="w-6 h-6 text-brand-primary" />
            </div>
            <div className="text-xs text-zinc-300 font-mono leading-relaxed">
              &gt; <span className="text-white">hello.atuljamdar@gmail.com:</span> "A 100ms lag in checkout response times can drop transaction conversions by 7%. Speed is not a luxury. I treat performance auditing, caching layers, and database optimization as non-negotiable standards."
            </div>
          </div>
        </SectionReveal>

      </main>

      <Footer />
    </div>
  );
}
