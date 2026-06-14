import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased justify-between">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Main TV 404 Wrapper */}
        <div className="main_wrapper_404 select-none pointer-events-none scale-75 sm:scale-90 md:scale-100 transition-transform duration-300">
          <div className="main_404">
            <div className="antenna_404">
              <div className="antenna_shadow_404"></div>
              <div className="a1_404"></div>
              <div className="a1d_404"></div>
              <div className="a2_404"></div>
              <div className="a2d_404"></div>
              <div className="a_base_404"></div>
            </div>
            
            <div className="tv_404">
              <div className="cruve_404">
                <svg
                  className="curve_svg_404"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 189.929 189.929"
                >
                  <path
                    fill="#1d0e01"
                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                  ></path>
                </svg>
              </div>
              
              <div className="display_div_404">
                <div className="screen_out_404">
                  <div className="screen_out1_404">
                    <div className="screen_404">
                      <span className="notfound_text_404">NOT FOUND</span>
                    </div>
                    <div className="screenM_404">
                      <span className="notfound_text_404">NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lines_404">
                <div className="line1_404"></div>
                <div className="line2_404"></div>
                <div className="line3_404"></div>
              </div>
              
              <div className="buttons_div_404">
                <div className="b1_404"><div></div></div>
                <div className="b2_404"></div>
                <div className="speakers_404">
                  <div className="g1">
                    <div className="g11"></div>
                    <div className="g12"></div>
                    <div className="g13"></div>
                  </div>
                  <div className="g"></div>
                  <div className="g"></div>
                </div>
              </div>
            </div>
            
            <div className="bottom_404">
              <div className="base1_404"></div>
              <div className="base2_404"></div>
              <div className="base3_404"></div>
            </div>
          </div>
          
          <div className="text_404">
            <div className="text_4041">4</div>
            <div className="text_4042">0</div>
            <div className="text_4043">4</div>
          </div>
        </div>

        {/* Action Button & Text */}
        <div className="text-center mt-12 space-y-6 max-w-md relative z-20">
          <h2 className="text-2xl font-bold text-white tracking-tight">Signal Interrupted</h2>
          <p className="text-sm text-zinc-400">
            The page you are trying to access has drifted out of reach or doesn't exist in our systems.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-purple-500/30 transition-all duration-300 pointer-events-auto"
          >
            &gt; Back to Base Station
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
