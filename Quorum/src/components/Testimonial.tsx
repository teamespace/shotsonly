import React from 'react';
import { motion } from 'motion/react';
import FadeIn from './FadeIn';
import { AnimatedCounter } from './animations/AnimatedCounter';

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#fafafa] text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-blue-600 text-6xl font-serif leading-none mb-6">“</div>
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-gray-800 leading-[1.2] mb-12 max-w-3xl mx-auto">
            We cancelled our Monday recap meeting. Quorum's summary of the summary meeting <motion.span 
              className="font-semibold text-blue-600 px-2 leading-snug rounded inline-block"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(239, 246, 255, 0.8) 0%, rgba(239, 246, 255, 0.8) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0"
              }}
              initial={{ backgroundSize: "0% 100%", color: "#1f2937" }}
              whileInView={{ backgroundSize: "100% 100%", color: "#2563eb" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              made the meeting redundant.
            </motion.span>
          </p>
          <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
            <span className="text-gray-900 block mb-1 text-sm">Ines Volkova</span>
            VP Operations · Arcadia Labs
          </div>
        </FadeIn>
        
        <FadeIn className="flex flex-wrap justify-center gap-12 md:gap-24 mt-20 pt-16 border-t border-gray-200" delay={0.2}>
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
              <AnimatedCounter value={31000} suffix="+" duration={2.5} />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Teams on the record</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
              <AnimatedCounter value={4.8} decimals={1} suffix=" / 5" duration={2.5} />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">On G2 · 2,140 reviews</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
              <AnimatedCounter value={6.5} decimals={1} suffix=" hrs" duration={2.5} />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Saved per person, weekly</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
