import { FileText, Mail } from 'lucide-react';
import SectionNav from '../SectionNav';

const RESUME_URL = '/resume.pdf';
const EMAIL = 'natefwinter96@gmail.com';

export default function Introduction() {
  return (
    <section id="introduction" className="min-h-screen flex items-center py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}>
          Nathan Winter
        </h1>
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 italic"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-light)' }}>
          A software developer who writes clean, maintainable, and scalable code.
        </h2>

        <p className="text-[var(--muted-light)] text-base leading-relaxed mb-8 max-w-2xl">
          I am a dedicated Software developer specializing in building clean, responsive web
          applications using modern technologies. I focus on crafting intuitive, high-performance user experiences.
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
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-[var(--muted-light)] hover:text-white transition-colors">
            <Mail size={14} /> Send Mail
          </a>
        </div>

        <SectionNav next={{ label: 'About Me', id: 'about' }} />
      </div>
    </section>
  );
}
