"use client";

import React from "react";
import { Calendar, MapPin, Code, Database, Users, Zap, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-black w-full text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions that transform industries
          </p>
        </div>

        {/* Experience Timeline Card stack */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* Card 1: Cravita Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-800 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            
            {/* Main Card */}
            <div className="relative bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
              
              {/* Logo / Title Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-purple-950/40 border border-purple-800/30 flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                    <span className="text-purple-400 font-extrabold text-xl font-mono">CT</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">Cravita Technologies</h3>
                    <p className="text-sm sm:text-xl text-purple-400 font-semibold">Software Developer Intern</p>
                  </div>
                </div>
                
                {/* Date / Location Info */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>June 2024 — December 2024</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Pune, India (Hybrid)</span>
                  </div>
                </div>
              </div>

              {/* Main Summary Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                  During my software developer residency, I was integrated into the core engineering team, responsible for optimizing database schemas, building secure API layers, and automating build testing.
                </p>
              </div>

              {/* 4-Column Bento Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                
                {/* Highlight 1: APIs */}
                <div className="bg-zinc-900/40 rounded-lg p-3 sm:p-4 text-center border border-purple-950 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="text-purple-400 font-bold text-base mb-1 flex justify-center">
                    <Zap className="w-5 h-5 mb-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                    API Response Caching Latency Reduced by 70%
                  </p>
                </div>

                {/* Highlight 2: Security */}
                <div className="bg-zinc-900/40 rounded-lg p-3 sm:p-4 text-center border border-purple-950 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="text-purple-400 font-bold text-base mb-1 flex justify-center">
                    <ShieldCheck className="w-5 h-5 mb-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                    Stateless JWT &amp; Secure RBAC Decorators
                  </p>
                </div>

                {/* Highlight 3: Sprint */}
                <div className="bg-zinc-900/40 rounded-lg p-3 sm:p-4 text-center border border-purple-950 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="text-purple-400 font-bold text-base mb-1 flex justify-center">
                    <Users className="w-5 h-5 mb-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                    96.4% Sprint completion rate over residency
                  </p>
                </div>

                {/* Highlight 4: CI/CD */}
                <div className="bg-zinc-900/40 rounded-lg p-3 sm:p-4 text-center border border-purple-950 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="text-purple-400 font-bold text-base mb-1 flex justify-center">
                    <Activity className="w-5 h-5 mb-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                    100% stable CI/CD Actions build success rate
                  </p>
                </div>

              </div>

              {/* Key Contributions & Responsibilities */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {[
                    "Refactored legacy backend endpoints using asynchronous Node.js controllers. Configured Redis cache structures at the API boundary, reducing response latencies by 70%.",
                    "Replaced session-based authentication schemes with stateless JSON Web Tokens (JWT) inside secure, HTTP-only cookies. Implemented RBAC validation decorators for API router entry points.",
                    "Tuned slow query profiles by inspecting execution logs (EXPLAIN ANALYZE). Built covering database indices on combined customer tracking variables, resolving OOM query locking bottlenecks.",
                    "Collaborated with team leads inside weekly sprints. Configured GitHub Actions to automate lint audits, test checks, and staging edge deployment triggers."
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-purple-300 transition-colors" />
                      <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Tag Row */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-indigo-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Node.js", "Express.js", "FastAPI", "PostgreSQL", "JWT", "RBAC", "Redis", "Docker", "GitHub Actions"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
