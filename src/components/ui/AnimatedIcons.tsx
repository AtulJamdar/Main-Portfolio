"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Rocket,
  BrainCircuit,
  Server,
  Workflow,
  BarChart3,
  Zap,
  ShieldCheck,
  Users,
  Activity,
  Terminal,
  Calendar,
  MapPin,
  Code,
  Database,
  Camera
} from "lucide-react";

interface IconProps {
  className?: string;
}

// 1. Cpu Icon - Rotates core/lines once
export function AnimatedCpu({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { rotate: 0, scale: 1 },
        hover: {
          rotate: 90,
          scale: 1.1,
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Cpu className="w-full h-full" />
    </motion.div>
  );
}

// 2. Rocket Icon - Launches once (moves up & right with vibration)
export function AnimatedRocket({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { x: 0, y: 0, scale: 1 },
        hover: {
          x: [0, 3, -1, 4, 0],
          y: [0, -4, -2, -6, 0],
          scale: 1.1,
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Rocket className="w-full h-full" />
    </motion.div>
  );
}

// 3. BrainCircuit Icon - Pulsing glow once
export function AnimatedBrainCircuit({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, filter: "drop-shadow(0 0 0px rgba(168, 85, 247, 0))" },
        hover: {
          scale: [1, 1.15, 0.95, 1.1, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(168, 85, 247, 0))",
            "drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))",
            "drop-shadow(0 0 0px rgba(168, 85, 247, 0))"
          ],
          transition: { duration: 0.8, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <BrainCircuit className="w-full h-full" />
    </motion.div>
  );
}

// 4. Server Icon - Slides racks & blinking LEDs once
export function AnimatedServer({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: 1.08,
          transition: { duration: 0.3 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={`relative ${className}`}
    >
      <Server className="w-full h-full" />
      {/* Blinking LEDs flash once in sequence */}
      <motion.div
        variants={{
          initial: { opacity: 0.3 },
          hover: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 0.4, delay: 0.1 }
          }
        }}
        className="absolute w-1 h-1 bg-emerald-500 rounded-full top-[25%] left-[20%]"
      />
      <motion.div
        variants={{
          initial: { opacity: 0.3 },
          hover: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 0.4, delay: 0.3 }
          }
        }}
        className="absolute w-1 h-1 bg-emerald-500 rounded-full top-[50%] left-[20%]"
      />
      <motion.div
        variants={{
          initial: { opacity: 0.3 },
          hover: {
            opacity: [0.3, 1, 0.3],
            transition: { duration: 0.4, delay: 0.5 }
          }
        }}
        className="absolute w-1 h-1 bg-emerald-500 rounded-full top-[75%] left-[20%]"
      />
    </motion.div>
  );
}

// 5. Workflow Icon - Rotates once
export function AnimatedWorkflow({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { rotate: 0, scale: 1 },
        hover: {
          rotate: [0, -10, 10, -5, 5, 0],
          scale: 1.1,
          transition: { duration: 0.6 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Workflow className="w-full h-full" />
    </motion.div>
  );
}

// 6. ChartColumn Icon - rising staggered columns once (npx shadcn@latest add @animate-ui/icons-chart-column)
export function AnimatedChartColumn({ className }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: 1.1,
          transition: { duration: 0.3 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <motion.path
        d="M8 17V13"
        variants={{
          initial: { opacity: 1, pathLength: 1 },
          hover: {
            opacity: [0, 1],
            pathLength: [0, 1],
            transition: { ease: "easeInOut", duration: 0.4, delay: 0 }
          }
        }}
      />
      <motion.path
        d="M13 17V5"
        variants={{
          initial: { opacity: 1, pathLength: 1 },
          hover: {
            opacity: [0, 1],
            pathLength: [0, 1],
            transition: { ease: "easeInOut", duration: 0.4, delay: 0.15 }
          }
        }}
      />
      <motion.path
        d="M18 17V9"
        variants={{
          initial: { opacity: 1, pathLength: 1 },
          hover: {
            opacity: [0, 1],
            pathLength: [0, 1],
            transition: { ease: "easeInOut", duration: 0.4, delay: 0.3 }
          }
        }}
      />
      <motion.path
        d="M3 3v16a2 2 0 0 0 2 2h16"
        // static axis
      />
    </motion.svg>
  );
}

// 7. BarChart3 Icon - Backup bounce
export function AnimatedBarChart3({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, y: 0 },
        hover: {
          scale: 1.1,
          y: [0, -3, 0],
          transition: { duration: 0.4 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <BarChart3 className="w-full h-full" />
    </motion.div>
  );
}

// 8. Zap Icon - shake and pulse glow once
export function AnimatedZap({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, rotate: 0, filter: "drop-shadow(0 0 0px rgba(234, 179, 8, 0))" },
        hover: {
          scale: [1, 1.25, 0.9, 1.15, 1],
          rotate: [0, -15, 15, -10, 10, 0],
          filter: [
            "drop-shadow(0 0 0px rgba(234, 179, 8, 0))",
            "drop-shadow(0 0 8px rgba(234, 179, 8, 0.6))",
            "drop-shadow(0 0 0px rgba(234, 179, 8, 0))"
          ],
          transition: { duration: 0.6 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Zap className="w-full h-full" />
    </motion.div>
  );
}

// 9. ShieldCheck Icon - Flip and scale once
export function AnimatedShieldCheck({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, rotateY: 0 },
        hover: {
          scale: [1, 1.15, 1],
          rotateY: [0, 180, 360],
          transition: { duration: 0.8, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <ShieldCheck className="w-full h-full" />
    </motion.div>
  );
}

// 10. Users Icon - Pulse once
export function AnimatedUsers({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: [1, 1.12, 1],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Users className="w-full h-full" />
    </motion.div>
  );
}

// 11. Activity Icon - Heartbeat once
export function AnimatedActivity({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: [1, 1.2, 0.85, 1.15, 0.95, 1],
          transition: { duration: 0.7 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Activity className="w-full h-full" />
    </motion.div>
  );
}

// 12. Terminal Icon - Blinking typing effect once
export function AnimatedTerminal({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, x: 0 },
        hover: {
          scale: 1.08,
          x: [0, 2, -2, 2, 0],
          transition: { duration: 0.3 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Terminal className="w-full h-full" />
    </motion.div>
  );
}

// 13. Calendar Icon - Wiggle once
export function AnimatedCalendar({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { rotate: 0 },
        hover: {
          rotate: [0, -12, 10, -8, 6, 0],
          transition: { duration: 0.5 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Calendar className="w-full h-full" />
    </motion.div>
  );
}

// 14. MapPin Icon - Bounce once
export function AnimatedMapPin({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { y: 0, scaleY: 1 },
        hover: {
          y: [0, -6, 0, -3, 0],
          scaleY: [1, 0.9, 1.05, 0.95, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <MapPin className="w-full h-full" />
    </motion.div>
  );
}

// 15. Code Icon - Expands brackets once
export function AnimatedCode({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: [1, 1.12, 1],
          transition: { duration: 0.3 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Code className="w-full h-full" />
    </motion.div>
  );
}

// 16. Database Icon - Compression/stretch once
export function AnimatedDatabase({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scaleY: 1, scaleX: 1 },
        hover: {
          scaleY: [1, 0.85, 1.1, 0.95, 1],
          scaleX: [1, 1.1, 0.9, 1.05, 1],
          transition: { duration: 0.6 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Database className="w-full h-full" />
    </motion.div>
  );
}

// 17. Camera Icon - shutter click once
export function AnimatedCamera({ className }: IconProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 1, rotate: 0 },
        hover: {
          scale: [1, 0.9, 1.1, 1],
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4 }
        }
      }}
      whileHover="hover"
      initial="initial"
      className={className}
    >
      <Camera className="w-full h-full" />
    </motion.div>
  );
}
