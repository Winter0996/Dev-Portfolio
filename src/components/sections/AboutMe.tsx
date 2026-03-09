import SectionNav from '../SectionNav';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          About Me
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-8 leading-[1.3]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          Curiosity-driven, detail-obsessed!
        </p>

        <div className="space-y-4 text-base leading-relaxed max-w-2xl" style={{ color: 'var(--muted-light)' }}>
          <p>
            Hey! I'm <span style={{ color: 'var(--text)' }} className="font-medium">Nathan Winter</span> — a full stack developer
            passionate about building clean, purposeful software. I love the intersection of design
            and engineering, where good code meets great user experience.
          </p>
          <p>
            I thrive on learning new technologies and turning complex problems into simple, elegant
            solutions.
          </p>
          <p>
            I'm currently open to new opportunities where I can contribute, grow, and make an impact.
            Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {[
            { label: 'Location', value: 'North Kingstown, RI' },
            { label: 'Focus',    value: 'Full Stack Dev'   },
            { label: 'Status',   value: 'Open to Work'   },
            { label: 'Pronouns', value: 'He / Him'       },
          ].map(item => (
            <div key={item.label} className="p-4 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.value}</p>
            </div>
          ))}
        </div>

        <SectionNav prev={{ label: 'Introduction', id: 'introduction' }} next={{ label: 'Projects', id: 'projects' }} />
      </div>
    </section>
  );
}