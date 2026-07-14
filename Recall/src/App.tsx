/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Pricing } from './components/home/Pricing';
import { SmoothScroll } from './components/animations/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
