import { CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function CTA() {
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
    <section ref={containerRef} className="relative overflow-hidden bg-ocean-deep pt-24 pb-0" id="cta" aria-labelledby="cta-title">
      <div className="absolute inset-0 z-0">
         <img src="/bg-footer.png" alt="Background" className="w-full h-full object-cover mix-blend-overlay opacity-30"/>
         <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 pb-24 text-center md:text-left reveal">
          <h2 id="cta-title" className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-6 leading-[1.1]">Join us on your next adventure!</h2>
          <p className="text-white/80 text-xl mb-10 max-w-lg mx-auto md:mx-0">The best trips start with a good plan. Yours takes 40 seconds. No credit card required to start.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <a className="bg-white text-ink hover:bg-sky px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 active:scale-[0.96] inline-block" href="#top">Start planning free</a>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 pr-6 rounded-full border border-white/20 text-white text-sm font-bold shadow-lg">
               <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR" className="w-6 h-6"/></span>
               Scan to download
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative flex justify-center items-end reveal w-full" style={{ '--rd': 1 } as CSSProperties}>
           <div className="w-[300px] h-[500px] bg-ink-dark rounded-t-[40px] p-[6px] pb-0 shadow-[0_-20px_50px_rgba(0,0,0,0.4)] relative border-t border-l border-r border-white/10">
              <div className="w-full h-full bg-gray-50 rounded-t-[34px] overflow-hidden relative flex flex-col shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                 {/* iOS Status Bar */}
                 <div className="absolute top-0 inset-x-0 h-10 bg-transparent z-20 flex justify-between px-6 items-center pt-2">
                    <span className="text-ink drop-shadow-sm font-bold text-[0.6rem] tracking-wide">9:41</span>
                    <div className="flex gap-1 items-center opacity-80">
                       {/* Fake Signal */}
                       <div className="flex items-end gap-[1px] h-2.5 mr-0.5">
                          <div className="w-1 h-1.5 bg-ink rounded-sm"></div>
                          <div className="w-1 h-2 bg-ink rounded-sm"></div>
                          <div className="w-1 h-2.5 bg-ink rounded-sm"></div>
                          <div className="w-1 h-3 bg-ink rounded-sm"></div>
                       </div>
                       {/* Fake Wifi */}
                       <svg className="w-3.5 h-3.5 text-ink drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"></path><path d="M2.12298 9.87702C7.57502 4.42498 16.425 4.42498 21.877 9.87702C22.2676 10.2676 22.2676 10.9008 21.877 11.2913C21.4865 11.6819 20.8533 11.6819 20.4628 11.2913C15.7909 6.61952 8.20914 6.61952 3.53724 11.2913C3.14671 11.6819 2.51355 11.6819 2.12301 11.2913C1.73248 10.9008 1.73245 10.2676 2.12298 9.87702Z"></path><path d="M6.36622 14.1208C9.48169 11.0053 14.5186 11.0053 17.6341 14.1208C18.0246 14.5113 18.0246 15.1445 17.6341 15.535C17.2435 15.9255 16.6104 15.9255 16.2198 15.535C13.887 13.2021 10.1132 13.2021 7.78043 15.535C7.38991 15.9255 6.75674 15.9255 6.36622 15.535C5.97569 15.1445 5.97569 14.5113 6.36622 14.1208Z"></path></svg>
                       {/* Fake Battery */}
                       <div className="w-5 h-2.5 border border-ink/90 rounded-[3px] p-[1px] flex items-center relative drop-shadow-sm ml-0.5">
                         <div className="bg-ink w-[85%] h-full rounded-[1.5px]"></div>
                         <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-[1.5px] h-1 bg-ink/90 rounded-r-[1px]"></div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Notch */}
                 <div className="absolute top-0 inset-x-0 h-6 z-30 flex justify-center pointer-events-none">
                    <div className="w-[42%] h-5 bg-ink rounded-b-[14px] mt-[-1px] relative">
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20 border border-black/20"></div>
                    </div>
                 </div>
                 
                 <div className="pt-16 px-5 flex flex-col h-full bg-gray-50 relative z-10">
                    <div className="bg-white px-5 py-4 rounded-[20px] shadow-[0_8px_20px_-4px_rgba(23,52,71,0.08)] border border-ocean/5 mb-5 hover:shadow-[0_8px_25px_-4px_rgba(23,52,71,0.12)] transition-shadow">
                       <h4 className="font-bold tracking-tight text-2xl mb-1 text-ink">Kyoto Explorer</h4>
                       <p className="text-xs text-ocean-deep font-bold flex items-center gap-1.5 opacity-80"><span className="w-1.5 h-1.5 rounded-full bg-ocean"></span> 3 days • September</p>
                    </div>
                    
                    <div className="relative mb-6 group cursor-pointer">
                      <div className="absolute -inset-2 bg-gradient-to-br from-ocean/20 to-sunset/20 rounded-[28px] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
                      <img src="/phone-img.avif" className="w-full h-44 object-cover rounded-[24px] shadow-[0_12px_24px_-8px_rgba(23,52,71,0.2)] border border-black/5 relative z-10" alt="App UI" />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-ink text-[0.65rem] font-bold px-3 py-1.5 rounded-full shadow-sm z-20">Tap to preview</div>
                    </div>
                    
                    <div className="bg-accent text-white text-center py-4 rounded-full font-bold shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:scale-[0.98] transition-transform cursor-pointer hover:bg-accent-deep text-lg mt-auto mb-6">
                       View Itinerary
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
