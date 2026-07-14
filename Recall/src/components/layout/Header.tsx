import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow border-b-[3px] border-black">
      <div className="max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto flex items-center justify-between py-3 gap-4">
        <a href="#main" className="flex items-center gap-[0.6rem] no-underline text-black font-display font-extrabold text-[1.45rem]" aria-label="Recall home">
          <span className="w-[38px] h-[38px] bg-pink brutal-border rounded-[10px] shadow-[3px_3px_0_var(--color-black)] grid place-items-center shrink-0 text-white text-[1.15rem] -rotate-[6deg]" aria-hidden="true">?</span>
          Recall
        </a>
        
        <button 
          className="md:hidden bg-white brutal-border rounded-[10px] shadow-[3px_3px_0_var(--color-black)] px-[0.7rem] py-[0.45rem] font-display font-extrabold text-[0.9rem] cursor-pointer focus-visible:outline-[4px] focus-visible:outline-pink focus-visible:outline-offset-[3px]"
          aria-expanded={menuOpen}
          aria-controls="top-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        <ul id="top-menu" className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-yellow md:bg-transparent border-b-[3px] border-black md:border-b-0 flex-col md:flex-row items-stretch md:items-center px-[1.4rem] py-[1.1rem] pb-[1.4rem] md:p-0 gap-4 md:gap-[1.6rem] list-none`}>
          <li><a href="#features" className="no-underline text-black font-bold text-[0.97rem] border-b-[3px] border-transparent hover:border-pink pb-[2px] transition-colors w-fit block md:inline" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#how" className="no-underline text-black font-bold text-[0.97rem] border-b-[3px] border-transparent hover:border-pink pb-[2px] transition-colors w-fit block md:inline" onClick={() => setMenuOpen(false)}>How it works</a></li>
          <li><a href="#pricing" className="no-underline text-black font-bold text-[0.97rem] border-b-[3px] border-transparent hover:border-pink pb-[2px] transition-colors w-fit block md:inline" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><Button as="a" href="#cta" variant="black" className="w-fit !px-[1.15rem] !py-[0.5rem] !text-[0.95rem] !shadow-[3px_3px_0_rgba(25,25,25,0.35)]" onClick={() => setMenuOpen(false)}>Make my first quiz</Button></li>
        </ul>
      </div>
    </header>
  );
}
