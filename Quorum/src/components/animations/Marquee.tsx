import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  gap?: string;
}

export function Marquee({ children, speed = 20, className = "", gap = "gap-16" }: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className={`flex shrink-0 ${gap} pr-16`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <div className={`flex items-center ${gap}`}>{children}</div>
        <div className={`flex items-center ${gap}`} aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  );
}
