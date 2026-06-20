"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Mail, Globe, MapPin, Sparkles, BookOpen, Copy, Check } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";

// Dynamically import IconCloud with SSR disabled to prevent server-side hydration mismatches from canvas element random IDs
const IconCloud = dynamic(
  () => import("@/registry/magicui/icon-cloud").then((mod) => mod.IconCloud),
  { ssr: false }
);

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
];

const PROCESS_ITEMS = [
  {
    title: "Design & User Experience",
    desc: "I create intuitive and aesthetically pleasing designs that focus on user-centered experiences."
  },
  {
    title: "Custom Development",
    desc: "I write clean, efficient code to build custom solutions tailored to the specific needs of the project."
  },
  {
    title: "API Integration",
    desc: "I integrate third-party services and APIs to enhance functionality and improve user experience."
  },
  {
    title: "Testing & Optimization",
    desc: "I conduct rigorous testing to ensure functionality, performance, and security across all platforms."
  },
  {
    title: "Continuous Support & Maintenance",
    desc: "I provide ongoing support and updates to ensure the project remains relevant and fully functional over time."
  }
];

export default function About() {
  const [copied, setCopied] = useState(false);
  const email = "hello.atuljamdar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="about" className="py-20 bg-black text-white relative z-10 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid Summary Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-auto w-full">
          
          {/* Card 1: Tech Enthusiast (Icon Cloud sphere) */}
          <SectionReveal delay={0.2} className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-purple-500/20 hover:shadow-purple-500/5 md:col-span-4 md:row-span-2 min-h-[480px] flex flex-col justify-between">
            <div className="h-full p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs text-zinc-550 font-mono tracking-tight mb-2">Tech Enthusiast</p>
                <h3 className="font-extrabold text-zinc-100 text-xl leading-tight">
                  Always excited to build cool stuff with the latest tech.
                </h3>
              </div>
              
              <div className="my-6 flex-grow relative flex items-center justify-center min-h-[250px]">
                <div className="relative flex size-full items-center justify-center overflow-hidden scale-90 group-hover:scale-95 transition-transform duration-500">
                  <IconCloud images={images} />
                </div>
              </div>
              
              <div className="text-[10px] text-zinc-650 font-mono tracking-tight">
                &gt; Drag to rotate 3D sphere
              </div>
            </div>
          </SectionReveal>

          {/* Card 2: Let's work together */}
          <SectionReveal delay={0.35} className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-purple-500/20 hover:shadow-purple-500/5 md:col-span-4 h-64 flex flex-col justify-between">
            <div className="h-full p-7 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-zinc-100 text-xl">Let's work together</h3>
                <p className="text-xs text-zinc-500 mt-1">on your next project</p>
              </div>
              
              <div className="flex justify-center items-center my-1.5">
                <div className="h-16 w-16 rounded-full bg-brand-primary/80 border border-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/10 relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-brand-primary/20 animate-ping" />
                  <span className="text-white font-black text-xl tracking-tight relative z-10">JA</span>
                </div>
              </div>
              
              <div className="relative">
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between rounded-xl bg-zinc-900/60 border border-white/5 px-4 py-3 text-xs font-mono text-zinc-300 hover:bg-zinc-900 transition-all duration-350 w-full group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-zinc-400" />
                    <span className="truncate">{email}</span>
                  </div>
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-brand-success flex-shrink-0" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-zinc-500 group-hover/btn:text-white transition-colors flex-shrink-0" />
                  )}
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Card 3: Remote */}
          <SectionReveal delay={0.5} className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-purple-500/20 hover:shadow-purple-500/5 md:col-span-4 h-64 flex flex-col justify-between">
            <div className="h-full p-7 flex flex-col justify-between relative overflow-hidden">
              
              {/* Glowing animated background globe */}
              <div className="absolute right-[-40px] bottom-[-60px] w-56 h-56 opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-500 animate-spin" style={{ animationDuration: "20s" }}>
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                  <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                  <ellipse cx="50" cy="50" rx="15" ry="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                  <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                </svg>
              </div>

              <div>
                <p className="text-xs text-zinc-550 font-mono tracking-tight mb-2">Remote</p>
                <h3 className="font-extrabold text-zinc-100 text-xl leading-tight">India</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-[85%]">
                  I'm very flexible with time zone communications
                </p>
              </div>
              
              <div className="flex items-center gap-2 p-2.5 bg-black/40 border border-white/5 rounded-xl font-mono text-[9px] text-zinc-500 relative z-10 w-fit">
                <MapPin className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                <span>GMT +5:30 // Berhampur (Berhampur dispatch)</span>
              </div>
            </div>
          </SectionReveal>

          {/* Card 4: Behind the Scenes (Process tracker list) */}
          <SectionReveal delay={0.65} className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-purple-500/20 hover:shadow-purple-500/5 md:col-span-8 flex flex-col justify-between min-h-[220px]">
            <div className="h-full p-7 flex flex-col justify-between w-full">
              <div>
                <p className="text-xs text-zinc-550 font-mono tracking-tight mb-2">Behind the Scenes</p>
                <h3 className="font-extrabold text-zinc-150 text-xl">
                  Currently crafting a Business Portfolio for Client.
                </h3>
              </div>
              
              <div className="mt-6 flex gap-4 overflow-x-auto pb-3 w-full scrollbar-none snap-x snap-mandatory">
                {PROCESS_ITEMS.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-primary/20 rounded-2xl p-5 w-[210px] flex-shrink-0 flex flex-col justify-between transition-colors snap-start"
                  >
                    <h4 className="text-xs font-extrabold text-zinc-200 tracking-tight mb-2">{item.title}</h4>
                    <p className="text-[10px] text-zinc-450 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

        </div>

      </div>
    </section>
  );
}
