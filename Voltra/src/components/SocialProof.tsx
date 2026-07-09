import { motion } from "motion/react";
import { AnimatedNumber } from "./AnimatedNumber";

export function SocialProof() {
  const statVariants = {
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
    <section className="bg-voltra-bg-2 border-y border-voltra-line py-[clamp(4rem,9vw,7.5rem)] relative" aria-label="Social proof">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        
        <div className="flex flex-wrap gap-[clamp(1.5rem,4vw,3.5rem)] py-[2.2rem] justify-between max-[520px]:flex-col max-[520px]:gap-[1.6rem]">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="min-w-[9rem]">
            <div className="font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-none text-voltra-lime tabular-nums"><AnimatedNumber value={418} />K</div>
            <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-voltra-faint mt-[0.5rem]">Athletes on Voltra</div>
          </motion.div>
          <motion.div custom={0.08} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="min-w-[9rem]">
            <div className="font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-none text-voltra-lime tabular-nums"><AnimatedNumber value={31} />%</div>
            <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-voltra-faint mt-[0.5rem]">Fewer overtraining injuries*</div>
          </motion.div>
          <motion.div custom={0.16} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="min-w-[9rem]">
            <div className="font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-none text-voltra-lime tabular-nums"><AnimatedNumber value={94} />%</div>
            <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-voltra-faint mt-[0.5rem]">Follow their daily brief</div>
          </motion.div>
          <motion.div custom={0.24} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="min-w-[9rem]">
            <div className="font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-none text-voltra-lime tabular-nums">4.9</div>
            <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-voltra-faint mt-[0.5rem]">App Store · 62K ratings</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1px] bg-voltra-line">
          <motion.blockquote custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="bg-voltra-bg-2 p-[2.2rem_2rem] flex flex-col gap-[1.4rem]">
            <p className="text-[1.02rem] leading-[1.6]">
              "I stopped guessing. Voltra told me to back off two days before my legs knew it —
              then sent me into race week <strong className="text-voltra-lime font-semibold">fully charged</strong>. PR'd by four minutes."
            </p>
            <footer className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint leading-[1.8]">
              <b className="text-voltra-white block font-bold">Maya Reyes</b>Marathoner · 2:58 → 2:54
            </footer>
          </motion.blockquote>

          <motion.blockquote custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="bg-voltra-bg-2 p-[2.2rem_2rem] flex flex-col gap-[1.4rem]">
            <p className="text-[1.02rem] leading-[1.6]">
              "The widgets are the product. My athletes glance at their wrist, see the recovery score,
              and <strong className="text-voltra-lime font-semibold">the argument about training load is already over</strong>."
            </p>
            <footer className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint leading-[1.8]">
              <b className="text-voltra-white block font-bold">Daniel Okafor</b>Head coach · Southside Track Club
            </footer>
          </motion.blockquote>

          <motion.blockquote custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="bg-voltra-bg-2 p-[2.2rem_2rem] flex flex-col gap-[1.4rem]">
            <p className="text-[1.02rem] leading-[1.6]">
              "Voltra's AI coach is the first one that understands a life. Missed a session? It
              <strong className="text-voltra-lime font-semibold"> re-plans the week instead of guilt-tripping you</strong>. Rare."
            </p>
            <footer className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-voltra-faint leading-[1.8]">
              <b className="text-voltra-white block font-bold">The Stride Review</b>Best AI trainer · 2026
            </footer>
          </motion.blockquote>
        </div>

        <motion.p custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={statVariants} className="mt-[1.5rem] font-mono text-[0.65rem] text-voltra-faint tracking-[0.1em]">
          *SELF-REPORTED, 12-MONTH VOLTRA ATHLETE SURVEY, N=8,410
        </motion.p>
      </div>
    </section>
  );
}
