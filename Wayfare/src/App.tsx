import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Postcards } from './components/Postcards';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main id="top">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Postcards />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
