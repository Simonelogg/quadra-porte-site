import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Configurator from './components/Configurator';
import Materials from './components/Materials';
import Specs from './components/Specs';
import Contact from './components/Contact';
import HomeChiSiamo from './components/HomeChiSiamo';
import ChiSiamo from './pages/ChiSiamo';
import FAQ from './pages/FAQ';

import { collections, finishes, openings } from './data';

/* ── SERIOUS 3D ARCHITECTURAL BACKGROUND ── */
function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#000000] overflow-hidden pointer-events-none flex items-center justify-center" style={{ perspective: '2000px' }}>
      
      {/* ── Floor Base Grid ── */}
      <div 
        className="absolute bottom-[-50%] left-[-50%] right-[-50%] h-[150%] opacity-20 border-t border-white/5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          transform: 'rotateX(75deg) translateZ(-300px)',
          transformOrigin: 'top center',
          animation: 'seriousSpin 150s linear infinite'
        }}
      />

      {/* ── 3D Rotating Wireframe Architecture ── */}
      <div 
        className="w-[120vw] h-[120vw] absolute opacity-[0.9] border border-white/5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          animation: 'seriousSpin 120s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inner concentric grids to give 3D depth */}
        <div className="absolute inset-0 border border-white/10" style={{ transform: 'translateZ(100px) scale(0.9)' }}></div>
        <div className="absolute inset-0 border border-white/5" style={{ transform: 'translateZ(200px) scale(0.8)' }}></div>
        <div className="absolute inset-0 border border-white/5" style={{ transform: 'translateZ(300px) scale(0.7)' }}></div>
        
        {/* Architectural core: a central square that spins inversely */}
        <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] border border-[#ea5d1a]/20 shadow-[0_0_50px_rgba(234,93,26,0.05)]" style={{ transform: 'translateZ(150px)', animation: 'seriousSpin 80s linear infinite reverse' }}></div>
      </div>

      {/* ── Scanning Laser Line ── */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-white/5 to-transparent border-b border-white/10 animate-[scanVertical_8s_ease-in-out_infinite]" />

      {/* Massive shadow vignette to turn it all to pure black at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_80%)]" />
    </div>
  );
}

/* ── Scroll To Top Handler ── */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

/* ── FAQ Floating Button (visibile su tutte le pagine) ── */
function FaqFab() {
  return (
    <Link
      to="/faq"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#1d1d1f] text-white text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl shadow-lg hover:bg-[#ea5d1a] transition-colors"
      title="FAQ & Manutenzione"
    >
      <span className="text-base leading-none">?</span>
      <span>FAQ</span>
    </Link>
  );
}

/* ── ONE-PAGE HOME ── */
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [selectedCol, setSelectedCol] = useState(collections[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
  const [selectedOpening, setSelectedOpening] = useState(openings[0]);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'collezioni', 'configuratore', 'materiali', 'tecnologia', 'contatti'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCustomize = (collection) => {
    setSelectedCol(collection);
    setSelectedFinish(finishes.find(f => collection.availableFinishes.includes(f.id)) || finishes[0]);
    setSelectedOpening(openings.find(o => collection.availableOpenings.includes(o.id)) || openings[0]);
    document.getElementById('configuratore').scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestQuote = () => {
    document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />
      <main>
        <Hero />
        <HomeChiSiamo />
        <Materials />
        <Collections onCustomize={handleCustomize} />
        <Configurator
          selectedCol={selectedCol} setSelectedCol={setSelectedCol}
          selectedFinish={selectedFinish} setSelectedFinish={setSelectedFinish}
          selectedOpening={selectedOpening} setSelectedOpening={setSelectedOpening}
          isDoorOpen={isDoorOpen} setIsDoorOpen={setIsDoorOpen}
          onRequestQuote={handleRequestQuote}
        />
        <Specs />
        <Contact />
      </main>

    </>
  );
}

/* ── ROUTER ── */
export default function App() {
  return (
    <>
      <GlobalBackground />
      <ScrollToTop />
      <div className="relative z-10 w-full bg-transparent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <FaqFab />
      </div>

      <footer className="bg-[#050505] text-white py-16 px-4 text-center relative z-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Quadra Produzioni Industriali" className="h-24 w-auto mb-6 brightness-0 invert opacity-90" />
          <p className="text-[#86868b] text-sm mb-10 font-medium tracking-wide">L'arte di dividere ed unire spazi.</p>
          <div className="flex gap-8 text-xs font-bold text-white/50 mb-10 uppercase tracking-widest">
            <a href="#" className="hover:text-[#ea5d1a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ea5d1a] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#ea5d1a] transition-colors">Termini Legali</a>
          </div>
          <p className="text-white/30 text-xs font-light tracking-wide">&copy; 2026 Quadra S.r.l. • P.IVA 01981950858 • Contrada Gigara s.n.c., 93100 Caltanissetta (CL) • Tutti i diritti riservati.</p>
        </div>
      </footer>
    </>
  );
}
