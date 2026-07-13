import { FadeIn } from './Shared';
import { motion } from 'motion/react';

const CANDIDATE_1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop";
const CANDIDATE_2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop";
const CANDIDATE_3 = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop";

const Tick = () => (
  <span className="shrink-0 w-[20px] h-[20px] rounded-full bg-[#2D2B52]/10 text-[#2D2B52] inline-flex items-center justify-center mt-[1px]" aria-hidden="true">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.6 2.6L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

export default function Features() {
  return (
    <section id="platform" className="py-[6rem]" aria-labelledby="featTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <FadeIn className="max-w-[800px] mb-[4rem] text-center mx-auto">
          <h2 id="featTitle" className="text-[clamp(2.2rem,4vw,3.2rem)] font-medium tracking-tight leading-[1.1] text-brand-indigo ">
            Every stage of the funnel, <br className="hidden md:block"/><span className="font-medium text-brand-indigo">finally</span> on the same brain.
          </h2>
          <p className="mt-[1.5rem] text-brand-slate text-[1.05rem] max-w-[600px] mx-auto">
            Candor plugs into your ATS in an afternoon, then turns its noise into ranked candidates, unblocked pipelines, and interviews that measure the same thing twice.
          </p>
        </FadeIn>

        {/* Feature 1: Match Scoring */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[2.5rem] md:gap-[5rem] items-center py-[4rem] border-b border-brand-line/40">
          <FadeIn className="order-1">
            <h3 className="text-[1.8rem] md:text-[2rem] font-medium tracking-tight text-brand-indigo leading-[1.2] ">
              Match scoring calibrated on your best people
            </h3>
            <p className="mt-[1.2rem] text-brand-slate text-[0.95rem] leading-relaxed max-w-[44ch]">
              Generic AI ranks candidates against the job post. Candor ranks them against the profiles of people who were promoted, retained, and rated top-tier on your team — and shows its reasoning line by line.
            </p>
            <ul className="mt-[1.5rem] flex flex-col gap-[0.8rem] list-none p-0">
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Explainable scores — every point traces to evidence</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Recalibrates as your team and roles evolve</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Adverse-impact monitoring built in</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.12} className="order-2 relative aspect-square w-full rounded-[32px] overflow-hidden border border-brand-line/40 flex items-center justify-center p-6 md:p-10 bg-brand-bg bg-cover bg-center" style={{ backgroundImage: "url('/fitur.png')" }}>
             <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6 w-full relative z-10 flex flex-col justify-center">
               <div className="flex flex-col gap-3 overflow-hidden p-1">
                 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }} className="flex items-center justify-between border border-white/20 rounded-xl p-3 shadow-sm bg-white/10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 text-white flex items-center justify-center font-medium text-[0.9rem] shadow-inner backdrop-blur-sm shrink-0">JR</div>
                       <div>
                          <div className="text-[0.85rem] font-medium text-white drop-shadow-sm">Jonas Reinholt</div>
                          <div className="text-[0.7rem] text-white/70">Staff Engineer · Berlin</div>
                       </div>
                    </div>
                    <div className="bg-white/20 text-white font-medium text-[0.85rem] px-3 py-1 rounded-full shadow-sm backdrop-blur-md border border-white/10">96 Match</div>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }} className="flex items-center justify-between border border-white/20 rounded-xl p-3 shadow-sm bg-white/5">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 text-white flex items-center justify-center font-medium text-[0.9rem] shadow-inner backdrop-blur-sm shrink-0">PN</div>
                       <div>
                          <div className="text-[0.85rem] font-medium text-white drop-shadow-sm">Priya Natarajan</div>
                          <div className="text-[0.7rem] text-white/70">Senior Engineer · Bengaluru</div>
                       </div>
                    </div>
                    <div className="bg-white/10 text-white/90 font-medium text-[0.85rem] px-3 py-1 rounded-full border border-white/10">89 Match</div>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }} className="flex items-center justify-between border border-white/10 rounded-xl p-3 shadow-sm opacity-70">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center font-medium text-[0.8rem]">DW</div>
                       <div>
                          <div className="text-[0.85rem] font-medium text-white drop-shadow-sm">Daniel Whitmore</div>
                          <div className="text-[0.7rem] text-white/70">Engineer II · Austin</div>
                       </div>
                    </div>
                    <div className="text-white/80 font-medium text-[0.85rem] px-3 py-1">61 Match</div>
                 </motion.div>
               </div>
               <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-[0.75rem] font-medium text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Ranked against 14 success profiles from your platform team
               </div>
             </div>
          </FadeIn>
        </div>

        {/* Feature 2: Pipeline Intelligence */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[2.5rem] md:gap-[5rem] items-center py-[4rem] border-b border-brand-line/40">
          <FadeIn delay={0.12} className="order-2 md:order-1 relative aspect-square w-full rounded-[32px] overflow-hidden border border-brand-line/40 flex items-center justify-center p-6 md:p-10 bg-brand-bg bg-cover bg-center" style={{ backgroundImage: "url('/fitur.png')" }}>
             <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6 w-full relative z-10 flex flex-col justify-center">
               <div className="flex flex-col gap-[1rem]">
                 {[
                   { label: 'Sourced', w: '100%', n: 312, c: 'bg-white/90 text-[#2D2B52]' },
                   { label: 'Applied', w: '72%', n: 214, c: 'bg-white/70 text-[#2D2B52]' },
                   { label: 'Screen', w: '35%', n: 58, c: 'bg-white/50 text-[#2D2B52]' },
                   { label: 'Interview', w: '20%', n: 19, c: 'bg-white/30 text-white' },
                   { label: 'Offer', w: '8%', n: 6, c: 'bg-emerald-400/80 text-white' }
                 ].map((st, i) => (
                   <div key={i} className="flex items-center gap-4 text-[0.8rem]">
                      <div className="w-[60px] text-white/90 font-medium drop-shadow-sm">{st.label}</div>
                      <div className="flex-1 bg-white/5 rounded-r-sm h-[24px] flex items-center relative border border-white/10">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: st.w }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`h-full rounded-r-sm flex items-center px-2 font-medium text-[0.7rem] shadow-sm backdrop-blur-sm ${st.c} overflow-hidden whitespace-nowrap`} 
                          >
                            {st.n}
                         </motion.div>
                         {i === 2 && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              whileInView={{ opacity: 1, scale: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                              className="absolute left-[38%] -top-8 bg-rose-500/20 backdrop-blur-md border border-rose-500/40 shadow-lg px-2 py-1 rounded text-[0.6rem] font-medium text-white whitespace-nowrap flex items-center gap-1 z-10"
                            >
                               <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]"/> Bottleneck detected
                               <div className="absolute -bottom-1 left-4 w-2 h-2 bg-rose-500/20 border-b border-r border-rose-500/40 rotate-45"/>
                            </motion.div>
                         )}
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-[0.75rem] font-medium text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Forecast: req closes Aug 14 — 9 days ahead of target
               </div>
             </div>
          </FadeIn>
          <FadeIn className="order-1 md:order-2">
            <h3 className="text-[1.8rem] md:text-[2rem] font-medium tracking-tight text-brand-indigo leading-[1.2] ">
              Pipeline intelligence that names the bottleneck
            </h3>
            <p className="mt-[1.2rem] text-brand-slate text-[0.95rem] leading-relaxed max-w-[44ch]">
              Candor watches every requisition's velocity against your own benchmarks. When a stage stalls, it tells you which one, which candidates are at risk, and what fixed it last time.
            </p>
            <ul className="mt-[1.5rem] flex flex-col gap-[0.8rem] list-none p-0">
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Stage-by-stage drop-off and aging alerts</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Forecasted fill dates for every open req</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Actionable insights to unblock pipelines</li>
            </ul>
          </FadeIn>
        </div>

        {/* Feature 3: Interview Kits */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[2.5rem] md:gap-[5rem] items-center py-[4rem] border-b border-brand-line/40">
          <FadeIn className="order-1">
            <h3 className="text-[1.8rem] md:text-[2rem] font-medium tracking-tight text-brand-indigo leading-[1.2] ">
              Interview kits that measure the same thing twice
            </h3>
            <p className="mt-[1.2rem] text-brand-slate text-[0.95rem] leading-relaxed max-w-[44ch]">
              For every shortlisted candidate, Candor drafts a structured interview kit — competency questions, probing follow-ups, and anchored scorecards — so two interviewers stop reaching two different conclusions.
            </p>
            <ul className="mt-[1.5rem] flex flex-col gap-[0.8rem] list-none p-0">
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Questions targeted at each candidate's gaps</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Anchored 1–5 scorecards for consistent evaluation</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Panel calibration flags before the debrief</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.12} className="order-2 relative aspect-square w-full rounded-[32px] overflow-hidden border border-brand-line/40 flex items-center justify-center p-6 md:p-10 bg-brand-bg bg-cover bg-center" style={{ backgroundImage: "url('/fitur.png')" }}>
             <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6 w-full relative z-10 flex flex-col justify-center">
               <div className="flex flex-col gap-4 overflow-hidden p-2 -m-2">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-sm relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                     <div className="text-[0.65rem] font-medium tracking-[0.05em] text-white/80 uppercase mb-2">COMPETENCY · SYSTEMS THINKING</div>
                     <p className="text-[0.85rem] text-white font-medium leading-relaxed mb-3 drop-shadow-sm">
                      "Walk me through a design system decision you later reversed. What signal changed your mind?"
                     </p>
                     <div className="flex gap-1 items-center mt-3">
                        <span className="text-[0.7rem] font-medium text-white/60 mr-2">Scorecard:</span>
                        <div className="w-8 h-2 rounded bg-white" />
                        <div className="w-8 h-2 rounded bg-white" />
                        <div className="w-8 h-2 rounded bg-white" />
                        <div className="w-8 h-2 rounded bg-white/20" />
                        <div className="w-8 h-2 rounded bg-white/20" />
                     </div>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-sm relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400" />
                     <div className="text-[0.65rem] font-medium tracking-[0.05em] text-purple-300 uppercase mb-2">PROBE · LEADERSHIP GAP</div>
                     <p className="text-[0.85rem] text-white font-medium leading-relaxed mb-3 drop-shadow-sm">
                      "Amara has led 4 designers but never through a re-org. Ask how she'd protect team velocity during one."
                     </p>
                  </motion.div>
               </div>
               
               <div className="mt-5 pt-4 border-t border-white/20 flex items-center gap-2 text-[0.75rem] font-medium text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Kit generated from her profile in 12 seconds
               </div>
             </div>
          </FadeIn>
        </div>

        {/* Feature 4: ATS Integration */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[2.5rem] md:gap-[5rem] items-center py-[4rem]">
          <FadeIn delay={0.12} className="order-2 md:order-1 relative aspect-square w-full rounded-[32px] overflow-hidden border border-brand-line/40 flex items-center justify-center p-6 md:p-10 bg-brand-bg bg-cover bg-center" style={{ backgroundImage: "url('/fitur.png')" }}>
             <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6 w-full relative z-10 flex flex-col items-center justify-center">
               <div className="flex items-center justify-center gap-6 relative w-full max-w-[280px]">
                  {/* Candor node */}
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} viewport={{ once: true }} className="w-[80px] h-[80px] rounded-[16px] bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center relative z-10 border border-white/30">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-white/80 to-white/40 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-[6px] bg-transparent rounded-full border-[2px] border-white/40" style={{ borderTopColor: 'white', borderRightColor: 'white', transform: 'rotate(45deg)' }} />
                     </motion.div>
                  </motion.div>
                  
                  {/* Connection Lines */}
                  <div className="absolute top-1/2 left-[80px] right-[80px] h-[2px] -translate-y-1/2 overflow-hidden bg-white/10">
                      <motion.div 
                         initial={{ x: '-100%' }}
                         whileInView={{ x: '100%' }}
                         transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                         className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" 
                      />
                  </div>
                  
                  {/* ATS Node */}
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }} viewport={{ once: true }} className="w-[80px] h-[80px] rounded-[16px] bg-white/10 backdrop-blur-md border border-white/30 shadow-sm flex items-center justify-center relative z-10">
                     <div className="text-[0.75rem] font-medium text-white drop-shadow-sm tracking-widest uppercase">ATS</div>
                  </motion.div>
               </div>
               
               <div className="w-full max-w-[280px] mt-8 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 text-[0.75rem] font-medium text-white/90 text-center shadow-inner">
                  Syncs seamlessly with Greenhouse, Lever, Ashby, and Workday.
               </div>
             </div>
          </FadeIn>
          <FadeIn className="order-1 md:order-2">
            <h3 className="text-[1.8rem] md:text-[2rem] font-medium tracking-tight text-brand-indigo leading-[1.2] ">
              Works where you already work
            </h3>
            <p className="mt-[1.2rem] text-brand-slate text-[0.95rem] leading-relaxed max-w-[44ch]">
              You don't need to replace your existing systems. Candor connects directly to your ATS and enriches it with intelligence without disrupting your established workflows.
            </p>
            <ul className="mt-[1.5rem] flex flex-col gap-[0.8rem] list-none p-0">
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> 1-click integration with major ATS providers</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Zero workflow disruption for recruiters</li>
              <li className="flex gap-[0.7rem] items-start text-[0.9rem] font-medium text-brand-indigo"><Tick /> Two-way sync keeps data fresh everywhere</li>
            </ul>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
