import { useState } from 'react';
import './Header.css';

const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Sportarten',
    href: '/sportarten',
    columns: [
      {
        title: 'Fußball',
        href: '/fussball',
        links: [
          { label: 'Herren', href: '/fussball/herren' },
          { label: 'Damen', href: '/fussball/damen' },
          { label: 'Alte Herren', href: '/fussball/alte-herren' },
          { label: 'Jugend', href: '/fussball/jugend' },
        ],
      },
      { title: 'Tennis', href: '/tennis', links: [] },
      { title: 'Volleyball', href: '/volleyball', links: [] },
      { title: 'Tischtennis', href: '/tischtennis', links: [] },
    ],
  },
  { label: 'Plachky-Turnier', href: '/plachky-turnier' },
  { label: 'Mitglied werden', href: '/mitglied-werden' },
  { label: 'Sponsoren', href: '/sponsoren' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressum', href: '/impressum' },
];

export default function Header({ base = '' }) {
  const [open, setOpen] = useState(false);
  const prefix = base.replace(/\/$/, '');
  const url = (path) => prefix + path;
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="bar">
        <span className="brand-mobile">Heidelberger SC</span>

        <button
          className="burger"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className={item.columns ? 'has-menu' : ''}>
                <a
                  href={url(item.href)}
                  onClick={close}
                  aria-haspopup={item.columns ? 'true' : undefined}
                >
                  {item.label}
                  {item.columns && <span className="chevron" aria-hidden="true" />}
                </a>

                {item.columns && (
                  <div className="panel">
                    <div className="panel-inner">
                      {item.columns.map((col) => (
                        <div className="col" key={col.title}>
                          <a className="col-title" href={url(col.href)} onClick={close}>
                            {col.title}
                          </a>
                          {col.links.length > 0 && (
                            <ul>
                              {col.links.map((link) => (
                                <li key={link.label}>
                                  <a href={url(link.href)} onClick={close}>
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a className="logo" href={url('/')} onClick={close} aria-label="Heidelberger SC Startseite">
          <img src={url('/HSC-Logo.png')} alt="HSC Logo" width="48" height="48" />
        </a>
      </div>
    </header>
  );
}