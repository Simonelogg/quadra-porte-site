import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Configurator from './components/Configurator';
import Materials from './components/Materials';
import Specs from './components/Specs';
import Contact from './components/Contact';
import { collections, finishes, openings } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Configurator State
  const [selectedCol, setSelectedCol] = useState(collections[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
  const [selectedOpening, setSelectedOpening] = useState(openings[0]);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'collezioni', 'configuratore', 'materiali', 'tecnologia', 'contatti'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
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
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
      />
      
      <main>
        <Hero />
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

      <footer className="bg-[#1d1d1f] text-white py-12 px-4 text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <img src="/logo.png" alt="Quadra Produzioni Industriali" className="h-20 w-auto mb-4 grayscale brightness-200 opacity-80" />
          <p className="text-[#86868b] text-sm mb-8">L'arte di dividere ed unire spazi.</p>
          <div className="flex gap-6 text-sm font-bold text-white/50 mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini Legali</a>
          </div>
          <p className="text-white/30 text-xs">&copy; 2026 Quadra S.r.l. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
