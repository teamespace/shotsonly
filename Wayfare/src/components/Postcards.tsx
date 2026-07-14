import { CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function Postcards() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Scroll reveal animation
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

    // Parallax Images
      const parallaxImages = gsap.utils.toArray('.gsap-parallax-img');
      parallaxImages.forEach((img: any) => {
        gsap.fromTo(img, 
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

    // Hover interactions
    const postcards = gsap.utils.toArray('.gsap-postcard');
    postcards.forEach((card: any) => {
      const img = card.querySelector('img');
      const tl = gsap.timeline({ paused: true });
      
      tl.to(card, {
        y: -12,
        rotation: 0,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(23,52,71,0.25)',
        duration: 0.4,
        ease: 'back.out(2)'
      }, 0)
      .to(img, {
        scale: 1.28,
        duration: 0.4,
        ease: 'power2.out'
      }, 0);

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 relative overflow-hidden" id="postcards" aria-labelledby="postcards-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto reveal">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">Postcards from real trips</span>
          <h2 id="postcards-title" className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-ink mb-6">Planned by Wayfare, walked by travelers</h2>
          <p className="text-xl text-ink/70">Three mornings from the Kyoto itinerary you just watched come together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <figure className="gsap-postcard bg-white/80 backdrop-blur-xl p-4 rounded-[32px] shadow-soft border border-white/60 reveal rotate-[-1deg] cursor-pointer" style={{ '--rd': 0 } as CSSProperties}>
            <div className="overflow-hidden rounded-[24px] mb-6">
              <img src="/Postcards 1.png" alt="A golden temple pavilion reflected in a still lake" className="gsap-parallax-img w-full aspect-4/3 object-cover scale-[1.2] origin-center" loading="lazy" />
            </div>
            <figcaption className="text-center font-bold tracking-tight text-xl text-ink mb-3">Temple gold at 06:40<small className="block font-sans font-bold text-[0.75rem] text-ocean/60 uppercase tracking-wider mt-1.5">Day 1 · Southern Kyoto</small></figcaption>
          </figure>
          <figure className="gsap-postcard bg-white/80 backdrop-blur-xl p-4 rounded-[32px] shadow-soft border border-white/60 reveal rotate-[1.5deg] translate-y-3 cursor-pointer" style={{ '--rd': 1 } as CSSProperties}>
            <div className="overflow-hidden rounded-[24px] mb-6">
              <img src="/Postcards 2.png" alt="A steaming bowl of ramen" className="gsap-parallax-img w-full aspect-4/3 object-cover scale-[1.2] origin-center" loading="lazy" />
            </div>
            <figcaption className="text-center font-bold tracking-tight text-xl text-ink mb-3">Ramen worth the detour<small className="block font-sans font-bold text-[0.75rem] text-ocean/60 uppercase tracking-wider mt-1.5">Day 2 · Downtown food crawl</small></figcaption>
          </figure>
          <figure className="gsap-postcard bg-white/80 backdrop-blur-xl p-4 rounded-[32px] shadow-soft border border-white/60 reveal rotate-[-1.5deg] cursor-pointer" style={{ '--rd': 2 } as CSSProperties}>
            <div className="overflow-hidden rounded-[24px] mb-6">
              <img src="/Postcards 3.png" alt="Arashiyama bamboo grove" className="gsap-parallax-img w-full aspect-4/3 object-cover scale-[1.2] origin-center" loading="lazy" />
            </div>
            <figcaption className="text-center font-bold tracking-tight text-xl text-ink mb-3">Arashiyama, before breakfast<small className="block font-sans font-bold text-[0.75rem] text-ocean/60 uppercase tracking-wider mt-1.5">Day 3 · Bamboo grove</small></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
