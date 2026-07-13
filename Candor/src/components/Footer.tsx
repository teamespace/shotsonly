import { motion, useScroll, useTransform } from 'motion/react';

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <footer id="footer" className="bg-brand-bg pt-[6rem] border-t border-brand-line/40 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[4rem] mb-[6rem]">
          
          <div className="flex flex-col">
            <a className="flex items-center gap-2 no-underline  font-medium text-[1.5rem] tracking-tight text-brand-indigo mb-[1.5rem]" href="#top" aria-label="Candor home">
              <div className="w-[28px] h-[28px] rounded-full bg-[#2D2B52] flex items-center justify-center relative overflow-hidden shrink-0">
                 <div className="absolute inset-[7px] bg-brand-bg rounded-full border-[2px] border-transparent" style={{ borderTopColor: 'white', borderRightColor: 'white', transform: 'rotate(45deg)' }} />
              </div>
              Candor
            </a>
            <p className="text-[1rem] text-brand-slate leading-relaxed max-w-[300px] mb-[2rem]">
              The intelligent hiring platform for teams who care about building the right culture.
            </p>
            <div className="flex gap-4 items-center">
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-line/50 flex items-center justify-center text-brand-indigo hover:border-[#2D2B52] transition-colors">
                 <span className="sr-only">Twitter</span>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-line/50 flex items-center justify-center text-brand-indigo hover:border-[#2D2B52] transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
               </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-brand-indigo mb-[1.5rem]">Product</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Features</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Integrations</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-brand-indigo mb-[1.5rem]">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">About</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Blog</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Careers</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-brand-indigo mb-[1.5rem]">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Community</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Help Center</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Guides</a></li>
              <li><a href="#" className="text-[0.95rem] text-brand-slate hover:text-brand-indigo transition-colors">Partners</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-[2rem] border-t border-brand-line/50 gap-[2rem]">
           <div className="flex flex-wrap gap-[1.5rem]">
              <span className="text-[0.85rem] text-brand-slate">© 2025 Candor AI, Inc.</span>
              <a href="#" className="text-[0.85rem] text-brand-slate hover:text-brand-indigo transition-colors">Privacy Policy</a>
              <a href="#" className="text-[0.85rem] text-brand-slate hover:text-brand-indigo transition-colors">Terms of Service</a>
           </div>
           
           <div className="flex w-full md:w-auto gap-2">
             <input type="email" placeholder="Subscribe to our newsletter" className="bg-white border border-brand-line/50 rounded-full px-4 py-2 text-[0.85rem] outline-none focus:border-[#2D2B52] min-w-[240px] shadow-sm" />
             <button className="bg-[#2D2B52] text-white px-4 py-2 rounded-full text-[0.85rem] font-medium hover:bg-black transition-colors shadow-sm">
               Subscribe
             </button>
           </div>
        </div>
      </div>
      
      {/* Massive Typography */}
      <div className="w-full flex justify-center items-end overflow-hidden pointer-events-none mt-[2rem] h-[12vw] pb-[2vw]">
         <motion.h2 
           style={{ y }}
           className="text-[18vw] font-medium text-[#2D2B52]/5 leading-[0.75] tracking-tighter select-none"
         >
           CANDOR
         </motion.h2>
      </div>
    </footer>
  );
}
