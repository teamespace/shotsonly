import { motion } from 'motion/react';

export default function HowItWorks() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="how section-pad" id="how">
      <div className="shell">
        <motion.div 
          className="head mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          <div>
            <span className="kicker">How it works</span>
            <h2>From "something's wrong" to a <em>care plan</em> — in one sitting</h2>
          </div>
          <p>No phone trees, no waiting rooms, no repeating your story three times. The AI prepares; the doctor decides.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: 1, title: 'Say it in your words', desc: 'Type or talk. "My ear hurts and I feel dizzy" is a perfectly good place to start — no medical vocabulary required.', time: '~1 minute' },
            { num: 2, title: 'AI triages & prepares', desc: 'Clinical-grade intake asks only what matters, scores urgency, and drafts a structured summary your doctor reads in seconds.', time: '~45 seconds' },
            { num: 3, title: 'A doctor joins you', desc: 'Matched by specialty and state license, a physician joins your chat or video visit — median wait, 94 seconds.', time: 'Live consult' },
            { num: 4, title: 'Leave with a plan', desc: 'Prescriptions sent to your pharmacy, labs ordered nearby, and a written care plan with a free follow-up message thread.', time: 'Same visit' }
          ].map((stop, i) => (
            <motion.div 
              key={stop.num}
              className="bg-[#F4F7F6] rounded-[32px] flex flex-col cursor-pointer"
              style={{ padding: '2.5rem', minHeight: '420px' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={transition(i)}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="text-[1.4rem] tracking-tight">
                  <span className="font-semibold text-ink">Step</span> <span className="font-semibold text-gray-400">0{stop.num}</span>
                </div>
                <div className="border border-gray-300 rounded-full px-4 py-1.5 text-[0.78rem] text-ink-60 font-medium whitespace-nowrap">
                  {stop.time}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-grow" />

              {/* Content */}
              <div>
                <h3 className="text-[1.25rem] font-medium text-ink leading-snug mb-6 tracking-tight">
                  {stop.title}
                </h3>
                
                <div className="pt-5 border-t border-gray-200/60">
                  <p className="text-[0.92rem] text-ink-60 leading-relaxed font-light">
                    {stop.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
