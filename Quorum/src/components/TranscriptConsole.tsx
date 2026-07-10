import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { TiltCard } from './animations/TiltCard';

export default function TranscriptConsole() {
  const [said, setSaid] = useState<number[]>([]);
  const [marked, setMarked] = useState<number[]>([]);
  const [popped, setPopped] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  useEffect(() => {
    if (!isInView) return;
    
    let timers: NodeJS.Timeout[] = [];
    let isCancelled = false;

    const runTimeline = () => {
      if (isCancelled) return;
      
      setSaid([]); setMarked([]); setPopped([]); setDone([]);

      const schedule = (ms: number, fn: () => void) => {
        timers.push(setTimeout(() => { if (!isCancelled) fn(); }, ms));
      };

      schedule(400, () => setSaid(s => [...s, 0]));
      schedule(1900, () => setSaid(s => [...s, 1]));
      schedule(2700, () => setMarked(s => [...s, 1]));
      schedule(3600, () => setPopped(s => [...s, 'a1']));
      schedule(5000, () => setSaid(s => [...s, 2]));
      schedule(5800, () => setMarked(s => [...s, 2]));
      schedule(6700, () => setPopped(s => [...s, 'a2']));
      schedule(8100, () => setSaid(s => [...s, 3]));
      schedule(9500, () => setSaid(s => [...s, 4]));
      schedule(10600, () => {
        setSaid(s => [...s, 5]);
        setDone(s => [...s, 'a1', 'a2']);
      });
      schedule(14500, () => runTimeline());
    };

    runTimeline();
    
    return () => {
      isCancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [isInView]);

  return (
    <TiltCard className="w-full max-w-5xl mx-auto glass-card rounded-[2rem] overflow-hidden shadow-2xl text-left border border-white/40" ref={ref}>
      {/* Console Bar */}
      <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/20 bg-white/10">
        <div className="flex items-center gap-3 font-semibold text-sm text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          Product Sync — Weekly
        </div>
        <div className="hidden sm:block text-[10px] font-mono text-white/60 tracking-[0.2em] uppercase">REC 00:14:32 · quorum is listening</div>
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white z-30">PK</div>
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-[10px] font-bold text-white z-20">MO</div>
          <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-700 flex items-center justify-center text-[10px] font-bold text-white z-10">DL</div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] bg-white">
        {/* Transcript */}
        <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8 pb-4 border-b border-gray-100">
            <span>Live Transcript</span><span>EN · 98.6%</span>
          </div>
          
          <div className="space-y-8">
            <div className={`flex gap-4 md:gap-6 transition-opacity duration-500 ${said.includes(0) ? 'opacity-100' : 'opacity-30'}`}>
              <div className="text-[10px] font-mono text-gray-400 pt-1.5 w-10 shrink-0">14:02</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5">Priya</div>
                <div className="text-[15px] text-gray-800 leading-relaxed font-medium">Okay — the onboarding revamp. Where did we land on the empty states?</div>
              </div>
            </div>

            <div className={`flex gap-4 md:gap-6 transition-opacity duration-500 ${said.includes(1) ? 'opacity-100' : 'opacity-30'}`}>
              <div className="text-[10px] font-mono text-gray-400 pt-1.5 w-10 shrink-0">14:07</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-1.5">Marcus</div>
                <div className="text-[15px] text-gray-800 leading-relaxed font-medium">
                  Design signed off this morning. I can <span className={`transition-all duration-300 rounded px-1 -mx-1 ${marked.includes(1) ? 'bg-blue-50 text-blue-900 shadow-[0_2px_0_0_rgba(59,130,246,0.3)]' : ''}`}>ship the first three screens by Thursday</span> if the copy freezes today.
                </div>
              </div>
            </div>

            <div className={`flex gap-4 md:gap-6 transition-opacity duration-500 ${said.includes(2) ? 'opacity-100' : 'opacity-30'}`}>
              <div className="text-[10px] font-mono text-gray-400 pt-1.5 w-10 shrink-0">14:15</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5">Priya</div>
                <div className="text-[15px] text-gray-800 leading-relaxed font-medium">
                  Perfect. Dana, can you <span className={`transition-all duration-300 rounded px-1 -mx-1 ${marked.includes(2) ? 'bg-blue-50 text-blue-900 shadow-[0_2px_0_0_rgba(59,130,246,0.3)]' : ''}`}>draft the release notes before Friday's standup</span>?
                </div>
              </div>
            </div>

            <div className={`flex gap-4 md:gap-6 transition-opacity duration-500 ${said.includes(3) ? 'opacity-100' : 'opacity-30'}`}>
              <div className="text-[10px] font-mono text-gray-400 pt-1.5 w-10 shrink-0">14:21</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-1.5">Dana</div>
                <div className="text-[15px] text-gray-800 leading-relaxed font-medium">On it. One flag — legal still needs to approve the data-retention copy.</div>
              </div>
            </div>

            <div className={`mt-8 p-4 md:p-5 bg-blue-50/80 border-l-4 border-blue-500 rounded-r-xl transition-all duration-500 ${said.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                 <span className="inline-block px-2.5 py-1 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest rounded whitespace-nowrap self-start sm:self-auto">Quorum · Decision</span>
                 <span className="text-[13px] text-blue-900 font-semibold leading-relaxed">Onboarding revamp ships Thursday behind a feature flag; legal review runs in parallel.</span>
               </div>
            </div>
          </div>
        </div>

        {/* Extraction Side */}
        <div className="p-6 md:p-10 bg-[#fafafa]">
          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8 pb-4 border-b border-gray-200">
            <span>Extracted by Quorum</span><span>Live</span>
          </div>

          <div className="space-y-4">
            <div className={`bg-white border rounded-2xl p-5 transition-all duration-500 ${popped.includes('a1') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${done.includes('a1') ? 'border-blue-300 shadow-md ring-1 ring-blue-100' : 'border-gray-200 shadow-sm'}`}>
              <div className="flex gap-4">
                <div className={`mt-0.5 w-5 h-5 rounded border-2 transition-colors flex items-center justify-center shrink-0 ${done.includes('a1') ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-gray-50'}`}>
                  {done.includes('a1') && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <div>
                  <h4 className="font-semibold text-[15px] mb-1.5 text-gray-900 leading-snug">Ship first 3 onboarding screens</h4>
                  <p className="text-[13px] text-gray-500 mb-4 leading-relaxed font-medium">Copy freeze is the dependency — flagged to Priya.</p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="px-2.5 py-1 bg-gray-100 rounded text-gray-600">@Marcus</span>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded">Due Thu</span>
                    <span className="px-2.5 py-1 bg-gray-100 rounded text-gray-600">→ Linear</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-white border rounded-2xl p-5 transition-all duration-500 ${popped.includes('a2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${done.includes('a2') ? 'border-blue-300 shadow-md ring-1 ring-blue-100' : 'border-gray-200 shadow-sm'}`}>
              <div className="flex gap-4">
                <div className={`mt-0.5 w-5 h-5 rounded border-2 transition-colors flex items-center justify-center shrink-0 ${done.includes('a2') ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-gray-50'}`}>
                  {done.includes('a2') && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <div>
                  <h4 className="font-semibold text-[15px] mb-1.5 text-gray-900 leading-snug">Draft release notes</h4>
                  <p className="text-[13px] text-gray-500 mb-4 leading-relaxed font-medium">Before Friday's standup; template attached.</p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="px-2.5 py-1 bg-gray-100 rounded text-gray-600">@Dana</span>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded">Due Fri</span>
                    <span className="px-2.5 py-1 bg-gray-100 rounded text-gray-600">→ Slack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-10 pt-5 border-t border-dashed border-gray-300 text-[11px] text-gray-500 font-medium tracking-wide transition-opacity duration-700 ${said.includes(5) ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-bold text-blue-600 mb-1 block">Summary filed 2m 41s after the call.</span>
            3 attendees · 2 action items · 1 decision · 0 things forgotten
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
