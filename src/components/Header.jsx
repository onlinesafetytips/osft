import styles from './Header.module.css';
import { Shield } from './Icon.jsx';

const NAV = [
  { href: '#topics', label: 'Topics' },
  { href: '#spot-a-scam', label: 'Spot a scam' },
  { href: '#if-you-clicked', label: 'If you clicked' },
  { href: '#habits', label: 'Habits' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Online Safety Tips, back to top">
          <span className={styles.brandMark} aria-hidden="true">
            <Shield size={20} />
          </span>
          <span className={styles.brandText}>Online Safety Tips</span>
        </a>
        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {NAV.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
