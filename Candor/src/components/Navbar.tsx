import { useState, useEffect } from 'react';
import { Button } from './Shared';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-brand-line/40 shadow-sm' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <a className={`flex items-center gap-2 no-underline  font-medium text-[1.25rem] tracking-tight ${isScrolled ? 'text-brand-indigo' : 'text-white'}`} href="#top" aria-label="Candor home">
          <div className="w-[24px] h-[24px] rounded-full bg-[#2D2B52] flex items-center justify-center relative overflow-hidden shrink-0">
             <div className="absolute inset-[6px] bg-brand-bg rounded-full border-[2px] border-transparent" style={{ borderTopColor: 'white', borderRightColor: 'white', transform: 'rotate(45deg)' }} />
          </div>
          Candor
        </a>
        
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex gap-[1rem] m-0 p-0 list-none">
            {['Platform', 'Solutions', 'Customers', 'Resources', 'Company'].map(item => (
              <li key={item}>
                <a href={item === 'Company' ? '#footer' : `#${item.toLowerCase().replace(/ /g, '-')}`} className={`text-[0.88rem] font-medium px-[0.5rem] py-2 transition-colors ${isScrolled ? 'text-brand-slate hover:text-brand-indigo' : 'text-white/80 hover:text-white'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className={`text-[0.88rem] font-medium no-underline transition-colors ${isScrolled ? 'text-brand-indigo hover:text-brand-slate' : 'text-white hover:text-white/80'}`}>Sign in</a>
          <Button href="#contact" variant="ghost" className={`!px-[1.2rem] !py-[0.5rem] transition-colors ${!isScrolled ? 'text-white hover:bg-white/10' : ''}`}>Contact</Button>
        </div>
        
        <button 
          className={`md:hidden w-[40px] h-[40px] flex flex-col items-center justify-center gap-[5px] shrink-0 transition-colors ${isScrolled ? 'text-brand-indigo' : 'text-white'}`} 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-[18px] h-[2px] bg-current rounded-sm transition-all duration-250 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`w-[18px] h-[2px] bg-current rounded-sm transition-opacity duration-250 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-[18px] h-[2px] bg-current rounded-sm transition-all duration-250 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-line/40 p-6 flex flex-col gap-4 shadow-sm">
           {['Platform', 'Solutions', 'Customers', 'Resources', 'Company'].map(item => (
              <a 
                key={item} 
                href={item === 'Company' ? '#footer' : `#${item.toLowerCase().replace(/ /g, '-')}`} 
                onClick={() => setOpen(false)} 
                className="block no-underline font-medium text-brand-indigo py-2"
              >
                {item}
              </a>
            ))}
            <a href="#login" className="block no-underline font-medium text-brand-slate py-2">Sign in</a>
            <Button href="#pricing" className="mt-2 w-full bg-brand-indigo text-white">Contact</Button>
        </div>
      )}
    </header>
  );
}
