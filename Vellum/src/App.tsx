/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Procedure } from './components/Procedure';
import { Figures } from './components/Figures';
import { Testimonial } from './components/Testimonial';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-[#111] font-sans flex flex-col selection:bg-oxblood selection:text-white">
        <div className="bg-oxblood text-white text-center py-2 text-xs font-medium tracking-wide uppercase">
          2.4M+ contracts analyzed and counting
        </div>
        <Header />
        <main id="top" className="flex-1">
          <Hero />
          <SocialProof />
          <Features />
          <Procedure />
          <Figures />
          <Testimonial />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
