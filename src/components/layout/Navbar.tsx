"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-zinc-950/85 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-bold font-mono text-zinc-100 group-hover:text-white transition-all duration-300">
              JA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="/contact">
              <MagneticButton className="px-5 py-2 text-xs font-semibold tracking-wider text-white border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 flex items-center gap-1.5 overflow-hidden">
                LET'S TALK
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-zinc-950/95 backdrop-blur-lg border-t border-white/5 px-8 py-12 md:hidden flex flex-col justify-between h-[calc(100vh-72px)]"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-brand-primary hover:bg-indigo-600 transition-colors text-white font-medium rounded-xl flex items-center justify-center gap-2"
              >
                LET'S TALK
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-zinc-500 font-mono">
                © {new Date().getFullYear()} ATUL JAMDAR. ALL RIGHTS RESERVED.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
