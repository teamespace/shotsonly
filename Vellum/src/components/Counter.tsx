import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

interface CounterProps {
  from?: number;
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function Counter({
  from = 0,
  to,
  decimals = 0,
  duration = 2,
  prefix = "",
  suffix = ""
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
}
