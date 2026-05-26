"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("loading");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are not configured. Please define NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env file.");
      }

      const emailData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Atul Jamdar"
        }
      };

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailData)
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error("EmailJS transmit error: " + errText);
      }

      setStatus("success");
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#8b5cf6", "#10b981", "#ffffff"]
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send your message. Please try again or email directly.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col antialiased">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 pt-28 pb-20 min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center gap-2 mb-8 max-w-5xl mx-auto w-full px-2">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              &gt; Back to Core System
            </a>
          </div>

          {/* Title Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-5xl mx-auto w-full"
          >
            <h2 className="text-3xl font-extrabold sm:text-5xl mb-4 text-white tracking-tight">Get in Touch</h2>
            <p className="text-sm text-zinc-450">Feel free to reach out, I'll get back to you soon.</p>
          </motion.div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full px-2 items-stretch">
              
              {/* Left Column: Let's Connect */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full md:w-1/3"
              >
                <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 sm:p-7 hover:border-zinc-800 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Let's Connect
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed text-xs">
                      Ready to start your project? Reach out through any of these channels.
                    </p>

                    <div className="space-y-3">
                      
                      {/* Email pill */}
                      <a 
                        href="mailto:hello.atuljamdar@gmail.com"
                        className="flex items-center space-x-3 p-3.5 bg-zinc-900/40 border border-white/5 rounded-xl hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300 group"
                      >
                        <div className="bg-purple-500/10 p-2.5 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                          <Mail className="text-purple-400 text-lg w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="font-semibold text-white text-xs">Direct Email</p>
                          <p className="text-zinc-500 text-[10px] truncate">hello.atuljamdar@gmail.com</p>
                        </div>
                      </a>

                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-900">
                    <h4 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase mb-4">Follow Me</h4>
                    <div className="space-y-3">
                      {[
                        {
                          name: "LinkedIn",
                          desc: "Professional network",
                          href: "https://www.linkedin.com/in/connectatuljamdar",
                          icon: (
                            <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          )
                        },
                        {
                          name: "GitHub",
                          desc: "Developer profile",
                          href: "https://github.com/AtulJamdar",
                          icon: (
                            <svg className="w-4 h-4 text-zinc-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          )
                        }
                      ].map((social) => (
                        <a 
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-3 p-3.5 bg-zinc-900/40 border border-white/5 rounded-xl hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300 group"
                        >
                          <div className="bg-zinc-900 p-2.5 rounded-lg group-hover:bg-zinc-800 transition-colors duration-300">
                            {social.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 text-xs">{social.name}</p>
                            <p className="text-zinc-550 text-[10px]">{social.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Send a Message Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full md:w-2/3 flex items-stretch"
              >
                <div className="w-full">
                  <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 sm:p-7 hover:border-zinc-800 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-purple-400">Send a Message</h3>
                      
                      {status === "success" ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-12 text-center space-y-4"
                        >
                          <div className="mx-auto p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full w-fit">
                            <CheckCircle2 className="w-10 h-10 animate-bounce" />
                          </div>
                          <h4 className="text-lg font-bold text-white">MESSAGE TRANSMITTED</h4>
                          <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                            Thank you. Your message has been successfully sent. I will review your inquiry and get back to you shortly.
                          </p>
                          <button
                            onClick={() => setStatus("idle")}
                            className="text-xs font-bold text-purple-400 hover:text-purple-300 font-mono cursor-pointer uppercase pt-4 block mx-auto"
                          >
                            &gt; Send another message
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                          {status === "error" && (
                            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 font-medium">
                              <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              <span>{errorMessage}</span>
                            </div>
                          )}

                          <div>
                            <label htmlFor="name" className="block text-xs font-medium text-zinc-300">Name</label>
                            <input 
                              type="text" 
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe" 
                              className="mt-1.5 block w-full py-3 px-4 bg-zinc-950/60 text-white font-medium border border-zinc-900 rounded-xl shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 placeholder-zinc-700 font-mono text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-medium text-zinc-300">Email</label>
                            <input 
                              type="email" 
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com" 
                              className="mt-1.5 block w-full py-3 px-4 bg-zinc-950/60 text-white font-medium border border-zinc-900 rounded-xl shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 placeholder-zinc-700 font-mono text-sm"
                            />
                          </div>

                          <div className="flex-1">
                            <label htmlFor="message" className="block text-xs font-medium text-zinc-300">Message</label>
                            <textarea 
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell me about your project..." 
                              className="mt-1.5 block w-full py-3 px-4 h-full min-h-[140px] bg-zinc-950/60 text-white font-medium border border-zinc-900 rounded-xl shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 placeholder-zinc-700 resize-none font-mono text-sm"
                            ></textarea>
                          </div>

                          <div className="flex justify-center pt-2">
                            <button 
                              type="submit" 
                              disabled={status === "loading"}
                              className="w-full text-black cursor-pointer font-bold bg-white hover:bg-zinc-200 transition-all duration-300 py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {status === "loading" ? "Transmitting..." : "Send Message"}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
