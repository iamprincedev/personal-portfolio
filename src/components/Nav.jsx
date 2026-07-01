import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import Magnetic from './Magnetic';
import './Nav.scss';

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#timeline', label: 'timeline' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-bracket">~/</span>{profile.name.split(' ')[0].toLowerCase()}
        </a>

        <nav className="nav__links">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} className="nav__link">
              <span className="nav__link-index">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={10}>
          <a href={`mailto:${profile.email}`} className="nav__cta">say hi</a>
        </Magnetic>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} className="nav__mobile-link nav__mobile-link--cta" onClick={() => setOpen(false)}>
          say hi
        </a>
      </div>
    </header>
  );
}
