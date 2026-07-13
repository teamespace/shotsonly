import { motion } from 'motion/react';
import { Activity, FileHeart, Stethoscope, User, Store, Pill, ShieldCheck } from 'lucide-react';

export default function Features() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="features section-pad" id="care">
      <div className="shell mx-auto px-6">
        <motion.div 
          className="head mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-coral-deep mb-3">
              <span className="w-5 h-[3px] rounded-full bg-coral"></span>
              Why Curalink
            </span>
            <h2 className="font-serif font-normal text-[clamp(2.1rem,4.2vw,3.3rem)] leading-[1.06] tracking-[-0.015em] max-w-[20ch]">
              AI does the paperwork. <em className="text-teal italic">Humans do the medicine.</em>
            </h2>
          </div>
          <p className="max-w-[26rem] text-ink-60 text-[1.02rem]">
            Every AI suggestion on Curalink is reviewed by the physician treating you. Nothing is prescribed by a machine.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
            {/* Card 1 */}
            <motion.div 
              className="bg-[#11554C] rounded-[40px] relative overflow-hidden flex flex-col md:flex-row gap-12 lg:gap-16 items-center shadow-[0_20px_40px_-10px_rgba(17,85,76,0.15),0_8px_16px_-4px_rgba(17,85,76,0.08)]"
              style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={transition(0)}
            >
              <div className="relative z-10 w-full md:w-1/2 lg:w-3/5 flex flex-col items-start">
                <h3 className="text-[2rem] md:text-[2.5rem] text-white font-medium leading-tight mb-6 tracking-tight">
                  Triage that takes you seriously
                </h3>
                <p className="text-white/80 text-[1.05rem] leading-relaxed mb-10 max-w-[28rem]">
                  Trained on 12 million anonymized consults and audited quarterly by our clinical board, Curalink AI catches red flags early — and routes emergencies straight to human judgment, instantly.
                </p>
                <button className="bg-[#D8F671] text-[#11554C] font-semibold px-8 py-4 rounded-full hover:bg-[#c9e665] transition-colors text-[0.95rem] shadow-sm transform hover:scale-[0.98] active:scale-95 duration-200">
                  Learn More About AI
                </button>
              </div>
              
              <motion.div className="relative z-10 w-full md:w-1/2 flex-1 flex flex-col gap-6 mt-10 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                }}
              >
                {/* Floating Elements */}
                <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 150 } } }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] px-4 sm:px-7 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4 w-fit self-end sm:mr-6 shadow-xl whitespace-nowrap">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-tint/20 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-white font-medium text-[0.85rem] sm:text-[1rem]">Symptoms Analyzed</span>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 150 } } }} className="bg-white/15 backdrop-blur-md border border-white/15 rounded-[24px] px-4 sm:px-7 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4 w-fit self-start sm:ml-4 shadow-xl whitespace-nowrap">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E47B49]/20 flex items-center justify-center shrink-0">
                    <FileHeart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB4A8]" />
                  </div>
                  <span className="text-white font-medium text-[0.85rem] sm:text-[1rem]">Moderate Priority</span>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 150 } } }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] px-4 sm:px-7 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4 w-fit self-end mr-2 sm:mr-12 shadow-xl whitespace-nowrap">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-tint/20 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-white font-medium text-[0.85rem] sm:text-[1rem]">Neurologist Matched</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-[#F1F9E4] rounded-[40px] flex flex-col justify-between relative overflow-hidden min-h-[380px] shadow-[0_20px_40px_-10px_rgba(17,85,76,0.05)]"
              style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={transition(1)}
            >
              <div>
                <h3 className="text-[1.6rem] md:text-[2rem] text-ink font-medium leading-tight mb-5 tracking-tight">
                  Real doctors, on your schedule
                </h3>
                <p className="text-ink-60 text-[1.05rem] leading-relaxed mb-8 max-w-[20rem]">
                  4,200+ board-certified physicians across 40 specialties, licensed in all 50 states. See the same doctor again.
                </p>
              </div>
              <div className="flex items-baseline gap-4 mt-auto">
                <span className="text-[#E47B49] text-[5rem] font-serif leading-none tracking-tight tabular-nums">40</span>
                <span className="text-ink-60 font-medium text-[1.05rem] leading-tight max-w-[100px]">specialties available</span>
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3 */}
            <motion.div 
              className="bg-[#FCEAE1] rounded-[40px] flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[460px] shadow-[0_20px_40px_-10px_rgba(228,123,73,0.08)]"
              style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={transition(2)}
            >
              <motion.div className="w-full max-w-[340px] h-[180px] relative mt-4 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
                }}
              >
                {/* Network nodes visualization */}
                <svg className="absolute inset-0 w-full h-full" style={{ strokeDasharray: "4 4" }}>
                  {[
                    {x1:"15%", y1:"50%", x2:"50%", y2:"20%"},
                    {x1:"50%", y1:"20%", x2:"85%", y2:"50%"},
                    {x1:"85%", y1:"50%", x2:"50%", y2:"85%"},
                    {x1:"50%", y1:"85%", x2:"15%", y2:"50%"},
                    {x1:"15%", y1:"50%", x2:"85%", y2:"50%"},
                    {x1:"50%", y1:"20%", x2:"50%", y2:"85%"},
                  ].map((line, i) => (
                    <motion.line key={i} {...line} stroke="#E8503C" strokeWidth="1.5" strokeOpacity="0.4" 
                      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                      transition={{ duration: 0.4 }}
                    />
                  ))}
                </svg>
                
                {/* Nodes */}
                <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#11554C] shadow-lg flex items-center justify-center z-10 border-4 border-[#FCEAE1] transition-transform hover:scale-110 duration-300">
                  <User className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center z-10 border-2 border-[#11554C] transition-transform hover:scale-110 duration-300">
                  <Stethoscope className="w-7 h-7 text-[#11554C]" />
                </motion.div>

                <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#E47B49] shadow-lg flex items-center justify-center z-10 border-4 border-[#FCEAE1] transition-transform hover:scale-110 duration-300">
                  <Store className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-2 border-[#E47B49] transition-transform hover:scale-110 duration-300">
                  <Pill className="w-6 h-6 text-[#E47B49]" />
                </motion.div>

                {/* Decorative small nodes */}
                <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-[35%] left-[32.5%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#11554C] z-10"></motion.div>
                <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ type: 'spring', damping: 14, stiffness: 200 }} className="absolute top-[67.5%] left-[67.5%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#E47B49] z-10"></motion.div>
              </motion.div>
              
              <div>
                <h3 className="text-[1.5rem] md:text-[1.8rem] text-ink font-medium leading-snug mb-4 tracking-tight">
                  Prescriptions, sorted before you stand up
                </h3>
                <p className="text-ink-60 text-[1.05rem] leading-relaxed max-w-[26rem] mx-auto">
                  Your doctor sends scripts to any of 62,000 partner pharmacies mid-visit.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              className="bg-[#F4F7F6] rounded-[40px] flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[460px] shadow-[0_20px_40px_-10px_rgba(16,34,30,0.05)]"
              style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={transition(3)}
            >
              <motion.div className="w-full relative mt-4 mb-16 flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                }}
              >
                {/* Gauge visualization */}
                <div className="relative w-64 h-32">
                  <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                    {/* Background Arch */}
                    <path d="M 20,100 A 80,80 0 0,1 180,100" fill="none" stroke="#E5E7EB" strokeWidth="20" strokeLinecap="round" />
                    
                    {/* Foreground Arch (Value) */}
                    <motion.path d="M 20,100 A 80,80 0 0,1 140,30" fill="none" stroke="#11554C" strokeWidth="20" strokeLinecap="round" 
                      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                    
                    {/* Ticks */}
                    <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.8 }}>
                      <line x1="160" y1="48" x2="175" y2="38" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="172" y1="65" x2="187" y2="60" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="180" y1="85" x2="195" y2="85" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                      <line x1="40" y1="48" x2="25" y2="38" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                    </motion.g>
                    
                    {/* Needle */}
                    <motion.g
                      variants={{ hidden: { rotate: -80, opacity: 0 }, visible: { rotate: 0, opacity: 1 } }}
                      transition={{ type: 'spring', damping: 15, stiffness: 80, delay: 0.6 }}
                      style={{ transformOrigin: '100px 100px' }}
                    >
                      {/* Needle line */}
                      <line x1="100" y1="100" x2="128" y2="40" stroke="#10221E" strokeWidth="3" strokeLinecap="round" />
                      {/* Needle base */}
                      <circle cx="100" cy="100" r="8" fill="#D8F671" stroke="#10221E" strokeWidth="2.5" />
                    </motion.g>
                  </svg>

                  {/* Inner text positioned far below the needle pivot */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, delay: 0.8 }} className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-[200px]">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-ink-60 mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Security
                    </span>
                    <span className="text-[1.4rem] font-serif text-ink leading-none">AES-256</span>
                  </motion.div>
                </div>
              </motion.div>

              <div>
                <h3 className="text-[1.35rem] md:text-[1.5rem] text-ink font-medium leading-snug mb-3 tracking-tight">
                  One record that follows you
                </h3>
                <p className="text-ink-60 text-[0.95rem] leading-relaxed max-w-[22rem] mx-auto">
                  Visits, labs, and care plans live in a single encrypted record you own. Share it securely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

