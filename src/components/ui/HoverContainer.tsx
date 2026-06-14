"use client";

import React, { useState } from "react";

interface HoverContainerProps {
  children: (isHovered: boolean) => React.ReactNode;
  className?: string;
}

export default function HoverContainer({ children, className = "" }: HoverContainerProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {children(isHovered)}
    </div>
  );
}
