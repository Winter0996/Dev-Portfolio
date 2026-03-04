import SectionNav from '../SectionNav';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiBootstrap, SiTailwindcss, SiVite, SiGit, SiGithub,
  SiNodedotjs, SiNpm, SiPython, SiFlask, SiMysql,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaTools } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdBugReport } from 'react-icons/md';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgIcon?: boolean; // adds a pill bg behind white icons so they don't vanish
}

const skills: Skill[] = [
  { name: 'HTML',             icon: <SiHtml5 />,       color: '#e34f26' },
  { name: 'CSS',              icon: <SiCss3 />,        color: '#1572b6' },
  { name: 'JavaScript',       icon: <SiJavascript />,  color: '#f7df1e' },
  { name: 'TypeScript',       icon: <SiTypescript />,  color: '#3178c6' },
  { name: 'React',            icon: <SiReact />,       color: '#61dafb' },
  { name: 'Bootstrap CSS',    icon: <SiBootstrap />,   color: '#7952b3' },
  { name: 'Tailwind CSS',     icon: <SiTailwindcss />, color: '#06b6d4' },
  { name: 'Vite',             icon: <SiVite />,        color: '#646cff' },
  { name: 'Git',              icon: <SiGit />,         color: '#f05032' },
  { name: 'GitHub',           icon: <SiGithub />,      color: '#ffffff', bgIcon: true },
  { name: 'Node.js',          icon: <SiNodedotjs />,   color: '#339933' },
  { name: 'npm',              icon: <SiNpm />,         color: '#cb3837' },
  { name: 'Python',           icon: <SiPython />,      color: '#3776ab' },
  { name: 'Flask',            icon: <SiFlask />,       color: '#ffffff', bgIcon: true },
  { name: 'Java',             icon: <FaJava />,        color: '#f89820' },
  { name: 'MySQL',            icon: <SiMysql />,       color: '#4479a1' },
  { name: 'VSCode',           icon: <VscVscode />,     color: '#007acc' },
  { name: 'RESTful APIs',     icon: <TbApi />,         color: '#6ec747' },
  { name: 'Software Testing', icon: <FaTools />,       color: '#a78bfa' },
  { name: 'Code Debugging',   icon: <MdBugReport />,   color: '#fb923c' },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          Skills & Tools
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-5"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          Learned by coding all night and debugging all day!
        </p>

        <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--muted-light)' }}>
          As a software developer, I specialize in building modern, responsive web applications using
          React and TypeScript. I'm continuously expanding my toolkit and exploring new technologies to
          ship better products.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-default"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = skill.color + '66';
                e.currentTarget.style.background = skill.color + '18';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}>
              {/* White icons (GitHub, Flask) get a dark pill so they're always visible */}
              <span
                className="text-base shrink-0 flex items-center justify-center"
                style={{
                  color: skill.color,
                  background: skill.bgIcon ? 'rgba(255,255,255,0.12)' : 'transparent',
                  borderRadius: skill.bgIcon ? '4px' : '0',
                  padding: skill.bgIcon ? '2px' : '0',
                  width: '20px',
                  height: '20px',
                }}>
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <SectionNav
          prev={{ label: 'Projects', id: 'projects' }}
          next={{ label: 'Education', id: 'education' }}
        />
      </div>
    </section>
  );
}
