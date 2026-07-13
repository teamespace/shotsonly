/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function TiltCard({ children, className, 'aria-hidden': ariaHidden, 'aria-label': ariaLabel }: any) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.figure
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    >
      {children}
    </motion.figure>
  );
}

function ScrollQuote() {
  const container = useRef<HTMLDivElement>(null);

  const quote = "“The first meditation app that doesn't feel like a library. It feels like someone wrote tonight's session while thinking of you — because, in a sense, something did.”";
  const words = quote.split(' ');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom 80%",
        scrub: true,
      }
    });

    // Reveal text word by word
    tl.to('.quote-word', {
      opacity: 1,
      stagger: 0.1,
      ease: "none",
      duration: 0.1
    });

    // Then fade and slide up the elements below
    tl.fromTo('.reveal-after', {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "power2.out",
      duration: 1.5
    }, "+=0.5");
  }, { scope: container });

  return (
    <div ref={container} style={{ height: '300vh', position: 'relative', marginTop: '-5.5rem', marginBottom: '-4.5rem' }}>
      <div style={{ position: 'sticky', top: '0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="wrap">
          <div className="proof-quote" style={{ margin: '0 auto 3.2rem' }}>
            <blockquote className="reveal-text">
              {words.map((word, i) => (
                <span key={i}>
                  <span className="quote-word" style={{ opacity: 0.2 }}>{word}</span>
                  {" "}
                </span>
              ))}
            </blockquote>
            <cite className="reveal-after" style={{ opacity: 0, display: 'block' }}>Mindful Living — App of the Year shortlist</cite>
          </div>
          <div className="proof-logos" aria-label="Featured in">
            <span className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>The Slow Review</span>
            <span className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>Wellbeing Weekly</span>
            <span className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>Praxis Journal</span>
            <span className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>Kindred</span>
            <span className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>4.9 ★ · 31,000 ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalPhilosophy({ children }: { children?: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const copy = "Silence is not empty. It is full of answers, gently guiding you back to yourself.";
  const words = copy.split(' ');

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const scrollEnd = -(track.scrollWidth - window.innerWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=3000"
      }
    });

    // 1. Move the track
    tl.to(track, {
      x: scrollEnd,
      ease: "none",
      duration: 0.8
    });

    // 2. Zoom the frame explicitly in the master timeline!
    const frame = track.querySelector('.zooming-frame');
    const content = track.querySelector('.zooming-content');
    
    if (content) {
      gsap.set(content, { xPercent: -50, yPercent: -50, scale: 1 });
    }

    if (frame) {
      tl.to(frame, {
        scale: 50,
        ease: "power2.in",
        duration: 0.19,
        onUpdate: function() {
          if (content) {
            const currentScale = gsap.getProperty(frame, "scale") as number;
            gsap.set(content, { scale: 1 / currentScale });
          }
        }
      });
    }

    // 3. Hide the entire track container instantly so it seamlessly reveals the features section
    tl.to(trackContainerRef.current, {
      autoAlpha: 0,
      duration: 0.01
    });

    const letters = track.querySelectorAll('.letter');
    letters.forEach((letter) => {
      const startY = (Math.floor(7 * Math.random()) + 10) * (Math.random() > 0.5 ? 20 : -20);
      const startRot = (Math.floor(11 * Math.random()) + 10) * (Math.random() > 0.5 ? 2 : -2);

      gsap.fromTo(letter, 
        { rotation: startRot, yPercent: startY, opacity: 0 },
        { 
          rotation: 0, 
          yPercent: 0, 
          opacity: 1,
          ease: "elastic.out(1.2, 1)", 
          scrollTrigger: {
            trigger: letter,
            containerAnimation: tl,
            start: "left 100%",
            end: "left 20%",
            scrub: true
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} id="philosophy" style={{ position: 'relative' }}>
      
      {/* The Features Section (dictates the height of the pin) */}
      <div id="features" style={{ width: '100vw' }}>
         {children}
      </div>

      {/* The Absolute Track (covers the features section initially) */}
      <div 
        ref={trackContainerRef}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          backgroundColor: 'var(--pine)', 
          overflow: 'hidden',
          zIndex: 20
        }}
      >
        {/* Dynamic Shadow Video Overlay */}
        <video 
          src="/buat_shadow_nya_jadi_bergerak.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'soft-light',
            filter: 'grayscale(100%) opacity(0.12)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div 
          ref={trackRef}
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            width: 'max-content',
            paddingLeft: '100vw',
            paddingRight: 'calc(50vw - 100px)'
          }}
        >
          
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="sec-eyebrow" style={{ marginBottom: '2rem', color: 'var(--clay-soft)' }}>Our Philosophy</span>
          <h2 style={{ 
            fontFamily: 'var(--serif)', 
            fontSize: 'clamp(3rem, 7vw, 7rem)', 
            lineHeight: 1.1, 
            color: '#FFF', 
            margin: 0,
            display: 'flex',
            gap: '0.2em',
            whiteSpace: 'nowrap'
          }}>
            {words.map((word, i) => {
              return (
                <span key={i} style={{ 
                  display: 'flex',
                  color: 'inherit', 
                  fontStyle: 'normal', 
                  fontWeight: 'inherit' 
                }}>
                  {word.split('').map((char, charIndex) => (
                    <span 
                      key={charIndex} 
                      className="letter"
                      style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 0 }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </h2>
        </div>

        {/* The Zooming Frame */}
        <div 
          className="zooming-frame"
          style={{ 
            width: '200px', 
            height: '200px', 
            backgroundColor: 'var(--cream)', 
            borderRadius: '4px',
            transformOrigin: 'center center',
            flexShrink: 0,
            marginLeft: '15vw',
            overflow: 'hidden',
            position: 'relative'
          }} 
        >
          <div 
            className="zooming-content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
        
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !lineRef.current) return;

    // 1. Draw the connecting line as user scrolls through the steps
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".steps",
          start: "top 50%",
          end: "bottom 70%",
          scrub: 0.5,
        }
      }
    );

    // 2. Animate each step entering as the scroll reaches it
    const steps = gsap.utils.toArray('.step');
    steps.forEach((step: any) => {
      const dot = step.querySelector('.step-dot');
      const content = step.querySelector('.step-content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 65%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(dot, 
        { scale: 0.8, opacity: 0.5, borderColor: "rgba(228,180,158,.2)", boxShadow: "0 0 0 transparent" },
        { scale: 1, opacity: 1, borderColor: "var(--clay)", boxShadow: "0 0 20px rgba(201,111,74,.4)", duration: 0.6, ease: "back.out(1.5)" }
      )
      .fromTo(content, 
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    });
  }, { scope: container });

  return (
    <section className="how" id="how" ref={container}>
      <div className="wrap">
        <div className="sec-head center">
          <span className="sec-eyebrow">How it works</span>
          <h2>Thirty honest seconds. <em>Then let go.</em></h2>
          <p>The practice is ancient. The preparation is new.</p>
        </div>

        <div className="steps">
          {/* Background track line */}
          <div style={{
            position: 'absolute', left: '27px', top: '30px', bottom: '30px',
            width: '2px', background: 'rgba(228,180,158,0.1)'
          }}></div>
          {/* Active progress line */}
          <div ref={lineRef} style={{
            position: 'absolute', left: '27px', top: '30px', bottom: '30px',
            width: '2px', background: 'linear-gradient(var(--clay), var(--clay-soft))',
            transformOrigin: 'top center'
          }}></div>

          <div className="step">
            <span className="step-dot" aria-hidden="true">i</span>
            <div className="step-content">
              <h3>Check in, briefly</h3>
              <p>
                Each morning, answer one gentle question — a slider, a word, a sigh.
                Stillwave quietly folds in your sleep data and today's calendar if
                you've connected them.
              </p>
              <small>~30 seconds</small>
            </div>
          </div>
          <div className="step">
            <span className="step-dot" aria-hidden="true">ii</span>
            <div className="step-content">
              <h3>Stillwave composes</h3>
              <p>
                Our meditation model — trained with practicing teachers, reviewed
                by them monthly — writes today's script and narrates it in your
                chosen voice, with room to breathe built in.
              </p>
              <small>Ready before your coffee</small>
            </div>
          </div>
          <div className="step">
            <span className="step-dot" aria-hidden="true">iii</span>
            <div className="step-content">
              <h3>Settle in</h3>
              <p>
                Press play. The session adapts to your breath as you go, and afterwards
                a single line of reflection is saved to your archive — a diary you
                never had to write.
              </p>
              <small>The only step that matters</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFloating() {
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // State to hold target and current positions for lerping
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  // Lerp function for smoothing
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = () => {
    // Smoothly interpolate current position towards target
    currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.08);
    currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.08);

    // Apply the transforms to the images with varying intensities
    imagesRef.current.forEach((img, i) => {
      if (!img) return;
      // Vary the movement slightly for each image to create a parallax feel
      const intensity = 1 + (i % 3) * 0.7; // e.g. 1, 1.7, 2.4
      const moveX = currentPos.current.x * intensity;
      const moveY = currentPos.current.y * intensity;
      
      // Use the independent CSS translate property so it doesn't fight the CSS @keyframes transform
      img.style.translate = `${moveX}px ${moveY}px`;
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the section (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normalizedX = (mouseX - centerX) / centerX;
    const normalizedY = (mouseY - centerY) / centerY;

    // Increased max move base to ~35px for a more pronounced effect
    targetPos.current = {
      x: normalizedX * 35,
      y: normalizedY * 35
    };
  };

  const handleMouseLeave = () => {
    // Return to original position
    targetPos.current = { x: 0, y: 0 };
  };

  return (
    <section 
      className="cta-floating" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cta-content" data-reveal="">
        <h2>Find your stillness</h2>
        <div className="cta-actions">
          <a href="#pricing" className="btn-pill-solid">Begin practice</a>
          <a href="#" className="btn-pill-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> 
            Visit Instagram
          </a>
        </div>
      </div>
      
      {/* Floating Images */}
      <div className="float-img fi-1" ref={el => imagesRef.current[0] = el}><img src="/cta (1).png" alt="Meditation" /></div>
      <div className="float-img fi-2" ref={el => imagesRef.current[1] = el}><img src="/cta (2).png" alt="Rest" /></div>
      <div className="float-img fi-3" ref={el => imagesRef.current[2] = el}><img src="/cta (3).png" alt="Nature" /></div>
      <div className="float-img fi-4" ref={el => imagesRef.current[3] = el}><img src="/cta (4).png" alt="Stretch" /></div>
      <div className="float-img fi-5" ref={el => imagesRef.current[4] = el}><img src="/cta (5).png" alt="Water" /></div>
      <div className="float-img fi-6" ref={el => imagesRef.current[5] = el}><img src="/cta (6).png" alt="Balance" /></div>
    </section>
  );
}

export default function App() {
  const [isNavSolid, setIsNavSolid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSolid(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setIsLoaded(true);
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsLoaded(true);
        });
      });
    }
  }, []);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set('[data-reveal]', { opacity: 1, y: 0, scale: 1 });
      return;
    }
    
    gsap.set('[data-reveal]', { opacity: 0, y: 50, scale: 0.95 });

    ScrollTrigger.batch('[data-reveal]', {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          overwrite: true
        });
      },
      start: 'top 85%',
      once: true
    });
  }, []);

  // Set the body class directly so that CSS styling matches perfectly.
  useEffect(() => {
    if (isLoaded) {
      document.body.classList.add('loaded');
    }
    return () => {
      document.body.classList.remove('loaded');
    };
  }, [isLoaded]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* ============ NAV ============ */}
      <header className={`nav ${isNavSolid ? 'nav-solid' : ''}`}>
        <div className="nav-inner">
          <a className="logo" href="#" aria-label="Stillwave home">
            <span className="logo-img" aria-hidden="true"></span>
            Stillwave
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#features">Practice</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li className="nav-cta"><a className="btn btn-pine" href="#pricing">Begin free</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">

        {/* ============ HERO (cinematic video) ============ */}
        <section className="hero" id="top">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-scrim" aria-hidden="true"></div>
          <div className="wrap">
            <h1 data-load="" style={{ '--d': 0 } as React.CSSProperties}>Find calm. Move with purpose. Belong.</h1>
            <p className="hero-sub" data-load="" style={{ '--d': 1 } as React.CSSProperties}>
              We guide you into movement that feels honest, intuitive and deeply supportive.
            </p>
            <div className="hero-ctas" data-load="" style={{ '--d': 2 } as React.CSSProperties}>
              <a className="hero-btn-outline" href="#pricing">Get started</a>
            </div>
          </div>
        </section>

        {/* ============ BREATHING SCENE ============ */}
        <section className="breath-sec" aria-label="Today's session preview">
          <div className="wrap">
            <div className="breath-scene" data-reveal="" aria-label="Preview of the Stillwave session screen inside animated breathing rings">
              <span className="ring ring-1" aria-hidden="true"></span>
              <span className="ring ring-2" aria-hidden="true"></span>
              <span className="ring ring-3" aria-hidden="true"></span>
              <span className="breath-label" aria-hidden="true">breathe in · breathe out</span>

              <div className="phone" role="img" aria-label="Stillwave app showing today's AI-generated session, Letting the Day Settle, twelve minutes, with a breathing orb and playback controls">
                <div className="phone-screen" aria-hidden="true">
                  <div className="phone-notch"></div>
                  <div className="ps-status"><span>7:04</span><span>tue · evening</span></div>
                  <span className="ps-kicker">Made for you today</span>
                  <h2 className="ps-title">Letting the Day Settle</h2>
                  <p className="ps-meta">12 min · written from tonight's check-in</p>
                  <div className="ps-orb-zone">
                    <div className="ps-orb"></div>
                    <span className="ps-breath">breathe in</span>
                  </div>
                  <div className="ps-wave">
                    <span style={{ height: '60%', animationDelay: '0s' }}></span>
                    <span style={{ height: '90%', animationDelay: '.15s' }}></span>
                    <span style={{ height: '45%', animationDelay: '.3s' }}></span>
                    <span style={{ height: '100%', animationDelay: '.45s' }}></span>
                    <span style={{ height: '65%', animationDelay: '.6s' }}></span>
                    <span style={{ height: '85%', animationDelay: '.75s' }}></span>
                    <span style={{ height: '50%', animationDelay: '.9s' }}></span>
                    <span style={{ height: '95%', animationDelay: '1.05s' }}></span>
                    <span style={{ height: '70%', animationDelay: '1.2s' }}></span>
                    <span style={{ height: '40%', animationDelay: '1.35s' }}></span>
                    <span style={{ height: '88%', animationDelay: '1.5s' }}></span>
                    <span style={{ height: '58%', animationDelay: '1.65s' }}></span>
                  </div>
                  <div className="ps-times"><span>4:36</span><span>−7:24</span></div>
                  <div className="ps-controls">
                    <span className="ps-side">15</span>
                    <span className="ps-play">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                    <span className="ps-side">30</span>
                  </div>
                  <p className="ps-hint">tonight's pacing follows your resting heart rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOCIAL PROOF ============ */}
        <section className="proof" aria-label="Press and community praise">
          <ScrollQuote />
        </section>

        {/* ============ FEATURES ============ */}
        <section className="features">
            <div className="wrap">
            <div className="sec-head" data-reveal="">
              <span className="sec-eyebrow">The practice</span>
              <h2>Not a library of recordings. <em>A voice that knows the day you had.</em></h2>
            </div>

            <div className="feature-row" data-reveal="">
              <div className="feature-copy">
                <span className="feature-num">No. 1</span>
                <h3>A brand-new meditation, every single morning</h3>
                <p>
                  Stillwave never replays a session. Each morning it drafts a fresh script —
                  referencing your restless 3am, the presentation on your calendar, the
                  intention you set last week — then narrates it in a voice you chose.
                </p>
                <ul className="feature-tags">
                  <li>Generated at 5:00 am local</li>
                  <li>Yours alone</li>
                  <li>Saved to your archive</li>
                </ul>
              </div>
              <TiltCard className="feature-art art-a" aria-hidden="true">
                <div className="script-card">
                  <span className="sc-date">Tuesday · July 7</span>
                  <h4>Before the 9am you're dreading</h4>
                  <p>"You slept less than you wanted. Let's not pretend otherwise — let's work with it…"</p>
                  <div className="sc-lines"><i></i><i></i><i></i></div>
                </div>
              </TiltCard>
            </div>

            <div className="feature-row" data-reveal="">
              <div className="feature-copy">
                <span className="feature-num">No. 2</span>
                <h3>Narration that breathes with you</h3>
                <p>
                  Pair a watch or simply breathe near your phone. Stillwave listens
                  to your rhythm and stretches its pauses, softens its pacing, and
                  lowers its register as your nervous system settles. No two
                  playbacks sound the same.
                </p>
                <ul className="feature-tags">
                  <li>Heart-rate aware</li>
                  <li>6 narrator voices</li>
                  <li>Live pacing</li>
                </ul>
              </div>
              <TiltCard className="feature-art art-b">
                <div className="voice-viz" aria-hidden="true">
                  <b style={{ height: '34%', animationDelay: '0s' }}></b>
                  <b style={{ height: '58%', animationDelay: '.2s' }}></b>
                  <b style={{ height: '82%', animationDelay: '.4s' }}></b>
                  <b style={{ height: '64%', animationDelay: '.6s' }}></b>
                  <b style={{ height: '96%', animationDelay: '.8s' }}></b>
                  <b style={{ height: '72%', animationDelay: '1s' }}></b>
                  <b style={{ height: '48%', animationDelay: '1.2s' }}></b>
                  <b style={{ height: '88%', animationDelay: '1.4s' }}></b>
                  <b style={{ height: '56%', animationDelay: '1.6s' }}></b>
                  <b style={{ height: '76%', animationDelay: '1.8s' }}></b>
                  <b style={{ height: '42%', animationDelay: '2s' }}></b>
                </div>
                <figcaption>voice slowing to match your exhale</figcaption>
              </TiltCard>
            </div>

            <div className="feature-row" data-reveal="">
              <div className="feature-copy">
                <span className="feature-num">No. 3</span>
                <h3>Three minutes or thirty — it fits the gap you have</h3>
                <p>
                  Tell Stillwave the time you've got and it composes to fit: a three-minute
                  reset between meetings keeps the full arc of a practice — arrival,
                  deepening, return — just gently condensed.
                </p>
                <ul className="feature-tags">
                  <li>Calendar-aware</li>
                  <li>3–30 minutes</li>
                  <li>Commute mode</li>
                </ul>
              </div>
              <TiltCard className="feature-art art-c" aria-hidden="true">
                <div className="dial">
                  <span className="dial-chip c1">3 min reset</span>
                  <span className="dial-chip c2">30 min deep</span>
                  <span className="dial-chip c3">12 min walk</span>
                  <div className="dial-core"><strong>12</strong><span>minutes</span></div>
                </div>
              </TiltCard>
            </div>

            <div className="feature-row" data-reveal="">
              <div className="feature-copy">
                <span className="feature-num">No. 4</span>
                <h3>Evenings that end on purpose</h3>
                <p>
                  At dusk, Stillwave turns down its own lights. Wind-down sessions
                  weave in the loose threads of your day and hand you to sleep
                  with a story that slows, and slows, and never quite asks you to finish it.
                </p>
                <ul className="feature-tags">
                  <li>Sleep stories</li>
                  <li>Fades with you</li>
                  <li>Morning recap</li>
                </ul>
              </div>
              <TiltCard className="feature-art art-d" aria-hidden="true">
                <div className="sleep-scene">
                  <div className="moon"></div>
                  <h4>The Orchard After Rain</h4>
                  <p>Tonight's wind-down · begins slowing at 10:40 pm</p>
                </div>
              </TiltCard>
            </div>
          </div>
          </section>

        <HowItWorks />

        {/* ============ PRICING ============ */}
        <section className="pricing" id="pricing">
          <div className="wrap">
            <div className="sec-head center" data-reveal="">
              <span className="sec-eyebrow">Pricing</span>
              <h2>Choose your <em>depth</em></h2>
              <p>Every plan begins with 14 days of the full practice, free.</p>
            </div>

            <div className="tiers">
              <div className="tier" data-reveal="">
                <h3 className="tier-name">Ripple</h3>
                <p className="tier-price">$0<span> / forever</span></p>
                <p className="tier-desc">A gentle start for the meditation-curious.</p>
                <ul>
                  <li>One fresh AI-composed session daily</li>
                  <li>3, 5 and 10-minute lengths</li>
                  <li>One narrator voice</li>
                  <li>7-day session archive</li>
                </ul>
                <a className="btn btn-ghost" href="#" style={{ borderColor: 'rgba(247,242,234,.3)', color: 'var(--cream)' }}>Begin free</a>
              </div>

              <div className="tier tier-feat" data-reveal="" style={{ '--d': 1 } as React.CSSProperties}>
                <span className="tier-badge">Most loved</span>
                <h3 className="tier-name">Current</h3>
                <p className="tier-price">$9<span> / month</span></p>
                <p className="tier-desc">The full daily practice, adapting as you do.</p>
                <ul>
                  <li>Unlimited sessions, any length 3–30 min</li>
                  <li>Breath &amp; heart-rate adaptive narration</li>
                  <li>All 6 narrator voices</li>
                  <li>Evening wind-downs &amp; sleep stories</li>
                  <li>Full archive with reflections</li>
                </ul>
                <a className="btn btn-clay" href="#">Start 14 days free</a>
              </div>

              <div className="tier" data-reveal="" style={{ '--d': 2 } as React.CSSProperties}>
                <h3 className="tier-name">Deep</h3>
                <p className="tier-price">$16<span> / month</span></p>
                <p className="tier-desc">For households and long-haul practitioners.</p>
                <ul>
                  <li>Everything in Current</li>
                  <li>Up to 5 family members</li>
                  <li>Quarterly 1:1 with a human teacher</li>
                  <li>Retreat mode — multi-day guided arcs</li>
                  <li>Early access to new voices</li>
                </ul>
                <a className="btn btn-ghost" href="#" style={{ borderColor: 'rgba(247,242,234,.3)', color: 'var(--cream)' }}>Go deep</a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq" id="faq">
          <div className="wrap">
            <div className="sec-head center" data-reveal="">
              <span className="sec-eyebrow">Curiosity</span>
              <h2>Common <em>questions</em></h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item" data-reveal="">
                <h4 className="faq-q">Is this actually AI, or just a library?</h4>
                <p className="faq-a">
                  Every script is generated fresh daily by our custom language model, which is fine-tuned on thousands of hours of guided meditations. The audio is synthesized in real-time, allowing it to dynamically adjust its pacing based on your biofeedback.
                </p>
              </div>
              <div className="faq-item" data-reveal="" style={{ '--d': 1 } as React.CSSProperties}>
                <h4 className="faq-q">Do I need a smartwatch to use it?</h4>
                <p className="faq-a">
                  No. While a smartwatch provides real-time heart rate data to automatically adjust the pacing, you can also use your phone's microphone to detect your breathing rhythm, or simply use our standard adaptive pacing which follows a proven relaxation curve.
                </p>
              </div>
              <div className="faq-item" data-reveal="" style={{ '--d': 2 } as React.CSSProperties}>
                <h4 className="faq-q">Can I save a session I really liked?</h4>
                <p className="faq-a">
                  Yes, every session is saved in your personal archive along with the check-in reflection you provided that day. You can revisit them anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="bottom-section">
        {/* Dynamic Shadow Video Overlay */}
        <video 
          src="/buat_shadow_nya_jadi_bergerak.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'soft-light',
            filter: 'grayscale(100%) opacity(0.12)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* CTA */}
        <CTAFloating />

          {/* FOOTER */}
          <footer className="footer-new">
            <div className="wrap">
              <div className="foot-newsletter-area">
                <div className="foot-newsletter">
                  <h3>Join our healing newsletter</h3>
                  <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email" required />
                    <button type="submit">SUBSCRIBE</button>
                  </form>
                </div>
                
                <div className="foot-nav-grid">
                  <div className="foot-col">
                    <a href="#">PRACTICE</a>
                    <a href="#">PHILOSOPHY</a>
                    <a href="#">VOICES</a>
                    <a href="#pricing">PRICING</a>
                  </div>
                  <div className="foot-col">
                    <a href="#">JOURNAL</a>
                    <a href="#">THE SCIENCE</a>
                    <a href="#">YOUR FIRST TIME</a>
                    <a href="#">CONTACT</a>
                  </div>
                </div>
              </div>
              
              <div className="foot-bottom-area">
                <div className="foot-left-txt">
                  © 2026 Built by <a href="#">Stillwave</a>
                </div>
                <div className="foot-logo">
                  Stillwave
                </div>
                <div className="foot-legal-nav">
                  <a href="#">Legal</a>
                  <a href="#">Style Guide</a>
                  <a href="#">Licenses</a>
                  <a href="#">Changelog</a>
                </div>
              </div>

              <div className="foot-very-bottom">
                <div className="foot-quote">"Silence is not empty. It is full of answers."</div>
                <div className="foot-social">
                  <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </>
  );
}

