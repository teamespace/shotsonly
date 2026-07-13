import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './Shared';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  return (
    <section className="pt-[4rem] lg:pt-[6rem] pb-[5rem] relative overflow-hidden" aria-labelledby="heroTitle">
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0 w-[140%] h-[140%]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#2D2B52]/30" />
      </motion.div>
      
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Top Tag */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22,0.7,0.3,1] }}
            className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-white mb-6 border border-white/30 rounded-full px-4 py-1.5 shadow-sm bg-black/20 backdrop-blur-sm"
        >
            <span className="w-[6px] h-[6px] rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
            Recruitment Intelligence Platform
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22,0.7,0.3,1] }}
            id="heroTitle" className="text-[clamp(3rem,6vw,4.8rem)] leading-[1.05] tracking-tight text-white max-w-[1000px]  drop-shadow-md"
        >
            Evaluate candidates <br className="hidden md:block"/>objectively with <span className="font-medium text-white">AI.</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22,0.7,0.3,1] }}
            className="mt-[1.5rem] text-white/80 text-[1.15rem] max-w-[600px] leading-relaxed mx-auto drop-shadow"
        >
            Not just matching keywords. Candor helps HR and recruiters assess candidates faster and more objectively, integrating seamlessly with your existing ATS.
        </motion.p>
        
        {/* Actions */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22,0.7,0.3,1] }}
            className="flex gap-[0.9rem] mt-[2.5rem] flex-wrap justify-center"
        >
            <Button variant="primary" href="#demo">Get a demo</Button>
        </motion.div>
        
        {/* Dashboard Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 26, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.45, ease: [0.22,0.7,0.3,1] }}
          className="w-full relative mx-auto max-w-[850px] aspect-[850/780] overflow-visible mt-[4rem] hidden sm:block"
        >
           {/* We use a container that scales its content based on the aspect ratio to maintain layout on smaller screens */}
           <div className="absolute inset-0" style={{ transform: 'scale(var(--scale, 1))', transformOrigin: 'top left' }}>
               <style>{`
                  @media (max-width: 850px) {
                     .dashboard-scale {
                        --scale: calc(100vw / 950);
                     }
                  }
               `}</style>
               <div className="dashboard-scale w-[850px] h-[780px] relative">
                   {/* Candidate Card */}
                   <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8, type: "spring", bounce: 0.4, duration: 0.8 }} className="absolute top-[40px] left-[40px] right-[40px] bg-white/10 backdrop-blur-2xl rounded-[24px] shadow-2xl border border-white/20 p-6 flex items-center justify-between z-10">
                      <div className="flex items-center gap-5">
                         <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#2D2B52] to-purple-500 border-[2px] border-white/20 text-white flex items-center justify-center text-[1.4rem] tracking-wide font-medium shadow-inner shrink-0">AO</div>
                         <div>
                            <h4 className="text-white font-medium text-[1.2rem] drop-shadow-md">Amara Osei</h4>
                            <p className="text-white/70 text-[0.85rem] mt-0.5">Senior Product Designer - Lagos (remote)</p>
                            <div className="flex gap-2 mt-3 text-[0.7rem] font-medium">
                               <span className="px-3 py-1 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20">Design systems</span>
                               <span className="px-3 py-1 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20">B2B SaaS</span>
                               <span className="px-3 py-1 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20">Figma</span>
                               <span className="px-3 py-1 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20">Led team of 4</span>
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center gap-8 pr-2">
                         <div className="flex flex-col items-center">
                            <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                               <svg className="w-full h-full transform -rotate-90 drop-shadow-md" viewBox="0 0 100 100">
                                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                                  <circle cx="50" cy="50" r="40" stroke="#FFF" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="15.07" strokeLinecap="round" />
                               </svg>
                               <span className="absolute text-white font-medium text-[1.3rem] drop-shadow-md">94</span>
                            </div>
                            <span className="text-[0.65rem] font-medium text-white/60 tracking-widest mt-2 uppercase">Match</span>
                         </div>
                         <div className="flex flex-col gap-2 w-[110px]">
                            <button className="bg-white/20 text-white text-[0.8rem] font-medium px-4 py-2 rounded-full w-full shadow-lg hover:bg-white/30 transition-all border border-white/30">Advance</button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-[0.8rem] font-medium px-4 py-2 rounded-full w-full hover:bg-white/20 transition-all">Why 94?</button>
                         </div>
                      </div>
                   </motion.div>
        
                   {/* Skill Fit Card */}
                   <motion.div initial={{ opacity: 0, x: -30, rotate: -2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ delay: 1.0, type: "spring", bounce: 0.3, duration: 0.8 }} className="absolute top-[200px] left-[40px] w-[370px] h-[370px] bg-white/10 backdrop-blur-2xl rounded-[24px] shadow-2xl border border-white/20 p-7 z-20 flex flex-col">
                      <h5 className="text-[0.65rem] font-medium text-white/70 tracking-widest uppercase mb-6 drop-shadow-md">Skill Fit vs. Role Profile</h5>
                      
                      <div className="flex-1 relative flex justify-center items-center drop-shadow-lg">
                         <div className="w-[200px] h-[200px] relative mt-2">
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                               {/* Background Pentagons */}
                               {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                                  <polygon 
                                     key={i}
                                     points="50,10 88,37.6 73.5,82.3 26.5,82.3 12,37.6" 
                                     fill="none" 
                                     stroke="rgba(255,255,255,0.2)" 
                                     strokeWidth="0.5" 
                                     transform={`scale(${scale})`} 
                                     style={{ transformOrigin: '50px 50px' }}
                                  />
                               ))}
                               
                               {/* Axis Lines */}
                               <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                               <line x1="50" y1="50" x2="88" y2="37.6" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                               <line x1="50" y1="50" x2="73.5" y2="82.3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                               <line x1="50" y1="50" x2="26.5" y2="82.3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                               <line x1="50" y1="50" x2="12" y2="37.6" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                               
                               {/* Data Polygon */}
                                <motion.polygon 
                                   initial={{ scale: 0, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
                                   style={{ transformOrigin: '50px 50px' }}
                                   points="50,14 80.4,40.1 66.4,72.6 30.0,77.5 21.4,40.7" 
                                   fill="#2D2B52" 
                                   fillOpacity="0.4" 
                                   stroke="#2D2B52" 
                                   strokeWidth="1.5" 
                                   strokeLinejoin="round"
                                />
                               
                               {/* Data Points */}
                               <circle cx="50" cy="14" r="2.5" fill="#FFF" shadow="0 2px 4px rgba(0,0,0,0.5)" />
                               <circle cx="80.4" cy="40.1" r="2.5" fill="#FFF" />
                               <circle cx="66.4" cy="72.6" r="2.5" fill="#FFF" />
                               <circle cx="30.0" cy="77.5" r="2.5" fill="#FFF" />
                               <circle cx="21.4" cy="40.7" r="2.5" fill="#FFF" />
                            </svg>
                            
                            {/* Labels */}
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.65rem] font-medium text-white/90">Craft</span>
                            <span className="absolute top-[32%] -right-8 text-[0.65rem] font-medium text-white/90">Systems</span>
                            <span className="absolute -bottom-4 right-2 text-[0.65rem] font-medium text-white/90">Leadership</span>
                            <span className="absolute -bottom-4 left-2 text-[0.65rem] font-medium text-white/90">Velocity</span>
                            <span className="absolute top-[32%] -left-8 text-[0.65rem] font-medium text-white/90">Domain</span>
                         </div>
                      </div>
                      
                      <p className="text-center text-white/70 text-[0.75rem] mt-6">
                         Exceeds profile on <span className="font-medium text-emerald-400">4 of 5</span> dimensions
                      </p>
                   </motion.div>
        
                   {/* Pipeline Card */}
                   <motion.div initial={{ opacity: 0, x: 30, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ delay: 1.2, type: "spring", bounce: 0.3, duration: 0.8 }} className="absolute top-[200px] right-[40px] w-[370px] h-[370px] bg-white/10 backdrop-blur-2xl rounded-[24px] shadow-2xl border border-white/20 p-7 z-20 flex flex-col justify-between">
                      <h5 className="text-[0.65rem] font-medium text-white/70 tracking-widest uppercase mb-4 drop-shadow-md">Pipeline • Sr. Product Designer</h5>
                      
                      <div className="flex flex-col gap-5 flex-1 justify-center mb-4">
                         {[
                            { label: 'Applied', val: 128, w: '100%' },
                            { label: 'Screen', val: 42, w: '70%' },
                            { label: 'Interview', val: 11, w: '40%' },
                            { label: 'Offer', val: 3, w: '20%' },
                         ].map((st, i) => (
                            <div key={st.label} className="flex items-center justify-between text-[0.85rem]">
                               <span className="text-white/80 font-medium w-[75px]">{st.label}</span>
                               <div className="flex-1 bg-white/10 h-[8px] rounded-full mx-4 overflow-hidden border border-white/5">
                                  <motion.div initial={{ width: 0 }} animate={{ width: st.w }} transition={{ delay: 1.5 + (i * 0.15), duration: 0.8, ease: "easeOut" }} className="bg-white/80 h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                               </div>
                               <span className="text-white font-medium w-[30px] text-right">{st.val}</span>
                            </div>
                         ))}
                      </div>
                      
                      <div className="bg-[#2D2B52]/40 backdrop-blur-md border border-[#2D2B52]/60 rounded-[12px] p-4 flex gap-3 mt-auto shadow-inner">
                         <span className="text-white text-[1rem] drop-shadow-md">⚠️</span>
                         <p className="text-white/90 text-[0.8rem] font-medium leading-[1.5]">
                            Screen stage is 6 days slower than your benchmark — 2 top matches at risk of dropping off.
                         </p>
                      </div>
                   </motion.div>
        
                   {/* Stat Card */}
                   <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 1.4, type: "spring", bounce: 0.4, duration: 0.8 }} className="absolute bottom-[40px] left-[40px] right-[40px] h-[140px] bg-black/30 backdrop-blur-3xl rounded-[24px] shadow-2xl border border-white/20 p-8 z-20 flex items-center justify-center gap-10">
                      <h3 className="text-white text-[5rem] font-medium leading-none tracking-tighter drop-shadow-lg">-44%</h3>
                      <div className="w-[1px] h-[60px] bg-white/20" />
                      <p className="text-white/90 text-[1.1rem] font-medium leading-[1.5] max-w-[400px]">
                         Reduction in time-to-hire after one quarter, across teams calibrated on Candor.
                      </p>
                   </motion.div>
               </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
