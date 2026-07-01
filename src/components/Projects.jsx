import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/content';
import TiltCard from './TiltCard';
import './Projects.scss';

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const STATUS_LABEL = {
  active: 'running',
  shipped: 'shipped',
  in_progress: 'in progress',
};

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <span className="eyebrow">// 03_projects</span>
          <h2 className="section-title">Things I've shipped</h2>
          <p className="section-sub">Presented the way I think about them — as endpoints, each doing one job.</p>
        </motion.div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: (i % 2) * 0.08 }}
            >
              <TiltCard className="project" maxTilt={5}>
                <div className="project__head">
                  <div className="project__route">
                    <span className={`project__method project__method--${p.method.toLowerCase()}`}>{p.method}</span>
                    <span className="project__endpoint">{p.endpoint}</span>
                  </div>
                  <span className={`project__status project__status--${p.status}`}>
                    <span className="project__status-dot" />
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>

                <h3 className="project__name">{p.name}</h3>
                <span className="project__tag">{p.tag}</span>
                <p className="project__desc">{p.description}</p>

                <ul className="project__highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project__footer">
                  <div className="project__stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project__repo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub />
                    view code
                    <FiArrowUpRight className="project__repo-arrow" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
