import styles from './TopicGrid.module.css';
import { topics } from '../data/topics.js';
import * as Icons from './Icon.jsx';

export default function TopicGrid() {
  return (
    <section id="topics" className="section" aria-labelledby="topics-title">
      <div className="container">
        <p className="section__eyebrow">Featured topics</p>
        <h2 id="topics-title" className="section__title">
          Short guides on the problems that come up most often.
        </h2>
        <p className="section__intro">
          Each of the topics below is a short background explanation on an
          area that causes the majority of recurring trouble online.
        </p>

        <ul className={styles.grid}>
          {topics.map((t) => {
            const Icon = Icons[t.icon] ?? Icons.Shield;
            return (
              <li key={t.id} className={styles.card}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3 className={styles.title}>{t.title}</h3>
                <p className={styles.body}>{t.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
