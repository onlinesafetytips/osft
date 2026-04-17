import styles from './Habits.module.css';
import { habits } from '../data/habits.js';
import { Check } from './Icon.jsx';

export default function Habits() {
  return (
    <section id="habits" className="section" aria-labelledby="habits-title">
      <div className="container">
        <p className="section__eyebrow">Everyday habits</p>
        <h2 id="habits-title" className="section__title">
          Small habits that quietly do most of the work.
        </h2>
        <p className="section__intro">
          You do not need a crazy technical setup to be safe online. Some
          good habits are enough to cover most of the situations that would
          otherwise turn into problems.
        </p>

        <ul className={styles.list}>
          {habits.map((h) => (
            <li key={h.title} className={styles.item}>
              <span className={styles.check} aria-hidden="true">
                <Check size={16} />
              </span>
              <div>
                <h3 className={styles.title}>{h.title}</h3>
                <p className={styles.body}>{h.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
