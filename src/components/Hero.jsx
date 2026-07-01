import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/content';
import Magnetic from './Magnetic';
import './Hero.scss';

const RESPONSE_LINES = [
  '{',
  `  "name": "${profile.name}",`,
  `  "role": "${profile.role}",`,
  '  "stack": ["React", "Node.js", "Express", "MongoDB"],',
  '  "currently_building": "Interview-AI",',
  '  "status": "open_to_work"',
  '}',
];

function TerminalConsole() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= RESPONSE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 220 + (visibleLines === 0 ? 400 : 0));
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      className="console"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="console__bar">
        <div className="console__dots">
          <span /><span /><span />
        </div>
        <span className="console__title">GET /api/prince</span>
      </div>
      <div className="console__body">
        <div className="console__request">
          <span className="console__method">GET</span> /api/prince <span className="console__muted">HTTP/1.1</span>
        </div>
        <div className="console__status">
          <span className="console__ok">200 OK</span>
          <span className="console__muted">&nbsp;&middot; 42ms</span>
        </div>
        <pre className="console__json">
          {RESPONSE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="console__line">{line}</div>
          ))}
          {visibleLines < RESPONSE_LINES.length && <span className="console__cursor">&#9608;</span>}
        </pre>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">available for full-time roles</span>
          <h1 className="hero__title">
            I write backend code
            <br />
            that <span className="hero__title-accent">holds up</span> in production.
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <Magnetic strength={14}>
              <a href="#projects" className="btn btn--primary">view projects</a>
            </Magnetic>
            <Magnetic strength={14}>
              <a href="#contact" className="btn btn--ghost">get in touch</a>
            </Magnetic>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-label">{s.label}</span>
                <span className="hero__stat-value">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <TerminalConsole />
      </div>

      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
