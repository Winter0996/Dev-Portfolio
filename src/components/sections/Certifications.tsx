import SectionNav from '../SectionNav';
import cert1 from '../../assets/certs/cert1.png';
import cert2 from '../../assets/certs/cert2.png';
import cert3 from '../../assets/certs/cert3.png';
import cert4 from '../../assets/certs/cert4.png';
import cert5 from '../../assets/certs/cert5.png';

interface Cert {
  title: string;
  image: string;
  url: string;
}

const certs: Cert[] = [
  {
    title: 'Johnson & Wales University — Coding For Web',
    image: cert1,
    url: 'https://www.credential.net/7dc8fde8-3fd9-4d6c-964d-156020b11545#acc.5va0Ndwy',
  },
  {
    title: 'Publicis Sapient Project — Prototyping & Web Development',
    image: cert2,
    url: 'https://www.credential.net/846a815c-940c-42b6-b7f9-f83d8a96e593#acc.Sh0xcONj',
  },
  {
    title: 'Coding for Web — Part 2',
    image: cert3,
    url: 'https://www.credential.net/e40f6df9-1176-497e-bfe6-4ac590e31090#acc.0EUXwQG4',
  },
  {
    title: 'Global Career Accelerator — Intercultural Skills',
    image: cert4,
    url: 'https://www.credential.net/6f5d2dd3-356e-4083-af34-70e703461c4e#acc.UZJMiNwr',
  },
  {
    title: 'Coding for Web — Part 1',
    image: cert5,
    url: 'https://www.credential.net/ef75ed5c-d32f-4aaa-aa07-210943d81f69#acc.6LCoIgxE',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.2] tracking-normal"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          Certifications
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-10 leading-[1.4]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          Credentials that back the code!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden transition-all block"
              style={{ border: '1px solid var(--border)' }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(124,58,237,0.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              {/* Certificate image */}
              <div className="relative overflow-hidden" style={{ background: 'var(--bg-card)' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ aspectRatio: '16/10' }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(124,58,237,0.15)', backdropFilter: 'blur(2px)' }}>
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{ background: 'var(--accent)' }}>
                    View Certificate
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Title bar */}
              <div className="px-4 py-3" style={{ background: 'var(--bg-card)' }}>
                <p
                  className="text-sm font-medium leading-snug group-hover:text-[var(--accent-light)] transition-colors"
                  style={{ color: 'var(--text)' }}>
                  {cert.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        <SectionNav
          prev={{ label: 'Projects', id: 'projects' }}
          next={{ label: 'Skills & Tools', id: 'skills' }}
        />
      </div>
    </section>
  );
}
