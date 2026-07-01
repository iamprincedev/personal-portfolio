import { motion } from 'framer-motion';
import { profile } from '../data/content';
import './Contact.scss';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'iamprincedev', href: profile.github },
  { label: 'LinkedIn', value: 'prince-kumar', href: profile.linkedin },
  { label: 'LeetCode', value: profile.leetcodeHandle, href: profile.leetcode },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">// 05_contact</span>
          <h2 className="contact__title">
            Let's build<br />something that ships.
          </h2>
          <p className="section-sub">
            Looking for a full-time developer role — open to relocation. Reach out and I'll get back within a day.
          </p>
        </motion.div>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {links.map((l) => (
            <a href={l.href} className="contact__link" key={l.label} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">{l.value}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Available for hire</span>
      </footer>
    </section>
  );
}
