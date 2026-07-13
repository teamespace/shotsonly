import React from 'react';
import FadeIn from './FadeIn';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f6f3] pt-32 pb-8 overflow-hidden mt-0">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer.png" 
          alt="Landscape" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay only at the top to blend with the previous section */}
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-[#f6f6f3] via-[#f6f6f3]/80 to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* CTA Section seamlessly blended */}
        <div className="text-center mb-32">
          <FadeIn>
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8 bg-white/50 backdrop-blur-sm">
              FINAL EDITION
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900">Put every meeting on the record.</h2>
            <p className="text-gray-700 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-medium">Your next meeting could be the last one that anyone has to take notes in. Quorum joins in one click.</p>
            
            <button className="px-8 py-4 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-transform mb-6 flex items-center gap-2 mx-auto">
              Start free — Quorum joins your next call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              No card required · Set up in 90 seconds
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 sm:mb-24 pt-16 border-t border-white/20 text-white">
          {/* Column 1 */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-8 h-8 text-white" />
              <span className="font-bold text-xl tracking-tight text-white">Quorum</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4 tracking-tight text-white">Minutes you can quote in court</h3>
            <p className="text-sm text-white/90 mb-8 leading-relaxed max-w-[280px]">
              Quorum hears every call, handles crosstalk, and files your commitments straight into your tracker.
            </p>
            
            <button className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 mb-16 shadow-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Start for free
            </button>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 mt-2">
            <div>
              <h4 className="font-bold mb-6 text-[15px] text-white">Menu</h4>
              <ul className="space-y-4 text-[14px] text-white/90 font-medium">
                <li><a href="#main" className="hover:text-white transition-colors">The Desk</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Dispatches</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors">Workflow</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Rates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[15px] text-white">Navigation</h4>
              <ul className="space-y-4 text-[14px] text-white/90 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[15px] text-white">Integrations</h4>
              <ul className="space-y-4 text-[14px] text-white/90 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Google Meet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zoom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Microsoft Teams</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Slack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Notion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Linear</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
}
