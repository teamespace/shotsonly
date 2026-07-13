import { Reveal } from './Reveal';
import { Counter } from './Counter';

export function Figures() {
  const stats = [
    {
      value: <Counter to={91} suffix="%" />,
      label: "faster contract review vs. manual process. Avg. across 200+ enterprise customers",
      icon: <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      value: <><Counter from={10} to={4} suffix="h" /> &rarr; <Counter from={45} to={18} suffix="m" /></>,
      label: "average review cycle time reduction. 2026 Vellum Benchmark Report",
      icon: <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      value: <Counter to={2.4} decimals={1} suffix="M+" />,
      label: "Contracts analyzed on the platform. As of Q1 2026",
      icon: <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      value: <Counter to={212} prefix="$" suffix="k" />,
      label: "clause extraction accuracy (validated) Third-party legal benchmark study",
      icon: <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <section className="bg-[#111] text-white pb-24 border-t border-white/10" aria-label="Results">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{stat.value}</div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
