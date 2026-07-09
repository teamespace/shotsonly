import { useRef } from "react";
import { motion } from "motion/react";
import { AnimatedNumber } from "./AnimatedNumber";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

export function WidgetBoard() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const widgets = gsap.utils.toArray(".widget-item");
    gsap.fromTo(widgets, 
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".widget-grid",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".widget-ring", 
      { strokeDashoffset: 264 },
      {
        strokeDashoffset: 264 - (264 * 0.87), // 87%
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".widget-grid",
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-[3] mt-8 pb-[clamp(3rem,6vw,5rem)]" aria-label="Live widget preview">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        <div 
          className="widget-grid relative grid grid-cols-2 max-[520px]:grid-cols-1 gap-4 max-w-[900px] mx-auto max-lg:max-w-[620px]"
          role="img" aria-label="Live preview of Voltra widgets"
        >
          <div className="absolute -top-8 right-1 font-mono text-[0.68rem] tracking-[0.2em] text-voltra-faint">
            VOLTRA OS 3.1 // LIVE FEED
          </div>

          {/* Heart rate */}
          <div className="widget-item max-[520px]:col-span-1 col-span-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[18px] p-[1.15rem_1.2rem_1.2rem] relative">
            <div className="flex justify-between items-center font-mono text-[0.66rem] tracking-[0.18em] uppercase text-voltra-faint mb-[0.65rem]">
              <span>Heart rate</span>
              <span className="inline-flex items-center gap-[0.45rem] text-voltra-lime">
                <span className="w-[7px] h-[7px] rounded-full bg-voltra-lime animate-[pulse_1.4s_ease-in-out_infinite]" />
                Live
              </span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <div className="font-display text-[clamp(2.6rem,4.5vw,3.6rem)] leading-none tracking-[-0.01em] tabular-nums">
                <AnimatedNumber value={162} duration={1.4} />
                <span className="font-mono text-[0.85rem] tracking-[0.12em] text-voltra-faint ml-[0.4rem] uppercase">bpm</span>
              </div>
              <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase bg-voltra-lime-dim text-voltra-lime py-[0.35rem] px-[0.6rem] rounded-[6px] whitespace-nowrap">
                Zone 4 · Threshold
              </span>
            </div>
            <svg className="w-full h-[56px] mt-[0.8rem] block drop-shadow-[0_0_6px_rgba(200,241,53,0.55)]" viewBox="0 0 320 56" preserveAspectRatio="none" aria-hidden="true">
              <path 
                className="fill-none stroke-voltra-lime stroke-[2.5] animate-[ecgDraw_3.2s_linear_infinite]" 
                strokeLinecap="round" strokeLinejoin="round" 
                strokeDasharray="640" strokeDashoffset="640"
                d="M0 34 L26 34 L34 30 L42 34 L52 34 L58 12 L64 50 L70 22 L76 34 L110 34 L118 30 L126 34 L136 34 L142 10 L148 52 L154 20 L160 34 L196 34 L204 30 L212 34 L222 34 L228 12 L234 50 L240 22 L246 34 L282 34 L290 30 L298 34 L320 34" 
              />
            </svg>
          </div>

          {/* Recovery */}
          <div className="widget-item shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[18px] p-[1.15rem_1.2rem_1.2rem] relative">
            <div className="flex justify-between items-center font-mono text-[0.66rem] tracking-[0.18em] uppercase text-voltra-faint mb-[0.65rem]">
              <span>Recovery</span><span>07:12</span>
            </div>
            <div className="flex items-center gap-4 mt-[0.25rem]">
              <svg className="w-[96px] h-[96px] flex-none -rotate-90" viewBox="0 0 96 96">
                <circle className="fill-none stroke-[rgba(245,245,242,0.1)] stroke-[9]" cx="48" cy="48" r="42" />
                <circle 
                  className="widget-ring fill-none stroke-voltra-lime stroke-[9]" 
                  strokeLinecap="round" 
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * 0.87)} // Target offset (87%)
                  cx="48" cy="48" r="42" 
                />
              </svg>
              <div>
                <div className="font-display text-[1.9rem] leading-none">
                  <AnimatedNumber value={87} duration={1.6} />
                </div>
                <div className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint mt-[0.35rem]">Primed</div>
                <div className="text-voltra-lime font-mono text-[0.72rem]">HRV +12ms ▲</div>
              </div>
            </div>
          </div>

          {/* Streak */}
          <div className="widget-item shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[18px] p-[1.15rem_1.2rem_1.2rem] relative">
            <div className="flex justify-between items-center font-mono text-[0.66rem] tracking-[0.18em] uppercase text-voltra-faint mb-[0.65rem]">
              <span>Streak</span><span>PB</span>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-display text-[clamp(2.6rem,4.5vw,3.6rem)] leading-none tracking-[-0.01em] tabular-nums">
                <AnimatedNumber value={21} duration={1.2} />
              </div>
              <span className="font-mono text-[0.8rem] text-voltra-faint tracking-[0.1em] uppercase">DAYS</span>
            </div>
            <div className="flex gap-[0.3rem] mt-[0.8rem] flex-wrap">
              {[...Array(14)].map((_, i) => (
                <i key={i} className={`w-3 h-3 rounded-[3px] ${[3, 8].includes(i) ? 'bg-[rgba(200,241,53,0.35)]' : 'bg-voltra-lime'}`} />
              ))}
            </div>
            <p className="font-mono text-[0.64rem] tracking-[0.1em] text-voltra-faint mt-[0.7rem] uppercase">
              Rest days count. Skipping doesn't.
            </p>
          </div>

          {/* Coach */}
          <div className="widget-item max-[520px]:col-span-1 col-span-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] bg-gradient-to-br from-[#1c210f] to-[#15170c] border border-[rgba(200,241,53,0.28)] rounded-[18px] p-[1.15rem_1.2rem_1.2rem] relative">
            <div className="flex justify-between items-center font-mono text-[0.66rem] tracking-[0.18em] uppercase text-voltra-faint mb-[0.65rem]">
              <span className="inline-flex items-center gap-[0.4rem] font-mono text-[0.62rem] tracking-[0.18em] uppercase bg-voltra-lime text-[#0C0C0E] py-[0.3rem] px-[0.55rem] rounded-[5px] font-bold">
                ⚡ Coach
              </span>
              <span>Today · 06:58</span>
            </div>
            <p className="text-[0.95rem] leading-[1.55] my-[0.7rem] mb-[0.9rem] text-voltra-white">
              Green light. HRV up 12ms, sleep debt cleared. I queued <em className="text-voltra-lime not-italic font-semibold">5 × 4:00 VO₂ repeats</em> —
              hold 4:32/km, full recovery jogs. Yesterday's easy run earned this one.
            </p>
            <div className="flex gap-[0.6rem]">
              <button className="font-mono text-[0.68rem] tracking-[0.1em] uppercase py-[0.45rem] px-[0.9rem] rounded-[7px] cursor-pointer border border-transparent transition-all bg-voltra-lime text-[#0C0C0E] font-bold hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c210f]">
                Start session
              </button>
              <button className="font-mono text-[0.68rem] tracking-[0.1em] uppercase py-[0.45rem] px-[0.9rem] rounded-[7px] cursor-pointer border transition-all bg-transparent text-voltra-muted border-voltra-line-strong hover:text-voltra-lime hover:border-voltra-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c210f]">
                Swap for easy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Adding custom keyframes used in SVG directly since it's cleaner than keeping CSS separate for this one-off */}
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes ecgDraw {
          0%{stroke-dashoffset:640;opacity:0}
          6%{opacity:1}
          72%{stroke-dashoffset:0;opacity:1}
          88%{stroke-dashoffset:0;opacity:0}
          100%{stroke-dashoffset:640;opacity:0}
        }
      `}} />
    </section>
  );
}
