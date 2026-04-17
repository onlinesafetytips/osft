import styles from './Hero.module.css';
import { ArrowRight } from './Icon.jsx';

const START_HERE = [
  {
    href: '#spot-a-scam',
    title: 'How to spot a scam',
    note: 'A checklist of the signals that almost every scam message has in common, with a couple examples.',
  },
  {
    href: '#if-you-clicked',
    title: 'I already clicked something',
    note: 'An ordered sequence of actions you can work through if you think you just interacted with something suspicious.',
  },
  {
    href: '#topics',
    title: 'Browse safety topics',
    note: 'Guides on the areas that cause people the most trouble, including phishing, passwords, downloads, public Wi-Fi, and online shopping.',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>A plain-English guide</p>
          <h1 id="hero-title" className={styles.title}>
            Practical guidance for staying safe online.
          </h1>
          <p className={styles.subtitle}>
            This site is a hub for practical advice regarding avoiding scams,
            phishing attempts, and other everyday situations that cause most
            of the online trouble people run into.
          </p>
          <div className={styles.actions}>
            <a href="#spot-a-scam" className="btn btn--primary">
              Start with the basics
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#if-you-clicked" className="btn btn--secondary">
              I already clicked something
            </a>
          </div>
        </div>

        <aside className={styles.startCard} aria-labelledby="start-here-title">
          <h2 id="start-here-title" className={styles.startTitle}>
            Start here
          </h2>
          <p className={styles.startIntro}>
            If you are not sure where to begin, pick whichever one of these
            best matches your situation.
          </p>
          <ul className={styles.startList}>
            {START_HERE.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.startLink}>
                  <span className={styles.startLinkTitle}>{item.title}</span>
                  <span className={styles.startLinkNote}>{item.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
