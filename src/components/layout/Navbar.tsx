"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Home, FolderGit2, User, Briefcase, MessageSquare } from "lucide-react";

const MotionLink = motion(Link);

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
  },
  {
    icon: <FolderGit2 className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(107,33,168,0) 100%)",
    iconColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
    iconColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Experience",
    href: "/experience",
    gradient: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.06) 50%, rgba(180,83,9,0) 100%)",
    iconColor: "group-hover:text-amber-500 dark:group-hover:text-amber-400",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, rgba(225,29,72,0.06) 50%, rgba(190,24,74,0) 100%)",
    iconColor: "group-hover:text-rose-500 dark:group-hover:text-rose-400",
  },
];

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        className="p-1.5 rounded-2xl bg-zinc-950/20 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-visible max-w-max flex items-center pl-4 pr-1.5 gap-5"
        initial="initial"
        whileHover="hover"
      >
        {/* Logo / Brand */}
        <Link href="/" className="text-base font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-bold font-mono text-zinc-100 group-hover:text-white transition-all duration-300">
            JA
          </span>
        </Link>

        <ul className="flex items-center gap-1.5 relative z-10">
          {menuItems.map((item: MenuItem) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                
                {/* Front-facing menu item */}
                <MotionLink
                  href={item.href}
                  className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 relative z-10 bg-transparent text-zinc-400 group-hover:text-white transition-colors rounded-xl text-[15px] sm:text-base cursor-pointer"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom"
                  }}
                >
                  <span className={`transition-colors duration-300 ${item.iconColor}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium hidden sm:inline">{item.label}</span>
                </MotionLink>

                {/* Back-facing menu item for the 3D flip effect */}
                <MotionLink
                  href={item.href}
                  className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 absolute inset-0 z-10 bg-transparent text-zinc-400 group-hover:text-white transition-colors rounded-xl text-[15px] sm:text-base cursor-pointer"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)"
                  }}
                >
                  <span className={`transition-colors duration-300 ${item.iconColor}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium hidden sm:inline">{item.label}</span>
                </MotionLink>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
}
