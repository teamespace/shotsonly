import { Reveal } from './Reveal';
import { motion } from 'motion/react';

export function SocialProof() {
  const brands = ['Hale & Winslow', 'Meridian Legal', 'Northcote LLP', 'Aldergate', 'Fenwick Partners'];
  // Duplicate 8 times to ensure it's wide enough for any screen, and animate by shifting exactly 1 set (-12.5%)
  const duplicatedBrands = Array(8).fill(brands).flat();

  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden" aria-label="Trusted by legal teams">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <p className="text-sm font-semibold text-gray-500 max-w-[200px] flex-none z-10 lg:bg-white lg:pr-6">
            Trusted by the best leading brands:
          </p>
          
          <div className="flex-1 w-full overflow-hidden relative flex items-center h-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-16 items-center w-max pr-16"
              animate={{ x: ["0%", "-12.5%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedBrands.map((name, i) => (
                <div key={i} className="text-xl font-bold tracking-tight text-gray-400 whitespace-nowrap grayscale opacity-50">
                  {name}
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
