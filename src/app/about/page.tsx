"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

const TABS = [
  {
    title: "Full-Stack Developer",
    date: "June 2024 - Present",
    subtitle: "MERN, TypeScript, Next.js",
    color: "blue",
    barTop: "40px",
    barHeight: "190px"
  },
  {
    title: "Freelance Consultant",
    date: "2024 - Present",
    subtitle: "SaaS Scaling & Audits",
    color: "pink",
    barTop: "230px",
    barHeight: "190px"
  },
  {
    title: "Achievements",
    date: "Suryabharat 2026",
    subtitle: "TechFest 🏆 Secured 2nd Place",
    color: "amber",
    barTop: "420px",
    barHeight: "190px"
  },
  {
    title: "Certifications",
    date: "Completed",
    subtitle: "freeCodeCamp Certifications",
    color: "emerald",
    barTop: "610px",
    barHeight: "40px"
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  // Track scroll position to update the active tab in the timeline on desktop
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-tab-index"));
          setActiveTab(index);
        }
      });
    }, observerOptions);

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    sectionRefs[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col antialiased">
      {/* Ambient background glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-28 pb-16 w-full">
        
        {/* Core Profile Header Section */}
        <section className="max-w-[94rem] mx-auto px-6 md:px-16 py-20 lg:py-24 flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
          
          {/* Left Column: Avatar & Socials */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative mb-8">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur-xl opacity-40 animate-pulse" />
              
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <img
                  src="/atul-jamdar.jpeg"
                  alt="Atul Jamdar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.parentElement?.querySelector(".fallback-avatar");
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                />
                {/* Fallback avatar block */}
                <div className="fallback-avatar hidden absolute inset-0 flex items-center justify-center bg-zinc-900 text-white font-mono font-bold text-5xl">
                  JA
                </div>
              </div>
            </div>

            {/* Quick Statuses Grid */}
            <div className="w-full max-w-md grid grid-cols-3 gap-3">
              <div className="px-4 py-3 rounded-2xl border border-zinc-850 bg-zinc-955/35 backdrop-blur-sm text-center font-mono text-xs sm:text-sm text-emerald-400 font-bold tracking-tight hover:border-emerald-500/20 hover:bg-zinc-900/40 transition-all duration-300">
                💪 I Gym
              </div>
              <div className="px-4 py-3 rounded-2xl border border-zinc-850 bg-zinc-955/35 backdrop-blur-sm text-center font-mono text-xs sm:text-sm text-purple-400 font-bold tracking-tight hover:border-purple-500/20 hover:bg-zinc-900/40 transition-all duration-300">
                💻 I Code
              </div>
              <div className="px-4 py-3 rounded-2xl border border-zinc-850 bg-zinc-955/35 backdrop-blur-sm text-center font-mono text-xs sm:text-sm text-blue-400 font-bold tracking-tight hover:border-blue-500/20 hover:bg-zinc-900/40 transition-all duration-300">
                🎧 I Vibe
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="w-full lg:w-2/3 space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Hi there! I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Atul</span>
            </h1>

            <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm Atul Jamdar, a passionate full-stack web developer dedicated to building impactful, user-friendly, and latency-optimized digital products. I specialize in the MERN stack, TypeScript, Next.js, and modern CSS architecture, constantly exploring secure database setups and performance optimizations to drive company metrics.
              </p>
              <p>
                When I'm not coding, I'm brainstorming technical roadmaps, learning emerging backend designs, or auditing web speeds. I believe in writing self-documenting code, strictly typed API Generic schemas, and leveling up my systems every single day.
              </p>
              <p>
                I wake up each day excited to build something highly performant and work towards delivering robust software architectures for companies and startups!
              </p>

              {/* Direct Channels */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-900">
                <a
                  href="https://www.linkedin.com/in/connectatuljamdar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-400 hover:text-white flex items-center gap-2.5 transition-colors group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </span>
                  LinkedIn
                </a>
                
                <a
                  href="https://github.com/AtulJamdar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-400 hover:text-white flex items-center gap-2.5 transition-colors group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </span>
                  GitHub
                </a>

                <a
                  href="mailto:hello.atuljamdar@gmail.com"
                  className="text-sm font-bold text-zinc-400 hover:text-white flex items-center gap-2.5 transition-colors group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  </span>
                  hello.atuljamdar@gmail.com
                </a>
              </div>

            </div>

          </div>

        </section>

        {/* Scroll-Linked Interactive Timeline (The Experience) */}
        <section className="py-24 sm:py-32 bg-black border-t border-zinc-900">
          <div className="max-w-[94rem] mx-auto px-6 md:px-16">
            
            {/* Header Block */}
            <div className="text-center mb-20 sm:mb-28">
              <span className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                THE EXPERIENCE
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
              </h2>
            </div>

            {/* Mobile Tabs Navigation (scroller) */}
            <div className="lg:hidden mb-10 overflow-x-auto pb-2 flex gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TABS.map((tab, idx) => {
                let activeBg = "bg-blue-600 border-blue-500";
                if (tab.color === "pink") activeBg = "bg-pink-600 border-pink-500";
                if (tab.color === "amber") activeBg = "bg-amber-600 border-amber-500";
                if (tab.color === "emerald") activeBg = "bg-emerald-600 border-emerald-500";
                
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(idx)}
                    className={`px-5 py-3 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? `${activeBg} text-white shadow-md`
                        : "bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-800"
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            <div className="relative flex flex-col lg:flex-row items-start gap-12">
              
              {/* Sticky Timeline Sidebar (Desktop only) */}
              <div className="hidden lg:block lg:w-[32%] sticky top-36 h-[650px] z-20">
                <div className="h-full flex flex-col justify-between py-10 relative pl-1">
                  
                  {/* Glowing Vertical Timeline Bar */}
                  <div className="absolute left-[15px] top-[40px] bottom-[40px] w-0.5 bg-zinc-900" />
                  <div 
                    className="absolute left-[15px] w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
                    style={{ 
                      top: TABS[activeTab]?.barTop || "40px",
                      height: TABS[activeTab]?.barHeight || "190px"
                    }}
                  />

                  {TABS.map((tab, idx) => {
                    const isActive = activeTab === idx;
                    let colorClass = "text-blue-400";
                    let bgClass = "bg-blue-600 border-blue-500 shadow-blue-500/20";
                    if (tab.color === "pink") {
                      colorClass = "text-pink-400";
                      bgClass = "bg-pink-600 border-pink-500 shadow-pink-500/20";
                    } else if (tab.color === "amber") {
                      colorClass = "text-amber-400";
                      bgClass = "bg-amber-600 border-amber-500 shadow-amber-500/20";
                    } else if (tab.color === "emerald") {
                      colorClass = "text-emerald-400";
                      bgClass = "bg-emerald-600 border-emerald-500 shadow-emerald-500/20";
                    }

                    return (
                      <button 
                        key={idx}
                        onClick={() => scrollToSection(idx)}
                        className="relative pl-10 text-left group transition-all duration-300 cursor-pointer"
                      >
                        <div 
                          className={`absolute left-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                            isActive 
                              ? `${bgClass} scale-110 shadow-lg` 
                              : "bg-zinc-950 border-zinc-800 group-hover:border-zinc-700"
                          }`}
                        >
                          <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${isActive ? "bg-white" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
                        </div>
                        <div className="space-y-0.5">
                          <p className={`text-[10px] font-mono font-bold uppercase transition-colors duration-300 ${isActive ? colorClass : "text-zinc-500"}`}>
                            {tab.date}
                          </p>
                          <h3 className={`text-xl font-black transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-550"}`}>
                            {tab.title}
                          </h3>
                          <p className={`text-xs font-mono transition-colors duration-300 ${isActive ? "text-zinc-400" : "text-zinc-600"}`}>
                            {tab.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Scrolling Content Panel */}
              <div className="w-full lg:w-[68%] lg:pl-16 space-y-28 pb-48">
                
                {/* Section 1: Full-Stack Developer */}
                <div 
                  ref={sectionRefs[0]}
                  data-tab-index={0}
                  className="py-12 border-b border-zinc-900 min-h-[60vh] flex flex-col justify-center"
                >
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-blue-500">
                    <div className="absolute left-0 top-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full -translate-x-1/2" />
                    <p className="text-zinc-500 font-mono text-[9px] font-bold uppercase">June 2024 - Present</p>
                    <h3 className="text-xl font-extrabold text-white">Full-Stack Developer</h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                      As a professional full-stack developer, I specialize in designing responsive, accessible, and performance-optimized web systems. My experience ranges from crafting dynamic interfaces to structuring solid, latency-optimized database systems. My focus is always on writing clean TypeScript structures and implementing secure authorization schemas to drive company metrics.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Tasveer Photography: Engineered a luxury wedding photography cinema web showcase using Next.js, React, TypeScript, and Framer Motion, deploying high-conversion WhatsApp inquiry hooks.",
                        "SyncFlow Boards: Constructed a collaborative workspace using Socket.io to distribute board updates under 100ms and optimized database connections pools querying logs under 45ms.",
                        "BuildWise Auditor: Created an event-driven compliance scanner that processes git pull request codes via Redis queue structures and openai semantic embeddings under 1.5s.",
                        "Web Customizer Sandbox: Developed a Manifest v3 style injector extension that safely intercepts Content Security Policies (CSP) to inject custom styles under 5ms.",
                        "Cravita software engineering residency: Collaborated within active sprint layouts refactoring REST API scopes, allocating serverless caches, and securing state-free JWT authorization Layers."
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1 font-bold font-mono text-sm leading-none flex-shrink-0">•</span>
                          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2.5">
                      {["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "Redis", "JWT"].map((tech) => (
                        <span key={tech} className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs sm:text-sm text-zinc-300 font-semibold font-mono hover:text-white transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Freelance Consultant */}
                <div 
                  ref={sectionRefs[1]}
                  data-tab-index={1}
                  className="py-12 border-b border-zinc-900 min-h-[60vh] flex flex-col justify-center"
                >
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-pink-500">
                    <div className="absolute left-0 top-0.5 w-3.5 h-3.5 bg-pink-500 rounded-full -translate-x-1/2" />
                    <p className="text-zinc-500 font-mono text-[9px] font-bold uppercase">2024 - Present</p>
                    <h3 className="text-xl font-extrabold text-white">Freelance Consultant</h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                      I partner with startups and small companies to turn product visions into fully functional technical systems. I design robust databases, write highly scalable code, and manage scoping roadmaps from discover to deployment.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Translate business goals directly into generic Generic typescript architectures, database schemas, and structured REST API roadmaps.",
                        "Shipped client portfolios and SaaS engines with customized brand storytelling, responsive layouts, and secure payment setups.",
                        "Audit slow legacy endpoints to establish performance budgets, sub-second renders, and 100% stable Vercel CDN staging setups."
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-pink-500 mt-1 font-bold font-mono text-sm leading-none flex-shrink-0">•</span>
                          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2.5">
                      {["Product Strategy", "Database Schema Design", "CI/CD Automations", "GitHub Actions", "SaaS Architectures", "Secure Payment Integrations"].map((item) => (
                        <span key={item} className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs sm:text-sm text-zinc-300 font-semibold font-mono hover:text-white transition-colors duration-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Achievements */}
                <div 
                  ref={sectionRefs[2]}
                  data-tab-index={2}
                  className="py-12 border-b border-zinc-900 min-h-[60vh] flex flex-col justify-center"
                >
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-amber-500">
                    <div className="absolute left-0 top-0.5 w-3.5 h-3.5 bg-amber-500 rounded-full -translate-x-1/2" />
                    <p className="text-zinc-500 font-mono text-[9px] font-bold uppercase">Suryabharat TechFest 2026</p>
                    <h3 className="text-xl font-extrabold text-white">Achievements</h3>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-10 items-start">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 block uppercase tracking-wider">
                          Suryabharat TechFest 2026 — 2nd Place
                        </span>
                        <h4 className="text-2xl sm:text-3.5xl font-black text-white leading-tight">
                          Built. Presented. Recognized. 🏆
                        </h4>
                      </div>

                      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                        I recently participated in the MindSweeper event at Suryadatta Group of Institutes (Est. 1999) during Suryabharat TechFest 2026, where I secured 2nd place.
                      </p>
                      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                        I presented my project <strong>BuildWise</strong> — focused on solving real-world problems with a practical and scalable approach.
                      </p>

                      <div className="space-y-4">
                        <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                          Key Takeaways & Experience:
                        </p>
                        {[
                          "Presenting in a competitive environment",
                          "Explaining technical decisions under pressure",
                          "Getting feedback from experienced evaluators",
                          "This pushed me to think beyond just \"building features\" and focus more on clarity, problem-solving, and execution."
                        ].map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-amber-500 mt-1 font-bold font-mono text-sm leading-none flex-shrink-0">•</span>
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-zinc-300 text-base sm:text-lg font-medium italic">
                        Grateful for the experience and the learning that came with it. 🚀
                      </p>
                    </div>

                    {/* Achievement Image Frame */}
                    <div className="w-full xl:w-[380px] shrink-0">
                      <div className="group relative rounded-[24px] overflow-hidden bg-zinc-950 border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-60 pointer-events-none" />
                        <img 
                          src="/assets/Achivement_1.jpeg" 
                          alt="MindSweeper Award 2nd Place" 
                          className="w-full object-cover rounded-[24px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Certifications */}
                <div 
                  ref={sectionRefs[3]}
                  data-tab-index={3}
                  className="py-12 min-h-[60vh] flex flex-col justify-center"
                >
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-emerald-500">
                    <div className="absolute left-0 top-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full -translate-x-1/2" />
                    <p className="text-zinc-500 font-mono text-[9px] font-bold uppercase">freeCodeCamp</p>
                    <h3 className="text-xl font-extrabold text-white">Certifications</h3>
                  </div>

                  <div className="space-y-16">
                    
                    {/* Certificate 1: Responsive Web Design */}
                    <div className="flex flex-col xl:flex-row gap-10 items-start">
                      <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 block uppercase tracking-wider">
                            freeCodeCamp Certification
                          </span>
                          <h4 className="text-2xl sm:text-3.5xl font-black text-white leading-tight">
                            Responsive Web Design 🎉
                          </h4>
                        </div>

                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                          Just completed the Responsive Web Design Certification from freeCodeCamp. I already work with HTML and CSS, but I decided to go through the full course again to refresh my fundamentals and clear my concepts properly.
                        </p>

                        <div className="space-y-3">
                          <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                            Skills Revised & Strengthened:
                          </p>
                          {[
                            "Semantic HTML for structured documents",
                            "Accessibility basics (WCAG guidelines, ARIA attributes)",
                            "Flexbox and CSS Grid layout techniques",
                            "Media queries for responsive, fluid breakpoints",
                            "Writing clean, organized, and structured style components"
                          ].map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 mt-1 font-bold text-sm">✔</span>
                              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{bullet}</p>
                            </div>
                          ))}
                        </div>

                        <p className="text-zinc-300 text-base sm:text-lg font-medium italic">
                          It was a great revision and a good reminder that strong basics are very important in development. Always learning. Always improving. 🚀
                        </p>
                      </div>

                      {/* Certificate Image Frame */}
                      <div className="w-full xl:w-[380px] shrink-0">
                        <div className="group relative rounded-[24px] overflow-hidden bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                          <img 
                            src="/assets/Certificate_1.png" 
                            alt="Responsive Web Design Certification" 
                            className="w-full object-cover rounded-[24px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Certificate 2: Relational Database V8 */}
                    <div className="flex flex-col xl:flex-row gap-10 items-start border-t border-zinc-900 pt-16">
                      <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 block uppercase tracking-wider">
                            freeCodeCamp Certification
                          </span>
                          <h4 className="text-2xl sm:text-3.5xl font-black text-white leading-tight">
                            Relational Database V8 🛠️
                          </h4>
                        </div>

                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                          Revisited relational databases recently through the Relational Database Certification from freeCodeCamp — not just for the certificate, but to strengthen backend fundamentals through structured practice. While working on full-stack projects, I realized that solid database design directly impacts scalability, query performance, and application reliability.
                        </p>

                        <div className="space-y-3">
                          <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                            Concepts Solidified:
                          </p>
                          {[
                            "Writing optimized SQL queries instead of just \"working queries\"",
                            "Understanding normalization (1NF, 2NF, 3NF) and reducing redundant data",
                            "Designing proper relationships (one-to-one, one-to-many, many-to-many) between tables",
                            "Using constraints effectively for data integrity",
                            "Thinking about backend structure before writing APIs"
                          ].map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 mt-1 font-bold text-sm">✔</span>
                              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{bullet}</p>
                            </div>
                          ))}
                        </div>

                        <p className="text-zinc-300 text-base sm:text-lg font-medium italic">
                          One thing I’ve learned: Frameworks change fast, but strong fundamentals stay valuable. Continuing to improve step by step. 🚀
                        </p>
                      </div>

                      {/* Certificate Image Frame */}
                      <div className="w-full xl:w-[380px] shrink-0">
                        <div className="group relative rounded-[24px] overflow-hidden bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                          <img 
                            src="/assets/Certificate_2.png" 
                            alt="Relational Database Certification" 
                            className="w-full object-cover rounded-[24px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
