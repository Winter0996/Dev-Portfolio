import { FileText, Mail } from 'lucide-react';
import SectionNav from '../SectionNav';

const RESUME_URL = `${import.meta.env.BASE_URL}nathanwinter-resume.pdf`;
const EMAIL = 'natefwinter96@gmail.com';

export default function Introduction() {
  return (
    <section id="introduction" className="min-h-screen flex items-center py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          Nathan Winter
        </h1>
        <h2
          className="text-2xl md:text-3xl font-bold italic mb-6 leading-[1.3]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          A software developer who writes clean, maintainable, and scalable code.
        </h2>

        <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--muted-light)' }}>
          I am a dedicated software developer specializing in building clean, responsive web
          applications using modern technologies. I focus on crafting intuitive, high-performance
          user experiences.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-all"
            style={{ background: 'var(--accent)' }}
            onMouseOver={e => (e.currentTarget.style.background = '#6d28d9')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--accent)')}>
            <FileText size={14} /> Get Resume
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            style={{ color: 'var(--muted-light)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--muted-light)')}>
            <Mail size={14} /> Send Mail
          </a>
        </div>

        <SectionNav next={{ label: 'About Me', id: 'about' }} />
      </div>
    </section>
  );
}