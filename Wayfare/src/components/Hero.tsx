import { CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger text elements
    gsap.fromTo('.gsap-hero-text', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
    );
    
    // Animate map panel
    gsap.fromTo('.gsap-hero-map',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
    
    // Stagger cards
    gsap.fromTo('.gsap-hero-card',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)', delay: 0.8 }
    );

    // Parallax background video
    gsap.fromTo('.gsap-parallax-hero',
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] pt-28 pb-24 overflow-hidden bg-gray-50" aria-labelledby="hero-title">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--color-sky-deep)_0%,_transparent_70%)] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Text Section */}
        <span className="gsap-hero-text inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold tracking-widest uppercase mb-6 text-xs">
          AI trip planner · map-first
        </span>
        <h1 id="hero-title" className="gsap-hero-text text-6xl md:text-[5.5rem] font-serif font-medium tracking-tight text-ink leading-[1.1] mb-6">
          Ten days in Japan, planned before <br className="hidden md:block" />
          <em className="text-accent italic relative inline-block font-serif">
            your coffee cools
            <svg className="absolute -bottom-1 left-0 w-full h-4 opacity-50" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9 C 24 2, 42 12, 64 7 S 106 2, 128 8 S 172 12, 218 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
          </em>
        </h1>
        <p className="gsap-hero-text text-lg md:text-xl text-ink/80 max-w-2xl mx-auto mb-10">
          Tell Wayfare where you're dreaming of, how long you've got, and what you love. It builds a day-by-day itinerary on a live map — real travel times, opening hours, and the little places guidebooks miss.
        </p>
        
        <div className="gsap-hero-text flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24">
          <a className="bg-accent text-white hover:bg-accent-deep px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 active:scale-[0.96] inline-block" href="#cta">
            Start planning — it's free
          </a>
        </div>

        {/* Visual Section: Map + Cards */}
        <div className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[540px] text-left">
          
          {/* Map Panel */}
          <div className="gsap-hero-map absolute top-0 left-0 w-full md:w-[75%] h-[400px] md:h-full bg-sand rounded-[32px] overflow-hidden shadow-float border border-white/40 backdrop-blur-sm">
            <video 
              className="gsap-parallax-hero absolute inset-0 w-full h-full object-cover object-[center_38%] scale-[1.2]" 
              src="/hero.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky/40 via-sky/5 to-ocean-deep/30 pointer-events-none"></div>

            {/* Map Chrome Header */}
            <div className="absolute top-5 left-5 right-5 bg-white/80 backdrop-blur-xl rounded-[16px] p-3.5 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/50">
              <div className="w-2.5 h-2.5 rounded-full bg-sunset animate-pulse"></div>
              <span className="font-bold text-ocean-deep text-sm truncate">Kyoto, 3 days, food + temples</span>
              <small className="ml-auto font-bold text-ocean/60 text-xs hidden sm:block shrink-0">✦ AI routing</small>
            </div>

            {/* Route SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 500" preserveAspectRatio="none" aria-hidden="true">
              <path className="stroke-accent/20" strokeWidth="9" fill="none" d="M36 463 C 82 397, 44 325, 102 285 S 156 231, 163 163" />
              <path className="stroke-accent stroke-[3.5px]" fill="none" strokeDasharray="6 8" strokeLinecap="round" d="M36 463 C 82 397, 44 325, 102 285 S 156 231, 163 163" />
            </svg>

            {/* Pins & Labels */}
            <div className="absolute left-[7.5%] top-[92.5%] z-10">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-full w-8 h-8 bg-accent rounded-t-full rounded-bl-full rounded-br-md rotate-[-45deg] flex items-center justify-center shadow-lg border-2 border-white">
                <span className="rotate-[45deg] text-white text-xs font-bold">1</span>
              </div>
              <div className="absolute left-6 top-[-16px] -translate-y-1/2 bg-white rounded-xl px-3 py-1.5 text-xs font-bold text-ocean-deep shadow-lg whitespace-nowrap">
                Fushimi Inari · <span className="text-sunset-deep">sunrise, no crowds</span>
              </div>
            </div>

            <div className="absolute left-[21%] top-[57%] z-10">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-full w-8 h-8 bg-ocean rounded-t-full rounded-bl-full rounded-br-md rotate-[-45deg] flex items-center justify-center shadow-lg border-2 border-white">
                <span className="rotate-[45deg] text-white text-xs font-bold">2</span>
              </div>
              <div className="absolute left-6 top-[-16px] -translate-y-1/2 bg-white rounded-xl px-3 py-1.5 text-xs font-bold text-ocean-deep shadow-lg whitespace-nowrap">
                Nishiki Market · <span className="text-sunset-deep">12 min walk</span>
              </div>
            </div>

            <div className="absolute left-[34%] top-[32.5%] z-10">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-full w-8 h-8 bg-accent rounded-t-full rounded-bl-full rounded-br-md rotate-[-45deg] flex items-center justify-center shadow-lg border-2 border-white">
                <span className="rotate-[45deg] text-white text-xs font-bold">3</span>
              </div>
              <div className="absolute left-6 top-[-16px] -translate-y-1/2 bg-white rounded-xl px-3 py-1.5 text-xs font-bold text-ocean-deep shadow-lg whitespace-nowrap">
                Arashiyama · <span className="text-sunset-deep">Bamboo grove</span>
              </div>
            </div>
          </div>

          {/* Itinerary Cards Stack */}
          <div className="absolute right-0 md:right-4 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-[95%] sm:w-[420px] flex flex-col gap-4 z-20 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0">
            
            {/* Card 1 */}
            <article className="gsap-hero-card bg-white/90 backdrop-blur-md rounded-[24px] p-4 sm:p-5 shadow-card border border-white/60 transform md:rotate-[-2deg] transition-transform hover:rotate-0 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <img className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shadow-sm border border-black/5" src="/Postcards 1.png" alt="Temple" />
                <h3 className="font-bold tracking-tight text-base sm:text-lg text-ink m-0">Day 1 — Southern Kyoto</h3>
                <span className="ml-auto bg-sand text-sunset-deep text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full hidden sm:block">Temples</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-10 sm:w-12 shrink-0 text-xs sm:text-sm">06:40</span>
                <span className="text-ink/80 font-semibold text-sm">Fushimi Inari before the crowds</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-10 sm:w-12 shrink-0 text-xs sm:text-sm">09:30</span>
                <span className="text-ink/80 font-semibold text-sm">Tōfuku-ji gardens</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-10 sm:w-12 shrink-0 text-xs sm:text-sm">12:15</span>
                <span className="text-ink/80 font-semibold text-sm">Ramen at Kyoto Station</span>
              </div>
              <p className="flex items-center gap-1.5 mt-2 text-[0.75rem] font-bold text-sunset-deep">
                <span className="text-base">✦</span> Reordered to dodge a rainy afternoon
              </p>
            </article>

            {/* Card 2 */}
            <article className="gsap-hero-card bg-white/90 backdrop-blur-md rounded-[24px] p-4 sm:p-5 shadow-card border border-white/60 transform md:rotate-[1.5deg] md:-translate-x-4 transition-transform hover:rotate-0 hover:-translate-y-2 hidden sm:block">
              <div className="flex items-center gap-3 mb-3">
                <img className="w-11 h-11 rounded-xl object-cover shadow-sm border border-black/5" src="/Postcards 2.png" alt="Ramen" />
                <h3 className="font-bold tracking-tight text-lg text-ink m-0">Day 2 — Downtown</h3>
                <span className="ml-auto bg-sky text-ocean-deep text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Food crawl</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-12 shrink-0">10:00</span>
                <span className="text-ink/80 font-semibold">Nishiki Market tasting walk</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-12 shrink-0">14:00</span>
                <span className="text-ink/80 font-semibold">Tea ceremony, Gion backstreets</span>
              </div>
            </article>

            {/* Card 3 */}
            <article className="gsap-hero-card bg-white/90 backdrop-blur-md rounded-[24px] p-5 shadow-card border border-white/60 transform md:rotate-[-1deg] md:translate-x-2 transition-transform hover:rotate-0 hover:-translate-y-2 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <img className="w-11 h-11 rounded-xl object-cover shadow-sm border border-black/5" src="/Postcards 3.png" alt="Bamboo" />
                <h3 className="font-bold tracking-tight text-lg text-ink m-0">Day 3 — Arashiyama</h3>
                <span className="ml-auto bg-sand text-sunset-deep text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Nature</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-12 shrink-0">08:20</span>
                <span className="text-ink/80 font-semibold">Bamboo grove & monkey park</span>
              </div>
              <div className="flex gap-3 items-baseline py-2 border-t border-dashed border-ocean/15 text-sm">
                <span className="font-bold text-ocean w-12 shrink-0">16:45</span>
                <span className="text-ink/80 font-semibold">Riverside kaiseki dinner</span>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
