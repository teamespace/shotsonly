import React, { useRef } from 'react';
import FadeIn from './FadeIn';
import TranscriptConsole from './TranscriptConsole';
import { TextReveal } from './animations/TextReveal';
import { gsap, useGSAP } from '../lib/gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 px-6 overflow-hidden" id="main">
      {/* Background Video */}
      <div className="parallax-bg absolute -inset-24 z-0">
        <video 
          src="/hero-vd.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-[1000px] mx-auto relative z-10 text-center mb-16">
        <FadeIn delay={0.1}>
          <div className="pill-tag mb-8">
            <span className="highlight">AI</span> MEETING ASSISTANT
          </div>
        </FadeIn>
        
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 text-[#111]">
          <TextReveal text="The meeting ends." /><br/>
          <TextReveal text="The record writes itself." />
        </h1>
        
        <FadeIn delay={0.8}>
          <p className="text-gray-900 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Quorum sits in every call, takes the minutes verbatim, files a clean summary before
            you've refilled your coffee — and extracts every commitment: who, what, by when.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.0}>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="px-8 py-3.5 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-gray-800 transition-all hover:scale-105 duration-300">Start free — no card</button>
             <button className="px-8 py-3.5 bg-white border border-gray-200 text-black rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-gray-50 transition-all hover:scale-105 duration-300">Read a live transcript ↓</button>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-20">
        <FadeIn delay={1.2}>
          <TranscriptConsole />
        </FadeIn>
      </div>
    </section>
  );
}
