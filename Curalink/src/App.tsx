import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Proof from './components/Proof';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Doctors from './components/Doctors';
import Testimonial from './components/Testimonial';
import Certifications from './components/Certifications';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Proof />
        <HowItWorks />
        <Features />
        <Doctors />
        <Testimonial />
        <Certifications />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
