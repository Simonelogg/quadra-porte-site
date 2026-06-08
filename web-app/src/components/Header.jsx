import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const sections = ['home', 'collezioni', 'configuratore', 'materiali', 'tecnologia', 'contatti'];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl glass-pill px-8 py-4 flex items-center justify-between pointer-events-auto">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Quadra Produzioni Industriali" className="h-16 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`text-sm font-medium capitalize transition-colors ${
                  activeSection === sec ? 'text-[#1d1d1f] font-bold' : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                {sec}
              </a>
            ))}
          </nav>

          <a href="#contatti" className="hidden md:inline-flex bg-[#1d1d1f] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md">
            Preventivo
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1d1d1f]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbfbfd]/95 backdrop-blur-xl pt-32 px-8 flex flex-col gap-6 anim-fade-up">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-display font-bold capitalize ${
                activeSection === sec ? 'text-[#1d1d1f]' : 'text-[#86868b]'
              }`}
            >
              {sec}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
