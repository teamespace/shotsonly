import { motion } from 'motion/react';

export default function Pricing() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="pricing section-pad" id="pricing">
      <div className="shell">
        <motion.div 
          className="head"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          <div>
            <span className="kicker">Plans</span>
            <h2>Care that costs <em>less than the parking</em> at a clinic</h2>
          </div>
          <p>No insurance required. If we can bill your plan, we will — and you'll see the price before anything is charged.</p>
        </motion.div>
        
        <div className="plans">
          <motion.div 
            className="plan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(0)}
          >
            <span className="plan-tag">Single visit</span>
            <p className="plan-price tabular-nums">$39<span> / visit</span></p>
            <p className="plan-blurb">One-off care when something comes up. No subscription, no strings.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>AI intake + live doctor consult</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Prescriptions to your pharmacy</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Written care plan</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>7 days of follow-up messages</li>
            </ul>
            <a className="btn btn-line" href="#">Book one visit</a>
          </motion.div>

          <motion.div 
            className="plan plan-hero"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(1)}
          >
            <span className="plan-flag">Most chosen</span>
            <span className="plan-tag">Curalink Care</span>
            <p className="plan-price tabular-nums">$24<span> / month</span></p>
            <p className="plan-blurb">Unlimited everyday care for one adult — like a doctor in the family.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Unlimited visits, $0 each</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Priority matching — under 60s typical</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Your own primary doctor, ongoing</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Unlimited follow-up messaging</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Discounted labs & at-home tests</li>
            </ul>
            <a className="btn btn-coral" href="#">Start free for 7 days</a>
          </motion.div>

          <motion.div 
            className="plan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={transition(2)}
          >
            <span className="plan-tag">Family</span>
            <p className="plan-price tabular-nums">$49<span> / month</span></p>
            <p className="plan-blurb">Everything in Care, for up to six people — pediatrics included.</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>6 members, kids from age 0</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>24/7 pediatric line</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Shared family health record</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Care coordination for elders</li>
            </ul>
            <a className="btn btn-line" href="#">Cover the family</a>
          </motion.div>
        </div>
        <motion.p 
          className="pricing-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          Employers: Curalink covers teams from 10 to 40,000. <strong>Talk to us about Curalink for Work →</strong>
        </motion.p>
      </div>
    </section>
  );
}
