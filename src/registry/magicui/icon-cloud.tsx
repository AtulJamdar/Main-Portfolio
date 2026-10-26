"use client";

import React, { useRef, useState, useEffect } from "react";
import { Cloud } from "react-icon-cloud";

export interface DynamicCloudProps {
  images?: string[];
  options?: any;
}

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export function IconCloud({ images, options }: DynamicCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mergedOptions = { ...cloudProps.options, ...options };

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      {isVisible ? (
        <Cloud {...cloudProps} options={mergedOptions}>
          {images?.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <img src={image} alt="icon" width={42} height={42} />
            </a>
          ))}
        </Cloud>
      ) : (
        <div className="w-48 h-48 rounded-full bg-zinc-800/40" />
      )}
    </div>
  );
}
