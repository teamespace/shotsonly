import { motion } from 'motion/react';
import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import ConsultChatMock from './ConsultChatMock';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to('.hero-parallax-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section ref={containerRef} className="hero hero-dark relative overflow-hidden flex items-center h-[100svh] min-h-[600px] w-full bg-[#11554C]">
      {/* Left side video background overlay */}
      <video 
        src="/hero-left.mp4" 
        autoPlay loop muted playsInline 
        className="absolute inset-y-0 left-0 w-full md:w-[50vw] h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.04, mixBlendMode: 'screen', transform: 'scale(1.05)' }}
      />
      
      {/* Right side full-bleed image background with Desktop Chat Mock */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[50vw] z-0 hidden md:block shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
        <div className="hero-parallax-bg absolute inset-0 -top-[10%] h-[120%]">
          <img src="/hero-img.png" className="w-full h-full object-cover" alt="Medical professional" />
          <div className="absolute inset-0 bg-teal-deep/10"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end z-20" style={{ padding: 'clamp(2rem, 5vw, 4.5rem)' }}>
          <ConsultChatMock />
        </div>
      </div>

      <div className="shell hero-grid relative z-10 pb-16 md:pb-0">
        <div className="hero-copy py-8 md:py-24">
          <motion.span 
            className="hero-pill"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0)}
          >
            <b>New</b> AI triage now covers 1,100+ conditions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(1)}
          >
            See a doctor in <span className="strike">three weeks</span> <em>94 seconds</em>
          </motion.h1>
          <motion.p 
            className="hero-sub"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(2)}
          >
            Describe what's wrong in plain words. Curalink's clinical AI triages you in
            seconds, gathers what your doctor needs, and connects you to a
            board-certified physician — day or night.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(3)}
          >
            <a className="btn btn-coral" href="#pricing">Start a visit now</a>
            <a className="btn btn-line" href="#how">See how it works</a>
          </motion.div>
          <motion.div 
            className="trust-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(4)}
          >
            <div className="trust-chip">
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 3l10 4v7c0 7-4.4 12.3-10 15C10.4 26.3 6 21 6 14V7l10-4z" fill="#E3F1EE" stroke="#0E7C6B" strokeWidth="1.6" /><path d="M11.5 15.5l3 3 6-6.5" stroke="#0E7C6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span><strong>HIPAA compliant</strong>End-to-end encrypted</span>
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="12" cy="11" r="5" fill="#E3F1EE" stroke="#0E7C6B" strokeWidth="1.6" /><circle cx="21" cy="13" r="4" fill="#E3F1EE" stroke="#0E7C6B" strokeWidth="1.6" /><path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#0E7C6B" strokeWidth="1.6" strokeLinecap="round" /><path d="M22 21c3.3.5 6 3 6 5" stroke="#0E7C6B" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <span><strong>4,200+ doctors</strong>Board-certified, 40 specialties</span>
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="#E3F1EE" stroke="#0E7C6B" strokeWidth="1.6" /><path d="M16 9v7l5 3" stroke="#0E7C6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span><strong>94 sec median</strong>To a live clinician, 24/7</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile-only Chat Mock (Desktop version is absolutely positioned above) */}
        <motion.div 
          className="relative min-h-[500px] flex flex-col justify-end pb-8 pt-24 px-4 md:hidden"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition(3)}
        >
          {/* Mobile background (since absolute background is hidden on mobile) */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl z-0 md:hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
             <div className="hero-parallax-bg absolute inset-0 -top-[10%] h-[120%]">
               <img src="/hero-img.png" className="w-full h-full object-cover" alt="Medical professional" />
               <div className="absolute inset-0 bg-teal-deep/10"></div>
             </div>
          </div>
          
          <ConsultChatMock />
        </motion.div>
      </div>
    </section>
  );
}
