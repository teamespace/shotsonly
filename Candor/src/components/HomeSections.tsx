import { FadeIn, Button } from './Shared';
import { motion } from 'motion/react';

const Tick = ({ variant = "light" }: { variant?: "light" | "solid" }) => (
  <span className={`shrink-0 w-[20px] h-[20px] rounded-full inline-flex items-center justify-center mt-[2px] ${variant === 'solid' ? 'bg-[#2D2B52] text-white' : 'bg-[#2D2B52]/10 text-[#2D2B52]'}`} aria-hidden="true">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.6 2.6L9 1" stroke={variant === 'solid' ? 'white' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

export function Logos() {
  return (
    <section className="pt-[2rem] pb-[4rem]" aria-label="Customers">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="flex items-center gap-[1.5rem_3rem] flex-wrap justify-center border-t border-brand-line/40 pt-10">
          <ul className="flex gap-[1.5rem_3rem] flex-wrap justify-center list-none m-0 p-0 items-center">
            {['GitLab', 'Chobani', 'asana', 'tropic', 'cansaas', 'reddit', 'Robinhood'].map(logo => (
              <li key={logo} className="font-medium text-[1.4rem] text-brand-slate tracking-[-0.01em] grayscale opacity-70">{logo}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="bg-[#111111] py-[6rem] text-white my-[2rem]" aria-labelledby="statTitle">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <FadeIn className="max-w-[700px] mx-auto mb-[4rem]">
          <h2 id="statTitle" className="text-[clamp(2.2rem,4vw,3.2rem)] font-medium tracking-tight leading-[1.1] text-white">
            Customized answers designed <br/>for your <span className="font-medium text-white">requirements.</span>
          </h2>
          <p className="mt-[1.5rem] text-[1.05rem] text-white/70">
            Custom strategies built to match your goals.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mt-10">
          <FadeIn delay={0.1}>
            <div className="bg-[#1C1C1C] border border-white/5 rounded-[32px] p-8 text-left h-full flex flex-col">
              <h3 className="text-[1.2rem] font-medium text-white mb-2 max-w-[30ch]">Comprehensive employee and hiring management dashboard for business success.</h3>
              <div className="mt-8 bg-[#111111] rounded-[24px] p-4 border border-white/5 flex-1 relative overflow-hidden flex flex-col">
                 {/* Mock Table */}
                 <div className="flex gap-3 items-center mb-6 bg-[#1C1C1C] p-4 rounded-[16px] border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center font-medium text-lg border border-white/20 shrink-0 shadow-inner">JP</div>
                    <div>
                        <div className="font-medium text-[0.95rem]">John Parto</div>
                        <div className="text-[0.75rem] text-white/50">UI/UX Designer · Hourly: $40-$100 · Remote</div>
                    </div>
                    <div className="ml-auto text-white/30 text-xs flex gap-2">
                       <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">⚙</div>
                       <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">↑</div>
                    </div>
                 </div>
                 <table className="w-full text-[0.75rem] text-white/70 text-left flex-1">
                    <thead>
                      <tr className="border-b border-white/10">
                         <th className="pb-3 font-medium text-white/50">Employee ID</th>
                         <th className="pb-3 font-medium text-white/50">Full Name</th>
                         <th className="pb-3 font-medium text-white/50">Check In</th>
                         <th className="pb-3 font-medium text-white/50">Check Out</th>
                         <th className="pb-3 font-medium text-white/50">Status</th>
                         <th className="pb-3 font-medium text-white/50 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <motion.tr initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border-b border-white/5"><td className="py-3">DS-1568</td><td>Bessie Cooper</td><td>09:30</td><td>17:00</td><td className="text-emerald-400">● Present</td><td className="text-right">...</td></motion.tr>
                      <motion.tr initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="border-b border-white/5"><td className="py-3">MR-2412</td><td>Michael Tan</td><td>09:30</td><td>17:00</td><td className="text-emerald-400">● Present</td><td className="text-right">...</td></motion.tr>
                      <motion.tr initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="border-b border-white/5"><td className="py-3">OV-4968</td><td>Sarah Lee</td><td>09:30</td><td>09:30</td><td className="text-white opacity-50">● Late</td><td className="text-right">...</td></motion.tr>
                      <motion.tr initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}><td className="py-3">EM-4492</td><td>Bessie Cooper</td><td>09:30</td><td>09:30</td><td className="text-emerald-400">● Present</td><td className="text-right">...</td></motion.tr>
                    </tbody>
                 </table>
                 {/* Stats numbers row inside card */}
                 <div className="flex justify-between border-t border-white/10 pt-5 mt-4">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}><div><div className="text-2xl font-medium">500+</div><div className="text-[0.65rem] text-white/50 mt-1">Companies hiring</div></div></motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}><div><div className="text-2xl font-medium">70%</div><div className="text-[0.65rem] text-white/50 mt-1">Interview rate</div></div></motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }}><div><div className="text-2xl font-medium">3x</div><div className="text-[0.65rem] text-white/50 mt-1">Faster to hire</div></div></motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0 }}><div><div className="text-2xl font-medium">98%</div><div className="text-[0.65rem] text-white/50 mt-1">Satisfaction rate</div></div></motion.div>
                 </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col gap-[1.5rem]">
             <div className="bg-[#1C1C1C] border border-white/5 rounded-[32px] p-8 text-left h-[50%] flex flex-col justify-between">
                 <p className="text-[0.95rem] font-medium text-white/90 max-w-[40ch]">We handle every follow-up for you, ensuring smooth effortless communication and building stronger lasting connections.</p>
                 <div className="flex flex-col gap-3 mt-8">
                    <motion.div initial={{ opacity: 0, scale: 0.8, x: 20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring" }} className="self-end bg-brand-accent text-white text-[0.8rem] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm origin-bottom-right">Perfect. Can I choose a time that fits my schedule?</motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, type: "spring" }} className="self-start bg-[#111111] text-white text-[0.8rem] px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%] border border-white/5 shadow-sm origin-bottom-left">Yes, the platform lets you pick an available slot instantly.</motion.div>
                 </div>
             </div>
             <div className="bg-[#1C1C1C] border border-white/5 rounded-[32px] p-8 text-left h-[50%] flex flex-col justify-between relative overflow-hidden group">
                 <div className="w-full relative z-20">
                    <div className="w-full bg-[#111111] border border-white/10 rounded-xl flex items-center px-4 py-3 shadow-2xl transition-all duration-300 group-hover:border-white/20">
                       <span className="text-brand-accent/80 mr-3">🔍</span>
                       <span className="text-white/40 text-[0.85rem] font-medium">Search for candidates, skills...</span>
                    </div>
                    {/* Simulated dropdown results */}
                    <div className="mt-2 flex flex-col gap-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                       <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="px-4 py-2 rounded-lg bg-white/[0.02] flex items-center gap-3">
                           <span className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[0.6rem]">⌘</span>
                           <span className="text-white/60 text-[0.75rem]">Find "Senior React Developer"</span>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="px-4 py-2 rounded-lg bg-white/[0.02] flex items-center gap-3">
                           <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[0.6rem]">⌘</span>
                           <span className="text-white/60 text-[0.75rem]">Schedule interview with Amara</span>
                       </motion.div>
                    </div>
                 </div>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent z-10 pointer-events-none" />
                 <p className="text-[0.95rem] font-medium relative z-20 text-white/90 mt-8 max-w-[42ch]">Everything you need to simplify and efficiently streamline the entire modern recruiting process with ease.</p>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section id="how" className="py-[8rem] bg-brand-bg relative overflow-hidden" aria-labelledby="howTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-[6rem]">
          <h2 id="howTitle" className="text-[clamp(2.2rem,4vw,3.2rem)] font-medium tracking-tight leading-[1.1] text-brand-indigo">
            Live before your next <span className="font-medium text-brand-indigo">debrief.</span>
          </h2>
          <p className="mt-[1.5rem] text-[1.1rem] text-brand-slate">
            No migration, no rip-and-replace. Candor sits on top of the ATS you already have.
          </p>
        </FadeIn>
        
        <div className="relative w-full mx-auto">
          {/* Scroll progress line (Desktop only) */}
          <div className="hidden md:block absolute top-[50%] left-0 right-0 h-[2px] bg-brand-line/60 -translate-y-1/2 rounded-full overflow-hidden z-0">
             <div className="w-full h-full bg-[#2D2B52] origin-left"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-start relative z-10">
            
            {/* --- STEP 1 --- */}
            <div className="flex flex-col gap-[2rem] items-center relative">
               <div className="w-full h-[220px] bg-white p-6 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-brand-line/50 hover:shadow-md transition-shadow text-center flex flex-col justify-center items-center">
                 <span className="inline-block text-[0.7rem] font-medium tracking-widest text-brand-green uppercase mb-3 bg-brand-green/10 px-3 py-1 rounded-full">~20 minutes</span>
                 <h3 className="text-[1.2rem] font-medium text-brand-indigo mb-2">Connect your ATS</h3>
                 <p className="text-[0.9rem] text-brand-slate leading-relaxed">One-click integrations for Greenhouse, Lever, Ashby, and Workday. Historical data syncs read-only.</p>
               </div>
               
               <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-white border-[4px] border-brand-bg text-brand-indigo font-medium text-[1.5rem] flex items-center justify-center shadow-sm relative z-20 my-auto md:my-0">
                 1
               </div>

               <div className="h-[200px] w-full rounded-[24px] bg-gradient-to-br from-brand-line/40 to-transparent border border-brand-line/50 flex flex-wrap gap-2 items-center justify-center p-4 opacity-80">
                  {['Greenhouse', 'Lever', 'Ashby', 'Workday'].map((ats, idx) => (
                    <span key={ats} className="px-3 py-2 bg-white rounded-lg text-brand-slate text-xs font-medium shadow-sm">
                       {ats}
                    </span>
                  ))}
               </div>
            </div>

            {/* --- STEP 2 --- */}
            <div className="flex flex-col gap-[2rem] items-center relative">
               <div className="h-[220px] w-full rounded-[24px] bg-[#2D2B52] border border-[#2D2B52]/80 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] " />
                  <div className="text-white text-center relative z-10">
                     <div className="text-4xl mb-2">🎯</div>
                     <div className="text-sm font-medium opacity-90">Success Profile Built</div>
                  </div>
               </div>

               <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#2D2B52] border-[4px] border-brand-bg text-white font-medium text-[1.5rem] flex items-center justify-center shadow-md relative z-20">
                 2
               </div>

               <div className="w-full h-[200px] bg-white p-6 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-brand-line/50 hover:shadow-md transition-shadow text-center flex flex-col justify-center items-center">
                 <span className="inline-block text-[0.7rem] font-medium tracking-widest text-[#2D2B52] uppercase mb-3 bg-[#2D2B52]/10 px-3 py-1 rounded-full">Same day</span>
                 <h3 className="text-[1.2rem] font-medium text-brand-indigo mb-2">Calibrate on your team</h3>
                 <p className="text-[0.9rem] text-brand-slate leading-relaxed">Mark the hires who worked out. Candor builds success profiles per role.</p>
               </div>
            </div>

            {/* --- STEP 3 --- */}
            <div className="flex flex-col gap-[2rem] items-center relative">
               <div className="w-full h-[220px] bg-white p-6 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-brand-line/50 hover:shadow-md transition-shadow text-center flex flex-col justify-center items-center">
                 <span className="inline-block text-[0.7rem] font-medium tracking-widest text-[#2D2B52] uppercase mb-3 bg-[#2D2B52]/10 px-3 py-1 rounded-full">From day one</span>
                 <h3 className="text-[1.2rem] font-medium text-brand-indigo mb-2">Rank, unblock, hire</h3>
                 <p className="text-[0.9rem] text-brand-slate leading-relaxed">Every new applicant lands pre-scored. Pipelines self-report their bottlenecks.</p>
               </div>

               <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#2D2B52] border-[4px] border-brand-bg text-white font-medium text-[1.5rem] flex items-center justify-center shadow-md relative z-20">
                 3
               </div>

               <div className="h-[200px] w-full rounded-[24px] bg-[#2D2B52]/5 border border-[#2D2B52]/10 flex flex-col items-center justify-center p-6 gap-3">
                  <div className="w-full max-w-[140px] h-3 bg-white rounded-full overflow-hidden shadow-inner relative">
                     <div className="absolute left-0 top-0 bottom-0 bg-[#2D2B52] rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="text-[#2D2B52] text-[0.75rem] font-medium tracking-widest uppercase mt-2">
                     94% Match
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-[6rem] bg-white border-y border-brand-line/40" aria-labelledby="priceTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center max-w-[620px] mx-auto mb-[4rem]">
          <h2 id="priceTitle" className="text-[clamp(2.2rem,4vw,3.2rem)] font-medium tracking-tight leading-[1.1] text-brand-indigo">
            Costs less than one <span className="font-medium text-brand-indigo">bad hire.</span> By a lot.
          </h2>
          <p className="mt-[1.5rem] text-[1.05rem] text-brand-slate">
            Per recruiter seat, unlimited candidates and requisitions on every plan. Save 20% on annual billing.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] max-w-[460px] md:max-w-none mx-auto items-stretch">
          
          <FadeIn className="bg-brand-bg border border-brand-line/50 rounded-[32px] p-[2.5rem_2rem] flex flex-col relative">
            <h3 className="text-[1.35rem] font-medium text-brand-indigo">Starter</h3>
            <p className="text-[0.85rem] text-brand-slate mt-[0.25rem]">For teams making their first data-driven hires</p>
            <p className="font-medium text-[3rem] tracking-[-0.03em] text-brand-indigo mt-[2rem] leading-none">
              $0 <small className="text-[0.85rem] font-normal text-brand-slate tracking-normal">up to 3 open roles</small>
            </p>
            <ul className="list-none my-[2rem] mb-[2.5rem] flex flex-col gap-[0.8rem] flex-1">
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> Match scoring on active roles</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> Greenhouse, Lever & Ashby sync</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> Basic pipeline analytics</li>
            </ul>
            <Button variant="ghost" href="#footer" className="w-full bg-white border border-brand-line/50">Start free</Button>
          </FadeIn>

          <FadeIn delay={0.12} className="bg-brand-indigo border border-brand-indigo rounded-[32px] p-[2.5rem_2rem] flex flex-col relative shadow-xl transform md:-translate-y-4">
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-white text-[#2D2B52] text-[0.68rem] font-medium tracking-[0.05em] rounded-full px-[1rem] py-[0.4rem] whitespace-nowrap shadow-sm uppercase">MOST POPULAR</div>
            <h3 className="text-[1.35rem] font-medium text-white">Growth</h3>
            <p className="text-[0.85rem] text-white/70 mt-[0.25rem]">For scaling teams with real hiring targets</p>
            <p className="font-medium text-[3rem] tracking-[-0.03em] text-white mt-[2rem] leading-none">
              $249 <small className="text-[0.85rem] font-normal text-white/70 tracking-normal">per recruiter / month</small>
            </p>
            <ul className="list-none my-[2rem] mb-[2.5rem] flex flex-col gap-[0.8rem] flex-1">
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-white/90"><Tick variant="solid" /> Custom success-profile calibration</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-white/90"><Tick variant="solid" /> Pipeline intelligence & fill forecasts</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-white/90"><Tick variant="solid" /> Structured interview kits & scorecards</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-white/90"><Tick variant="solid" /> Adverse-impact reporting</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-white/90"><Tick variant="solid" /> Slack alerts & weekly exec digest</li>
            </ul>
            <Button variant="white" href="#footer" className="w-full">Start 14-day trial</Button>
          </FadeIn>

          <FadeIn delay={0.24} className="bg-brand-bg border border-brand-line/50 rounded-[32px] p-[2.5rem_2rem] flex flex-col relative">
            <h3 className="text-[1.35rem] font-medium text-brand-indigo">Enterprise</h3>
            <p className="text-[0.85rem] text-brand-slate mt-[0.25rem]">For global TA orgs and regulated industries</p>
            <p className="font-medium text-[3rem] tracking-[-0.03em] text-brand-indigo mt-[2rem] leading-none">
              Custom <small className="text-[0.85rem] font-normal text-brand-slate tracking-normal">annual agreement</small>
            </p>
            <ul className="list-none my-[2rem] mb-[2.5rem] flex flex-col gap-[0.8rem] flex-1">
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> Workday & SuccessFactors integrations</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> SSO, SCIM & audit logs</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> EU data residency & NYC LL144 support</li>
              <li className="flex gap-[0.8rem] items-start text-[0.92rem] text-brand-indigo-ink"><Tick /> Dedicated talent-science partner</li>
            </ul>
            <Button variant="ghost" href="#footer" className="w-full bg-white border border-brand-line/50">Talk to sales</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-[12rem] px-6 relative bg-[url('/fitur.png')] bg-cover bg-center overflow-hidden" aria-labelledby="ctaTitle">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#2D2B52]/85 backdrop-blur-[4px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <FadeIn className="flex flex-col items-center justify-center text-center">
          <div className="max-w-[600px]">
            <h2 id="ctaTitle" className="text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight leading-[1.1] text-white mb-[1.5rem]">
              Ready to build your <br/>
              <span className="text-white font-medium ">dream team?</span>
            </h2>
            <p className="text-[1.1rem] text-white/80 leading-relaxed mb-[3rem]">
              Join hundreds of forward-thinking companies using Candor to hire smarter, faster, and without bias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[1rem]">
              <Button variant="white" href="#top" className="w-full sm:w-auto px-[2.5rem] py-[1.2rem] text-[1.05rem]">
                Get a Demo
              </Button>
              <Button variant="ghost" href="#top" className="w-full sm:w-auto px-[2.5rem] py-[1.2rem] text-[1.05rem] bg-white/10 border-transparent text-white hover:bg-white/20 shadow-sm backdrop-blur-md">
                Start Free Trial
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
