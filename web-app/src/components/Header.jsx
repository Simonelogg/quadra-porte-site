import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { collections } from '../data';

export default function Header({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const { pathname } = useLocation();
  const isSubPage = pathname !== '/';
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollOpen, setMobileCollOpen] = useState(false);

  const sections = ['materiali', 'tecnologia', 'contatti'];
  const labels = { materiali: 'Materiali', tecnologia: 'Tecnologia', contatti: 'Contatti' };

  const navHref = (sec) => isSubPage ? `/#${sec}` : `#${sec}`;
  const isCollActive = pathname.startsWith('/collezioni');

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl glass-pill px-6 md:px-8 py-3 md:py-4 flex items-center justify-between pointer-events-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Quadra Produzioni Industriali" className="h-12 md:h-16 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href={navHref('home')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'home' && !isSubPage ? 'text-[#1d1d1f] font-bold' : 'text-[#555] hover:text-[#1d1d1f]'
              }`}
            >
              Home
            </a>

            <Link
              to="/chi-siamo"
              className={`text-sm font-medium transition-colors ${
                pathname === '/chi-siamo' ? 'text-[#1d1d1f] font-bold' : 'text-[#555] hover:text-[#1d1d1f]'
              }`}
            >
              Chi Siamo
            </Link>

            {/* Collezioni con dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <a
                href={navHref('collezioni')}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  (activeSection === 'collezioni' && !isSubPage) || isCollActive
                    ? 'text-[#1d1d1f] font-bold'
                    : 'text-[#555] hover:text-[#1d1d1f]'
                }`}
              >
                Collezioni
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {collectionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 min-w-[200px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#e8e8ed] py-2">
                    {collections.filter(c => c.route).map(c => (
                      <Link
                        key={c.id}
                        to={c.route}
                        onClick={() => setCollectionsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap group ${
                          pathname === c.route
                            ? 'text-[#ea5d1a] bg-[#fff5f0]'
                            : 'text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#ea5d1a]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea5d1a] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {c.name.replace('Collezione ', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {sections.map((sec) => (
              <a
                key={sec}
                href={navHref(sec)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === sec && !isSubPage ? 'text-[#1d1d1f] font-bold' : 'text-[#555] hover:text-[#1d1d1f]'
                }`}
              >
                {labels[sec]}
              </a>
            ))}
          </nav>

          <a
            href={navHref('contatti')}
            className="hidden md:inline-flex bg-[#1d1d1f] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md"
          >
            Preventivo
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1d1d1f] hover:text-[#ea5d1a] transition-colors p-1"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl pt-32 px-10 flex flex-col gap-8 anim-fade-up overflow-y-auto pb-12">

          <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-2">Navigazione</p>

          <div className="flex flex-col gap-6">
            <a
              href={navHref('home')}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl md:text-4xl font-display transition-colors ${activeSection === 'home' && !isSubPage ? 'text-white font-bold' : 'text-white/60 font-light hover:text-white'}`}
            >
              Home
            </a>

            <Link
              to="/chi-siamo"
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl md:text-4xl font-display transition-colors ${pathname === '/chi-siamo' ? 'text-white font-bold' : 'text-white/60 font-light hover:text-white'}`}
            >
              Chi Siamo
            </Link>

            {/* Collezioni mobile */}
            <div>
              <button
                onClick={() => setMobileCollOpen(v => !v)}
                className={`text-3xl md:text-4xl font-display transition-colors flex items-center gap-3 ${
                  isCollActive ? 'text-white font-bold' : 'text-white/60 font-light hover:text-white'
                }`}
              >
                Collezioni
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 mt-1 ${mobileCollOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileCollOpen && (
                <div className="mt-4 ml-4 flex flex-col gap-3 border-l border-white/10 pl-6">
                  {collections.filter(c => c.route).map(c => (
                    <Link
                      key={c.id}
                      to={c.route}
                      onClick={() => { setIsMenuOpen(false); setMobileCollOpen(false); }}
                      className={`text-lg font-medium transition-colors ${
                        pathname === c.route ? 'text-[#ea5d1a]' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {c.name.replace('Collezione ', '')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {sections.map((sec) => (
              <a
                key={sec}
                href={navHref(sec)}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl md:text-4xl font-display transition-colors ${
                  activeSection === sec && !isSubPage ? 'text-white font-bold' : 'text-white/60 font-light hover:text-white'
                }`}
              >
                {labels[sec]}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
            <p className="text-white/40 text-xs uppercase tracking-widest">Contatti Diretti</p>
            <a href="mailto:info@quadraporte.it" className="text-white/80 text-sm">info@quadraporte.it</a>
            <a href="tel:+390934566279" className="text-white/80 text-sm">+39 0934 566279</a>
          </div>
        </div>
      )}
    </>
  );
}
