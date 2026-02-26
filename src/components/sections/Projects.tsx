import { projects } from '../../data/projects';
import SectionNav from '../SectionNav';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          Projects
        </h2>
        <p className="text-2xl md:text-3xl font-bold italic mb-10" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-light)' }}>
          A lot of ideas, always building!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.liveUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl flex flex-col justify-between transition-all"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)')}
              onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[var(--accent-light)] transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded text-[var(--muted-light)]"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent-light)] transition-colors">
                Learn More...
              </span>
            </a>
          ))}
        </div>

        <SectionNav prev={{ label: 'About', id: 'about' }} next={{ label: 'Skills & Tools', id: 'skills' }} />
      </div>
    </section>
  );
}
