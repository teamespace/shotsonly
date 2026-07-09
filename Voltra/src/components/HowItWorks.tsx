import { motion } from "motion/react";

export function HowItWorks() {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  return (
    <section id="how" className="bg-voltra-bg-2 border-t border-voltra-line py-[clamp(4rem,9vw,7.5rem)] relative" aria-label="How it works">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="max-w-[52rem] mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="font-mono text-[0.75rem] tracking-[0.22em] uppercase text-voltra-lime flex items-center gap-3 kicker-line">How it works</p>
          <h2 className="font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.92] tracking-[-0.01em] mt-[1.2rem]">
            From wrist<br/>
            to <span className="italic text-voltra-lime inline-block -skew-x-6">win</span> in 3 moves
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1px] bg-voltra-line border border-voltra-line">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stepVariants} className="bg-voltra-bg-2 p-[2.4rem_2rem_2.6rem] relative overflow-hidden">
            <span className="font-display text-[clamp(4.5rem,8vw,7rem)] leading-[0.8] text-transparent absolute right-[0.6rem] top-[0.9rem] pointer-events-none select-none" style={{ WebkitTextStroke: "2px rgba(200,241,53,0.5)" }} aria-hidden="true">01</span>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-voltra-lime">Day zero</p>
            <h3 className="font-display uppercase text-[1.25rem] my-[2.6rem] mb-[0.8rem]">Sync your gear</h3>
            <p className="text-voltra-muted text-[0.95rem] max-w-[22rem]">Connect Apple Watch, Garmin, Whoop, or Pixel Watch in under two minutes. Voltra backfills up to three years of history — your baseline starts smart.</p>
          </motion.div>
          
          <motion.div custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stepVariants} className="bg-voltra-bg-2 p-[2.4rem_2rem_2.6rem] relative overflow-hidden">
            <span className="font-display text-[clamp(4.5rem,8vw,7rem)] leading-[0.8] text-transparent absolute right-[0.6rem] top-[0.9rem] pointer-events-none select-none" style={{ WebkitTextStroke: "2px rgba(200,241,53,0.5)" }} aria-hidden="true">02</span>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-voltra-lime">Days 1–14</p>
            <h3 className="font-display uppercase text-[1.25rem] my-[2.6rem] mb-[0.8rem]">Voltra calibrates</h3>
            <p className="text-voltra-muted text-[0.95rem] max-w-[22rem]">Two weeks of normal training teach the model your HRV rhythm, sleep signature, and how fast you actually recover. No generic thresholds — just yours.</p>
          </motion.div>
          
          <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stepVariants} className="bg-voltra-bg-2 p-[2.4rem_2rem_2.6rem] relative overflow-hidden">
            <span className="font-display text-[clamp(4.5rem,8vw,7rem)] leading-[0.8] text-transparent absolute right-[0.6rem] top-[0.9rem] pointer-events-none select-none" style={{ WebkitTextStroke: "2px rgba(200,241,53,0.5)" }} aria-hidden="true">03</span>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-voltra-lime">Every day after</p>
            <h3 className="font-display uppercase text-[1.25rem] my-[2.6rem] mb-[0.8rem]">Execute the brief</h3>
            <p className="text-voltra-muted text-[0.95rem] max-w-[22rem]">One daily instruction on your widget. Push, hold, or rest — with the reasoning one tap away. You train; Voltra runs the math.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
