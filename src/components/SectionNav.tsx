interface SectionNavProps {
  prev?: { label: string; id: string };
  next?: { label: string; id: string };
}

export default function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <div className="flex items-center justify-between mt-16 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
      {prev ? (
        <a href={`#${prev.id}`}
          className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors group">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {prev.label}
        </a>
      ) : <span />}
      {next ? (
        <a href={`#${next.id}`}
          className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors group">
          {next.label}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      ) : <span />}
    </div>
  );
}