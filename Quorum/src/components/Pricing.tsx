import React from 'react';
import FadeIn from './FadeIn';

export default function Pricing() {
  return (
    <section className="py-24 bg-[#fafafa]" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <div className="pill-tag mb-6">
              <span className="highlight">RATES</span> SIMPLE & PREDICTABLE
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">The rate card</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          <FadeIn className="glass-card rounded-[2rem] p-10 bg-white/60 text-center border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Desk</h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">For trying it properly</p>
            <div className="text-5xl font-semibold mb-2">$0</div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-10">Free forever</p>
            
            <ul className="text-sm text-gray-600 space-y-4 mb-10 text-left max-w-[200px] mx-auto font-medium">
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> 5 meetings per month</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Full transcription</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Standard summaries</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> 30-day archive</li>
            </ul>
            <button className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-300 hover:bg-gray-50 transition-colors text-black bg-white">Open a desk</button>
          </FadeIn>

          <FadeIn delay={0.1} className="bg-[#111] text-white rounded-[2.5rem] p-12 text-center shadow-2xl relative transform md:-translate-y-4 z-10 border border-gray-800">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-md whitespace-nowrap">
              Most subscribed
            </div>
            <h3 className="text-2xl font-semibold mb-2">Bureau</h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-8">For teams that run on meetings</p>
            <div className="text-6xl font-semibold mb-2 tracking-tight">$12</div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-10">Per seat / month</p>
            
            <ul className="text-sm text-gray-300 space-y-4 mb-12 text-left max-w-[220px] mx-auto font-medium">
              <li className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> Unlimited meetings</li>
              <li className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> Action items → Linear, Asana</li>
              <li className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> Summary templates</li>
              <li className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> Ask-the-archive search</li>
              <li className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> Unlimited retention</li>
            </ul>
            <button className="w-full py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">Start 14-day trial</button>
          </FadeIn>

          <FadeIn delay={0.2} className="glass-card rounded-[2rem] p-10 bg-white/60 text-center border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Syndicate</h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">For the whole organization</p>
            <div className="text-5xl font-semibold mb-2">$28</div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-10">Per seat / month</p>
            
            <ul className="text-sm text-gray-600 space-y-4 mb-10 text-left max-w-[200px] mx-auto font-medium">
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Everything in Bureau</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> SSO / SAML & SCIM</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Retention controls</li>
              <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> API access & audit log</li>
            </ul>
            <button className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-300 hover:bg-gray-50 transition-colors text-black bg-white">Talk to sales</button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
