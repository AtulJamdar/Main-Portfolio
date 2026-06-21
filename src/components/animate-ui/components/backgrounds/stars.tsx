"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, useSpring } from "framer-motion";

export interface StarsBackgroundProps extends React.ComponentPropsWithoutRef<"div"> {
  starColor?: string;
  factor?: number;
  speed?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  starDensity?: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  phase: number;
}

export const StarsBackground = React.forwardRef<HTMLDivElement, StarsBackgroundProps>(
  (
    {
      starColor = "#FFF",
      factor = 0.05,
      speed = 1,
      allStarsTwinkle = true,
      twinkleProbability = 0.7,
      minTwinkleSpeed = 0.5,
      maxTwinkleSpeed = 1,
      starDensity = 0.00015,
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isReady, setIsReady] = useState(false);

    // Motion values for smooth cursor parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Smooth spring coordinates tracking
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const starsRef = useRef<Star[]>([]);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const canvasSizeRef = useRef({ width: 0, height: 0 });
    const [dpr, setDpr] = useState(1);

    // Initialize stars array based on current size
    const initStars = (w: number, h: number) => {
      const area = w * h;
      const count = Math.floor(area * starDensity);
      
      starsRef.current = Array.from({ length: count }).map(() => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          twinkleSpeed: shouldTwinkle
            ? (minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)) * 0.02 * speed
            : 0,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    // Handle canvas resizing based on container size
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current || (ref && "current" in ref ? ref.current : null);
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      setDpr(nextDpr);

      canvas.width = Math.floor(rect.width * nextDpr);
      canvas.height = Math.floor(rect.height * nextDpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const prevWidth = canvasSizeRef.current.width;
      const prevHeight = canvasSizeRef.current.height;

      canvasSizeRef.current = { width: rect.width, height: rect.height };
      setCanvasSize({ width: rect.width, height: rect.height });

      if (starsRef.current.length === 0) {
        initStars(rect.width, rect.height);
      } else {
        // Instead of regenerating stars and causing a jump/reset,
        // we scale/wrap the existing stars to the new viewport size!
        starsRef.current.forEach((star) => {
          if (prevWidth > 0 && prevHeight > 0) {
            star.x = (star.x / prevWidth) * rect.width;
            star.y = (star.y / prevHeight) * rect.height;
          } else {
            star.x = Math.min(star.x, rect.width);
            star.y = Math.min(star.y, rect.height);
          }
        });
      }
      setIsReady(true);
    };

    useEffect(() => {
      resizeCanvas();
      
      const container = containerRef.current;
      const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resizeCanvas) : null;
      if (container && ro) ro.observe(container);

      const onResize = () => resizeCanvas();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        if (ro && container) ro.disconnect();
      };
    }, []);

    // Track mouse coordinates globally for parallax interaction
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        mouseX.set(x * 20);
        mouseY.set(y * 20);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Main animation loop
    useEffect(() => {
      let animId: number;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      let lastTime = 0;

      const animate = (timestamp: number) => {
        if (!canvas || !ctx || canvasSize.width === 0 || canvasSize.height === 0) {
          animId = requestAnimationFrame(animate);
          return;
        }

        if (!lastTime) {
          lastTime = timestamp;
        }
        const elapsed = timestamp - lastTime;
        lastTime = timestamp;

        // Normalize delta time relative to 16.666ms (60 FPS base frame)
        // Cap dt at 4 to prevent massive jumps when returning to backgrounded tabs
        const dt = Math.min(elapsed / 16.666, 4);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = starColor;

        const currentMouseX = smoothMouseX.get();
        const currentMouseY = smoothMouseY.get();

        starsRef.current.forEach((star) => {
          // Scroll stars infinitely from right to left using time-delta (dt)
          star.x -= speed * (star.size / 1.5) * 0.15 * dt;
          if (star.x < 0) {
            star.x += canvasSize.width;
          }

          const progress = star.x / canvasSize.width;
          const theta = progress * Math.PI;

          // Calculate twinkling opacity using sine wave
          if (star.twinkleSpeed > 0) {
            star.phase += star.twinkleSpeed * dt;
            star.opacity = 0.2 + (Math.sin(star.phase) + 1) * 0.4; // oscillates between 0.2 and 1.0
          }

          // Calculate 3D perspective scale curving "inside" (Z-depth)
          // Scale is 1.0 at the edges (progress = 0 or 1) and dips to 0.6 in the middle (progress = 0.5)
          const scale = 1.0 / (1.0 + Math.sin(theta) * 0.6);

          // Apply parallax shift based on star size (larger stars move more)
          const parallaxX = currentMouseX * star.size * factor;
          const parallaxY = currentMouseY * star.size * factor;

          // Combine 3D perspective with a gentle downward curve swoop (decreased from 60 to 20)
          const swoop = Math.sin(theta) * 20;

          let drawX = canvasSize.width / 2 + (progress - 0.5) * canvasSize.width * scale + parallaxX * scale;
          // Keep vertical distribution full across the screen by applying swoop directly without Y-contraction
          let drawY = star.y + swoop + parallaxY;

          // Optimize drawing: use fillRect instead of path-heavy arc/fill circles
          // This keeps the drawing loop extremely cheap and buttery smooth on scroll!
          ctx.globalAlpha = star.opacity * scale;
          const size = star.size * scale * dpr;
          ctx.fillRect(drawX * dpr - size / 2, drawY * dpr - size / 2, size, size);
        });

        animId = requestAnimationFrame(animate);
      };

      animId = requestAnimationFrame((timestamp) => {
        lastTime = timestamp;
        animate(timestamp);
      });
      return () => cancelAnimationFrame(animId);
    }, [canvasSize, starColor, factor, speed, smoothMouseX, smoothMouseY, dpr]);

    return (
      <div
        ref={containerRef}
        className={cn("relative w-full h-full overflow-hidden", className)}
        {...props}
      >
        <canvas
          ref={canvasRef}
          className={cn("block w-full h-full transition-opacity duration-1000", isReady ? "opacity-100" : "opacity-0")}
        />
      </div>
    );
  }
);

StarsBackground.displayName = "StarsBackground";
