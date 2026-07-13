/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { Logos, Stats, CTA, Steps, Pricing } from './components/HomeSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-brand-bg text-brand-indigo-ink font-body selection:bg-brand-amber selection:text-brand-indigo-ink">
        <Navbar />
        <main id="top">
          <Hero />
          <Logos />
          <Features />
          <Steps />
          <Stats />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
