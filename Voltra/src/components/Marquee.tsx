import { motion } from "motion/react";

export function Marquee() {
  const items = [
    "2.1M workouts logged weekly",
    "4.9★ App Store",
    "Recovery-first training",
    "No spreadsheet-brain"
  ];

  return (
    <div className="bg-voltra-lime -rotate-[1.6deg] scale-105 my-4 overflow-hidden strip-border" aria-hidden="true">
      <div className="flex w-max animate-[marquee_28s_linear_infinite]">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span key={i} className="font-display text-[1.05rem] uppercase text-[#0C0C0E] py-[0.75rem] px-[1.4rem] whitespace-nowrap tracking-[0.02em]">
            {text}
            <span className="opacity-45 font-mono ml-[2.4rem]">///</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
