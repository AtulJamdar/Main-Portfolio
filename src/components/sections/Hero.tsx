"use client";

import React from "react";
import { motion } from "framer-motion";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

export const GravityStarsBackgroundDemo = () => {
  return (
    <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-40 overflow-hidden">
      {/* Deep purple-indigo space gradient and stars canvas (matched exactly to talaganarajesh.in) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-950 to-indigo-500 pointer-events-none">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 opacity-85 z-10">
          <GravityStarsBackgroundDemo />
        </div>
      </div>

      {/* Curved Section Separators with Glowing/Lightning border */}
      <div className="absolute border-b-4 sm:border-b-6 md:border-b-8 mb-1 sm:mb-2 border-black bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-purple-900/40 rounded-t-[100%] blur-md z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-zinc-950 rounded-t-[100%] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center pb-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-12 pt-16"
        >
          Where creativity meets code <span className="text-gradient">to tell your story</span>
        </motion.h1>

        {/* Centered Personal Signature Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
        >
          {/* "Hello I'am Atul Jamdar" */}
          <span className="text-lg font-semibold text-zinc-300 font-mono tracking-tight">
            Hello I'am <span className="text-white font-sans font-extrabold text-gradient-purple">Atul Jamdar</span>
          </span>

          {/* Vertical Divider / Dash on Desktop */}
          <span className="hidden sm:inline text-zinc-800">|</span>

          {/* Interactive Profile Photo (gets bigger on hover) */}
          <div className="relative group/avatar cursor-pointer my-2 sm:my-0">
  {/* Glow background */}
  <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary to-indigo-500 rounded-full blur-md opacity-40 group-hover/avatar:opacity-80 transition-all duration-300 animate-pulse scale-100 group-hover/avatar:scale-150" />

  {/* Avatar image */}
  <img
    src="/atul-jamdar.jpeg"
    alt="Atul Jamdar"
    className="
      relative
      w-12 h-12
      rounded-full
      border border-zinc-800
      object-cover
      z-10
      transition-all
      duration-300
      ease-out
      group-hover/avatar:scale-[2.2]
      group-hover/avatar:-translate-y-1
      group-hover/avatar:shadow-2xl
    "
    onError={(e) => {
      e.currentTarget.style.display = "none";
      const fallback =
        e.currentTarget.parentElement?.querySelector(".avatar-fallback");
      if (fallback) fallback.classList.remove("hidden");
    }}
  />

  {/* Fallback initials avatar */}
  <div
    className="
      avatar-fallback
      hidden
      items-center
      justify-center
      w-12 h-12
      rounded-full
      bg-zinc-900
      border border-zinc-800
      text-xs
      font-bold
      text-white
      font-mono
      z-10
      transition-all
      duration-300
      ease-out
      group-hover/avatar:scale-[2.2]
      group-hover/avatar:-translate-y-1
      group-hover/avatar:shadow-2xl
    "
  >
    AJ
  </div>
</div>

          {/* Vertical Divider / Dash on Desktop */}
          <span className="hidden sm:inline text-zinc-800">|</span>

          {/* "Full stack developer" */}
          <span className="text-lg font-semibold text-zinc-300 font-mono tracking-tight">
            Full stack <span className="text-gradient">developer</span>
          </span>
        </motion.div>
      </div>

      {/* Starting action buttons same as talaganarajesh.in */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 z-20 pb-4 flex justify-center pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full px-4"
        >
          <a 
            className="group flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-zinc-300 hover:text-white hover:bg-black/60 transition-colors w-full sm:w-auto max-w-xs cursor-pointer" 
            href="#contact"
          >
            <span className="text-xs sm:text-sm font-medium">Let's Connect</span>
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-zinc-700 flex items-center justify-center group-hover:bg-brand-secondary group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-black">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </a>
          
          <a 
            href="mailto:hello.atuljamdar@gmail.com" 
            className="flex items-center z-10 justify-center gap-2 text-center w-full sm:w-auto cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-zinc-500">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"></rect>
              <path d="M2 7L9.95263 12.4526C10.5936 12.8747 11.3796 13.0964 12.1748 13.0964C12.97 13.0964 13.756 12.8747 14.397 12.4526L22 7" stroke="currentColor" strokeWidth="2.5"></path>
            </svg>
            <span className="text-zinc-400 hover:text-brand-secondary transition-all duration-300 text-xs sm:text-sm truncate">
              hello.atuljamdar@gmail.com
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
