import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TMSLogo from '../components/TMSLogo';

const NAV_LINKS = [
  { to: '/tms/schedule', label: 'Schedule' },
  { to: '/tms/results', label: 'Live Results' },
  { to: '/tms/medals', label: 'Medal Table' },
  { to: '/tms/event/trad-ind-subjr-M', label: 'Events' },
];

export default function PublicLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="tms-public-layout">
      <header className="tms-public-header">
        <div className="tms-public-header-left">
          <TMSLogo size={48} showLabel compact />
          <span className="tms-public-header-subtitle">World Yogasana Championship · Ahmedabad</span>
        </div>
        <button
          type="button"
          className="tms-mobile-menu-btn"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileNavOpen}
        >
          {mobileNavOpen ? '✕' : '☰'}
        </button>
        {mobileNavOpen && (
          <div
            className="tms-mobile-nav-overlay"
            onClick={() => setMobileNavOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setMobileNavOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />
        )}
        <nav className={`tms-public-nav ${mobileNavOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="tms-public-nav-link"
              onClick={() => setMobileNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="tms-public-main">
        <Outlet />
      </main>
    </div>
  );
}
