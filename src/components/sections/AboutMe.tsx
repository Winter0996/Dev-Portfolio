import SectionNav from '../SectionNav';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          About Me
        </h2>
        <p className="text-2xl md:text-3xl font-bold italic mb-8" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-light)' }}>
          Curiosity-driven, detail-obsessed!
        </p>

        <div className="space-y-4 text-[var(--muted-light)] text-base leading-relaxed max-w-2xl">
          <p>
            Hey! I'm <span className="text-white font-medium">Nathan Winter</span> — a Full-Stack developer
            passionate about building clean, purposeful software. I love the intersection of design
            and engineering, where good code meets great user experience.
          </p>
          <p>
            I thrive on learning new technologies and turning complex problems into simple, elegant
            solutions. When I'm not coding, I'm exploring open source projects or leveling up my
            skills one challenge at a time.
          </p>
          <p>
            I'm currently open to new opportunities where I can contribute, grow, and make an impact.
            Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {[
            { label: 'Location', value: 'North Kingstown, RI' },
            { label: 'Focus', value: 'Full-Stack Dev' },
            { label: 'Status', value: 'Open to Work' },
            { label: 'Pronouns', value: 'He / Him' },
          ].map(item => (
            <div key={item.label} className="p-4 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1">{item.label}</p>
              <p className="text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <SectionNav prev={{ label: 'Introduction', id: 'introduction' }} next={{ label: 'Projects', id: 'projects' }} />
      </div>
    </section>
  );
}
