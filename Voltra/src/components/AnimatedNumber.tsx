import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({ 
  value, 
  duration = 1.4,
  className = ""
}: { 
  value: number; 
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let animationFrameId: number;
      const target = value;
      const dur = duration * 1000;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const p = Math.min((timestamp - startTime) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // cubic ease out
        setDisplayValue(Math.round(target * eased));
        
        if (p < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(target);
        }
      };
      
      animationFrameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, value, duration]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}
