import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTMSStore } from '../store/tmsStore';
import TMSLogo from '../components/TMSLogo';

const NAV = [
  { path: 'athletes', label: 'My Athletes' },
  { path: 'entries', label: 'My Entries' },
  { path: 'schedule', label: 'Schedule' },
  { path: 'results', label: 'Results' },
  { path: 'protests', label: 'Protests' },
];

export default function DelegationLayout() {
  const location = useLocation();
  const delegations = useTMSStore((s) => s.delegations);
  const delegation = delegations.find((d) => d.id === 'IND');
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
      <aside className={`tms-sidebar tms-sidebar-delegation ${sidebarOpen ? 'open' : ''}`}>
        <div className="tms-sidebar-header">
          <TMSLogo size={40} showLabel compact />
          <div className="tms-sidebar-title">Delegation Manager</div>
          <div className="tms-sidebar-subtitle">My Athletes · India</div>
        </div>
        <nav className="tms-sidebar-nav">
          {NAV.map((n) => {
            const isActive = location.pathname.includes(n.path);
            return (
              <Link
                key={n.path}
                to={`/tms/delegation/${n.path}`}
                className={`tms-sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="tms-sidebar-footer">
          Delegation: {delegation?.name} ({delegation?.code})<br />
          Manager: S. Patel
        </div>
      </aside>
      <main className="tms-sidebar-main">
        <Outlet />
      </main>
    </div>
  );
}
