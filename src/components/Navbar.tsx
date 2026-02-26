
import { useState, useEffect } from 'react';
import { Home, Linkedin, FileText, Moon, Sun } from 'lucide-react';

const GITHUB_URL   = 'https://github.com/Winter0996';
const LINKEDIN_URL = 'https://linkedin.com/in/nathanfwiter';
const RESUME_URL   = '/resume.pdf';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [dark, setDark] = useState(true);

  // Clock
  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Theme toggle — adds/removes .light class on <html>
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('light', !next);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-[52px]"
      style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>

      {/* Logo */}
      <a href="#introduction" className="flex items-center gap-2">
        <img
          src={`${import.meta.env.BASE_URL}nav-avatar.jpg`}
  alt="Nathan Winter"
  className="w-7 h-7 rounded-full object-cover"
          style={{ border: '1px solid var(--border)' }}
        />
        <span style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>
          nfw.dev
        </span>
      </a>

      {/* Center nav */}
      <nav className="flex items-center gap-1">
        {[
          { href: '#introduction', icon: <Home size={13} />,     label: 'Home',     external: false },
          { href: LINKEDIN_URL,    icon: <Linkedin size={13} />, label: 'LinkedIn', external: true  },
          { href: RESUME_URL,      icon: <FileText size={13} />, label: 'Resume',   external: true  },
        ].map(({ href, icon, label, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all"
            style={{ color: 'var(--muted)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--muted)')}>
            {icon}
            {label}
            {external && (
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="opacity-40">
                <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </a>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Clock */}
        <span className="text-xs font-mono flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
          {time}
        </span>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-8 h-8 rounded-md transition-all"
          style={{ color: 'var(--muted)', background: 'transparent' }}
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.background = 'rgba(128,128,128,0.1)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--muted)';
            e.currentTarget.style.background = 'transparent';
          }}>
          {dark ? <Moon size={15} /> : <Sun size={15} />}
        </button>

        {/* GitHub */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-8 h-8 rounded-md transition-all"
          style={{ color: 'var(--muted)' }}
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.background = 'rgba(128,128,128,0.1)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--muted)';
            e.currentTarget.style.background = 'transparent';
          }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}