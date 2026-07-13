import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import { motion } from 'motion/react';

function MagneticLink({ children, href, style }: { children: React.ReactNode, href: string, style?: any }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (e.clientX - left - width / 2) * 0.3,
      y: (e.clientY - top - height / 2) * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };
  return (
    <a ref={ref} href={href} style={{ display: 'inline-block', ...style }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to('.nav', {
      paddingTop: '0.4rem',
      paddingBottom: '0.4rem',
      width: '95%',
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50',
        end: 'top -150',
        scrub: true,
      }
    });
    gsap.to('.nav-zone', {
      paddingTop: '1rem',
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50',
        end: 'top -150',
        scrub: true,
      }
    });
  }, { scope: navRef });

  return (
    <div ref={navRef} className="nav-zone shell">
      <header className="nav">
        <MagneticLink href="#">
          <div className="logo" aria-label="Curalink home">
            <span className="logo-cross" aria-hidden="true"></span>
            Cura<em>link</em>
          </div>
        </MagneticLink>
        <nav aria-label="Primary">
          <ul className="nav-menu">
            <li><MagneticLink href="#how">How it works</MagneticLink></li>
            <li><MagneticLink href="#care">Care</MagneticLink></li>
            <li><MagneticLink href="#pricing">Plans</MagneticLink></li>
            <li><MagneticLink href="#" style={{ color: 'var(--teal)' }}>Sign in</MagneticLink></li>
            <li className="nav-cta">
              <motion.a 
                className="btn btn-coral" 
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Start a visit
              </motion.a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
