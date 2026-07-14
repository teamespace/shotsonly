import { Map, Sun, Clock, Wallet, Users } from 'lucide-react';
import { CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal').forEach((el: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      });
      
      tl.fromTo(el, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      const routeContainer = el.querySelector('.gsap-route-container');
      if (routeContainer) {
        tl.fromTo(routeContainer.children, 
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.5)' },
          "-=0.5"
        );
      }

      const progressBar = el.querySelector('.gsap-progress-bar');
      if (progressBar) {
        tl.from(progressBar, 
          { width: "0%", duration: 1.5, ease: "power4.out" }, 
          "-=0.3"
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#FAFAFA]" id="features" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto reveal">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">Why travelers switch</span>
          <h2 id="features-title" className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-ink mb-6">A planner that actually knows the ground it's sending you to</h2>
          <p className="text-xl text-ink/70">Wayfare cross-checks every suggestion against maps, transit timetables, opening hours, and weather — so the plan survives contact with the real world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="col-span-1 md:col-span-2 bg-white/80 backdrop-blur-xl shadow-soft rounded-[40px] p-0 border border-white/60 reveal overflow-hidden flex flex-col md:flex-row" style={{ '--rd': 0 } as CSSProperties}>
            <div className="p-8 flex-1 flex flex-col justify-center">
              <span className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6"><Map size={28} /></span>
              <h3 className="text-2xl font-bold tracking-tight text-ink mb-3">Routes that respect geography</h3>
              <p className="text-ink/70 max-w-md">No more zigzagging across a city because a list said so. Wayfare clusters each day by neighborhood, sequences stops by opening hours, and keeps walking under your comfort limit.</p>
            </div>
            <div className="flex-1 bg-sky/30 p-8 md:p-12 flex flex-col justify-center border-l border-white/40 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sunset/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
               
               <div className="flex flex-col gap-0 relative z-10 max-w-sm mx-auto w-full gsap-route-container">
                 <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(23,52,71,0.08)] border border-ocean/5 relative z-20">
                   <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center text-sunset font-bold shadow-inner">1</div>
                   <div className="flex-1">
                     <div className="font-bold text-ink">Gion District</div>
                     <div className="text-xs text-ink/50 mt-0.5">Explore traditional streets</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center py-2 px-8">
                   <div className="w-1 h-8 bg-gradient-to-b from-accent/40 to-accent-deep/40 rounded-full ml-1"></div>
                   <div className="flex-1 pl-6">
                     <span className="bg-white text-ocean-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-ocean/5 inline-block">14 min walk</span>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(23,52,71,0.08)] border border-ocean/5 relative z-20">
                   <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-ocean font-bold shadow-inner">2</div>
                   <div className="flex-1">
                     <div className="font-bold text-ink">Kiyomizu-dera</div>
                     <div className="text-xs text-ink/50 mt-0.5">Temple views at sunset</div>
                   </div>
                 </div>
               </div>
            </div>
          </article>
          
          <article className="col-span-1 bg-white/80 backdrop-blur-xl shadow-soft rounded-[40px] p-8 md:p-10 border border-white/60 reveal" style={{ '--rd': 1 } as CSSProperties}>
            <span className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6"><Sun size={28} /></span>
            <h3 className="text-2xl font-bold tracking-tight text-ink mb-3">Replans around the weather</h3>
            <p className="text-ink/70">Typhoon rolling in on temple day? Wayfare quietly swaps in the covered market and moves the gardens to Thursday's sunshine — and tells you why.</p>
          </article>

          <article className="col-span-1 bg-white/80 backdrop-blur-xl shadow-soft rounded-[40px] p-8 md:p-10 border border-white/60 reveal" style={{ '--rd': 0 } as CSSProperties}>
            <span className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6"><Clock size={28} /></span>
            <h3 className="text-2xl font-bold tracking-tight text-ink mb-3">Real travel times, not guesses</h3>
            <p className="text-ink/70">Every leg is timed with live transit and walking data. If the last bus back from the coast leaves at 18:40, dinner gets booked for 17:30.</p>
          </article>

          <article className="col-span-1 bg-white/80 backdrop-blur-xl shadow-soft rounded-[40px] p-8 md:p-10 border border-white/60 reveal" style={{ '--rd': 1 } as CSSProperties}>
            <span className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6"><Wallet size={28} /></span>
            <h3 className="text-2xl font-bold tracking-tight text-ink mb-3">Budget guardrails</h3>
            <p className="text-ink/70 mb-6">Set a number once. Wayfare tracks it across stays, food, and tickets, and suggests trades.</p>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
               <div className="gsap-progress-bar h-full w-[64%] bg-gradient-to-r from-accent to-accent-deep rounded-full"></div>
            </div>
            <p className="text-sm font-bold tabular-nums text-accent mt-2">€1,280 of €2,000 planned</p>
          </article>

          <article className="col-span-1 md:col-span-2 lg:col-span-1 bg-white/80 backdrop-blur-xl shadow-soft rounded-[40px] p-8 md:p-10 border border-white/60 reveal" style={{ '--rd': 2 } as CSSProperties}>
            <span className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6"><Users size={28} /></span>
            <h3 className="text-2xl font-bold tracking-tight text-ink mb-3">Plan together, argue less</h3>
            <p className="text-ink/70">Share one link. Friends vote on stops with a tap, the AI merges everyone's must-sees, and nobody has to be the group's unpaid travel agent.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
