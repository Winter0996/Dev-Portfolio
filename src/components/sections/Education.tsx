import SectionNav from '../SectionNav';

const education = [
  {
    degree: 'B.S. in Computer Science · Johnson & Wales University · Providence, RI',
    period: 'August 2020 – March 2026',
    details: 'Studied core computer science fundamentals including advanced data structures, operating systems, and software testing. Built hands-on projects throughout the program that reinforced real-world engineering practices — from designing efficient algorithms to writing reliable, testable code. Developed a strong foundation in both the theory and practical application of modern software development.',
  },
  {
    degree: 'Coding For Web · Global Career Accelerator',
    period: 'Summer 2024',
    details: 'Earned certifications in JavaScript, HTML5/CSS3, and intercultural skills through an intensive web development program. Learned to integrate AI tools into a modern development workflow while building responsive, accessible web designs. Gained practical experience shipping real projects with a global cohort of developers.',
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          Education
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-5 leading-[1.3]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          The real learning happens in the code editor!
        </p>

        <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--muted-light)' }}>
          Education has always been central to my journey in tech. My formal studies gave me strong
          fundamentals, while personal projects and self-study have shaped who I am as a developer.
        </p>

        <div className="relative pl-5" style={{ borderLeft: '1px solid var(--border)' }}>
          <div className="space-y-10">
            {education.map((item, i) => (
              <div key={i} className="relative">
                <span
                  className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-sm rotate-45"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 8px rgba(124,58,237,0.6)' }}
                />
                <p className="text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>{item.period}</p>
                <h3
                  className="font-semibold text-sm mb-2 leading-snug"
                  style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>
                  {item.degree}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-light)' }}>{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <SectionNav prev={{ label: 'Skills & Tools', id: 'skills' }} next={{ label: 'Contact', id: 'contact' }} />
      </div>
    </section>
  );
}
