import React, { useState } from 'react';
import { Compass, Ruler, Shield, Zap, Wind, Lock, MoveHorizontal } from 'lucide-react';

const openingDetails = [
  {
    name: "Apertura Battente",
    icon: <Compass size={18} />,
    tag: "Classico",
    desc: "L'apertura classica ed elegante su cerniere tradizionali. Massima stabilità strutturale e tenuta acustica. Disponibile in versione DX o SX con spessori da 45 a 80mm.",
  },
  {
    name: "Sistema Rototraslante",
    icon: <Ruler size={18} />,
    tag: "Brevettato",
    desc: "L'anta gira su se stessa e trasla su entrambi i lati grazie al perno brevettato. Riduce l'ingombro del battente di oltre il 50% rispetto a una porta tradizionale, recuperando spazio prezioso.",
  },
  {
    name: "Scorrevole Magic",
    icon: <Zap size={18} />,
    tag: "Pluribrevettato",
    desc: "Sistema scorrevole invisibile per porte in legno e vetro con binario esterno muro. Integrazione totale nella parete, funzionamento silenzioso e scorrevolezza al minimo tocco.",
  },
  {
    name: "Porta Saloon",
    icon: <Wind size={18} />,
    tag: "Bidirezionale",
    desc: "Apertura bidirezionale a spinta, ideale per ambienti ad alto traffico. La porta rimane normalmente chiusa ma cede al semplice passaggio della persona senza necessità di impugnature.",
  },
  {
    name: "Porta a Libro Asimmetrica",
    icon: <Compass size={18} />,
    tag: "Pieghevole",
    desc: "Anta pieghevole asimmetrica a libro, realizzabile in tutte le finiture del catalogo. Ideale per ridurre al minimo gli ingombri nei vani di passaggio ristretti o per divisori ambiente.",
  }
];

const spaceFeatures = [
  {
    stat: "50%",
    label: "Spazio recuperato",
    detail: "Il sistema rototraslante occupa meno della metà dello spazio di un battente tradizionale durante l'apertura."
  },
  {
    stat: "0cm",
    label: "Ingombro muro",
    detail: "Il sistema scorrevole Magic non occupa spazio nel vano muro, lasciando libere le pareti laterali."
  },
  {
    stat: "180°",
    label: "Rotazione completa",
    detail: "Il perno rototraslante garantisce rotazione completa senza blocchi, ottimale per passaggi stretti."
  },
  {
    stat: "3mm",
    label: "Spessore HDF",
    detail: "Rivestimento perimetrale in HDF idrofugo per massima protezione senza incremento di massa."
  },
];

export default function Specs() {
  const [activeSubTab, setActiveSubTab] = useState('tech');
  const [hasScrolledTable, setHasScrolledTable] = useState(false);

  return (
    <section id="tecnologia" className="py-12 md:py-32 bg-transparent text-white relative overflow-hidden select-none dark-section">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ea5d1a]/5 opacity-30 blur-[130px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-4">
            Ingegneria &amp; <span className="text-[#ea5d1a]">Brevetti.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mx-auto mb-6"></div>
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Soluzioni tecnologiche esclusive per prestazioni superiori in ogni condizione d'uso.
          </p>

          {/* Sub-tabs Selection bar */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10">
            <button
              onClick={() => setActiveSubTab('tech')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                activeSubTab === 'tech'
                  ? 'bg-[#ea5d1a] border-[#ea5d1a] text-white shadow-lg shadow-[#ea5d1a]/15'
                  : 'bg-white/5 border-white/5 text-white/75 hover:border-white/10 hover:text-white'
              }`}
            >
              Tecnologia Telai (Idro)
            </button>
            <button
              onClick={() => setActiveSubTab('openings')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                activeSubTab === 'openings'
                  ? 'bg-[#ea5d1a] border-[#ea5d1a] text-white shadow-lg shadow-[#ea5d1a]/15'
                  : 'bg-white/5 border-white/5 text-white/75 hover:border-white/10 hover:text-white'
              }`}
            >
              Cinematiche d'Apertura
            </button>
            <button
              onClick={() => setActiveSubTab('security')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                activeSubTab === 'security'
                  ? 'bg-[#ea5d1a] border-[#ea5d1a] text-white shadow-lg shadow-[#ea5d1a]/15'
                  : 'bg-white/5 border-white/5 text-white/75 hover:border-white/10 hover:text-white'
              }`}
            >
              Sicurezza &amp; Blindate
            </button>
          </div>
        </div>

        {/* SUB-TAB CONTENT 1: TECHNOLOGY (TELAIO IDRO) */}
        {activeSubTab === 'tech' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img 
                src="/images/flat.jpg" 
                alt="Telaio Idrorepellente Quadra" 
                className="w-full h-auto opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Technical analysis details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-2">Composizione Chimico-Fisica</p>
                <h3 className="text-3xl font-display font-bold">Il Telaio Idrorepellente</h3>
              </div>
              <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
                Quadra S.r.l. orienta i propri standard sulla combinazione di legno di abete come base per il corpo del telaio e un impiego di speciale HDF idrofugo/idrorepellente dello spessore di 3mm sull'intero perimetro. L'HDF assicura un'eccellente resistenza alla penetrazione di acqua e umidità, mentre il legno di abete garantisce leggerezza ed un'altissima resistenza meccanica per la cerniera (anuba).
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Anima Legno</h4>
                  <p className="text-white/75 text-xs font-light">Abete naturale leggero, elastico e ad alta resistenza meccanica.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Rivestimento HDF</h4>
                  <p className="text-white/75 text-xs font-light">3mm di HDF idrofugo su tutto il perimetro. Resistenza certificata all'umidità.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Coprifilo Folding</h4>
                  <p className="text-white/75 text-xs font-light">Tecnica di piegatura alettata per evitare crepe da dilatazione termica.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Cerniera Anuba</h4>
                  <p className="text-white/75 text-xs font-light">Cerniera a scomparsa regolabile su 3 assi. Portata fino a 80kg per anta.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB CONTENT 2: OPENING MECHANISMS */}
        {activeSubTab === 'openings' && (
          <div className="flex flex-col gap-12 animate-fade-in">
            {/* Opening types list */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {openingDetails.map((op, idx) => (
                <div key={idx} className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 flex flex-col gap-3 hover:border-[#ea5d1a]/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#ea5d1a] flex items-center justify-center text-white shrink-0 shadow-md">
                      {op.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#ea5d1a] border border-[#ea5d1a]/30 px-2 py-1 rounded-full">{op.tag}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{op.name}</h4>
                  <p className="text-white/75 text-xs font-light leading-relaxed">{op.desc}</p>
                </div>
              ))}
              
              {/* Vuoto 6° slot — Ottimizzazione vano (highlight card) */}
              <div className="bg-gradient-to-br from-[#ea5d1a]/10 to-[#ea5d1a]/5 p-4 md:p-6 rounded-2xl border border-[#ea5d1a]/20 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ea5d1a]/20 flex items-center justify-center text-[#ea5d1a] shrink-0">
                  <Ruler size={18} />
                </div>
                <h4 className="text-sm font-bold text-[#ea5d1a]">Su misura</h4>
                <p className="text-white/75 text-xs font-light leading-relaxed">
                  Ogni cinematica è personalizzabile nelle dimensioni e nelle finiture. Dimensioni speciali disponibili su richiesta per vani non standard.
                </p>
              </div>
            </div>

            {/* Space Optimization Panel */}
            <div className="bg-white/3 border border-white/10 rounded-[2rem] p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-2">Analisi degli Spazi</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Ottimizzazione del Vano Muro</h3>
                <p className="text-white/75 text-sm font-light max-w-2xl mx-auto leading-relaxed">
                  La scelta della cinematica non è solo estetica: è un progetto di spazio. Quadra progetta ogni sistema di apertura per massimizzare la fruibilità dell'ambiente, adattandosi alle esigenze strutturali di ogni vano.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10">
                {spaceFeatures.map((f, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-4 md:p-5 border border-white/5 text-center">
                    <p className="text-4xl font-display font-bold text-white mb-1">{f.stat}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#ea5d1a] mb-3">{f.label}</p>
                    <p className="text-white/70 text-xs font-light leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              {!hasScrolledTable && (
                <div className="flex items-center justify-end mb-3 md:hidden">
                  <p className="flex items-center gap-1 text-[9px] text-[#ea5d1a] font-bold uppercase tracking-widest animate-pulse"><MoveHorizontal size={12} /> Scorri Tabella</p>
                </div>
              )}
              <div 
                className="overflow-x-auto pb-4 scrollbar-hide"
                onScroll={() => { if (!hasScrolledTable) setHasScrolledTable(true); }}
              >
                <table className="w-full text-xs text-left border-collapse min-w-[550px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 pr-6 text-white/70 font-bold uppercase tracking-wider">Cinematica</th>
                      <th className="py-3 pr-6 text-white/70 font-bold uppercase tracking-wider">Ingombro Apertura</th>
                      <th className="py-3 pr-6 text-white/70 font-bold uppercase tracking-wider">Spazio Laterale</th>
                      <th className="py-3 text-white/70 font-bold uppercase tracking-wider">Ideale Per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/3">
                      <td className="py-3 pr-6 text-white font-semibold">Battente</td>
                      <td className="py-3 pr-6 text-white/80">100% larghezza anta</td>
                      <td className="py-3 pr-6 text-white/80">Necessario</td>
                      <td className="py-3 text-white/80">Ambienti spaziosi</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/3">
                      <td className="py-3 pr-6 text-[#ea5d1a] font-semibold">Rototraslante ★</td>
                      <td className="py-3 pr-6 text-white/80">&lt; 50% larghezza</td>
                      <td className="py-3 pr-6 text-white/80">Minimo</td>
                      <td className="py-3 text-white/80">Corridoi, bagni, disimpegni</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/3">
                      <td className="py-3 pr-6 text-white font-semibold">Scorrevole Magic</td>
                      <td className="py-3 pr-6 text-white/80">Zero in apertura</td>
                      <td className="py-3 pr-6 text-white/80">Nessuno</td>
                      <td className="py-3 text-white/80">Open space, divisori</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/3">
                      <td className="py-3 pr-6 text-white font-semibold">A Libro</td>
                      <td className="py-3 pr-6 text-white/80">~30% larghezza</td>
                      <td className="py-3 pr-6 text-white/80">Minimo</td>
                      <td className="py-3 text-white/80">Vani molto stretti</td>
                    </tr>
                    <tr className="hover:bg-white/3">
                      <td className="py-3 pr-6 text-white font-semibold">Saloon</td>
                      <td className="py-3 pr-6 text-white/80">Bidirezionale</td>
                      <td className="py-3 pr-6 text-white/80">Entrambi i lati</td>
                      <td className="py-3 text-white/80">Cucina, servizi, uffici</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB CONTENT 3: SECURITY (ROCK 3 BLINDATE) */}
        {activeSubTab === 'security' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Analysis details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-2">Prestazioni certificate Rock 3 &amp; 4</p>
                <h3 className="text-3xl font-display font-bold">Sicurezza &amp; Comfort Blindati</h3>
              </div>
              <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
                Forza, sicurezza ed eleganza sono i cardini della gamma blindata Quadra. I modelli certificati Rock 3 garantiscono una protezione antieffrazione di livello RC3, con eccellenti coefficienti di isolamento termico e acustico per il massimo benessere domestico.
              </p>
              
              {/* Stat grid */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <span className="text-3xl font-display font-bold text-white block">RC 3</span>
                  <span className="text-[9px] text-[#ea5d1a] font-bold uppercase tracking-widest mt-1 block">Antieffrazione</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <span className="text-3xl font-display font-bold text-white block">38dB</span>
                  <span className="text-[9px] text-[#ea5d1a] font-bold uppercase tracking-widest mt-1 block">Fonoassorbimento</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <span className="text-3xl font-display font-bold text-white block">1.97</span>
                  <span className="text-[9px] text-[#ea5d1a] font-bold uppercase tracking-widest mt-1 block">Trasmittanza U</span>
                </div>
              </div>

              {/* Extra security details */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <Lock size={16} className="text-[#ea5d1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">Serratura multipoint certificata</h5>
                    <p className="text-white/70 text-xs font-light">Meccanismo di chiusura su più punti perimetrali, omologato EN 1303.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <Shield size={16} className="text-[#ea5d1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">Pannello rinforzato anti-sfondamento</h5>
                    <p className="text-white/70 text-xs font-light">Struttura interna con doppia lamiera zincata e riempimento in schiuma poliuretanica ad alta densità.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <Shield size={16} className="text-[#ea5d1a] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">Giunzione perimetrale a labirinto</h5>
                    <p className="text-white/70 text-xs font-light">Profilo battuta a doppia guarnizione per isolamento termico/acustico e tenuta all'aria.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img 
                src="/images/filomuro.jpg" 
                alt="Porte Blindate Rock Quadra" 
                className="w-full h-auto opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
