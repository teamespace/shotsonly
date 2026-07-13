import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function FadeIn({ children, delay = 0, className = "", style }: { children: ReactNode, delay?: number, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.7, 0.3, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Button({ children, variant = 'primary', href, className = "" }: { children: ReactNode, variant?: 'primary' | 'indigo' | 'ghost' | 'white', href?: string, className?: string }) {
  const base = "inline-flex items-center justify-center gap-2  font-medium text-[0.92rem] no-underline rounded-full px-[1.5rem] py-[0.75rem] transition-transform hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary: "bg-[#2D2B52] text-white shadow-sm hover:bg-black",
    indigo: "bg-[#2D2B52] text-white shadow-sm hover:bg-black",
    ghost: "bg-transparent text-[#2D2B52] border border-brand-line hover:bg-black/5",
    white: "bg-white text-[#2D2B52] shadow-sm hover:bg-gray-50"
  };

  if (href) {
    return <a href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</a>;
  }
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
}
