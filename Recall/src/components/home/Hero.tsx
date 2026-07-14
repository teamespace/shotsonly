import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { MagneticButton } from '../animations/MagneticButton';
import { TextReveal } from '../animations/TextReveal';

const flips = [
  {q:"Where in the cell does the Krebs cycle take place?", a:"The mitochondrial matrix — yielding 2 ATP plus NADH & FADH₂ per glucose.", n:"Card 7 of 18"},
  {q:"Roughly how many ATP does the electron transport chain produce?", a:"About 34 ATP, along the inner mitochondrial membrane.", n:"Card 8 of 18"},
  {q:"What process do mitochondria use to make ATP?", a:"Cellular respiration — the reason they're called the cell's powerhouse.", n:"Card 9 of 18"}
];

function Confetti({ color, className, style }: { color: string, className?: string, style?: React.CSSProperties }) {
  return (
    <span 
      className={`absolute pointer-events-none z-0 ${className}`} 
      style={{ background: color, ...style }}
    />
  );
}

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userTouched, setUserTouched] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevMouseX = window.innerWidth / 2;
    let isSeeking = false;
    let targetTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      
      const currentMouseX = e.clientX;
      const deltaX = currentMouseX - prevMouseX;
      prevMouseX = currentMouseX;
      
      if (!video.duration || isNaN(video.duration)) return;
      
      targetTime = video.currentTime + (deltaX / window.innerWidth) * 0.8 * video.duration;
      targetTime = Math.max(0, Math.min(targetTime, video.duration));
      
      if (!isSeeking) {
        video.currentTime = targetTime;
        isSeeking = true;
      }
    };

    const handleSeeked = () => {
      isSeeking = false;
      if (Math.abs(video.currentTime - targetTime) > 0.05) {
        video.currentTime = targetTime;
        isSeeking = true;
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (userTouched) return;
    const timer = setInterval(() => {
      setFlipped(f => {
        if (f) {
          setTimeout(() => {
            if (!userTouched) setIdx(i => (i + 1) % flips.length);
          }, 330);
          return false;
        }
        return true;
      });
    }, 3400);
    return () => clearInterval(timer);
  }, [userTouched]);

  const handleCardClick = () => {
    setUserTouched(true);
    if (flipped) {
      setFlipped(false);
      setTimeout(() => setIdx(i => (i + 1) % flips.length), 330);
    } else {
      setFlipped(true);
    }
  };

  const handleRegenClick = () => {
    setUserTouched(true);
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + 1) % flips.length), 330);
  };

  return (
    <section className="relative pt-[4.2rem] lg:pt-[5rem] pb-[5.5rem] overflow-clip" aria-labelledby="hero-h">
      <Confetti color="var(--color-pink)" className="w-[16px] h-[16px] rounded-full hidden sm:block" style={{ top: '12%', left: '7%' }} />
      <Confetti color="var(--color-mint)" className="w-[14px] h-[14px] rounded-[4px] rotate-[18deg] hidden sm:block" style={{ top: '24%', right: '9%' }} />
      <Confetti color="var(--color-violet)" className="w-[10px] h-[10px] rounded-full hidden sm:block" style={{ top: '8%', right: '22%' }} />
      <Confetti color="var(--color-yellow)" className="w-[12px] h-[12px] rounded-[4px] rotate-[18deg]" style={{ top: '46%', left: '3%' }} />
      <Confetti color="var(--color-pink)" className="w-[12px] h-[12px] rounded-full" style={{ bottom: '14%', right: '4%' }} />
      <Confetti color="var(--color-mint)" className="w-[8px] h-[8px] rounded-full" style={{ bottom: '30%', left: '12%' }} />

      <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 w-full text-center lg:text-left max-w-[600px] lg:max-w-[540px]">
            <motion.p 
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0, ease: [0.3, 1.35, 0.45, 1] }}
              className="inline-block bg-white brutal-border rounded-full brutal-shadow-sm px-[1.1rem] py-[0.4rem] font-bold text-[0.9rem] -rotate-[1.5deg] mb-[1.6rem]"
            >
              Used by <b className="text-pink">340,000 students</b> the night before finals
            </motion.p>
            
            <h1 id="hero-h" className="text-[clamp(2.5rem,3.8vw,4.5rem)] tracking-tight leading-[1.05] mx-auto lg:mx-0 mb-[1.4rem]">
              <TextReveal text="Your messy notes, reborn as" /> <br className="hidden xl:block" />
              <motion.span 
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.3, 1.35, 0.45, 1] }}
                className="relative inline-block whitespace-nowrap mt-2 lg:mt-1"
              >
                quizzes that stick
                <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true" className="absolute -left-[2%] -bottom-[0.16em] w-[104%] h-[0.3em] overflow-visible">
                  <path d="M3 10 C 30 3, 55 14, 85 8 S 140 2, 170 10 S 235 15, 297 5" fill="none" stroke="var(--color-pink)" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.3, 1.35, 0.45, 1] }}
              className="mx-auto lg:mx-0 mb-[2.2rem] text-[1.18rem] text-[#3A3A3A] leading-relaxed"
            >
              Paste anything — lecture scribbles, textbook photos, a 40-page PDF. Recall's AI turns it into flashcards, practice quizzes, and match games in about 20 seconds. Cramming, upgraded.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.3, 1.35, 0.45, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4 relative z-10"
            >
              <MagneticButton>
                <Button as="a" href="#cta" variant="pink">Paste my notes — free</Button>
              </MagneticButton>
              <MagneticButton>
                <Button as="a" href="#how" variant="white">Watch it work</Button>
              </MagneticButton>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.3, 1.35, 0.45, 1] }}
              className="text-[0.88rem] font-bold text-[#6B6B6B]"
            >
              No signup for your first 3 decks · Works with 27 languages
            </motion.p>
          </div>

          {/* Right Column: Video Card */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end relative z-10">
            <motion.figure 
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.3, 1.35, 0.45, 1] }}
              className="relative w-full aspect-square -rotate-[2deg] brutal-border rounded-[22px] brutal-shadow-lg flex items-center justify-center bg-white"
            >
               <video 
                 ref={videoRef}
                 src="/hero-new.mp4" 
                 loop 
                 muted 
                 playsInline 
                 preload="auto"
                 className="w-full h-full object-cover rounded-[22px] -scale-x-100" 
               />
              <figcaption className="absolute -bottom-[16px] left-1/2 -translate-x-1/2 rotate-[2deg] bg-white brutal-border rounded-full brutal-shadow-sm font-display font-extrabold text-[0.88rem] px-[1rem] py-[0.28rem] whitespace-nowrap">
                Fresh out of the AI oven
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.3, 1.35, 0.45, 1] }}
          className="relative z-10 mt-[4rem] lg:mt-[6.5rem] grid lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1fr)] grid-cols-1 gap-[1.4rem] items-center text-left lg:max-w-none max-w-[480px] mx-auto"
        >
          <div className="bg-white brutal-border rounded-[20px] brutal-shadow-lg -rotate-[1.4deg] w-full">
            <div className="flex items-center gap-[0.6rem] border-b-[3px] border-black px-[1.1rem] py-[0.75rem] font-display font-extrabold text-[1rem] bg-yellow-soft rounded-t-[17px]">
              bio-201-lecture-9.txt 
              <span className="flex gap-[0.35rem] ml-auto" aria-hidden="true">
                <i className="w-[11px] h-[11px] rounded-full border-[2.5px] border-black block bg-pink" />
                <i className="w-[11px] h-[11px] rounded-full border-[2.5px] border-black block bg-yellow" />
                <i className="w-[11px] h-[11px] rounded-full border-[2.5px] border-black block bg-mint" />
              </span>
            </div>
            <div className="px-[1.25rem] py-[1.15rem] pb-[1.3rem] text-[0.92rem] text-[#4A4A4A] space-y-[0.55rem]">
              <p>mitochondria = <span className="bg-yellow px-[0.25em] rounded-[4px] font-bold text-black">powerhouse</span>, makes ATP via <span className="bg-pink-soft px-[0.25em] rounded-[4px] font-bold text-black">cellular respiration</span></p>
              <p>krebs cycle happens in the <span className="bg-yellow px-[0.25em] rounded-[4px] font-bold text-black">matrix</span> — 2 ATP + NADH + FADH2 per glucose??</p>
              <p className="text-[#8A8A8A] italic">(prof said this is DEFINITELY on the exam)</p>
              <p>electron transport chain → inner membrane → ~34 ATP</p>
            </div>
            <div className="px-[1.25rem] pb-[1.25rem]">
              <Button variant="pink" className="w-full" onClick={handleRegenClick}>✦ Generate my study set</Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[0.4rem] font-display font-extrabold text-[0.85rem] text-black" aria-hidden="true">
            <svg viewBox="0 0 64 46" className="w-[48px] h-[40px] lg:w-[64px] lg:h-[46px] lg:rotate-0 rotate-[80deg]">
              <path d="M4 10 C 22 2, 44 12, 56 28 M56 28l-12-3 M56 28l2-12" fill="none" stroke="var(--color-black)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="bg-mint brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[0.85rem] py-[0.3rem] rotate-[2deg] whitespace-nowrap">18 cards · 20 sec</span>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <button 
              className={`w-[min(340px,100%)] h-[230px] perspective-1200 bg-transparent border-0 p-0 cursor-pointer block group ${flipped ? 'flipped' : ''}`}
              onClick={handleCardClick}
              aria-pressed={flipped}
              aria-label={`Flashcard. Question: ${flips[idx].q} Press to flip and reveal the answer.`}
            >
              <span className="block relative w-full h-full transform-style-3d transition-transform duration-[650ms] ease-[cubic-bezier(0.35,1.4,0.45,1)] group-[.flipped]:rotate-y-180">
                <span className="absolute inset-0 backface-hidden brutal-border rounded-[20px] brutal-shadow-lg flex flex-col p-[1.2rem] pb-[1.3rem] text-left bg-white rotate-[1.6deg]">
                  <span className="self-start font-display font-extrabold text-[0.72rem] tracking-[0.1em] uppercase border-[2.5px] border-current rounded-full px-[0.7rem] py-[0.18rem] mb-auto text-pink">Question · Bio 201</span>
                  <span className="font-display font-extrabold text-[1.5rem] leading-[1.15] mb-auto text-black">{flips[idx].q}</span>
                  <span className="text-[0.85rem] font-bold text-[#8A8A8A] flex items-center gap-[0.4rem]">👆 Tap to flip</span>
                </span>
                <span className="absolute inset-0 backface-hidden brutal-border rounded-[20px] brutal-shadow-lg flex flex-col p-[1.2rem] pb-[1.3rem] text-left bg-pink text-white rotate-y-180 -rotate-[1.6deg]">
                  <span className="self-start font-display font-extrabold text-[0.72rem] tracking-[0.1em] uppercase border-[2.5px] border-current rounded-full px-[0.7rem] py-[0.18rem] mb-auto">Answer</span>
                  <span className="font-display font-extrabold text-[1.5rem] leading-[1.15] mb-auto">{flips[idx].a}</span>
                  <span className="text-[0.85rem] font-bold text-pink-soft flex items-center gap-[0.4rem]">Nice — marked as known ✓</span>
                </span>
              </span>
            </button>
            <span className="font-display font-extrabold text-[0.9rem] bg-black text-yellow rounded-full px-[1rem] py-[0.3rem] shadow-[3px_3px_0_rgba(25,25,25,0.25)] -rotate-[1deg]">{flips[idx].n}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
