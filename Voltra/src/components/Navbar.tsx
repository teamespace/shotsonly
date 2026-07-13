import { useState } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-voltra-bg/82 backdrop-blur-md border-b border-voltra-line">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)] h-[68px] flex items-center justify-between">
        <a href="#top" className="font-display text-[1.35rem] uppercase no-underline tracking-[0.02em] flex items-center gap-[0.45rem]" aria-label="Voltra home">
          <span className="inline-block w-[0.85em] h-[0.85em] bg-voltra-lime" style={{ clipPath: "polygon(60% 0,18% 58%,45% 58%,38% 100%,84% 40%,54% 40%)" }} aria-hidden="true" />
          Voltra
        </a>
        
        <nav aria-label="Primary" className={cn(
          "max-md:absolute max-md:top-[68px] max-md:left-0 max-md:right-0 max-md:bg-voltra-bg max-md:border-b max-md:border-voltra-line max-md:flex-col max-md:p-6 max-md:gap-5 max-md:items-start",
          isOpen ? "max-md:flex" : "max-md:hidden",
          "md:flex md:items-center md:gap-8"
        )}>
          <ul className="flex max-md:flex-col items-center max-md:items-start md:gap-8 gap-5 list-none">
            <li><a href="#features" className="font-mono text-[0.8rem] tracking-[0.12em] uppercase text-voltra-muted no-underline transition-colors duration-200 hover:text-voltra-lime" onClick={() => setIsOpen(false)}>Widgets</a></li>
            <li><a href="#coach" className="font-mono text-[0.8rem] tracking-[0.12em] uppercase text-voltra-muted no-underline transition-colors duration-200 hover:text-voltra-lime" onClick={() => setIsOpen(false)}>Coach</a></li>
            <li><a href="#how" className="font-mono text-[0.8rem] tracking-[0.12em] uppercase text-voltra-muted no-underline transition-colors duration-200 hover:text-voltra-lime" onClick={() => setIsOpen(false)}>How it works</a></li>
            <li><a href="#pricing" className="font-mono text-[0.8rem] tracking-[0.12em] uppercase text-voltra-muted no-underline transition-colors duration-200 hover:text-voltra-lime" onClick={() => setIsOpen(false)}>Pricing</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#pricing" className="max-md:hidden inline-flex items-center gap-[0.6rem] font-mono font-bold text-[0.75rem] tracking-[0.1em] uppercase py-[0.55rem] px-[1.1rem] bg-voltra-lime text-[#0C0C0E] clip-btn-lime transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_rgba(200,241,53,0.35)]">
            Get Voltra
          </a>
          <button 
            className="md:hidden bg-transparent border border-voltra-line-strong text-voltra-white font-mono text-[0.75rem] tracking-[0.1em] py-2 px-[0.8rem] cursor-pointer"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
}
