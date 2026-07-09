/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WidgetBoard } from './components/WidgetBoard';
import { Marquee } from './components/Marquee';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <a className="absolute left-[1rem] -top-[4rem] z-[200] bg-voltra-lime text-[#0C0C0E] font-mono text-[0.8rem] py-[0.6rem] px-[1rem] no-underline transition-all duration-200 focus:top-[1rem]" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <WidgetBoard />
        <Marquee />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
