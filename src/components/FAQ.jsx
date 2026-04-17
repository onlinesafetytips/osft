import styles from './FAQ.module.css';
import { faq } from '../data/faq.js';

function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export default function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container">
        <p className="section__eyebrow">Frequently asked</p>
        <h2 id="faq-title" className="section__title">
          Common questions, answered plainly.
        </h2>

        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.summary}>
                <span>{item.q}</span>
                <span className={styles.chevron} aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
    </section>
  );
}
