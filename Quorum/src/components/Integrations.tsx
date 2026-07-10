import React from 'react';
import FadeIn from './FadeIn';
import { FloatingIcons } from './animations/FloatingIcons';

export default function Integrations() {
  return (
    <section id="workflow" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="pill-tag mb-6">
              <span className="highlight">THE</span> WORKFLOW
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Three steps. None of them are yours.</h2>
            <p className="text-gray-500">Quorum integrates with all meeting platforms and pulls relevant info from your calendar.</p>
          </FadeIn>
        </div>

        <div className="border border-gray-200 rounded-xl grid grid-cols-1 md:grid-cols-3 bg-grid overflow-hidden shadow-sm">
          {/* Left */}
          <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center bg-white/50">
            <FadeIn>
              <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">[ INTEGRATION ]</div>
              <h3 className="text-3xl font-semibold mb-4 tracking-tight">Invite Quorum once</h3>
              <p className="text-gray-500 mb-16 text-sm leading-relaxed">Connect your calendar and Quorum joins every meeting you flag — Zoom, Meet, or Teams. Attendees see it named in the room. No bots in disguise, no consent surprises.</p>
              
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-light mb-1">100%</div>
                  <div className="text-xs text-gray-500">Automated<br/>Joining</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-1">32</div>
                  <div className="text-xs text-gray-500">Languages<br/>Supported</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Center Image */}
          <div className="relative min-h-[400px] md:min-h-full border-b md:border-b-0 md:border-r border-gray-200 overflow-hidden">
            <img src="/WORKFLOW.png" alt="Path" className="absolute inset-0 w-full h-full object-cover" />
            <FloatingIcons />
          </div>

          {/* Right */}
          <div className="p-10 md:p-12 flex flex-col justify-center bg-white/50">
            <FadeIn>
              <p className="text-xs text-gray-500 mb-10 font-medium">The follow-through is automatic</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">It takes the minutes</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Live transcription with speaker labels, decisions flagged as they happen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">You stay in the conversation</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Commitments highlighted mid-sentence. You focus on talking, not in your notes app.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">The Thursday nudge sends itself</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Action items file themselves into your tracker with owners and due dates. Nothing falls through.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
