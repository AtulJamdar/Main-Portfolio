"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SmoothEntrance({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-full flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}
