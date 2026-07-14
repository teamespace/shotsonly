import { MessageSquare, Map as MapIcon, Navigation } from 'lucide-react';
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

export function HowItWorks() {
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

      const bubbles = el.querySelectorAll('.gsap-chat-bubble');
      if(bubbles.length > 0) {
         tl.fromTo(bubbles, { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.5)' }, "-=0.5");
      }

      const mapItems = el.querySelectorAll('.gsap-map-item');
      if(mapItems.length > 0) {
         tl.fromTo(mapItems, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out' }, "-=0.5");
      }

      const mapPins = el.querySelectorAll('.gsap-map-pin');
      if(mapPins.length > 0) {
         tl.fromTo(mapPins, { y: -20, opacity: 0, scale: 0 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(2)' }, "-=0.2");
      }

      const mobileSheet = el.querySelectorAll('.gsap-mobile-sheet');
      if(mobileSheet.length > 0) {
         tl.fromTo(mobileSheet, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, "-=0.6");
      }

      // 3D Hover Interactions
      const mockups = el.querySelectorAll('.gsap-3d-mockup');
      mockups.forEach((mockup: any) => {
        const inner = mockup.querySelector('.gsap-3d-inner');
        if (!inner) return;

        mockup.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = mockup.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xPct = (x / rect.width - 0.5) * 2; 
          const yPct = (y / rect.height - 0.5) * 2; 
          
          gsap.to(inner, {
            rotateX: -yPct * 8,
            rotateY: xPct * 8,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1200,
            transformOrigin: "center center"
          });
        });

        mockup.addEventListener('mouseleave', () => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power2.out"
          });
        });
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#FFFFFF] relative" id="how">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">How it works</span>
          <h2 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-ink mb-6">Type a vibe. Get a trip.</h2>
          <p className="text-lg text-ink/70">No more 20 open tabs or copying addresses into Google Maps. Wayfare builds a fully routed itinerary in seconds.</p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 reveal">
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="text-4xl font-serif font-medium tracking-tight text-ink mb-4">Tell it your trip</h3>
              <p className="text-ink/70 text-lg leading-relaxed mb-6 max-w-lg">"Two weeks in Portugal, September, love seafood and tile museums, hate queues." That's a complete brief for Wayfare.</p>
              <div className="flex items-center gap-3 text-sm font-bold text-ocean">
                 <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent"><MessageSquare size={18}/></span>
                 Feel free to chat with us!
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="w-full aspect-square max-h-[600px] bg-white bg-[url('/bg-how.png')] bg-cover bg-center bg-no-repeat rounded-[40px] border border-ocean/5 shadow-soft flex items-center justify-center p-6 sm:p-12 mx-auto gsap-3d-mockup" style={{ perspective: '1200px' }}>
               <div className="w-full aspect-[4/3] max-h-[500px] bg-white rounded-[24px] shadow-float border border-white/60 overflow-hidden flex flex-col gsap-3d-inner">
                   {/* Browser Mockup Header */}
                   <div className="bg-gray-50 px-4 py-3 border-b border-ocean/5 flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/5"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/5"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/5"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white border border-ocean/5 px-4 py-1.5 rounded-md text-[0.65rem] text-ink/40 font-mono shadow-sm flex items-center gap-2">
                           <span className="w-2 h-2 rounded-sm bg-ocean/20"></span> wayfare.com/chat
                        </div>
                      </div>
                   </div>
                   
                   {/* Chat UI */}
                   <div className="flex-1 flex flex-col bg-white">
                      {/* App Header */}
                      <div className="px-5 py-3 border-b border-ocean/5 flex items-center gap-3">
                         <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sunset to-ocean flex items-center justify-center text-white font-bold text-sm shadow-sm relative">
                            W
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                         </div>
                         <div>
                            <div className="font-bold text-ink text-sm">Wayfare Trip Assistant</div>
                            <div className="text-[0.65rem] text-ocean/80 font-bold">Online • Responds instantly</div>
                         </div>
                      </div>
                      
                      {/* Chat Area */}
                      <div className="flex-1 p-5 flex flex-col gap-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] overflow-hidden">
                        <div className="flex flex-col gap-1.5 self-end max-w-[85%] gsap-chat-bubble">
                          <div className="bg-ink text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm leading-relaxed">
                            Two weeks in Japan, September, love food and temples!
                          </div>
                          <span className="text-[0.65rem] text-ink/40 text-right pr-1 font-medium tracking-wider">10:42 AM</span>
                        </div>
                        
                        <div className="flex gap-3 self-start max-w-[90%] gsap-chat-bubble">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sunset to-ocean shrink-0 flex items-center justify-center text-white text-xs shadow-sm mt-1">W</div>
                          <div className="flex flex-col gap-1.5">
                            <div className="bg-white border border-ocean/5 text-ink p-4 rounded-2xl rounded-tl-sm text-sm shadow-[0_4px_20px_rgba(23,52,71,0.05)] leading-relaxed relative">
                              <div className="absolute top-0 right-0 w-16 h-16 bg-sky rounded-tr-2xl blur-xl opacity-50 -z-10"></div>
                              Perfect. I'm building a 14-day itinerary balancing culinary hotspots with serene temple visits. Want me to focus on Kyoto and Tokyo?
                            </div>
                            <span className="text-[0.65rem] text-ink/40 pl-1 font-medium tracking-wider">10:42 AM</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input Area */}
                      <div className="p-4 border-t border-ocean/5 bg-white">
                         <div className="bg-gray-50 rounded-full border border-ocean/10 px-5 py-3 flex items-center justify-between shadow-inner">
                            <span className="text-ink/30 text-sm">Type your message...</span>
                            <div className="w-8 h-8 rounded-full bg-sunset text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-sunset-deep transition-colors"><Navigation size={14} className="ml-[-2px] mb-[-2px] transform rotate-45" /></div>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 reveal">
             <div className="flex-1 w-full">
              <div className="w-full aspect-square max-h-[600px] bg-white bg-[url('/bg-how.png')] bg-cover bg-center bg-no-repeat rounded-[40px] border border-ocean/5 shadow-soft flex items-center justify-center p-6 sm:p-12 mx-auto gsap-3d-mockup" style={{ perspective: '1200px' }}>
                 <div className="w-full aspect-[4/3] max-h-[500px] bg-white rounded-[24px] shadow-float border border-white/60 overflow-hidden flex flex-col gsap-3d-inner">
                   {/* Browser Mockup Header */}
                   <div className="bg-gray-50 px-4 py-3 border-b border-ocean/5 flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/5"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/5"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/5"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white border border-ocean/5 px-4 py-1.5 rounded-md text-[0.65rem] text-ink/40 font-mono shadow-sm flex items-center gap-2">
                           <span className="w-2 h-2 rounded-sm bg-ocean/20"></span> wayfare.com/map
                        </div>
                      </div>
                   </div>
                   
                   {/* Map UI */}
                   <div className="flex-1 flex bg-white overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-[45%] bg-white border-r border-ocean/5 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                         <div className="p-4 border-b border-ocean/5 bg-gradient-to-b from-gray-50 to-white">
                            <div className="text-[0.65rem] font-bold text-sunset uppercase tracking-widest mb-1">Day 1</div>
                            <div className="font-bold text-ink text-sm">Southern Kyoto</div>
                         </div>
                         <div className="flex-1 p-3 flex flex-col gap-2 bg-gray-50/50 overflow-hidden relative">
                           {/* Route Line Connector */}
                           <div className="absolute left-[31px] top-6 bottom-10 w-0.5 bg-ocean/10"></div>
                           
                           {/* Stop 1 */}
                           <div className="flex gap-3 p-2 rounded-xl bg-white border border-ocean/5 shadow-sm relative z-10 cursor-pointer hover:border-ocean/20 transition-colors gsap-map-item">
                             <div className="relative">
                               <img src="/Postcards 1.png" className="w-10 h-10 rounded-lg object-cover shadow-sm shrink-0" alt="Fushimi Inari" />
                               <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-ocean text-white text-[0.5rem] font-bold flex items-center justify-center border border-white">1</div>
                             </div>
                             <div className="flex flex-col justify-center flex-1 min-w-0">
                               <div className="font-bold text-ink text-xs truncate">Fushimi Inari</div>
                               <div className="text-[0.65rem] text-ocean font-bold mt-0.5">09:00 - 11:30</div>
                             </div>
                           </div>
                           
                           {/* Transit */}
                           <div className="pl-12 py-0.5 text-[0.6rem] text-ink/40 font-bold flex items-center gap-1.5 relative z-10 gsap-map-item">
                              <div className="w-1.5 h-1.5 rounded-full bg-sunset/50"></div> 14 min walk
                           </div>
                           
                           {/* Stop 2 */}
                           <div className="flex gap-3 p-2 rounded-xl border border-transparent hover:bg-white hover:shadow-sm hover:border-ocean/5 transition-all relative z-10 cursor-pointer gsap-map-item">
                             <div className="relative">
                               <img src="/Postcards 2.png" className="w-10 h-10 rounded-lg object-cover shadow-sm shrink-0" alt="Nishiki Market" />
                               <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-sunset text-white text-[0.5rem] font-bold flex items-center justify-center border border-white">2</div>
                             </div>
                             <div className="flex flex-col justify-center flex-1 min-w-0">
                               <div className="font-bold text-ink text-xs truncate">Nishiki Market</div>
                               <div className="text-[0.65rem] text-ink/50 mt-0.5">12:00 - 13:30</div>
                             </div>
                           </div>
                         </div>
                      </div>
                      
                      {/* Map Canvas */}
                      <div className="flex-1 relative overflow-hidden bg-white">
                         <img src="/map.png" alt="Map Route Background" className="absolute inset-0 w-full h-full object-cover" />
                         
                         {/* Route Path SVG */}
                         <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                            {/* Route Shadow */}
                            <path d="M 40 160 Q 100 80 200 130 T 320 90" fill="none" stroke="rgba(37,99,235,0.15)" strokeWidth="8" strokeLinecap="round"/>
                            {/* Route Line */}
                            <path d="M 40 160 Q 100 80 200 130 T 320 90" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
                         </svg>
                         
                         {/* Location Pins */}
                         <div className="absolute top-[160px] left-[40px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gsap-map-pin">
                           <div className="bg-ocean text-white text-[0.6rem] font-bold px-2.5 py-1 rounded-md mb-1.5 shadow-[0_4px_10px_rgba(27,110,156,0.3)] whitespace-nowrap relative">
                             Fushimi Inari
                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-solid border-t-ocean border-t-4 border-x-transparent border-x-4 border-b-0"></div>
                           </div>
                           <div className="w-3.5 h-3.5 bg-white rounded-full border-[3px] border-ocean shadow-md relative z-10"></div>
                         </div>
                         
                         <div className="absolute top-[130px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gsap-map-pin">
                           <div className="bg-white text-ink text-[0.6rem] font-bold px-2.5 py-1 rounded-md mb-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.1)] whitespace-nowrap relative">
                             Nishiki Market
                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-solid border-t-white border-t-4 border-x-transparent border-x-4 border-b-0"></div>
                           </div>
                           <div className="w-4 h-4 bg-sunset rounded-full border-[3px] border-white shadow-lg relative z-10">
                              <div className="absolute inset-0 bg-sunset rounded-full animate-ping opacity-60"></div>
                           </div>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-4xl font-serif font-medium tracking-tight text-ink mb-4">Shape the draft</h3>
              <p className="text-ink/70 text-lg leading-relaxed mb-6 max-w-lg">A full itinerary appears on the map in about 40 seconds. Drag days around, pin must-sees, strike anything that isn't you — it re-routes instantly.</p>
              <div className="flex items-center gap-3 text-sm font-bold text-ocean">
                 <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent"><MapIcon size={18}/></span>
                 Cool travel plans.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 reveal">
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="text-4xl font-serif font-medium tracking-tight text-ink mb-4">Travel with it</h3>
              <p className="text-ink/70 text-lg leading-relaxed mb-6 max-w-lg">Offline maps, live "you're 10 minutes behind" nudges, and one-tap rebooking when a train strike tries to ruin Tuesday.</p>
              <div className="flex items-center gap-3 text-sm font-bold text-ocean">
                 <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent"><Navigation size={18}/></span>
                 Get personalized recommendations.
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full flex justify-center">
              <div className="w-full aspect-square max-h-[600px] bg-white bg-[url('/bg-how.png')] bg-cover bg-center bg-no-repeat rounded-[40px] border border-ocean/5 shadow-soft flex items-center justify-center p-6 mx-auto overflow-hidden gsap-3d-mockup" style={{ perspective: '1200px' }}>
                 {/* Mobile Phone Mockup */}
                 <div className="gsap-3d-inner w-full h-full flex items-center justify-center">
                   <div className="w-[260px] h-[480px] bg-ink-dark rounded-[40px] p-[6px] shadow-[0_25px_50px_-12px_rgba(23,52,71,0.5)] relative border border-white/10 shrink-0 transform scale-[0.8] sm:scale-90 md:scale-100">
                      <div className="w-full h-full bg-white rounded-[34px] overflow-hidden relative flex flex-col shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                       {/* iOS Status Bar */}
                       <div className="absolute top-0 inset-x-0 h-10 bg-transparent z-20 flex justify-between px-6 items-center pt-2">
                          <span className="text-white drop-shadow-md font-bold text-[0.6rem] tracking-wide">9:41</span>
                          <div className="flex gap-1 items-center">
                             {/* Fake Signal */}
                             <div className="flex items-end gap-[1px] h-2.5 mr-0.5">
                                <div className="w-1 h-1.5 bg-white rounded-sm"></div>
                                <div className="w-1 h-2 bg-white rounded-sm"></div>
                                <div className="w-1 h-2.5 bg-white rounded-sm"></div>
                                <div className="w-1 h-3 bg-white rounded-sm"></div>
                             </div>
                             {/* Fake Wifi */}
                             <svg className="w-3.5 h-3.5 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"></path><path d="M2.12298 9.87702C7.57502 4.42498 16.425 4.42498 21.877 9.87702C22.2676 10.2676 22.2676 10.9008 21.877 11.2913C21.4865 11.6819 20.8533 11.6819 20.4628 11.2913C15.7909 6.61952 8.20914 6.61952 3.53724 11.2913C3.14671 11.6819 2.51355 11.6819 2.12301 11.2913C1.73248 10.9008 1.73245 10.2676 2.12298 9.87702Z"></path><path d="M6.36622 14.1208C9.48169 11.0053 14.5186 11.0053 17.6341 14.1208C18.0246 14.5113 18.0246 15.1445 17.6341 15.535C17.2435 15.9255 16.6104 15.9255 16.2198 15.535C13.887 13.2021 10.1132 13.2021 7.78043 15.535C7.38991 15.9255 6.75674 15.9255 6.36622 15.535C5.97569 15.1445 5.97569 14.5113 6.36622 14.1208Z"></path></svg>
                             {/* Fake Battery */}
                             <div className="w-5 h-2.5 border border-white/90 rounded-[3px] p-[1px] flex items-center relative drop-shadow-md ml-0.5">
                               <div className="bg-white w-[85%] h-full rounded-[1.5px]"></div>
                               <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-[1.5px] h-1 bg-white/90 rounded-r-[1px]"></div>
                             </div>
                          </div>
                       </div>
                       
                       {/* Notch */}
                       <div className="absolute top-0 inset-x-0 h-6 z-30 flex justify-center pointer-events-none">
                          <div className="w-[42%] h-5 bg-ink rounded-b-[14px] mt-[-1px] relative">
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20 border border-black/20"></div>
                          </div>
                       </div>
                       
                       {/* Map / Cover Image Header */}
                       <div className="h-[220px] w-full relative shrink-0 bg-ink">
                          <img src="/phone-img.avif" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Kyoto" />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent mix-blend-multiply"></div>
                          
                          <div className="absolute bottom-7 left-5 z-10 text-white">
                             <div className="text-[0.6rem] font-bold tracking-widest uppercase mb-1 opacity-90">Day 1 • 14:00</div>
                             <h4 className="text-2xl font-bold tracking-tight leading-none drop-shadow-md">Kyoto</h4>
                          </div>
                       </div>
                       
                       {/* App Content Sheet */}
                       <div className="flex-1 bg-white relative rounded-t-[24px] mt-[-18px] z-20 px-5 pt-3 pb-6 flex flex-col gsap-mobile-sheet">
                          {/* Floating Map Button */}
                          <div className="absolute -top-6 right-5 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(23,52,71,0.15)] flex items-center justify-center text-ocean hover:scale-105 transition-transform cursor-pointer">
                             <MapIcon size={20} />
                          </div>
                          
                          {/* Drag Handle */}
                          <div className="w-12 h-[3px] bg-gray-200 rounded-full mx-auto mb-6 mt-1"></div>
                          
                          {/* Live Activity Card */}
                          <div className="bg-gradient-to-br from-[#3A7E9F] to-[#255C7A] rounded-[24px] p-5 shadow-[0_10px_30px_rgba(27,110,156,0.25)] flex flex-col gap-5 relative overflow-hidden mb-auto">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                             
                             <div className="flex justify-between items-center relative z-10">
                                <div className="text-[0.6rem] bg-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold text-white shadow-sm backdrop-blur-sm">Up Next</div>
                                <div className="text-sm font-bold text-white tabular-nums">14:30</div>
                             </div>
                             
                             <div className="relative z-10">
                                <div className="font-bold text-xl text-white mb-2 tracking-tight">Tea Ceremony</div>
                                <div className="text-xs text-white/80 flex items-center gap-1.5 font-medium">
                                   <Navigation size={12} className="opacity-80" /> 12 min walk • Gion
                                </div>
                             </div>
                          </div>
                          
                          {/* Actions Grid */}
                          <div className="flex gap-3 pb-2 pt-4">
                             <div className="flex-1 bg-ink text-white flex items-center justify-center py-4 rounded-[24px] font-bold shadow-[0_8px_20px_rgba(23,52,71,0.2)] hover:scale-[0.98] transition-transform cursor-pointer text-sm">
                                Navigate
                             </div>
                             <div className="w-[52px] h-[52px] bg-white text-ink flex items-center justify-center rounded-full border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="font-bold text-xl leading-none -mt-3 tracking-widest opacity-80">...</span>
                             </div>
                          </div>
                       </div>
                       
                       {/* iOS Home Indicator */}
                       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[4px] bg-ink/90 rounded-full z-30"></div>
                    </div>
                 </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
