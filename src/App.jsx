import { useEffect } from 'react';
import SkipLink from './components/SkipLink.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TopicGrid from './components/TopicGrid.jsx';
import SpotScam from './components/SpotScam.jsx';
import AfterClick from './components/AfterClick.jsx';
import Habits from './components/Habits.jsx';
import FAQ from './components/FAQ.jsx';
import Closing from './components/Closing.jsx';

export default function App() {
  // Delegate clicks on in-page anchor links so the URL never picks up a
  // hash. We scroll to the target ourselves and move keyboard focus to it
  // for screen reader users without touching history state.
  useEffect(() => {
    const handler = (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = href.slice(1);
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (id === 'top') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        return;
      }

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      const previousTabIndex = target.getAttribute('tabindex');
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener(
        'blur',
        () => {
          if (previousTabIndex === null) {
            target.removeAttribute('tabindex');
          } else {
            target.setAttribute('tabindex', previousTabIndex);
          }
        },
        { once: true }
      );
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <SkipLink />
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <TopicGrid />
        <SpotScam />
        <AfterClick />
        <Habits />
        <FAQ />
        <Closing />
      </main>
    </>
  );
}
