"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Mail, Globe, MapPin, Sparkles, BookOpen } from "lucide-react";
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

const SKILL_ITEMS = [
  {
    title: "Project Strategy",
    desc: "I work closely with clients to define clear goals and develop a strategic engineering roadmap for each product."
  },
  {
    title: "Design & UX",
    desc: "I create intuitive, aesthetic, and responsive web designs focused on premium user-centered experiences."
  },
  {
    title: "Custom Development",
    desc: "I write clean, efficient, highly type-safe React/Next.js code to build custom MERN software solutions."
  },
  {
    title: "API & Integrations",
    desc: "I integrate third-party services, Stripe payment checkouts, and AI models (OpenAI) seamlessly."
  }
];

export default function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-zinc-950/20 border-b border-zinc-900">
      {/* Background soft ambient flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold font-mono tracking-widest text-brand-primary uppercase mb-3">
            VERIFIED STACK & DEVELOPMENT PROCESS
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Code Meets Creativity
          </p>
        </SectionReveal>

        {/* Bento Grid Summary Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto w-full">
          
          {/* Card 1: Tech Enthusiast (Icon Cloud sphere) */}
          <SectionReveal className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-md transition-all hover:shadow-lg hover:border-zinc-700 md:col-span-4 md:row-span-2 min-h-[420px] flex flex-col justify-between">
            <div className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-brand-primary font-mono uppercase mb-2">
                  <Sparkles className="w-3 h-3" />
                  Tech Stack
                </div>
                <h3 className="font-bold text-zinc-100 text-lg">Always excited to build cool stuff with the latest tech.</h3>
              </div>
              
              <div className="my-4 flex-grow relative flex items-center justify-center min-h-[220px]">
                <div className="relative flex size-full items-center justify-center overflow-hidden">
                  <IconCloud images={images} />
                </div>
              </div>
              
              <div className="text-[10px] text-zinc-500 font-mono">
                &gt; Drag to rotate 3D sphere
              </div>
            </div>
          </SectionReveal>

          {/* Card 2: Let's work together */}
          <SectionReveal className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-md transition-all hover:shadow-lg hover:border-zinc-700 md:col-span-4 h-64 flex flex-col justify-between">
            <div className="h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-zinc-150 text-lg">Let's work together</h3>
                <p className="text-xs text-zinc-400 mt-1">on your next web application</p>
              </div>
              
              <div className="flex justify-center items-center my-2">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-extrabold text-xl tracking-tight">JA</span>
                </div>
              </div>
              
              <div>
                <a 
                  href="mailto:hello.atuljamdar@gmail.com" 
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-800 border border-white/5 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-750 transition-all duration-300 w-full"
                >
                  <Mail className="mr-2 h-3.5 w-3.5 text-zinc-400" />
                  hello.atuljamdar@gmail.com
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Card 3: Remote */}
          <SectionReveal className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-md transition-all hover:shadow-lg hover:border-zinc-700 md:col-span-4 h-64 flex flex-col justify-between">
            <div className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono uppercase mb-2">
                  <Globe className="w-3 h-3" />
                  Work Zone
                </div>
                <h3 className="font-bold text-zinc-150 text-lg">Remote // India</h3>
                <p className="text-xs text-zinc-450 mt-1 leading-relaxed">
                  I'm extremely flexible with international time zone communications.
                </p>
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-black/30 border border-white/5 rounded-xl font-mono text-[9px] text-zinc-450 mt-4">
                <MapPin className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                <span>GMT +5:30 // Berhampur (Berhampur dispatch)</span>
              </div>
            </div>
          </SectionReveal>

          {/* Card 4: Behind the Scenes (Skills Carousel) */}
          <SectionReveal className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-md transition-all hover:shadow-lg hover:border-zinc-700 md:col-span-8 flex flex-col justify-between">
            <div className="h-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono uppercase mb-2">
                  <BookOpen className="w-3 h-3" />
                  Methodology
                </div>
                <h3 className="font-bold text-zinc-150 text-lg">Currently crafting high-performance full-stack SaaS.</h3>
              </div>
              
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {SKILL_ITEMS.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="h-36 bg-zinc-950/60 border border-white/5 rounded-xl p-4 w-40 flex-shrink-0 flex flex-col justify-between transition-colors hover:border-brand-primary/20"
                  >
                    <h4 className="text-xs font-bold text-zinc-100">{item.title}</h4>
                    <p className="text-[10px] text-zinc-400 leading-normal mb-1">{item.desc}</p>
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
