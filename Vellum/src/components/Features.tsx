import { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { TextReveal } from './TextReveal';
import { Counter } from './Counter';

export function Features() {
  const [items, setItems] = useState([
    { id: 1, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" },
    { id: 2, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" },
    { id: 3, img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="featTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <h2 id="featTitle" className="font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6 text-gray-900 max-w-md">
              <TextReveal text="Keep contracts moving, without slowing growth" />
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg">
              Vellum reads the entire agreement — definitions, cross-references, exhibits — and holds every clause against your standards and the market’s.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1"><Counter to={38} suffix=" min" /></div>
                <div className="text-sm text-gray-500">Median first-pass review</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1"><Counter to={91} suffix="%" /></div>
                <div className="text-sm text-gray-500">Redlines accepted</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <MagneticButton href="#pricing" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-oxblood text-white text-sm font-medium hover:bg-oxblood-deep transition-colors">Find out more</MagneticButton>
               <MagneticButton href="#procedure" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition-colors">Get Started</MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative hidden md:block">
             <div className="flex flex-col gap-6 relative z-10 w-full h-[500px] justify-center py-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => {
                    const isTop = index === 0;
                    const isMiddle = index === 1;
                    const isBottom = index === 2;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isMiddle ? 1 : 0.4,
                          filter: isMiddle ? "blur(0px)" : "blur(3px)",
                          scale: isMiddle ? 1 : 0.9,
                          x: isMiddle ? 0 : isTop ? 48 : -48,
                          y: isMiddle ? 0 : isTop ? 24 : -24,
                          zIndex: isMiddle ? 20 : 10
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className={`bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center gap-4 ${isMiddle ? 'shadow-2xl' : 'shadow-sm'} w-full max-w-[450px] mx-auto`}
                      >
                        <div>
                          <div className="text-xs text-gray-400 font-medium mb-1">EZCT - 034</div>
                          <motion.div layout className={`mb-2 text-gray-900 transition-all duration-500 ${isMiddle ? 'font-bold text-2xl' : 'font-semibold text-lg'}`}>Signing investment documents</motion.div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                            3 File attachment
                          </div>
                        </div>
                        <motion.img layout src={item.img} alt="Document Context" className={`${isMiddle ? 'w-24 h-24' : 'w-16 h-16'} rounded-xl object-cover flex-none transition-all duration-500`} />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
             </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
