import styles from './Closing.module.css';

export default function Closing() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="closing-title"
    >
      <div className={`container ${styles.inner}`}>
        <h2 id="closing-title" className={styles.title}>
          Being reasonably safe online does not require expert knowledge.
        </h2>
        <p className={styles.body}>
          Most of what protects people from trouble online is safe habits
          done consistently. Pausing before clicking links in messages,
          using unique passwords stored in a password manager, keeping
          devices and browsers updated, and being appropriately skeptical
          of anyone who is trying to rush a decision already covers the
          majority of the situations that scammers rely on.
        </p>
        <p className={styles.body}>
          The goal of this site is to give that guidance in one place. You
          are welcome to bookmark the page, and share it with anyone who
          might benefit from a simpler explanation, or come back to
          individual sections when you need them.
        </p>
        <p className={styles.meta}>
          <a href="#top" className={styles.back}>
            Back to the top of the page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
