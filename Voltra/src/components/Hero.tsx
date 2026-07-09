import { useRef } from "react";
import { motion } from "motion/react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Smooth easing
      }
    })
  };

  return (
    <section ref={containerRef} id="top" className="relative min-h-[min(92svh,960px)] max-lg:min-h-[min(88svh,860px)] flex items-end pt-[clamp(7rem,16vh,10rem)] pb-[clamp(8rem,18vh,12rem)] overflow-clip bg-voltra-bg" aria-label="Voltra intro">
      <div ref={bgRef} className="absolute inset-0 scale-[1.1] origin-top" aria-hidden="true">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradients */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: `linear-gradient(to top, var(--color-voltra-bg) 0%, rgba(12,12,14,.55) 30%, rgba(12,12,14,.22) 58%, rgba(12,12,14,.62) 100%), linear-gradient(100deg, rgba(12,12,14,.85) 0%, rgba(12,12,14,.45) 44%, rgba(12,12,14,.04) 74%)`
      }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: `radial-gradient(58% 60% at 72% 38%, rgba(200,241,53,.12), transparent 70%)`
      }} />

      <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        <motion.p 
          custom={0.1} initial="hidden" animate="visible" variants={containerVariants}
          className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-voltra-lime flex items-center gap-3 kicker-line"
        >
          AI fitness tracker · smart widgets
        </motion.p>
        
        <motion.h1 
          custom={0.2} initial="hidden" animate="visible" variants={containerVariants}
          className="font-display uppercase text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[0.9] tracking-[-0.01em] my-[1.4rem] drop-shadow-[0_2px_28px_rgba(0,0,0,0.5)] text-balance"
        >
          Every rep.<br/>
          <span className="italic text-voltra-lime inline-block -skew-x-6">Every beat.</span><br/>
          Accounted for.
        </motion.h1>
        
        <motion.p 
          custom={0.3} initial="hidden" animate="visible" variants={containerVariants}
          className="text-voltra-muted text-[clamp(1rem,1.4vw,1.15rem)] max-w-[34rem] mb-[2.2rem] drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)]"
        >
          Voltra reads your heart rate, recovery, sleep, and strain — then its AI coach turns the noise
          into <strong className="text-voltra-white font-semibold">one clear instruction a day</strong>. Glanceable widgets. Zero spreadsheet-brain.
        </motion.p>
        
        <motion.div 
          custom={0.4} initial="hidden" animate="visible" variants={containerVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <a href="#pricing" className="max-[520px]:w-full max-[520px]:justify-center inline-flex items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-voltra-lime text-[#0C0C0E] clip-btn-lime transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_rgba(200,241,53,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-bg">
              Start training free
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#how" className="max-[520px]:w-full max-[520px]:justify-center inline-flex items-center gap-[0.6rem] font-mono font-bold text-[0.85rem] tracking-[0.1em] uppercase py-[0.85rem] px-[1.6rem] bg-transparent text-voltra-white border border-voltra-line-strong transition-all duration-150 hover:border-voltra-lime hover:text-voltra-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltra-lime focus-visible:ring-offset-2 focus-visible:ring-offset-voltra-bg">
              See the system →
            </a>
          </MagneticButton>
        </motion.div>
        
        <motion.p 
          custom={0.5} initial="hidden" animate="visible" variants={containerVariants}
          className="mt-[1.4rem] font-mono text-[0.72rem] tracking-[0.14em] uppercase text-voltra-faint"
        >
          Works with Apple Watch · Garmin · Whoop · Pixel Watch
        </motion.p>
      </div>
    </section>
  );
}
