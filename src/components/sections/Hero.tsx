"use client";

import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// FIX 1: EMAIL constant — was hardcoded in two places in the JSX
const EMAIL = "hello.atuljamdar@gmail.com";

// FIX 2: Memoized — StarsBackground is a canvas animation that re-renders
// expensively. Wrapping in memo means it only re-renders if its props change,
// not on every parent state/theme change.
const StarsBackgroundDemo = memo(function StarsBackgroundDemo() {
  const { resolvedTheme } = useTheme();

  return (
    <StarsBackground
      starColor={resolvedTheme === "dark" ? "#FFF" : "#000"}
      starDensity={0.002}
      speed={3.0}
      className={cn(
        "absolute inset-0 flex items-center justify-center rounded-xl"
      )}
    />
  );
});

export default function Hero() {
  // FIX 3: Respect OS reduced-motion preference
  const shouldReduceMotion = useReducedMotion();

  // FIX 4: Shared motion props — avoids repeating the same object 3 times
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-40 overflow-hidden">

      {/* FIX 5: will-change on the fixed bg layer — tells GPU to composite this
          separately, preventing star canvas repaints from triggering full-page reflows */}
      <div
        className="fixed inset-0 z-0 bg-gradient-to-b from-purple-950 to-indigo-500 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 opacity-85 z-10">
          <StarsBackgroundDemo />
        </div>
      </div>

      {/* Curved Section Separators */}
      <div className="absolute mb-1 sm:mb-2 bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-purple-900/40 rounded-t-[100%] blur-md z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-52 lg:h-40 xl:h-32 bg-black rounded-t-[100%] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center pb-12">

        {/* Headline */}
        <motion.h1
          {...fadeUp(0)}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-12 pt-16"
        >
          Where creativity meets code{" "}
          <span className="text-gradient">to tell your story</span>
        </motion.h1>

        {/* Centered Personal Signature Row */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
        >
          <span className="text-lg font-semibold text-zinc-300 font-mono tracking-tight">
            Hello I&apos;am{" "}
            <span className="text-white font-sans font-extrabold text-gradient-purple">
              Atul Jamdar
            </span>
          </span>

          <span className="hidden sm:inline text-zinc-800">|</span>

          {/* Interactive Profile Photo */}
          <div className="relative group/avatar cursor-pointer my-2 sm:my-0">

            {/* FIX 6: animate-pulse on glow disabled for reduced-motion users */}
            <div
              className={cn(
                "absolute -inset-2 bg-gradient-to-r from-brand-primary to-indigo-500 rounded-full blur-md opacity-40 group-hover/avatar:opacity-80 transition-all duration-300 scale-100 group-hover/avatar:scale-[3.0]",
                !shouldReduceMotion && "animate-pulse"
              )}
            />

            {/* FIX 7: next/image instead of <img> — LCP element, so priority=true */}
            <div className="relative w-12 h-12 z-10 transition-all duration-300 ease-out group-hover/avatar:scale-[4.4] group-hover/avatar:-translate-y-2 group-hover/avatar:shadow-2xl">
              <Image
                src="/atul-jamdar.jpeg"
                alt="Atul Jamdar"
                fill
                priority
                sizes="256px"
                className="rounded-full border border-zinc-800 object-cover"
              />
            </div>
          </div>

          <span className="hidden sm:inline text-zinc-800">|</span>

          <span className="text-lg font-semibold text-zinc-300 font-mono tracking-tight">
            Full stack <span className="text-gradient">developer</span>
          </span>
        </motion.div>
      </div>

      {/* CTA Row */}
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-0 right-0 z-20 pb-1 sm:pb-2 flex justify-center pointer-events-auto">
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full px-4"
        >
          <a
            className="group flex items-center justify-center gap-4 px-11 py-5 sm:px-14 sm:py-6 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-zinc-300 hover:text-white hover:bg-black/60 transition-colors w-full sm:w-auto max-w-xs cursor-pointer text-lg sm:text-xl font-bold"
            href="#contact"
          >
            <span>Let&apos;s Connect</span>
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-zinc-700 flex items-center justify-center group-hover:bg-brand-secondary group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center z-10 justify-center gap-4 text-center w-full sm:w-auto cursor-pointer"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-zinc-500">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
              <path d="M2 7L9.95263 12.4526C10.5936 12.8747 11.3796 13.0964 12.1748 13.0964C12.97 13.0964 13.756 12.8747 14.397 12.4526L22 7" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <span className="text-zinc-450 hover:text-brand-secondary transition-all duration-300 text-lg sm:text-xl truncate">
              {EMAIL}
            </span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}