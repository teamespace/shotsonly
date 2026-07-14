import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { BrainCircuit } from 'lucide-react';
import { TextReveal } from '../animations/TextReveal';
import { AnimatedNumber } from '../animations/AnimatedNumber';

export function Features() {
  const stickers = [
    { img: "/Flashcards.png", emojiBg: "bg-yellow-soft", title: "Flashcards, auto-written", desc: "The AI pulls out every testable fact and writes clean question–answer pairs — including the ones hiding in your margin scribbles.", rotate: "-rotate-[1.3deg]" },
    { img: "/Quizzes.png", emojiBg: "bg-pink-soft", title: "Quizzes that feel like the real test", desc: "Multiple choice, fill-in-the-blank, and short answer — weighted toward whatever your professor said is 'definitely on the exam.'", rotate: "rotate-[1.1deg]", pill: "Exam mode" },
    { img: "/Spaced.png", emojiBg: "bg-[#E9E6FF]", title: "Spaced repetition, zero setup", desc: "Recall schedules each card for the moment you're about to forget it. Five minutes a day beats five hours the night before.", rotate: "-rotate-[0.8deg]" },
    { img: "/Photos.png", emojiBg: "bg-[#E4F7EF]", title: "Photos & PDFs welcome", desc: "Snap the whiteboard before it's erased. Upload the 60-slide deck. Handwriting, diagrams, tables — it reads them all.", rotate: "rotate-[1.4deg]" },
    { img: "/Battle.png", emojiBg: "bg-yellow-soft", title: "Battle your study group", desc: "Turn any deck into a live quiz battle. Winner picks the pizza toppings; everyone's grades win either way.", rotate: "-rotate-[1deg]" },
    { img: "/radar.png", emojiBg: "bg-pink-soft", title: "Weak-spot radar", desc: "See exactly which topics keep tripping you up, and get a fresh mini-quiz targeting just those before the exam.", rotate: "rotate-[0.9deg]", pill: "New" },
  ];

  const steps = [
    { 
      num: 1, 
      color: "bg-pink text-white", 
      title: "Dump everything in", 
      desc: "Paste text, drop a PDF, snap your notebook, or even forward a voice memo of the lecture. Recall sorts the signal from the doodles.", 
      rotate: "-rotate-[0.9deg]",
      img: "/Dump.png",
      imgAlt: "Messy notebook and sticky notes",
      imgBg: "bg-pink"
    },
    { 
      num: 2, 
      color: "bg-mint text-black", 
      title: "Get your study set", 
      desc: "In ~20 seconds you have flashcards, a practice quiz, and a match game — organized by topic and tagged by how likely each fact is to be tested.", 
      rotate: "rotate-[0.9deg]",
      img: "/Get.png",
      imgAlt: "Digital flashcards on a screen",
      imgBg: "bg-mint"
    },
    { 
      num: 3, 
      color: "bg-violet text-white", 
      title: "Study 5 minutes a day", 
      desc: "Recall pings you with exactly the cards you're about to forget. Streaks, battles, and a very smug confetti cannon keep you coming back.", 
      rotate: "-rotate-[0.9deg]",
      img: "/Study.png",
      imgAlt: "Calendar or time tracking",
      imgBg: "bg-violet"
    }
  ];

  const stats = [
    { num: <AnimatedNumber value={1.3} prefix="+" decimals={1} />, text: "average GPA-point gain after one semester*", bg: "bg-pink-soft", rotate: "-rotate-[1deg]" },
    { num: <AnimatedNumber value={20} suffix=" sec" />, text: "from pasted notes to a full study set", bg: "bg-yellow-soft", rotate: "rotate-[0.8deg]" },
    { num: <AnimatedNumber value={92} suffix="%" />, text: "of users still studying with Recall at week 12", bg: "bg-[#E4F7EF]", rotate: "-rotate-[0.6deg]" }
  ];

  return (
    <>
      <div className="bg-black border-y-[3px] border-black py-[0.9rem] overflow-hidden relative" aria-hidden="true">
        <div className="flex gap-[2.8rem] w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-[2.8rem]">
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">Raised my midterm from a C+ to an A− — Priya, UBC</span>
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">18,000,000 flashcards generated</span>
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">My whole study group ditched manual decks — Tomas, TU Delft</span>
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">Works with PDFs, photos &amp; voice memos</span>
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">Finally a study tool my ADHD brain likes — Maya, NYU</span>
              <span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">4.9 ★ across 40k app reviews</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Features */}
      <section id="features" className="py-[5.5rem] pb-[5rem] relative" aria-labelledby="features-h">
        <span className="absolute w-[12px] h-[12px] rounded-full bg-violet top-[6%] left-[5%] z-0" aria-hidden="true" />
        <span className="absolute w-[14px] h-[14px] rounded-[4px] rotate-[18deg] bg-pink top-[12%] right-[6%] z-0" aria-hidden="true" />
        
        <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }}
            className="text-center mb-[3.4rem]"
          >
            <span className="inline-block font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase bg-pink text-white brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg]">The toolbox</span>
            <h2 id="features-h" className="text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto">
              <TextReveal text="One paste. Six ways to actually learn it." />
            </h2>
            <p className="text-[#3A3A3A] max-w-[36rem] mx-auto mt-[0.9rem] text-[1.1rem]">Recall doesn't just quiz you — it schedules the reviews, finds your weak spots, and turns them into tomorrow's warm-up.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.8rem] md:max-w-none max-w-[24rem] mx-auto">
            {stickers.map((s, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-5%" }} transition={{ type: 'spring', damping: 14, stiffness: 100, delay: (i%3)*0.1 }}
                className={`bg-white brutal-border rounded-[22px] brutal-shadow p-[1.9rem] px-[1.7rem] relative transition-transform transition-shadow duration-[0.18s] ease-out hover:!rotate-0 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_var(--color-black)] ${s.rotate}`}
              >
                <span className={`w-[86px] h-[86px] brutal-border rounded-[18px] grid place-items-center mb-[1.2rem] shadow-[4px_4px_0_var(--color-black)] overflow-hidden ${s.emojiBg}`} aria-hidden="true">
                  <img src={s.img} alt="" className="w-full h-full object-cover" />
                </span>
                <h3 className="text-[1.4rem] mb-[0.55rem]">{s.title}</h3>
                <p className="text-[0.95rem] text-[#3A3A3A]">{s.desc}</p>
                {s.pill && (
                  <span className="absolute -top-[14px] right-[16px] font-display font-extrabold text-[0.7rem] uppercase tracking-[0.07em] bg-yellow brutal-border rounded-full px-[0.7rem] py-[0.2rem] shadow-[2px_2px_0_var(--color-black)] rotate-[3deg]">
                    {s.pill}
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-[5.5rem] pb-[6rem] bg-yellow border-y-[3px] border-black relative overflow-clip" aria-labelledby="how-h">
        <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }}>
            <span className="inline-block font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase bg-violet text-white brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg]">How it works</span>
            <h2 id="how-h" className="text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto">
              <TextReveal text="From chaos to quiz in three moves" />
            </h2>
          </motion.div>
          
          <div className="flex flex-col gap-[3rem] max-w-[1020px] mx-auto mt-[4rem]">
            {steps.map((s, i) => {
              const isEven = i % 2 !== 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-5%" }} transition={{ type: 'spring', damping: 14, stiffness: 100, delay: i*0.1 }}
                  className={`group flex flex-col md:flex-row gap-[2rem] md:gap-[3rem] items-center bg-white brutal-border rounded-[20px] brutal-shadow p-[1.7rem] sm:p-[2.5rem] relative ${s.rotate} ${isEven ? 'md:ml-[4%]' : 'md:mr-[4%]'}`}
                >
                  <span className="tape absolute -top-[14px] left-1/2 -translate-x-1/2 -rotate-[2deg] w-[96px] h-[26px] z-20" aria-hidden="true" />
                  
                  {/* Text Content */}
                  <div className={`flex sm:flex-row flex-col gap-[1.6rem] sm:items-start flex-1 w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <span className={`shrink-0 font-display font-extrabold text-[2.3rem] leading-none w-[64px] h-[64px] grid place-items-center brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg] ${s.color}`} aria-hidden="true">
                      {s.num}
                    </span>
                    <div className="text-left mt-2 sm:mt-0">
                      <h3 className="text-[1.7rem] mb-[0.6rem] transition-colors duration-300 group-hover:text-pink">{s.title}</h3>
                      <p className="text-[1.05rem] text-[#3A3A3A] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>

                  {/* Image Content with Interactive Highlight Effect */}
                  <div className={`flex-1 w-full relative ${isEven ? 'md:order-1' : 'md:order-2'} mt-[1rem] md:mt-0`}>
                    {/* Decorative colored background block that offsets on hover */}
                    <div className={`absolute inset-0 ${s.imgBg} brutal-border rounded-[16px] transition-all duration-300 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px] group-hover:shadow-[6px_6px_0_var(--color-black)]`} />
                    
                    {/* Main image container that pops out */}
                    <div className="relative w-full aspect-[4/3] bg-black brutal-border rounded-[16px] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:-rotate-2">
                      <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pt-[4.5rem] pb-[1rem]" aria-label="Recall by the numbers">
        <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[1.6rem] text-center md:max-w-none max-w-[22rem]">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.6, delay: i*0.1, ease: [0.3, 1.2, 0.45, 1] }}
              className={`brutal-border rounded-[20px] brutal-shadow p-[1.8rem] px-[1rem] ${s.bg} ${s.rotate}`}
            >
              <b className="block font-display font-extrabold text-[clamp(2rem,4vw,2.9rem)] leading-[1.1]">{s.num}</b>
              <span className="font-bold text-[0.92rem] text-[#3A3A3A]">{s.text}</span>
            </motion.div>
          ))}
        </div>
        <p className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto text-[0.78rem] text-[#8A8A8A] mt-[1rem] text-center">*Self-reported by 4,120 students, spring semester survey.</p>
      </section>
    </>
  );
}
