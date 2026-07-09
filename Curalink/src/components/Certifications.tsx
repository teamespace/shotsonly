import { motion } from 'motion/react';

export default function Certifications() {
  const transition = (delay: number) => ({
    duration: 0.7,
    delay: delay * 0.1,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="certifications" aria-label="Certifications and compliance" style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="shell mx-auto px-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          <motion.div 
            className="badge flex-1 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-4 min-w-[280px] max-w-[380px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(0)}
          >
            <span className="badge-seal w-12 h-12 rounded-full bg-[#EAF5F3] flex items-center justify-center text-[#11554C] shrink-0" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2l8 3.5v5c0 5.5-3.5 9.2-8 10.5-4.5-1.3-8-5-8-10.5v-5L12 2z" /><path d="M8.5 11.8l2.4 2.4 4.6-5" /></svg>
            </span>
            <div>
              <b className="block text-[1.05rem] text-ink font-medium tracking-tight mb-1">HIPAA Compliant</b>
              <span className="text-[0.85rem] text-ink-60">Independently assessed, 2026</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="badge flex-1 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-4 min-w-[280px] max-w-[380px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(1)}
          >
            <span className="badge-seal w-12 h-12 rounded-full bg-[#EAF5F3] flex items-center justify-center text-[#11554C] shrink-0" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" /></svg>
            </span>
            <div>
              <b className="block text-[1.05rem] text-ink font-medium tracking-tight mb-1">SOC 2 Type II</b>
              <span className="text-[0.85rem] text-ink-60">Audited annually by Assurant Labs</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="badge flex-1 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-4 min-w-[280px] max-w-[380px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(2)}
          >
            <span className="badge-seal w-12 h-12 rounded-full bg-[#EAF5F3] flex items-center justify-center text-[#11554C] shrink-0" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M6 21V10M12 21V4M18 21v-7" /><path d="M3 21h18" /></svg>
            </span>
            <div>
              <b className="block text-[1.05rem] text-ink font-medium tracking-tight mb-1">URAC Accredited</b>
              <span className="text-[0.85rem] text-ink-60">Clinical quality reviewed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
