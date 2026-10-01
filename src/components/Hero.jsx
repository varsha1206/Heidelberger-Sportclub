import { useEffect, useState } from 'react';
import './Hero.css';

const slides = ['hero/slide-1.png', 'hero/slide-2.png', 'hero/slide-3.png'];
const INTERVAL_MS = 6000;

export default function Hero({ base = '' }) {
  const prefix = base.replace(/\/$/, '');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${prefix}/${src})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Heidelberger Sport-Club</h1>
        <p>Die Raute im Herzen</p>
      </div>
    </section>
  );
}