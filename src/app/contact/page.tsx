import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";
import CardGlass from "@/components/ui/CardGlass";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowLeft, Mail, Calendar, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function ContactPage() {
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
            ENGAGEMENT CORE PROTOCOLS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Initiate Project Scoping.
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            Ready to build a premium SaaS, AI tool, or latency-optimized database architecture? Fill out the intake specifications below, or book a direct technical audit session.
          </p>
        </SectionReveal>

        {/* Split Grid: Intake Details & Calendly / Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed intake cards (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <CardGlass className="h-full flex flex-col justify-between p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-white/5">
                  <div className="p-1.5 rounded bg-zinc-900 border border-white/5 text-brand-primary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono uppercase">INTAKE PROTOCOLS</h3>
                    <p className="text-[9px] text-zinc-500 mt-0.5">ESTABLISHED TRUST AGREEMENTS</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs leading-relaxed text-zinc-400">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-brand-success mt-1.5" />
                    <p><strong>Response SLA:</strong> I review proposal parameters and return a technical roadmap estimation within 24 hours.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-brand-success mt-1.5" />
                    <p><strong>Discovery Audit:</strong> Free 30-minute scoping check to map APIs, databases schemas, and timeline bounds.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-brand-success mt-1.5" />
                    <p><strong>Secure Contracts:</strong> Strict NDA guarantees, version-controlled source repos, and structured sprint staging releases.</p>
                  </div>
                </div>
              </div>

              {/* Calendly placeholder anchor */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">DIRECT SCHEDULER</span>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl text-xs font-bold font-mono text-center block text-white transition-colors uppercase tracking-widest cursor-pointer"
                >
                  &gt; Book Scoping Call
                </a>
              </div>
            </CardGlass>
          </div>

          {/* Detailed intake form (col-span-8) */}
          <div className="lg:col-span-8">
            <ContactSection />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
