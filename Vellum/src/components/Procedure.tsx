import { Reveal } from './Reveal';
import { motion } from 'motion/react';
import { TextReveal } from './TextReveal';

export function Procedure() {
  const steps = [
    {
      title: "Upload Any Contract",
      desc: "Drop in a Word file, PDF, or a counterparty email thread. Vellum parses structure, defined terms, and every cross-reference in under a minute."
    },
    {
      title: "AI Extracts And Scores",
      desc: "Risky language is struck, rewrites are proposed from your playbook, and a plain-English risk memo is drafted — citing the exact clause every time."
    },
    {
      title: "Sign, Track, And Close",
      desc: "Your lawyer accepts, edits, or overrides each suggestion, then sends the clean tracked-changes file. Post-signature, obligations flow straight into tracking."
    }
  ];

  return (
    <section className="bg-[#111] text-white py-24" id="procedure" aria-labelledby="procTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <Reveal>
            <h2 id="procTitle" className="font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
              <TextReveal text="From upload to insight in minutes." />
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              A workflow your entire team will actually use — without months of implementation.
            </p>

            <div className="space-y-8 relative">
              {/* Animated Timeline Track */}
              <div className="absolute left-[5px] top-4 -bottom-4 w-[2px] bg-gray-800 overflow-hidden">
                <motion.div
                  className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-red-500 to-transparent blur-[1px]"
                  animate={{ top: ["-50%", "150%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {steps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="w-3 h-3 rounded bg-oxblood mt-1.5 flex-none relative z-10 shadow-[0_0_10px_rgba(122,30,43,0.8)]" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[400px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative hidden md:block">
            <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10 relative overflow-hidden h-full min-h-[400px] z-10">
               <div className="absolute inset-0 -z-10">
                 <video src="/bg-vd.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
               </div>
               
               {/* UI Mockup showing a document list */}
               <div className="bg-[#1C1C1E] rounded-2xl border border-white/10 h-full overflow-hidden flex flex-col shadow-2xl relative z-10">
                 <div className="bg-[#2C2C2E] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="text-xs text-gray-400 ml-4 font-medium">Contract_Delta_2026.docx</div>
                 </div>
                 <motion.div 
                   className="p-4 flex-1"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   variants={{
                     hidden: { opacity: 0 },
                     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
                   }}
                 >
                   <motion.div 
                     variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} 
                     className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"
                   >
                     On Going Contract
                   </motion.div>
                   {[
                     { name: 'Contract_Alpha_2024.docx', date: 'Ready on 23 May 2026' },
                     { name: 'Contract_Beta_2024.docx', date: 'Ready on 18 May 2026' },
                     { name: 'Contract_Gamma_2024.docx', date: 'Ready on 13 May 2026' },
                   ].map((doc, i) => (
                     <motion.div 
                       key={i} 
                       variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } } }}
                       className="flex items-center gap-3 mb-4 last:mb-0"
                     >
                       <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-none">
                         <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                       </div>
                       <div>
                         <div className="text-sm font-medium text-gray-200">{doc.name}</div>
                         <div className="text-xs text-gray-500">{doc.date}</div>
                       </div>
                     </motion.div>
                   ))}
                   
                   <motion.div 
                     variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} 
                     className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 mt-6"
                   >
                     Review & Sign
                   </motion.div>
                   <motion.div 
                     variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12 } } }}
                     className="bg-oxblood/20 border border-oxblood/30 rounded-xl p-3 flex items-start justify-between"
                   >
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                           <svg className="w-4 h-4 text-oxblood" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           Contract_Delta_2024.docx
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Set up Cursor Rules f...</div>
                      </div>
                      <div className="text-xs text-gray-500">20m</div>
                   </motion.div>
                 </motion.div>
               </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
