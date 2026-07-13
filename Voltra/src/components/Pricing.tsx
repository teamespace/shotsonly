import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { MagneticButton } from "./ui/MagneticButton";

export function Pricing() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Header reveal
    tl.fromTo(".pricing-header > *", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      }
    )
    // Cards reveal
    .fromTo(".pricing-card", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="pricing" className="py-[clamp(4rem,9vw,7.5rem)] relative" aria-label="Pricing">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        
        <div className="pricing-header max-w-[52rem] mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-voltra-lime flex items-center gap-3 kicker-line">Pricing</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.92] tracking-[-0.01em] mt-[1.2rem] text-balance">
            Pick your <span className="italic text-voltra-lime inline-block -skew-x-6">voltage</span>
          </h2>
          <p className="text-voltra-muted mt-[1.2rem] max-w-[38rem]">
            Every plan starts with a 14-day full-power trial. No card required. Cancel with one tap — your data exports with you.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-3 max-lg:grid-cols-1 gap-[1.4rem] items-stretch max-lg:max-w-[520px] max-lg:mx-auto">
          {/* Base Plan */}
          <div className="pricing-card border border-voltra-line rounded-[20px] p-[2.2rem_2rem] flex flex-col bg-voltra-bg-2 transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-voltra-line-strong">
            <h3 className="font-display uppercase text-[1.2rem]">Base</h3>
            <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint mt-[0.4rem]">For the curious</p>
            <div className="my-[1.6rem] mb-[0.4rem] flex items-baseline gap-[0.5rem]">
              <span className="font-display text-[3rem] leading-none tabular-nums">$0</span>
              <span className="font-mono text-[0.72rem] text-voltra-faint tracking-[0.1em]">forever</span>
            </div>
            <ul className="list-none my-[1.4rem] mb-[2rem] flex flex-col gap-[0.7rem] flex-1">
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Live heart-rate & workout tracking</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>3 smart widgets</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Adaptive streaks</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>30-day history</li>
            </ul>
            <MagneticButton className="w-full">
              <a href="#" className="flex w-full justify-center items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-transparent text-voltra-white border border-voltra-line-strong transition-all duration-150 hover:border-voltra-lime hover:text-voltra-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-bg">
                Start free
              </a>
            </MagneticButton>
          </div>

          {/* Surge Plan */}
          <div className="pricing-card border border-voltra-lime rounded-[20px] p-[2.2rem_2rem] flex flex-col bg-gradient-to-br from-[#1e230f] to-[#131509] transition-all duration-250 ease-in-out hover:-rotate-1 hover:-translate-y-[6px] max-lg:hover:rotate-0 relative">
            <div className="absolute -top-[0.85rem] left-[1.6rem] bg-voltra-lime text-[#0C0C0E] font-mono font-bold text-[0.62rem] tracking-[0.18em] py-[0.35rem] px-[0.7rem]" style={{ clipPath: "polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>MOST WIRED</div>
            <h3 className="font-display uppercase text-[1.2rem]">Surge</h3>
            <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint mt-[0.4rem]">For people with a goal</p>
            <div className="my-[1.6rem] mb-[0.4rem] flex items-baseline gap-[0.5rem]">
              <span className="font-display text-[3rem] leading-none tabular-nums">$9</span>
              <span className="font-mono text-[0.72rem] text-voltra-faint tracking-[0.1em]">/ month</span>
            </div>
            <ul className="list-none my-[1.4rem] mb-[2rem] flex flex-col gap-[0.7rem] flex-1">
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Everything in Base</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>AI coach with daily briefs</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Recovery engine + overtraining alerts</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Unlimited widgets & history</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Race & block planning</li>
            </ul>
            <MagneticButton className="w-full">
              <a href="#" className="flex w-full justify-center items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-voltra-lime text-[#0C0C0E] clip-btn-lime transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_rgba(200,241,53,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-bg">
                Go Surge
              </a>
            </MagneticButton>
          </div>

          {/* Club Plan */}
          <div className="pricing-card border border-voltra-line rounded-[20px] p-[2.2rem_2rem] flex flex-col bg-voltra-bg-2 transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-voltra-line-strong">
            <h3 className="font-display uppercase text-[1.2rem]">Club</h3>
            <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint mt-[0.4rem]">For coaches & teams</p>
            <div className="my-[1.6rem] mb-[0.4rem] flex items-baseline gap-[0.5rem]">
              <span className="font-display text-[3rem] leading-none tabular-nums">$6</span>
              <span className="font-mono text-[0.72rem] text-voltra-faint tracking-[0.1em]">/ athlete / mo</span>
            </div>
            <ul className="list-none my-[1.4rem] mb-[2rem] flex flex-col gap-[0.7rem] flex-1">
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Everything in Surge</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Coach dashboard, whole-roster view</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Shared plans & readiness flags</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>CSV / API export</li>
              <li className="text-[0.92rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime flex-none">▸</span>Priority support</li>
            </ul>
            <MagneticButton className="w-full">
              <a href="#" className="flex w-full justify-center items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-transparent text-voltra-white border border-voltra-line-strong transition-all duration-150 hover:border-voltra-lime hover:text-voltra-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-bg">
                Talk to us
              </a>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
}
