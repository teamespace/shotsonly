import React from 'react';
import FadeIn from './FadeIn';
import { TiltCard } from './animations/TiltCard';

export default function FeaturesNew() {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="pill-tag mb-6">
              <span className="highlight">CORE</span> CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Minutes you can quote in court</h2>
            <p className="text-gray-500">Quorum handles crosstalk, accents, and the colleague who never unmutes properly — in 32 languages.</p>
          </FadeIn>
        </div>

        <div className="border border-gray-200 bg-grid rounded-xl overflow-hidden shadow-sm">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
            <div className="p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-white/50">
              <FadeIn>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">[ SUMMARIES ]</div>
                <h3 className="text-3xl font-semibold mb-4 tracking-tight">Filed before the coffee refill</h3>
                <p className="text-gray-500 leading-relaxed mb-12">
                  Every call becomes a brief in the format its readers need: exec digest, engineering standup, or sales debrief. Same meeting, three audiences, zero rewriting.
                </p>
                <div className="flex flex-wrap items-center gap-6 border-t border-gray-200 pt-8 opacity-40 grayscale">
                  <span className="font-bold text-lg flex items-center gap-2">Notion</span>
                  <span className="font-bold text-lg">Confluence</span>
                  <span className="font-bold text-lg">Docs</span>
                </div>
              </FadeIn>
            </div>
            <div className="relative min-h-[400px] overflow-hidden group">
              <img src="/DISPATCHES (1).png" alt="Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center p-8" style={{ perspective: "1000px" }}>
                <FadeIn delay={0.2} className="w-full">
                  <TiltCard className="glass-card text-white rounded-2xl p-6 w-full max-w-sm mx-auto shadow-2xl cursor-pointer">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                      Exec Digest
                    </div>
                    <p className="text-xs text-white/90 mb-6 font-medium leading-relaxed">Median summary delivery: 2m 41s post-call. Fully formatted and ready to share.</p>
                    <div className="h-2 bg-white/20 rounded-full mb-2 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-white w-full animate-[pulse_2s_ease-out_infinite]"></div>
                    </div>
                    <div className="text-[10px] text-white/70 font-medium">Processing meeting... 100%</div>
                  </TiltCard>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-white/50">
              <FadeIn>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">[ ACTION ITEMS ]</div>
                <h3 className="text-3xl font-semibold mb-4 tracking-tight">Commitments with consequences</h3>
                <p className="text-gray-500 leading-relaxed mb-12">
                  Quorum hears "I'll get it done by Thursday" and files it — owner, task, deadline — straight into your tracker. Then it nudges, politely, before Thursday.
                </p>
                <div className="flex flex-wrap items-center gap-6 border-t border-gray-200 pt-8 opacity-40 grayscale">
                  <span className="font-bold text-lg">Linear</span>
                  <span className="font-bold text-lg">Asana</span>
                  <span className="font-bold text-lg">Slack</span>
                </div>
              </FadeIn>
            </div>
            <div className="relative min-h-[400px] overflow-hidden group">
              <img src="/DISPATCHES (2).png" alt="Abstract" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center p-8" style={{ perspective: "1000px" }}>
                <FadeIn delay={0.2} className="w-full">
                  <TiltCard className="glass-card text-white rounded-2xl p-6 w-full max-w-sm mx-auto shadow-2xl cursor-pointer">
                    <h4 className="font-semibold mb-4 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      Linear Issue Created
                    </h4>
                    <div className="bg-white/10 rounded-lg p-4 shadow-sm border border-white/20 transition-transform hover:scale-[1.02] duration-300">
                       <div className="text-xs font-semibold text-white mb-1">Update privacy policy</div>
                       <div className="text-[10px] text-white/70 mb-3">Due: Thursday</div>
                       <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold text-white">MC</div>
                         <span className="text-[10px] font-medium text-white/80">Assigned to Marcus</span>
                       </div>
                    </div>
                  </TiltCard>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
