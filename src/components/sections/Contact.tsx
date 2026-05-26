"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import confetti from "canvas-confetti";
import CardGlass from "../ui/CardGlass";
import SectionReveal from "../ui/SectionReveal";
import MagneticButton from "../ui/MagneticButton";

const BUDGET_OPTIONS = [
  { label: "< $5k", value: "under-5k" },
  { label: "$5k - $10k", value: "5k-10k" },
  { label: "$10k - $25k", value: "10k-25k" },
  { label: "$25k+", value: "25k-plus" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    budget: "10k-25k"
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBudgetChange = (budgetVal: string) => {
    setFormData({
      ...formData,
      budget: budgetVal
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }

      setStatus("success");
      // Trigger canvas-confetti blast
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#8b5cf6", "#10b981", "#ffffff"]
      });

      setFormData({
        name: "",
        email: "",
        details: "",
        budget: "10k-25k"
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send your request. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-5 space-y-8">
            <SectionReveal>
              <h2 className="text-xs font-bold font-mono tracking-widest text-brand-primary uppercase mb-3">
                PROJECT PROPOSAL & SCORING
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let's construct your digital system.
              </h3>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                Have a product vision, SaaS concept, or high-throughput API backend that needs custom elite engineering? Submit your details here to receive a comprehensive roadmap proposal within 48 hours.
              </p>
            </SectionReveal>

            {/* Direct Channels */}
            <SectionReveal delay={0.1} className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase font-mono">DIRECT INBOX</div>
                  <a href="mailto:hello.atuljamdar@gmail.com" className="text-sm font-semibold text-white hover:text-brand-primary transition-colors">
                    hello.atuljamdar@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase font-mono">OFFICE HOURS</div>
                  <span className="text-sm font-semibold text-zinc-300">
                    Mon - Fri // 09:00 - 18:00 (PST)
                  </span>
                </div>
              </div> */}
            </SectionReveal>

            {/* Social pills */}
            <SectionReveal delay={0.2} className="space-y-3 pt-6 border-t border-white/5">
              <span className="text-[10px] text-zinc-500 font-bold uppercase font-mono tracking-wider">
                CORE SOCIAL PILLARS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/AtulJamdar",
                    icon: (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    )
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/connectatuljamdar",
                    icon: (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )
                  },
                  // {
                  //   name: "Twitter / X",
                  //   href: "https://x.com",
                  //   icon: (
                  //     <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  //       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  //     </svg>
                  //   )
                  // }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-300 hover:text-white hover:border-white/10 transition-colors flex items-center gap-2 font-medium"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7">
            <CardGlass delay={0.1} className="relative overflow-hidden">
              
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <span className="text-xs font-bold font-mono text-zinc-400">Send Message</span>
                <span className="text-[10px] font-bold text-zinc-500 font-mono">ENCRYPTED SEND</span>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto p-4 bg-brand-success/10 border border-brand-success/20 text-brand-success rounded-full w-fit">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-white">PROPOSAL REQUEST TRANSMITTED</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you. Your project metadata and scope specifications have been successfully sent. I will review the architecture plan and reply within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold text-brand-primary hover:text-indigo-400 font-mono cursor-pointer uppercase pt-4 block mx-auto"
                  >
                    &gt; Send another specs packet
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sarah Jenkins"
                      className="w-full px-4 py-3 bg-zinc-950/60 border border-white/5 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-mono"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="s.jenkins@apexlabs.co"
                      className="w-full px-4 py-3 bg-zinc-950/60 border border-white/5 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-mono"
                    />
                  </div>

                  {/* Project details */}
                  <div>
                    <label htmlFor="details" className="block text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell me about your project....."
                      className="w-full px-4 py-3 bg-zinc-950/60 border border-white/5 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all leading-relaxed font-mono resize-none"
                    />
                  </div>

                  {/* Budget Options Selector */}
                  {/* <div>
                    <label className="block text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest mb-3">
                      Est. Capital Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleBudgetChange(opt.value)}
                          className={`px-3 py-2 rounded-lg border text-center text-xs font-bold font-mono cursor-pointer transition-all duration-200 ${
                            formData.budget === opt.value
                              ? "bg-brand-primary border-brand-primary text-white"
                              : "bg-zinc-950 border-white/5 text-zinc-400 hover:border-white/10 hover:text-zinc-200"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div> */}

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 text-sm font-bold text-white bg-brand-primary hover:bg-indigo-600 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/15 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {status === "loading" ? "TRANSMITTING SPEC DATA..." : "Send Message"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </div>

                </form>
              )}

            </CardGlass>
          </div>

        </div>

      </div>
    </section>
  );
}
