import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/70 backdrop-blur-xl shadow-soft border-b border-white/60' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-ink no-underline" href="#top" aria-label="Wayfare home">
          <Logo className="w-8 h-8" />
          Wayfare
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-ink/80 font-sans font-semibold text-sm">
            <li><a href="#features" className="hover:text-ocean-deep transition-colors">Features</a></li>
            <li><a href="#how" className="hover:text-ocean-deep transition-colors">How it works</a></li>
            <li><a href="#pricing" className="hover:text-ocean-deep transition-colors">Pricing</a></li>
          </ul>
          <a className="bg-ocean/5 hover:bg-ocean/10 border border-ocean/20 text-ink px-6 py-3 rounded-full font-sans font-bold text-sm transition-all" href="#cta">
            Plan a trip free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-ink transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-ink transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-ink transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md p-6 flex flex-col gap-4 border-t border-ocean/10 md:hidden shadow-lg">
             <a href="#features" onClick={() => setIsOpen(false)} className="text-ink font-bold text-lg">Features</a>
             <a href="#how" onClick={() => setIsOpen(false)} className="text-ink font-bold text-lg">How it works</a>
             <a href="#pricing" onClick={() => setIsOpen(false)} className="text-ink font-bold text-lg">Pricing</a>
             <a href="#cta" onClick={() => setIsOpen(false)} className="bg-accent text-white px-5 py-3 rounded-full font-bold text-center mt-4">Plan a trip free</a>
          </div>
        )}
      </div>
    </header>
  );
}
