import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import TMSLogo from '../components/TMSLogo';

const NAV = [
  { path: 'events', label: 'My Events' },
  { path: 'offline', label: 'Offline Status' },
];

export default function JudgeLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="tms-sidebar-layout">
      <button
        type="button"
        className="tms-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
        aria-expanded={sidebarOpen}
      >
        ☰
      </button>
      {sidebarOpen && (
        <div
          className="tms-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}
      <aside className={`tms-sidebar tms-sidebar-judge ${sidebarOpen ? 'open' : ''}`}>
        <div className="tms-sidebar-header">
          <TMSLogo size={40} showLabel compact />
          <div className="tms-sidebar-title">Judge Panel</div>
          <div className="tms-sidebar-subtitle">Judge: A. Kumar</div>
        </div>
        <nav className="tms-sidebar-nav">
          {NAV.map((n) => {
            const isActive = location.pathname.includes(n.path) && !location.pathname.includes('scoring');
            return (
              <Link
                key={n.path}
                to={`/tms/judge/${n.path}`}
                className={`tms-sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="tms-sidebar-main">
        <Outlet />
      </main>
    </div>
  );
}
