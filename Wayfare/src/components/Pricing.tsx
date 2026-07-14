import { Check } from 'lucide-react';
import { CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function Pricing() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.reveal').forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white" id="pricing" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <span className="text-xs font-bold tracking-widest uppercase text-sunset mb-3 block">Pricing</span>
          <h2 id="pricing-title" className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">Cheaper than one bad tour</h2>
          <p className="text-lg text-ink/70">Start free. Upgrade when a big trip deserves the full toolkit.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <article className="bg-white rounded-[32px] p-10 shadow-card reveal" style={{ '--rd': 0 } as CSSProperties} aria-label="Daytripper plan">
            <h3 className="font-bold tracking-tight text-3xl text-ink mb-2">Daytripper</h3>
            <p className="text-sm text-ink/60 mb-8 h-10">For weekend escapes and testing the waters.</p>
            <div className="mb-8">
              <span className="font-bold tracking-tight text-5xl text-ink">$0</span>
              <span className="text-sm text-ink/60 ml-2">forever</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-ink/80 text-sm">
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> 2 active trips</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> AI itineraries up to 4 days</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> Map view with routed days</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> Weather-aware reshuffles</li>
            </ul>
            <a className="block w-full text-center bg-transparent hover:bg-sky/50 text-ocean border-2 border-ocean/20 font-bold py-4 rounded-full transition-all active:scale-[0.96]" href="#cta">Start planning free</a>
          </article>
          
          <article className="bg-ocean-deep text-white rounded-[32px] p-10 shadow-float relative reveal transform md:-translate-y-4" style={{ '--rd': 1 } as CSSProperties} aria-label="Wanderer plan, most popular">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sunset text-white text-[0.7rem] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most popular</span>
            <h3 className="font-bold tracking-tight text-3xl mb-2">Wanderer</h3>
            <p className="text-sm text-white/60 mb-8 h-10">For the big annual trip and everything between.</p>
            <div className="mb-8">
              <span className="font-bold tracking-tight text-5xl">$9</span>
              <span className="text-sm text-white/60 ml-2">/mo, billed yearly</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-white/90 text-sm">
              <li className="flex gap-3 items-start"><Check size={18} className="text-sky shrink-0" /> Unlimited trips, up to 30 days each</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sky shrink-0" /> Offline maps & live day-of nudges</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sky shrink-0" /> Budget tracking with trades</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sky shrink-0" /> Group planning & voting links</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sky shrink-0" /> Hidden-gem mode</li>
            </ul>
            <a className="block w-full text-center bg-accent hover:bg-accent-deep text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] font-bold py-4 rounded-full transition-all hover:-translate-y-1 active:scale-[0.96]" href="#cta">Start planning free</a>
          </article>

          <article className="bg-white rounded-[32px] p-10 shadow-card reveal" style={{ '--rd': 2 } as CSSProperties} aria-label="Expedition plan">
            <h3 className="font-bold tracking-tight text-3xl text-ink mb-2">Expedition</h3>
            <p className="text-sm text-ink/60 mb-8 h-10">For families, sabbaticals, and travel creators.</p>
            <div className="mb-8">
              <span className="font-bold tracking-tight text-5xl text-ink">$19</span>
              <span className="text-sm text-ink/60 ml-2">/mo, billed yearly</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 text-ink/80 text-sm">
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> Everything in Wanderer</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> 5 traveler seats, shared budgets</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> Multi-city & open-jaw routing</li>
              <li className="flex gap-3 items-start"><Check size={18} className="text-sunset shrink-0" /> Concierge rebooking</li>
            </ul>
            <a className="block w-full text-center bg-transparent hover:bg-sky/50 text-ocean border-2 border-ocean/20 font-bold py-4 rounded-full transition-all active:scale-[0.96]" href="#cta">Start planning free</a>
          </article>
        </div>
      </div>
    </section>
  );
}
