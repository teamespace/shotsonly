import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-9 h-9 text-black" />
          <span className="font-bold text-xl tracking-tight">Quorum</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-wider text-gray-800">
          <a href="#main" className="hover:text-black transition-colors">The Desk</a>
          <a href="#features" className="hover:text-black transition-colors">Dispatches</a>
          <a href="#workflow" className="hover:text-black transition-colors">Workflow</a>
          <a href="#pricing" className="hover:text-black transition-colors">Rates</a>
        </nav>
        <a href="#" className="bg-[#111] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-sm">
          TRY FOR FREE
        </a>
      </div>
    </header>
  );
}
