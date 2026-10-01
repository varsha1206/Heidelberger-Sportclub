import { useEffect, useState } from 'react';

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        background: '#0b1b33',
        color: 'white',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          background: '#e30613',
          transform: 'rotate(45deg)',
          borderRadius: 8,
        }}
      />
      <h1 style={{ fontSize: '3rem', margin: 0 }}>Welcome to HSC</h1>
      <p style={{ opacity: 0.7, margin: 0 }}>Die Raute im Herzen</p>
    </main>
  );
}