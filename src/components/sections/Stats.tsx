import { useEffect, useState } from 'react';
import SectionNav from '../SectionNav';

const GITHUB_USERNAME = 'Winter0996';
const COUNT_URL = `https://api.countapi.xyz/hit/nathanwinter-portfolio/pageviews`;
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;

interface GitHubUser {
  followers: number;
  following: number;
  public_repos: number;
}

export default function Stats() {
  const [views, setViews]   = useState<number | null>(null);
  const [likes, setLikes]   = useState(0);
  const [liked, setLiked]   = useState(false);
  const [ghUser, setGhUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    // Page views
    fetch(COUNT_URL)
      .then(r => r.json())
      .then(d => setViews(d.value))
      .catch(() => setViews(null));

    // GitHub user stats
    fetch(GITHUB_API)
      .then(r => r.json())
      .then(d => setGhUser({ followers: d.followers, following: d.following, public_repos: d.public_repos }))
      .catch(() => setGhUser(null));
  }, []);

  const handleLike = () => {
    if (!liked) { setLikes(l => l + 1); setLiked(true); }
  };

  const calUrl    = `https://ghchart.rshah.org/238636/${GITHUB_USERNAME}`;
  const streakUrl = `https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=a78bfa&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=888888&dates=555555&stroke=ffffff08&background=00000000`;

  const statCards = [
    {
      label: 'Followers',
      value: ghUser?.followers ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: 'var(--accent-light)',
    },
    {
      label: 'Following',
      value: ghUser?.following ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <line x1="19" y1="8" x2="19" y2="14"/>
          <line x1="22" y1="11" x2="16" y2="11"/>
        </svg>
      ),
      color: '#34d399',
    },
    {
      label: 'Public Repos',
      value: ghUser?.public_repos ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 3h18v18H3z" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      color: '#60a5fa',
    },
    {
      label: 'Page Views',
      value: views ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      color: '#f472b6',
    },
  ];

  return (
    <section id="stats" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.2] tracking-normal"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          GitHub Stats
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-10 leading-[1.4]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          Commits, contributions, and counting!
        </p>

        {/* GitHub Contributions Graph */}
        <div className="rounded-xl overflow-hidden mb-4 p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent-light)' }}>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>GitHub Contributions</p>
          </div>
          <img
            src={calUrl}
            alt="GitHub Contribution Graph"
            className="w-full rounded"
            loading="lazy"
            style={{ filter: 'brightness(1.05)' }}
          />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {statCards.map(card => (
            <div
              key={card.label}
              className="rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <span style={{ color: card.color }}>{card.icon}</span>
              <p className="text-2xl font-extrabold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
                {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
              </p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Streak */}
        <div className="rounded-xl p-5 overflow-hidden mb-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>Contribution Streak</p>
          <img src={streakUrl} alt="GitHub Streak" className="w-full max-w-lg mx-auto block" loading="lazy" />
        </div>

        {/* Appreciation */}
        <div className="rounded-xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm mb-1 text-pink-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Love Count
              </p>
              <p className="text-4xl font-extrabold text-pink-400" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {liked ? '❤️ ' : ''}{likes}
              </p>
            </div>
            <button
              onClick={handleLike}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: liked ? 'rgba(244,114,182,0.15)' : 'var(--accent)',
                color: liked ? '#f472b6' : '#fff',
                border: liked ? '1px solid rgba(244,114,182,0.3)' : 'none',
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {liked ? 'Appreciated!' : 'Love this portfolio'}
            </button>
          </div>
        </div>

        <SectionNav prev={{ label: 'Contact', id: 'contact' }} />
      </div>
    </section>
  );
}
