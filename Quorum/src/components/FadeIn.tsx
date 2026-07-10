import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  el?: 'div' | 'span' | 'h1' | 'h2' | 'p' | 'article' | 'figure';
}

export default function FadeIn({ children, delay = 0, className = '', el = 'div' }: FadeInProps) {
  const Component = motion[el] as any;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
