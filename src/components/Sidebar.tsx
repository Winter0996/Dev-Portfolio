interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'about',        label: 'About Me' },
  { id: 'projects',     label: 'Projects' },
  { id: 'skills',       label: 'Skills & Tools' },
  { id: 'education',    label: 'Education' },
  { id: 'contact',      label: 'Contact' },
  { id: 'stats',        label: 'Stats' },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-[52px] bottom-0 w-56 hidden lg:flex flex-col py-6 z-40"
      style={{ background: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(8px)', borderRight: '1px solid var(--border)' }}
    >
      <p className="px-5 mb-3 text-[11px] font-semibold text-[var(--muted)] uppercase tracking-[0.15em]">
        Sections
      </p>
      <nav className="flex flex-col px-2">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => onNavigate(s.id)}
              className="px-3 py-2 rounded-md text-sm transition-all"
              style={{
                color: isActive ? '#fff' : 'var(--muted)',
                background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                fontWeight: isActive ? '500' : '400',
              }}
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}