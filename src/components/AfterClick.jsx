import styles from './AfterClick.module.css';
import { afterClickSteps } from '../data/afterClickSteps.js';

export default function AfterClick() {
  return (
    <section
      id="if-you-clicked"
      className={`section ${styles.section}`}
      aria-labelledby="if-you-clicked-title"
    >
      <div className="container">
        <p className="section__eyebrow">If something already happened</p>
        <h2 id="if-you-clicked-title" className="section__title">
          What to do if you already clicked something.
        </h2>
        <p className="section__intro">
          Work through the steps below in order. It is reasonable to stop as
          soon as the problem is clearly contained and you have taken basic
          precautions on any account that might have been exposed.
        </p>

        <ol className={styles.steps}>
          {afterClickSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
