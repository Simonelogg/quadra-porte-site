import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { MapPin, Users, Layers, Award, ChevronRight } from 'lucide-react';

const milestones = [
  { year: '1998', label: 'Fondazione', desc: 'Nasce Quadra S.r.l. a Caltanissetta, con la missione di ridefinire il concetto di porta interna di alta gamma.' },
  { year: '2005', label: 'Primo Brevetto', desc: 'Deposito del primo brevetto sul sistema rototraslante: una rivoluzione per l\'ottimizzazione degli spazi abitativi.' },
  { year: '2012', label: 'Gamma Blindati', desc: 'Lancio della linea Rock 3 con certificazione RC3 antieffrazione, unendo estetica e sicurezza assoluta.' },
  { year: '2019', label: 'Sistema Magic', desc: 'Nasce il sistema scorrevole Magic, pluribrevettato, per porte filomuro con scorrevolezza silenziosa.' },
  { year: '2026', label: 'Nuovo Catalogo', desc: 'Il nuovo catalogo industriale presenta oltre 40 finiture e 5 cinematiche d\'apertura per ogni esigenza progettuale.' },
];

const values = [
  {
    icon: <Layers size={22} />,
    title: 'Artigianalità Industriale',
    desc: 'Ogni porta Quadra nasce da un processo produttivo che unisce la precisione industriale alla cura artigianale del dettaglio. Materiali selezionati e controllo qualità su ogni pezzo.',
  },
  {
    icon: <Award size={22} />,
    title: 'Certificazioni di Settore',
    desc: 'Tutti i prodotti rispettano le normative europee EN 1303 e RC3. Forniture certificate per il residenziale, il terziario e il contract di alto livello.',
  },
  {
    icon: <Users size={22} />,
    title: 'Progettazione Su Misura',
    desc: 'Il team tecnico affianca progettisti, interior designer e imprese edili dalla fase di sopralluogo fino alla posa finale, con supporto CAD e consulenza normativa.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Made in Sicily',
    desc: 'Produciamo a Caltanissetta, nel cuore della Sicilia. Il territorio, le persone e la qualità delle materie prime locali sono parte integrante dell\'identità Quadra.',
  },
];

const numbers = [
  { value: '25+', label: 'Anni di esperienza' },
  { value: '40+', label: 'Finiture disponibili' },
  { value: '5', label: 'Cinematiche brevettate' },
  { value: 'RC3', label: 'Certificazione blindati' },
];

export default function ChiSiamo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">

      {/* Header identico al sito principale */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection=""
      />

      {/* ── HERO ── */}
      <div 
        className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/pantografato.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay molto opaco per far leggere il testo */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Effetto luce arancione sfocato per dare profondità */}
        <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-[#ea5d1a]/20 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Chi Siamo</p>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none text-white mb-8">
              Una storia<br />di <span className="text-[#ea5d1a]">precisione.</span>
            </h1>
            <div className="w-20 h-[2px] bg-[#ea5d1a] mb-8" />
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Quadra S.r.l. è un'azienda siciliana specializzata nella produzione di porte interne e blindate di alta gamma. Da oltre vent'anni affianchiamo progettisti e privati con soluzioni tecniche all'avanguardia e finiture di pregio.
            </p>
          </div>
        </div>
      </div>

      {/* ── DARK BAND ── */}
      <div className="bg-[#0c0c0d] py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-sm font-light tracking-wide">
            Quadra S.r.l. — Produzione italiana di porte interne e blindate di alta gamma dal 1998.
          </p>
          <div className="flex items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Made in Sicily</span>
          </div>
        </div>
      </div>

      {/* ── NUMBERS ── */}
      <div className="border-b border-[#e0e0e0] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {numbers.map((n, i) => (
            <div key={i} className="text-center">
              <p className="text-5xl md:text-6xl font-display font-bold text-[#1d1d1f] mb-2">{n.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ea5d1a]">{n.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">I Nostri Valori</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1d1d1f]">
              Costruiamo con cura.<br />Progettiamo con visione.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#f5f5f7] rounded-2xl p-7 border border-[#e0e0e0] hover:border-[#ea5d1a]/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#ea5d1a] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-105 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-3">{v.title}</h3>
                <p className="text-[#6e6e73] text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="py-24 px-6 md:px-12 bg-[#f5f5f7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">Storia dell'Azienda</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1d1d1f]">
              I traguardi che ci definiscono.
            </h2>
          </div>

          <div className="relative">
            {/* Linea verticale desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d0d0d0] hidden md:block" />

            <div className="flex flex-col gap-16">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <p className="text-5xl font-display font-bold text-[#ea5d1a] mb-1">{m.year}</p>
                    <h4 className="text-[#1d1d1f] font-bold text-sm uppercase tracking-wider mb-2">{m.label}</h4>
                    <p className="text-[#4a4a4a] text-base font-light leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden md:flex w-[10%] justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-[#ea5d1a] shadow-lg shadow-[#ea5d1a]/30 ring-4 ring-[#f5f5f7]" />
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DOVE SIAMO ── */}
      <div className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">Dove Siamo</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1d1d1f] mb-6">
              Produzione 100%<br />Italiana.
            </h2>
            <p className="text-[#6e6e73] text-base font-light leading-relaxed mb-8">
              La sede produttiva Quadra S.r.l. si trova nel cuore della Sicilia, a Caltanissetta. Ogni porta viene progettata, lavorata e controllata nel nostro stabilimento prima di essere consegnata in tutta Italia e all'estero.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                <MapPin size={14} className="text-[#ea5d1a] shrink-0" />
                Contrada Gigara s.n.c., 93100 Caltanissetta (CL)
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                <span className="text-[#ea5d1a] font-bold text-xs">P.IVA</span>
                01981950858
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e0e0e0] overflow-hidden h-80 shadow-sm">
            <iframe
              title="Quadra Sede"
              src="https://maps.google.com/maps?q=Caltanissetta,+Sicilia,+Italia&output=embed&z=12"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-20 px-6 md:px-12 bg-[#f5f5f7] border-t border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1d1d1f] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3">Lavoriamo insieme.</h3>
              <p className="text-white/50 text-sm font-light max-w-lg leading-relaxed">
                Che tu sia un progettista, un'impresa edile o un privato, il team Quadra è pronto ad accompagnarti dalla scelta alla posa. Contattaci per un preventivo personalizzato senza impegno.
              </p>
            </div>
            <Link
              to="/#contatti"
              className="shrink-0 px-8 py-4 bg-[#ea5d1a] rounded-full text-white font-bold text-sm uppercase tracking-widest hover:bg-[#c94e15] transition-colors shadow-lg shadow-[#ea5d1a]/20"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1d1d1f] text-white py-12 px-6 text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4">
          <img src="/logo.png" alt="Quadra Produzioni Industriali" className="h-16 w-auto grayscale brightness-200 opacity-80" />
          <p className="text-[#86868b] text-sm">L'arte di dividere ed unire spazi.</p>
          <div className="flex gap-6 text-sm font-bold text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-white/30 text-xs">&copy; 2026 Quadra S.r.l. • P.IVA 01981950858 • Contrada Gigara s.n.c., 93100 Caltanissetta (CL)</p>
        </div>
      </footer>

    </div>
  );
}
