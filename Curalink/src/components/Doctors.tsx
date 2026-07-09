import { motion } from 'motion/react';

export default function Doctors() {
  const transition = (delay: number) => ({
    duration: 0.85,
    delay: delay * 0.11,
    ease: [0.2, 0.7, 0.25, 1] as [number, number, number, number]
  });

  return (
    <section className="doctors section-pad" aria-label="Meet the physicians behind Curalink">
      <div className="shell doctor-band">
        <motion.figure 
          className="doctor-photo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(0)}
        >
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1024" loading="lazy" width="1024" height="1280" alt="Dr. Amara Osei, a board-certified neurologist, smiling warmly in teal scrubs with a stethoscope around her neck" />
          <figcaption>
            <span className="live-dot" aria-hidden="true"></span>
            <div>
              <b>Dr. Amara Osei, MD</b>
              <span>Neurology · online now · joins in ~94 s</span>
            </div>
          </figcaption>
        </motion.figure>

        <motion.div 
          className="doctor-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition(1)}
        >
          <span className="kick">Real doctors, not bots</span>
          <h2>The AI preps the chart. <em>Dr. Osei treats the person.</em></h2>
          <p>
            That's her in the consult above — Dr. Amara Osei, one of 4,200+ physicians
            who take the handoff the moment triage is done. On Curalink, AI gathers and
            summarizes; a licensed human doctor reads, decides, and prescribes. Every
            time, no exceptions.
          </p>
          <ul className="cred-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l8 3.5v5c0 5.5-3.5 9.2-8 10.5-4.5-1.3-8-5-8-10.5v-5L12 2z" /><path d="M8.5 11.8l2.4 2.4 4.6-5" /></svg>
              <span><b>Board-certified in neurology</b> — credentials re-verified every licensing cycle</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              <span><b>12 years in practice</b> — headache & migraine care, in-clinic and virtual</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.6-9.3-9A5.6 5.6 0 0112 6.4 5.6 5.6 0 0121.3 12c-2.3 4.4-9.3 9-9.3 9z" /></svg>
              <span><b>Reviews every AI intake herself</b> — and can overrule it in one tap</span>
            </li>
          </ul>
          <div className="doctor-stats">
            <div><b>4.9</b><span>rating · 3,100+ visits</span></div>
            <div><b>40</b><span>specialties on Curalink</span></div>
            <div><b>0</b><span>prescriptions written by AI</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
