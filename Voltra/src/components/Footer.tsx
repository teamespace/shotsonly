export function Footer() {
  return (
    <footer className="pt-[4rem] pb-[3rem] border-t border-voltra-line">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)]">
        <div className="flex flex-wrap justify-between gap-[2.5rem]">
          
          <div className="max-w-[20rem]">
            <a href="#top" className="font-display text-[1.35rem] uppercase no-underline tracking-[0.02em] flex items-center gap-[0.45rem]" aria-label="Voltra home">
              <span className="inline-block w-[0.85em] h-[0.85em] bg-voltra-lime" style={{ clipPath: "polygon(60% 0,18% 58%,45% 58%,38% 100%,84% 40%,54% 40%)" }} aria-hidden="true" />
              Voltra
            </a>
            <p className="text-voltra-faint text-[0.9rem] mt-[1rem]">
              The AI fitness tracker that turns raw wrist data into one clear instruction a day.
            </p>
          </div>

          <div className="flex gap-[clamp(2rem,5vw,4.5rem)] flex-wrap">
            <div>
              <h4 className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-voltra-faint mb-[1rem]">Product</h4>
              <ul className="list-none flex flex-col gap-[0.6rem]">
                <li><a href="#features" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Smart widgets</a></li>
                <li><a href="#coach" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">AI coach</a></li>
                <li><a href="#pricing" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-voltra-faint mb-[1rem]">Company</h4>
              <ul className="list-none flex flex-col gap-[0.6rem]">
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">About</a></li>
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Training blog</a></li>
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-voltra-faint mb-[1rem]">Support</h4>
              <ul className="list-none flex flex-col gap-[0.6rem]">
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Help center</a></li>
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Device compatibility</a></li>
                <li><a href="#" className="text-voltra-muted text-[0.9rem] transition-colors duration-200 hover:text-voltra-lime">Privacy</a></li>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="mt-[3.5rem] pt-[1.6rem] border-t border-voltra-line flex flex-wrap justify-between gap-[1rem] font-mono text-[0.7rem] tracking-[0.1em] text-voltra-faint uppercase">
          <span>An Elux concept — Dribbble shot series · <a href="#" className="text-voltra-lime no-underline hover:underline">← Back to the series</a></span>
          <span>© 2026 Voltra Labs</span>
        </div>
      </div>
    </footer>
  );
}
