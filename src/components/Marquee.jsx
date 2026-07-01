import './Marquee.scss';

const ITEMS = [
  'STATUS: OPEN_TO_WORK',
  'STACK: MERN + JAVA',
  'OPEN TO RELOCATION',
  'LATEST BUILD: INTERVIEW-AI',
  'UPTIME: 24/7 ON THE JOB HUNT',
  'AIR 60 \u00b7 AINCAT 2026',
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
