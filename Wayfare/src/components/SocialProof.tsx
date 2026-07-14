import { Compass, Mountain, Camera, Globe, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

const logos = [
  { icon: Compass, text: "Roamer's Digest" },
  { icon: Mountain, text: "Summit Weekly" },
  { icon: Camera, text: "The Slow Lane" },
  { icon: Globe, text: "Passport Club" },
  { icon: MapPin, text: "Fernweh Mag" },
];

export function SocialProof() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance reveal
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 95%' } }
    );

    // Infinite Marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, { scope: containerRef });

  // Double the content for seamless loop
  const doubledLogos = [...logos, ...logos];

  return (
    <section ref={containerRef} className="py-12 bg-white border-b border-ocean/10 overflow-hidden relative" aria-label="Featured in">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-xs font-bold tracking-widest uppercase text-ocean/50 mb-6 text-center">The trip planner featured in</p>
        
        {/* Marquee Container */}
        <div className="w-full relative flex items-center overflow-hidden">
          {/* Gradient Edges for smooth fading */}
          <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div ref={marqueeRef} className="flex whitespace-nowrap w-max gap-12 md:gap-24 px-6 md:px-12">
            {doubledLogos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div key={index} className="flex items-center gap-2 font-bold tracking-tight text-xl text-ocean/40 hover:text-ocean transition-colors cursor-pointer shrink-0">
                  <Icon size={24} aria-hidden="true" />
                  <span>{logo.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
