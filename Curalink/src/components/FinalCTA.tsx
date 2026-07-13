import { motion } from 'motion/react';
import { useRef, useState } from 'react';

function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setPos({ x: (e.clientX - left - width / 2) * 0.3, y: (e.clientY - top - height / 2) * 0.3 });
  };
  return (
    <motion.a 
      ref={ref} href={href} 
      onMouseMove={onMove} onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos} transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-coral inline-block"
    >
      {children}
    </motion.a>
  );
}

export default function FinalCTA() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="final section-pad" aria-label="Start your first visit">
      <div className="shell">
        <motion.div 
          className="final-band relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Left side video background overlay to match Hero */}
          <video 
            src="/hero-left.mp4" 
            autoPlay loop muted playsInline 
            className="absolute inset-y-0 left-0 w-full md:w-[50vw] h-full object-cover pointer-events-none"
            style={{ opacity: 0.04, mixBlendMode: 'screen', transform: 'scale(1.05)', zIndex: 0 }}
          />

          {/* Right side video background overlay (mirrored) */}
          <video 
            src="/hero-left.mp4" 
            autoPlay loop muted playsInline 
            className="absolute inset-y-0 right-0 w-full md:w-[50vw] h-full object-cover pointer-events-none"
            style={{ opacity: 0.04, mixBlendMode: 'screen', transform: 'scaleX(-1) scale(1.05)', zIndex: 0 }}
          />
          
          <div className="relative z-10">
            <h2>The doctor will see you <em>now.</em> Actually now.</h2>
            <p>Start describing your symptoms and a board-certified physician will be with you in about the time it took to read this page.</p>
            <MagneticButton href="#">Start your visit — free intake</MagneticButton>
            <small>Free symptom check · $0 until you choose to see a doctor · Available in all 50 states</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
