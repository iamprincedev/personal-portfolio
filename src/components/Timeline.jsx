import { motion } from 'framer-motion';
import { timeline } from '../data/content';
import './Timeline.scss';

const reveal = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Timeline() {
  return (
    <section className="tl" id="timeline">
      <div className="tl__inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">// 04_timeline</span>
          <h2 className="section-title">Education &amp; milestones</h2>
        </motion.div>

        <div className="tl__list">
          <motion.div
            className="tl__spine"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          {timeline.map((t, i) => (
            <motion.div
              className="tl__item"
              key={t.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={reveal}
              transition={{ delay: i * 0.06 }}
            >
              <span className="tl__dot" />
              <span className="tl__year">{t.year}</span>
              <div className="tl__body">
                <h3>{t.title}</h3>
                <p>{t.org}</p>
                {t.note && <span className="tl__note">{t.note}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
