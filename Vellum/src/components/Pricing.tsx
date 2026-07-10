import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50" id="pricing" aria-labelledby="priceTitle">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 id="priceTitle" className="font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6 text-gray-900">
            <TextReveal text="Simple pricing, serious value." />
          </h2>
          <p className="text-gray-600 text-lg">
            No per-clause fees. No surprise overages. All plans include onboarding support and a 14-day free trial.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <article className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col" aria-label="Starter plan">
            <h3 className="font-bold text-gray-900 text-xl mb-2">STARTER</h3>
            <p className="text-sm text-gray-500 mb-6 h-10">For small legal teams getting their first AI advantage.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">$59</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <button className="w-full py-3 px-6 rounded-full bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-colors mb-8">
              Start For Free
            </button>
            <div className="text-sm font-bold text-gray-900 mb-4">Key features:</div>
            <ul className="space-y-3 flex-1">
              {['20 contract reviews / month', 'Risk scoring & memos', 'Standard playbook library', 'Email support'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </article>

          {/* Free Plan (Most Popular) */}
          <article className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col relative" aria-label="Practice plan">
            <div className="absolute top-6 right-6 bg-oxblood text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-bold text-gray-900 text-xl mb-2">PRACTICE</h3>
            <p className="text-sm text-gray-500 mb-6 h-10">For growing teams that need full contract control.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">$149</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <button className="w-full py-3 px-6 rounded-full bg-oxblood text-white font-semibold hover:bg-oxblood-deep transition-colors mb-8">
              Start For Free
            </button>
            <div className="text-sm font-bold text-gray-900 mb-4">Key features:</div>
            <ul className="space-y-3 flex-1">
              {['Unlimited reviews & redlines', 'Custom house style playbooks', 'Obligation & renewal tracking', 'Market-term benchmarks', 'Priority 4-hour support'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </article>

          {/* Enterprise */}
          <article className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col" aria-label="Firm plan">
            <h3 className="font-bold text-gray-900 text-xl mb-2">FIRM</h3>
            <p className="text-sm text-gray-500 mb-6 h-10">For large organizations with complex legal operations.</p>
            <div className="flex items-baseline gap-1 mb-6 h-[40px] items-center">
              <span className="text-3xl font-bold text-gray-900">Custom Pricing</span>
            </div>
            <button className="w-full py-3 px-6 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors mb-8">
              Contact Sales
            </button>
            <div className="text-sm font-bold text-gray-900 mb-4">Key features:</div>
            <ul className="space-y-3 flex-1">
              {['Private model deployment', 'SSO, audit logs, permissions', 'DMS integrations', 'Dedicated success manager'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
