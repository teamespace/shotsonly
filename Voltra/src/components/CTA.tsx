import { useRef } from "react";
import { BackgroundShapes } from "./ui/background-shapes";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { MagneticButton } from "./ui/MagneticButton";

export function CTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".cta-content > *", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-voltra-lime text-[#0C0C0E] py-[clamp(5rem,10vw,8rem)] text-center clip-cta relative overflow-hidden" aria-label="Get started">
      <div className="absolute inset-0 z-0 opacity-[0.15] flex items-center justify-center pointer-events-none">
        <BackgroundShapes width={2000} height={1000} colors={["#0C0C0E"]} />
      </div>

      <div className="cta-content max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)] relative z-10">
        
        <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-[#0C0C0E] flex items-center justify-center gap-3 kicker-line-dark">
          Charge up
        </p>
        
        <h2 className="font-display uppercase text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] max-w-[16ch] mx-auto my-[1.4rem] mb-[1.6rem] text-balance">
          Your body is talking. Start listening.
        </h2>
        
        <p className="max-w-[32rem] mx-auto font-medium mb-[2.4rem]">
          Fourteen days of the full system — AI coach, recovery engine, every widget. Strap in before your next session.
        </p>
        
        <div>
          <MagneticButton>
            <a href="#" className="inline-flex items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-[#0C0C0E] text-voltra-lime clip-btn-ink transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_rgba(12,12,14,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C0C0E] focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-lime">
              Start free — 2 min setup
            </a>
          </MagneticButton>
        </div>
        
        <p className="font-mono text-[0.7rem] tracking-[0.14em] uppercase mt-[1.4rem] opacity-70">
          No card · Works with the watch you already own
        </p>

      </div>
    </section>
  );
}
