import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="voices section-pad" aria-label="Patient story">
      <div className="shell mx-auto px-6">
        <motion.div 
          className="head"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          <div>
            <span className="kicker">Patient stories</span>
            <h2>Don't just take our <em>word for it.</em></h2>
          </div>
          <p>Read how families across the country are getting faster, more reliable care with Curalink — without the waiting room stress.</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch"
          style={{ padding: '1.5rem' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          {/* Image Side (Left) */}
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <figure className="relative rounded-[24px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] h-full min-h-[300px] lg:min-h-[440px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover object-top" 
                loading="lazy" 
                alt="Patient smiling" 
              />
            </figure>
          </div>

          {/* Content Side (Right) */}
          <div className="w-full lg:w-[58%] flex flex-col justify-between" style={{ padding: '2.5rem 3rem 2.5rem 0' }}>
            <blockquote className="font-sans text-[1.15rem] lg:text-[1.35rem] leading-[1.65] text-gray-700 font-medium tracking-tight mb-12">
              "Curalink has revolutionized my family's healthcare! The automated AI triage and instant doctor matching save me countless hours. Gone are the days of endless waiting rooms—now I enjoy effortless, smooth consults. I highly recommend it to anyone eager to enhance their family's health management!"
            </blockquote>
            
            <div className="flex flex-wrap items-center justify-between gap-6">
              {/* Author and Logo */}
              <div className="flex items-center gap-5 lg:gap-8">
                <div>
                  <b className="block text-[1.1rem] text-gray-900 font-bold mb-0.5">Emily Rodrik.</b>
                  <span className="text-[0.85rem] text-gray-500 font-medium">Curalink Member</span>
                </div>
                
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-end gap-[3px] h-5 mb-0.5">
                    <div className="w-[3px] h-2.5 bg-[#E8503C] rounded-full"></div>
                    <div className="w-[3px] h-4 bg-[#E8503C] rounded-full"></div>
                    <div className="w-[3px] h-5 bg-[#E8503C] rounded-full"></div>
                    <div className="w-[3px] h-3 bg-[#E8503C] rounded-full"></div>
                  </div>
                  <span className="font-bold text-[1.35rem] tracking-tight text-gray-900">Pulse</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-center transition-colors shadow-sm" aria-label="Previous testimonial">
                  <ArrowLeft size={18} className="text-gray-500" />
                </button>
                <button className="w-11 h-11 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-center transition-colors shadow-sm" aria-label="Next testimonial">
                  <ArrowRight size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
