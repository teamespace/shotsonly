import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ConsultChatMock() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Animation Sequence Timeline
    const timers = [
      setTimeout(() => setStep(1), 800),   // Maya msg
      setTimeout(() => setStep(2), 2200),  // AI typing...
      setTimeout(() => setStep(3), 4800),  // AI actual msg
      setTimeout(() => setStep(4), 6500),  // Triage bar appears
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const popIn = {
    initial: { opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring" as const, stiffness: 350, damping: 25 }
  };

  const popInLeft = {
    initial: { opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom left' },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring" as const, stiffness: 350, damping: 25 }
  };

  return (
    <div className="flex flex-col gap-5 w-full relative z-10 min-h-[400px] justify-end" role="img" aria-label="A Curalink consultation mock">
      <AnimatePresence>
        {step >= 1 && (
          <motion.div 
            {...popIn}
            className="msg patient self-end text-right w-full max-w-[90%] md:max-w-[85%]"
          >
            <span className="who block text-[0.7rem] font-bold tracking-[0.08em] uppercase !text-white/90 mb-[0.4rem] drop-shadow-md">Maya · 8:12 pm</span>
            <div className="bubble glass-ios-ultra text-white rounded-[20px] rounded-br-[6px] px-5 py-4 text-[0.95rem] leading-relaxed text-left">
              I've had a throbbing headache behind my right eye since yesterday, and bright light makes it a lot worse.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {step === 2 && (
          <motion.div key="typing" {...popInLeft} className="msg ai w-full max-w-[95%] md:max-w-[90%] mt-2">
            <span className="who block text-[0.7rem] font-bold tracking-[0.08em] uppercase !text-white/90 mb-[0.4rem] drop-shadow-md">Curalink AI</span>
            <div className="bubble glass-ios-ultra text-white rounded-[20px] rounded-bl-[6px] px-5 py-4 w-max">
              <div className="flex gap-1.5 items-center px-1">
                <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} />
                <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} />
              </div>
            </div>
          </motion.div>
        )}
        
        {step >= 3 && (
          <motion.div key="msg" {...popInLeft} className="msg ai w-full max-w-[95%] md:max-w-[90%] mt-2">
            <span className="who block text-[0.7rem] font-bold tracking-[0.08em] uppercase !text-white/90 mb-[0.4rem] drop-shadow-md">Curalink AI</span>
            <div className="bubble glass-ios-ultra text-white rounded-[20px] rounded-bl-[6px] px-5 py-4 text-[0.95rem] leading-relaxed">
              Thanks, Maya — I'm sorry, that sounds rough. Two quick things so your doctor can move fast: any of these alongside the headache?
              <motion.div 
                className="sym-chips mt-3 flex gap-2 flex-wrap"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
              >
                {[
                  { text: 'Nausea', active: true },
                  { text: 'Fever', active: false },
                  { text: 'Light sensitivity', active: true },
                  { text: 'Neck stiffness', active: false }
                ].map((chip, i) => (
                  <motion.span 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { type: 'spring' } }
                    }}
                    className={chip.active 
                      ? "bg-teal text-white text-[0.72rem] font-bold px-3 py-1.5 rounded-full shadow-sm"
                      : "bg-white/80 text-teal-deep text-[0.72rem] font-bold px-3 py-1.5 rounded-full shadow-[inset_0_0_0_1px_rgba(14,124,107,0.3)]"
                    }
                  >
                    {chip.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {step >= 4 && (
          <motion.div {...popInLeft} className="msg ai w-full mt-2">
            <div className="triage glass-ios-ultra rounded-[20px] px-5 py-4">
              <div className="triage-top flex flex-wrap items-center justify-between gap-3 mb-3">
                <b className="text-[0.95rem] text-white font-bold">Likely migraine episode</b>
                <span className="triage-level text-[0.7rem] font-bold tracking-[0.06em] uppercase text-coral-deep bg-coral-tint px-3 py-1.5 rounded-full whitespace-nowrap">Moderate priority</span>
              </div>
              <div className="triage-bar h-[6px] rounded-full bg-teal-line/50 overflow-hidden mb-2">
                <motion.i 
                  className="block h-full rounded-full bg-gradient-to-r from-teal to-coral"
                  initial={{ width: 0 }}
                  animate={{ width: '62%' }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                ></motion.i>
              </div>
              <small className="block text-white/70 text-[0.76rem]">Intake summarized for your doctor · matching you with neurology now</small>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
