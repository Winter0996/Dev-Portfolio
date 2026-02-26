import { useEffect, useState } from 'react';
import SectionNav from '../SectionNav';

const GITHUB_USERNAME = 'Winter0996';

// Free page view counter — replace namespace with something unique to your site
const COUNT_URL = `https://api.countapi.xyz/hit/nathanwinter-portfolio/pageviews`;

export default function Stats() {
  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(COUNT_URL)
      .then(r => r.json())
      .then(d => setViews(d.value))
      .catch(() => setViews(null));
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLikes(l => l + 1);
      setLiked(true);
    }
  };

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=a78bfa&icon_color=a78bfa&text_color=aaaaaa&bg_color=00000000&rank_icon=github&count_private=true`;
  const langsUrl  = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=a78bfa&text_color=aaaaaa&bg_color=00000000`;
  const streakUrl = `https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=a78bfa&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=888888&dates=555555&stroke=ffffff08&background=00000000`;
  const calUrl    = `https://ghchart.rshah.org/7c3aed/${GITHUB_USERNAME}`;

  return (
    <section id="stats" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          About this portfolio
        </h2>
        <p className="text-base text-[var(--muted-light)] mb-10">
          Insights and metrics about this portfolio website
        </p>

        {/* Page metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 text-[var(--accent-light)] text-sm mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Total Views
            </div>
            <p className="text-5xl font-extrabold mb-1" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-light)' }}>
              {views !== null ? views.toLocaleString() : '—'}
            </p>
            <p className="text-xs text-[var(--muted)]">Unique page visits tracked live</p>
          </div>

          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 text-pink-400 text-sm mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Appreciation Count
            </div>
            <p className="text-5xl font-extrabold text-pink-400 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
              {likes}
            </p>
            <button
              onClick={handleLike}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{ background: liked ? 'rgba(244,114,182,0.15)' : 'var(--accent)', color: liked ? '#f472b6' : '#fff', border: liked ? '1px solid rgba(244,114,182,0.3)' : 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {liked ? 'Appreciated!' : 'Love this portfolio'}
            </button>
          </div>
        </div>

        {/* GitHub section */}
        <h3 className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>GitHub Stats</h3>
        <p className="text-sm text-[var(--muted-light)] mb-6">Insights and metrics about my GitHub profile</p>

        {/* Contribution calendar */}
        <div className="p-5 rounded-xl mb-4 overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Contribution Graph</p>
          <img src={calUrl} alt="GitHub Contributions" className="w-full" loading="lazy" style={{ filter: 'brightness(1.1)' }} />
        </div>

        {/* Stats + langs side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Overview</p>
            <img src={statsUrl} alt="GitHub Stats" className="w-full" loading="lazy" />
          </div>
          <div className="p-5 rounded-xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Top Languages</p>
            <img src={langsUrl} alt="Top Languages" className="w-full" loading="lazy" />
          </div>
        </div>

        {/* Streak */}
        <div className="p-5 rounded-xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Contribution Streak</p>
          <img src={streakUrl} alt="Streak" className="w-full max-w-lg mx-auto block" loading="lazy" />
        </div>

        <SectionNav prev={{ label: 'Contact', id: 'contact' }} />
      </div>
    </section>
  );
}
