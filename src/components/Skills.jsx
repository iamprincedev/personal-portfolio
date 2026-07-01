import { motion } from 'framer-motion';
import { skills } from '../data/content';
import TiltCard from './TiltCard';
import './Skills.scss';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={item}
        >
          <span className="eyebrow">// 02_skills</span>
          <h2 className="section-title">Toolbox</h2>
          <p className="section-sub">What I reach for, grouped the way I actually think about them.</p>
        </motion.div>

        <motion.div
          className="skills__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {skills.map((group) => (
            <motion.div variants={item} key={group.group}>
              <TiltCard className="skills__group" maxTilt={6}>
                <h3 className="skills__group-title">{group.group}</h3>
                <div className="skills__tags">
                  {group.items.map((tech) => (
                    <span className="skills__tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
