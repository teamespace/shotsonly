import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

export function CTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="pt-32 pb-48 relative overflow-hidden flex flex-col items-center justify-center min-h-screen z-0" aria-labelledby="ctaTitle">
      <div className="absolute inset-0 -z-20">
        <video src="/bg-vd.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
      </div>
      
      {/* Background image is full without overlays */}

      <div className="max-w-[900px] w-full mx-auto px-6 relative z-10 mb-20">
        <Reveal>
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX,
              rotateY,
              transformPerspective: 1000 
            }}
            className="bg-white rounded-[2rem] py-20 px-12 md:px-20 text-center shadow-2xl relative [transform-style:preserve-3d]"
          >
            {/* Corner dots decoration */}
            <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-gray-100"></div>
            <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-gray-100"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-gray-100"></div>
            <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-gray-100"></div>

            <h2 id="ctaTitle" className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 text-gray-900 max-w-2xl mx-auto">
              <TextReveal text="Ready to close contracts faster than ever?" />
            </h2>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Join 1,200+ legal teams who moved from manual chaos to AI-powered clarity — in under a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="#pricing" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-oxblood text-white text-sm font-medium hover:bg-oxblood-deep transition-colors">
                Get your free demo
              </MagneticButton>
              <MagneticButton href="#pricing" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                Start 14 Days Free!
              </MagneticButton>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Massive watermark text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[25vw] font-black uppercase tracking-tighter pointer-events-none whitespace-nowrap z-0 leading-none select-none text-white/10 mix-blend-overlay drop-shadow-2xl">
        VELLUM
      </div>
    </section>
  );
}
