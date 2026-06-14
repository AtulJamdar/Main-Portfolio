"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="w-[80px] h-[50px] relative select-none pointer-events-none">
      <span className="absolute top-0 p-0 m-0 text-[#C8B6FF] text-[0.8rem] tracking-[1px] animate-text-load font-mono uppercase">
        loading
      </span>
      <span className="bg-[#9A79FF] rounded-[50px] block h-4 w-4 absolute bottom-0 translate-x-[64px] animate-loading-dot before:absolute before:content-[''] before:w-full before:h-full before:bg-[#D1C2FF] before:rounded-[50px] before:animate-loading-dot-before" />
    </div>
  );
}
