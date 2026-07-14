import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { BrainCircuit } from 'lucide-react';

export function Pricing() {
  const tiers = [
    { name: "Freebie", desc: "For trying it the night before a quiz.", price: "$0", unit: " /forever", features: ["3 AI study sets per month", "Flashcards + basic quizzes", "Spaced-repetition reviews", "1 photo or PDF upload per set"], btnStr: "Start free", btnVar: "white" as const, rotate: "-rotate-[0.8deg]" },
    { name: "Honor Roll", desc: "For a full course load, all semester.", price: "$6", unit: " /month, billed yearly", features: ["Unlimited AI study sets", "Exam mode + weak-spot radar", "Unlimited PDFs, photos & voice memos", "Study battles with friends", "Offline decks on mobile"], btnStr: "Go Honor Roll", btnVar: "pink" as const, hot: true },
    { name: "Study Squad", desc: "For groups, classes & tutors.", price: "$4", unit: " /seat/month, min 4 seats", features: ["Everything in Honor Roll", "Shared class decks & leaderboards", "Teacher dashboard with progress views", "Priority human support"], btnStr: "Build a squad", btnVar: "white" as const, rotate: "rotate-[0.8deg]" }
  ];

  return (
    <>
      <section id="pricing" className="py-[5.5rem] pb-[6rem]" aria-labelledby="pricing-h">
        <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }} className="text-center mb-[3.6rem]">
            <span className="inline-block font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase bg-mint text-black brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg]">Pricing</span>
            <h2 id="pricing-h" className="text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto">Less than your exam-week energy drinks</h2>
            <p className="text-[#3A3A3A] max-w-[36rem] mx-auto mt-[0.9rem] text-[1.1rem]">Every plan includes unlimited studying. You only pay for how much the AI generates.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.8rem] items-stretch max-w-[25rem] lg:max-w-none mx-auto">
            {tiers.map((t, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, delay: i*0.1, ease: [0.3, 1.2, 0.45, 1] }}
                className={`brutal-border rounded-[24px] p-[2.1rem] px-[1.9rem] flex flex-col relative ${t.hot ? 'bg-black text-white shadow-[10px_10px_0_var(--color-pink)] -order-1 lg:order-none lg:-translate-y-[10px]' : `bg-white brutal-shadow ${t.rotate}`}`}
                aria-label={`${t.name} plan`}
              >
                {t.hot && (
                  <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 -rotate-[2.5deg] bg-pink text-white brutal-border rounded-full font-display font-extrabold text-[0.78rem] tracking-[0.06em] uppercase px-[1rem] py-[0.32rem] shadow-[3px_3px_0_var(--color-black)] whitespace-nowrap">
                    Most popular
                  </span>
                )}
                <h3 className="text-[1.5rem]">{t.name}</h3>
                <p className={`text-[0.92rem] mt-[0.2rem] mb-[1.4rem] ${t.hot ? 'text-[#D8D8D8]' : 'text-[#5A5A5A]'}`}>{t.desc}</p>
                <p className="font-display font-extrabold text-[3rem] leading-none">{t.price}<small className="font-body font-bold text-[0.85rem] opacity-70">{t.unit}</small></p>
                
                <ul className={`list-none my-[1.5rem] mb-[2rem] flex flex-col gap-[0.6rem] text-[0.94rem] ${t.hot ? 'text-[#D8D8D8]' : ''}`}>
                  {t.features.map((f, j) => (
                    <li key={j} className="flex gap-[0.55rem] items-start">
                      <span className={`shrink-0 font-extrabold w-[22px] h-[22px] text-[0.8rem] grid place-items-center border-[2.5px] border-black rounded-[7px] mt-[0.15rem] ${t.hot ? 'bg-pink border-pink text-white' : 'bg-yellow text-black'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={t.btnVar} className="mt-auto" as="a" href="#cta">{t.btnStr}</Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id="cta" className="pt-[1rem] pb-[6rem]" aria-labelledby="cta-h">
        <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }}
            className="relative bg-yellow brutal-border rounded-[28px] brutal-shadow-lg p-[4rem] px-[clamp(1.5rem,6vw,4.5rem)] text-center overflow-hidden"
          >
            <span className="absolute w-[14px] h-[14px] rounded-full bg-pink top-[18%] left-[8%] z-0" aria-hidden="true" />
            <span className="absolute w-[16px] h-[16px] rounded-[4px] rotate-[18deg] bg-violet top-[26%] right-[10%] z-0" aria-hidden="true" />
            <span className="absolute w-[10px] h-[10px] rounded-full bg-white bottom-[20%] left-[16%] z-0" aria-hidden="true" />
            <span className="absolute w-[12px] h-[12px] rounded-[4px] rotate-[18deg] bg-mint bottom-[26%] right-[18%] z-0" aria-hidden="true" />
            
            <div className="relative z-10 w-[124px] h-[124px] mx-auto mb-[1.1rem] brutal-border rounded-full brutal-shadow-sm bg-pink-soft -rotate-[4deg] overflow-hidden flex items-center justify-center">
              <img src="/CTA.webp" alt="Call to action" className="w-full h-full object-cover" />
            </div>
            
            <p className="mb-0 relative z-10">
              <span className="inline-block bg-pink text-white brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] font-display font-extrabold text-[0.78rem] tracking-[0.06em] uppercase px-[0.95rem] py-[0.26rem] mb-[1.2rem] rotate-[1.5deg]">
                Your study buddy
              </span>
            </p>
            
            <h2 id="cta-h" className="text-[clamp(2.2rem,5.4vw,3.8rem)] max-w-[20ch] mx-auto mb-[1rem] relative z-10">
              Your notes are sitting right there. Quiz them.
            </h2>
            <p className="max-w-[32rem] mx-auto mb-[2rem] text-[1.12rem] relative z-10">
              Paste one lecture's worth of notes and see your first deck in 20 seconds. Free, no signup, no card — just fewer all-nighters.
            </p>
            
            <div className="relative z-10">
              <Button variant="black" as="a" href="#main" className="!text-[1.15rem] !px-[2.3rem] !py-[1rem]">
                Turn my notes into a quiz
              </Button>
            </div>
            
            <p className="mt-[1rem] text-[0.85rem] font-bold text-[#5A5A00] relative z-10">
              First 3 decks free · Cancel anytime · Your notes are never used to train ads
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
