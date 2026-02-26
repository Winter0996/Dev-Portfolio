
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Introduction from './components/sections/Introduction';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Stats from './components/sections/Stats';

const SECTIONS = ['introduction','about','projects','skills','education','contact','stats'];

export default function App() {
  const [active, setActive] = useState('introduction');

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Sidebar activeSection={active} onNavigate={setActive} />
      <main className="pt-[52px] lg:ml-56">
        <Introduction />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <AboutMe />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <Projects />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <Skills />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <Education />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <Contact />
        <div style={{ borderTop: '1px solid var(--border)' }} />
        <Stats />
        <Footer />
      </main>
    </div>
  );
}