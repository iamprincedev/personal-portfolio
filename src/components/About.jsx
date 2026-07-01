import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import photo from '../assets/prince.jpg';
import './About.scss';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Portrait() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      className="portrait"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        className="portrait__card"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="portrait__frame-bar">
          <span className="portrait__dots"><i /><i /><i /></span>
          <span className="portrait__label">whoami.jpg</span>
        </div>
        <div className="portrait__image-wrap">
          <img src={photo} alt="Prince Kumar" className="portrait__image" loading="lazy" />
          <div className="portrait__scan" />
        </div>
        <div className="portrait__footer">
          <span><i className="portrait__pulse" /> live</span>
          <span>open to work</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <span className="eyebrow">// 01_about</span>
        </motion.div>

        <div className="about__grid">
          <div className="about__text">
            <motion.p
              className="about__lead"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
            >
              I'm a recently graduated MCA student working mostly in the
              <span className="about__highlight"> MERN stack</span>, with Java and Spring Boot on the side.
              Most of what I build starts with a small annoyance I want to automate away.
            </motion.p>

            <motion.div
              className="about__detail"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              transition={{ delay: 0.1 }}
            >
              <p>
                Most of my work leans backend-first — auth flows, schema design, and APIs that
                hold up under real use — with React handling the front end when a project needs one.
              </p>
              <p>
                I spend a fair bit of time on LeetCode sharpening data structures
                and algorithms, and I'm currently building <strong>Interview-AI</strong>, a resume
                comparison tool that flags exactly what to improve, to get more practice shipping a
                full product end to end.
              </p>
            </motion.div>
          </div>

          <Portrait />
        </div>
      </div>
    </section>
  );
}
