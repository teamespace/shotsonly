import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  useEffect(() => {
    return count.on("change", (latest) => {
      if (ref.current) {
        let displayValue = "";
        
        if (decimals > 0) {
          displayValue = latest.toFixed(decimals);
        } else {
          displayValue = Math.round(latest).toLocaleString("en-US");
        }
        
        ref.current.textContent = `${prefix}${displayValue}${suffix}`;
      }
    });
  }, [count, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? (0).toFixed(decimals) : "0"}
      {suffix}
    </span>
  );
}
