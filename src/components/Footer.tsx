const TECH_STACK = ['React', 'TypeScript', 'Tailwind CSS', 'Vite'];

export default function Footer() {
  return (
    <footer className="py-8 px-8 lg:ml-56" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-3xl mx-auto text-center space-y-1">
        <p className="text-xs text-[var(--muted)]">
          © 2026 &nbsp;·&nbsp; Built with{' '}
          {TECH_STACK.map((t, i) => (
            <span key={t}>
              <span className="text-[var(--muted-light)]">{t}</span>
              {i < TECH_STACK.length - 1 && <span className="text-[var(--muted)]">, </span>}
            </span>
          ))}
          {' '}&nbsp;·&nbsp; Coded in <span className="text-[var(--muted-light)]">VSCode</span>
        </p>
        <p className="text-[11px] text-[var(--muted)] opacity-50 tracking-widest uppercase">
          Developed by Nathan Winter
        </p>
      </div>
    </footer>
  );
}
