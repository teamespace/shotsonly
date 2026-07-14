import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-ocean-deep pt-16 pb-8 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white no-underline mb-4" href="#top" aria-label="Wayfare home">
              <Logo className="w-8 h-8 text-white" />
              Wayfare
            </a>
            <p className="text-white/60 max-w-sm">The AI trip planner with a map-first heart. Dream it, type it, walk it.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-6">Product</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              <li><a href="#top" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Field notes</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>An Elux concept — Dribbble shot series</p>
          <p>© 2026 Wayfare (a fictional product)</p>
        </div>
      </div>
    </footer>
  );
}
