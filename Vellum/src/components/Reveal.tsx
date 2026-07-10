import { motion } from 'motion/react';
import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const Component = React.useMemo(() => motion.create(as as any), [as]);

  return (
    <Component
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 0.7, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
