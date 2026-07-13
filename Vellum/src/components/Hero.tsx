import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import React, { useRef } from 'react';
import { MagneticButton } from './MagneticButton';
import { TextReveal } from './TextReveal';

export function Hero() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  // 3D Tilt Effect
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
    <section className="pt-20 pb-24 relative overflow-hidden z-0" aria-labelledby="heroTitle">
      {/* Ambient Moving Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-white">
        <motion.div 
          className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-oxblood/15 rounded-full blur-[100px] md:blur-[120px]"
          animate={{
            x: ["0%", "30%", "0%"],
            y: ["0%", "20%", "0%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-10%", left: "-10%" }}
        />
        <motion.div 
          className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-oxblood/10 rounded-full blur-[100px] md:blur-[120px]"
          animate={{
            x: ["0%", "-30%", "0%"],
            y: ["0%", "-20%", "0%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "-10%", right: "-10%" }}
        />
      </div>
      
      <div className="px-6 max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.7, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 id="heroTitle" className="font-bold text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight mb-6">
            <TextReveal text="Every contract, read with the rigor of senior counsel." />
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            Vellum reviews, redlines, and benchmarks your agreements in minutes — flagging uncapped liability, silent auto‑renewals, and off‑market terms before anyone signs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton href="#pricing" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-oxblood text-white text-sm font-medium hover:bg-oxblood-deep transition-colors">
              Get Started
            </MagneticButton>
            <MagneticButton href="#procedure" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition-colors">
              See a sample redline
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.7, 0.3, 1] }}
          className="relative p-6 md:p-12 lg:p-16 rounded-[2rem] overflow-hidden z-10"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            <motion.video 
              src="/bg-vd.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ y: bgY }}
              className="absolute inset-0 w-full h-[150%] -top-[25%] object-cover origin-center"
            />
          </div>
          
          {/* UI Mockup Card */}
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              y: cardY,
              rotateX,
              rotateY,
              transformPerspective: 1000 
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.6 } }
            }}
            className="bg-white rounded-[1.5rem] shadow-2xl border border-white/50 p-6 md:p-8 relative z-10 w-full max-w-md mx-auto overflow-hidden [transform-style:preserve-3d]"
          >
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
              className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6"
            >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-oxblood/10 flex items-center justify-center">
                    <span className="text-oxblood font-semibold text-[10px]">MSA</span>
                 </div>
                 <div>
                   <h3 className="font-semibold text-sm">Master Services Agreement</h3>
                   <p className="text-xs text-gray-500">Draft v4 · Reviewing</p>
                 </div>
               </div>
               <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Active</span>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
                }}
              >
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Section 7.2</span>
                <p className="text-sm text-gray-400 line-through leading-relaxed">
                  Supplier shall indemnify Client against any and all losses, damages, and expenses of whatever kind, without limitation and without any cap on aggregate liability.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 15 } }
                }}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 relative mt-8"
              >
                <div className="absolute -top-3 left-4 bg-oxblood text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  High Risk · Uncapped
                </div>
                <p className="text-xs font-semibold text-oxblood mb-2 mt-2 flex items-center gap-1.5">
                  Vellum Suggests
                </p>
                <p className="text-sm text-gray-800 font-medium leading-relaxed">
                  <ins className="no-underline bg-oxblood/10 text-oxblood px-1 rounded box-decoration-clone py-0.5">Supplier’s aggregate liability under this Section shall not exceed the fees paid or payable by Client in the twelve (12) months preceding the claim</ins>, except in cases of fraud or willful misconduct.
                </p>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors">Accept redline</button>
                  <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-black text-xs font-medium hover:bg-gray-50 transition-colors">Edit</button>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
