import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedNumber } from "./AnimatedNumber";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

function RecoveryBars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  const heights = [34, 52, 41, 66, 58, 80, 72, 95];

  return (
    <div ref={ref} className="flex items-end gap-[6px] h-[110px]">
      {heights.map((h, i) => (
        <motion.i
          key={i}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            delay: i * 0.05,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-1 bg-gradient-to-t from-[rgba(200,241,53,0.25)] to-voltra-lime rounded-t-[4px] min-h-[8%] origin-bottom"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function Features() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Reveal text block
    gsap.from(".feature-text-block", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".feature-header",
        start: "top 80%",
      }
    });

    // Animate feature articles
    const articles = gsap.utils.toArray(".feature-article");
    articles.forEach((article: any) => {
      const panel = article.querySelector(".feature-panel");
      const text = article.querySelector(".feature-text");
      const rows = panel.querySelectorAll(".z-10");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: article,
          start: "top 75%",
        }
      });
      
      tl.fromTo(text, 
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
        }, 
        0
      );
      
      tl.fromTo(panel, 
        { clipPath: "inset(100% 0% 0% 0%)", y: 50 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.2,
          ease: "power4.inOut",
        }, 
        0
      );

      if (rows.length > 0) {
        tl.fromTo(rows,
          { opacity: 0, y: 15, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          0.6 // stagger them in midway through panel reveal
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="py-[clamp(4rem,9vw,7.5rem)] relative" aria-label="Features">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        
        <div className="feature-header max-w-[52rem] mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="feature-text-block font-mono text-[0.75rem] tracking-[0.22em] uppercase text-voltra-lime flex items-center gap-3 kicker-line">The hardware you own, finally smart</p>
          <h2 className="feature-text-block font-display uppercase text-[clamp(2rem,4.4vw,3.4rem)] leading-[0.92] tracking-[-0.01em] mt-[1.2rem] text-balance">
            Data is cheap.<br/>
            <span className="italic text-voltra-lime inline-block -skew-x-6">Decisions</span> aren't.
          </h2>
          <p className="feature-text-block text-voltra-muted mt-[1.2rem] max-w-[38rem]">
            Your watch already collects everything. Voltra is the layer that decides what it means — and puts the answer where you'll actually see it.
          </p>
        </div>

        <div className="flex flex-col">
          {/* Feature 01 */}
          <article className="feature-article grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[820px]:grid-cols-1 max-[820px]:gap-[1.8rem] gap-[clamp(2rem,5vw,4rem)] items-center py-[clamp(2.5rem,5vw,4rem)] border-t border-voltra-line">
            <div className="feature-text">
              <p className="font-mono text-[0.72rem] tracking-[0.2em] text-voltra-lime">01 / Smart widgets</p>
              <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] uppercase leading-[1.05] my-[0.9rem] mb-[1rem] text-balance">Widgets that re-rank themselves</h3>
              <p className="text-voltra-muted max-w-[30rem]">Voltra's home-screen and watch-face widgets aren't static. Post-workout, recovery jumps to the front. Race week, taper compliance takes over. The right number is always the first number.</p>
              <ul className="list-none mt-[1.3rem] flex flex-col gap-[0.6rem]">
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>iOS, Android, watchOS & Wear OS widgets</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Context engine re-ranks every 15 minutes</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Glanceable in under one second — tested</li>
              </ul>
            </div>
            <div className="feature-panel bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[20px] p-[1.6rem] min-h-[260px] flex flex-col justify-center gap-4 relative overflow-hidden" aria-hidden="true">
              <div className="absolute top-auto bottom-[-45%] left-auto right-[-20%] w-[70%] h-[90%] pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(200,241,53,0.14), transparent)' }} />
              
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Now · Recovery</span>
                <span className="font-display text-[1.3rem]">87<small className="font-mono text-[0.65rem] text-voltra-lime ml-[0.4rem]">PRIMED</small></span>
              </div>
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Next · Session</span>
                <span className="font-display text-[1rem] font-mono">5×4:00 VO₂</span>
              </div>
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Later · Strain</span>
                <span className="font-display text-[1.3rem]">12.4<small className="font-mono text-[0.65rem] text-voltra-lime ml-[0.4rem]">▲ ON TRACK</small></span>
              </div>
            </div>
          </article>

          {/* Feature 02 */}
          <article id="coach" className="feature-article grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[820px]:grid-cols-1 max-[820px]:gap-[1.8rem] gap-[clamp(2rem,5vw,4rem)] items-center py-[clamp(2.5rem,5vw,4rem)] border-t border-voltra-line [&>div:first-child]:max-[820px]:order-0 [&>div:first-child]:order-last [&>div:last-child]:max-[820px]:order-last [&>div:last-child]:order-first">
            <div className="feature-text">
              <p className="font-mono text-[0.72rem] tracking-[0.2em] text-voltra-lime">02 / AI coach</p>
              <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] uppercase leading-[1.05] my-[0.9rem] mb-[1rem] text-balance">One instruction a day. Not forty charts.</h3>
              <p className="text-voltra-muted max-w-[30rem]">Every morning at 7:00, Voltra's coach reads your HRV, resting heart rate, sleep stages, and training load — and writes you a single brief: what to do, how hard, and why. Miss a day and it re-plans the week, not your motivation.</p>
              <ul className="list-none mt-[1.3rem] flex flex-col gap-[0.6rem]">
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Adapts to marathon, hybrid, strength & comeback blocks</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Explains every call in plain language</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Learns your response curve in ~14 days</li>
              </ul>
            </div>
            <div className="feature-panel bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[20px] p-[1.6rem] min-h-[260px] flex flex-col justify-center gap-4 relative overflow-hidden" aria-hidden="true">
              <div className="absolute top-auto bottom-[-45%] left-auto right-[-20%] w-[70%] h-[90%] pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(200,241,53,0.14), transparent)' }} />
              
              <div className="flex gap-[0.8rem] items-center font-mono text-[0.72rem] text-voltra-muted py-[0.65rem] px-[0.9rem] bg-voltra-bg border border-voltra-line rounded-[10px] relative z-10">
                <span className="bg-voltra-lime-dim text-voltra-lime py-[0.15rem] px-[0.5rem] rounded-[5px] text-[0.6rem] tracking-[0.1em] whitespace-nowrap">Mon</span>
                Easy 40:00 · Z2 — flush yesterday's strain
              </div>
              <div className="flex gap-[0.8rem] items-center font-mono text-[0.72rem] text-voltra-muted py-[0.65rem] px-[0.9rem] bg-voltra-bg border border-voltra-line rounded-[10px] relative z-10 opacity-50 line-through">
                <span className="bg-voltra-lime-dim text-voltra-lime py-[0.15rem] px-[0.5rem] rounded-[5px] text-[0.6rem] tracking-[0.1em] whitespace-nowrap">Tue</span>
                Tempo 3×10:00 — original plan
              </div>
              <div className="flex gap-[0.8rem] items-center font-mono text-[0.72rem] text-voltra-muted py-[0.65rem] px-[0.9rem] bg-voltra-bg border border-[rgba(200,241,53,0.4)] rounded-[10px] relative z-10">
                <span className="bg-voltra-lime-dim text-voltra-lime py-[0.15rem] px-[0.5rem] rounded-[5px] text-[0.6rem] tracking-[0.1em] whitespace-nowrap">Tue</span>
                Rescheduled → Thu. HRV dip detected.
              </div>
              <div className="flex gap-[0.8rem] items-center font-mono text-[0.72rem] text-voltra-muted py-[0.65rem] px-[0.9rem] bg-voltra-bg border border-voltra-line rounded-[10px] relative z-10">
                <span className="bg-voltra-lime-dim text-voltra-lime py-[0.15rem] px-[0.5rem] rounded-[5px] text-[0.6rem] tracking-[0.1em] whitespace-nowrap">Wed</span>
                Strength B · 45:00 — hinge focus
              </div>
            </div>
          </article>

          {/* Feature 03 */}
          <article className="feature-article grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[820px]:grid-cols-1 max-[820px]:gap-[1.8rem] gap-[clamp(2rem,5vw,4rem)] items-center py-[clamp(2.5rem,5vw,4rem)] border-t border-voltra-line">
            <div className="feature-text">
              <p className="font-mono text-[0.72rem] tracking-[0.2em] text-voltra-lime">03 / Recovery engine</p>
              <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] uppercase leading-[1.05] my-[0.9rem] mb-[1rem] text-balance">Know when to push. Know when to stop.</h3>
              <p className="text-voltra-muted max-w-[30rem]">The recovery score fuses HRV, resting HR, sleep debt, and muscle strain into one number you can trust at 6 a.m. Green means go hard. Amber means go easy. Red means Voltra already cancelled your intervals.</p>
              <ul className="list-none mt-[1.3rem] flex flex-col gap-[0.6rem]">
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Baseline calibrated to you, not population averages</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Overtraining alerts 48h before symptoms</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Cycle-aware modelling built in</li>
              </ul>
            </div>
            <div className="feature-panel bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[20px] p-[1.6rem] min-h-[260px] flex flex-col justify-center gap-4 relative overflow-hidden" aria-hidden="true">
              <div className="absolute top-auto bottom-[-45%] left-auto right-[-20%] w-[70%] h-[90%] pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(200,241,53,0.14), transparent)' }} />
              
              <RecoveryBars />
              
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10 mt-4">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">7-day recovery trend</span>
                <span className="font-display text-[1.3rem] text-voltra-lime">▲ 14%</span>
              </div>
            </div>
          </article>

          {/* Feature 04 */}
          <article className="feature-article grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[820px]:grid-cols-1 max-[820px]:gap-[1.8rem] gap-[clamp(2rem,5vw,4rem)] items-center py-[clamp(2.5rem,5vw,4rem)] border-t border-voltra-line [&>div:first-child]:max-[820px]:order-0 [&>div:first-child]:order-last [&>div:last-child]:max-[820px]:order-last [&>div:last-child]:order-first">
            <div className="feature-text">
              <p className="font-mono text-[0.72rem] tracking-[0.2em] text-voltra-lime">04 / Streaks, rebuilt</p>
              <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] uppercase leading-[1.05] my-[0.9rem] mb-[1rem] text-balance">Streaks that respect rest days</h3>
              <p className="text-voltra-muted max-w-[30rem]">Dumb streaks die the day you get sick. Voltra's adaptive streak counts prescribed rest as a win, freezes for illness and travel, and only breaks when you actually quit. Consistency, not compulsion.</p>
              <ul className="list-none mt-[1.3rem] flex flex-col gap-[0.6rem]">
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Smart-rest days keep the chain alive</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Streak freezes for flagged illness & jet lag</li>
                <li className="font-mono text-[0.78rem] text-voltra-muted flex gap-[0.7rem] items-baseline"><span className="text-voltra-lime font-bold">+</span>Weekly consistency score your coach can see</li>
              </ul>
            </div>
            <div className="feature-panel bg-gradient-to-br from-voltra-panel-2 to-voltra-panel border border-voltra-line rounded-[20px] p-[1.6rem] min-h-[260px] flex flex-col justify-center gap-4 relative overflow-hidden" aria-hidden="true">
              <div className="absolute top-auto bottom-[-45%] left-auto right-[-20%] w-[70%] h-[90%] pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(200,241,53,0.14), transparent)' }} />
              
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Current streak</span>
                <span className="font-display text-[1.3rem]">21<small className="font-mono text-[0.65rem] text-voltra-lime ml-[0.4rem]">DAYS</small></span>
              </div>
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Smart-rest saves</span>
                <span className="font-display text-[1.3rem]">6</span>
              </div>
              <div className="bg-voltra-bg border border-voltra-line rounded-[12px] py-[0.9rem] px-[1rem] flex justify-between items-center gap-4 relative z-10">
                <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-voltra-faint">Consistency · 12 wk</span>
                <span className="font-display text-[1.3rem]">91<small className="font-mono text-[0.65rem] text-voltra-lime ml-[0.4rem]">%</small></span>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
