import styles from './SpotScam.module.css';
import { redFlags, examples } from '../data/redFlags.js';
import { X, Alert } from './Icon.jsx';

export default function SpotScam() {
  return (
    <section
      id="spot-a-scam"
      className="section"
      aria-labelledby="spot-a-scam-title"
    >
      <div className="container">
        <p className="section__eyebrow">How to spot a scam</p>
        <h2 id="spot-a-scam-title" className="section__title">
          If a message does two or three of these, treat it as a scam.
        </h2>
        <p className="section__intro">
          Most scams give themselves away by using several of the same tricks
          in a single message. Any message that hits two or three of the
          tricks below is worth treating as suspicious until you can verify
          it through another channel.
        </p>

        <ul className={styles.list} aria-label="Common red flags">
          {redFlags.map((flag) => (
            <li key={flag.title} className={styles.item}>
              <span className={styles.itemIcon} aria-hidden="true">
                <X size={16} />
              </span>
              <div>
                <h3 className={styles.itemTitle}>{flag.title}</h3>
                <p className={styles.itemBody}>{flag.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.examples} aria-label="Real-world examples">
          {examples.map((ex) => (
            <figure key={ex.label} className={styles.example}>
              <figcaption className={styles.exampleLabel}>
                <span className={styles.exampleIcon} aria-hidden="true">
                  <Alert size={16} />
                </span>
                {ex.label}
              </figcaption>
              <blockquote className={styles.exampleQuote}>
                {ex.quote}
              </blockquote>
              <p className={styles.exampleNote}>{ex.note}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
