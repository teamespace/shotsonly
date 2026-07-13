import React from 'react';
import Masthead from './components/Masthead';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Testimonial from './components/Testimonial';

import FeaturesNew from './components/FeaturesNew';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Masthead />
      <main id="main" className="flex-1">
        <Hero />

        <Proof />

        <Testimonial />

        <FeaturesNew />

        <Integrations />

        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
