import React from 'react';
import { MapPin, Users, Layers, Award } from 'lucide-react';

const milestones = [
  { year: '1998', label: 'Fondazione', desc: 'Nasce Quadra S.r.l. a Caltanissetta, con la missione di ridefinire il concetto di porta interna.' },
  { year: '2005', label: 'Primo Brevetto', desc: 'Deposito del primo brevetto sul sistema rototraslante: una rivoluzione per l\'ottimizzazione degli spazi abitativi.' },
  { year: '2012', label: 'Gamma Blindati', desc: 'Lancio della linea Rock 3 con certificazione RC3 antieffrazione, unendo estetica e sicurezza assoluta.' },
  { year: '2019', label: 'Sistema Magic', desc: 'Nasce il sistema scorrevole Magic, pluribrevettato, per porte filomuro con scorrevolezza silenziosa.' },
  { year: '2026', label: 'Nuovo Catalogo', desc: 'Il nuovo catalogo industriale presenta oltre 40 finiture e 5 cinematiche d\'apertura per ogni esigenza progettuale.' },
];

const values = [
  {
    icon: <Layers size={22} />,
    title: 'Artigianalità Industriale',
    desc: 'Ogni porta Quadra nasce da un processo produttivo che unisce la precisione industriale alla cura artigianale del dettaglio. Materiali selezionati, verniciatura a polvere e controllo qualità su ogni pezzo.',
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

export default function About() {
  return (
    <section id="azienda" className="py-24 md:py-32 bg-[#111112] text-white relative overflow-hidden">
      
      {/* BG accent */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#ea5d1a]/5 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">Chi Siamo</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-6">
            Una storia di<br /><span className="text-[#ea5d1a]">precisione.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mb-6" />
          <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Quadra S.r.l. è un'azienda siciliana specializzata nella produzione di porte interne e blindate di alta gamma. Da oltre vent'anni affianchiamo progettisti e privati con soluzioni tecniche all'avanguardia e finiture di pregio.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#ea5d1a]/20 transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-[#ea5d1a] flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-105 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{v.title}</h3>
              <p className="text-white/40 text-xs font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-2">Storia dell'Azienda</p>
            <h3 className="text-2xl md:text-4xl font-display font-bold">I traguardi che ci definiscono.</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />
            
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Text side */}
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <p className="text-[#ea5d1a] font-display font-bold text-4xl mb-1">{m.year}</p>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">{m.label}</h4>
                    <p className="text-white/40 text-xs font-light leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-[10%] justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#ea5d1a] shadow-lg shadow-[#ea5d1a]/40 z-10" />
                  </div>
                  {/* Empty side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#ea5d1a]/10 to-[#ea5d1a]/5 border border-[#ea5d1a]/20 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Lavoriamo insieme.</h3>
            <p className="text-white/50 text-sm font-light max-w-lg">
              Che tu sia un progettista, un'impresa edile o un privato, il team Quadra è pronto ad accompagnarti dalla scelta alla posa. Contattaci per un preventivo personalizzato.
            </p>
          </div>
          <a 
            href="#contatti"
            onClick={e => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="shrink-0 px-8 py-4 bg-[#ea5d1a] rounded-full text-white font-bold text-sm uppercase tracking-widest hover:bg-[#c94e15] transition-colors shadow-lg shadow-[#ea5d1a]/20 cursor-pointer"
          >
            Contattaci
          </a>
        </div>

      </div>
    </section>
  );
}
