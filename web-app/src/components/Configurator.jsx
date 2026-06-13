import React, { useState } from 'react';
import { collections, finishes } from '../data';
import { Check, MoveHorizontal } from 'lucide-react';

const collectionDataSheets = {
  flat: {
    headline: "Purezza complanare e resistenza all'umidità.",
    pdfCopy: "Il cuore dell'innovazione Quadra: il telaio complanare 'Filo-coprifilo' permette di allineare anta, telaio e coprifili sullo stesso piano nel lato interno, eliminando spessori e sporgenze a vista. La struttura si basa sulla scelta di legno di abete come base per il corpo del telaio ed un impiego di speciale HDF idrofugo dello spessore di 3mm sull'intero perimetro, garantendo un'eccellente resistenza alla penetrazione di acqua ed umidità.",
    techSpecs: [
      { label: "Anima Interna", value: "Legno di abete naturale" },
      { label: "Fianchi e Bordi", value: "HDF Idrofugo 3mm" },
      { label: "Coprifilo", value: "Sistema folding integrato" },
      { label: "Finiture", value: "Castagno Bianco, Rovere, Coffee" }
    ]
  },
  insert: {
    headline: "Customizzazione geometrica ed eleganza millimetrica.",
    pdfCopy: "L'attività produttiva della Collezione Insert ruota attorno a un concetto chiave: la flessibilità costruttiva. Questa serie è pensata come un vero oggetto di arredo su misura, caratterizzata da profili in alluminio satinato inseriti con precisione millimetrica sul pannello porta ed opzioni arricchite con veri cristalli Swarovski incastonati a mano per creare giochi di luce unici.",
    techSpecs: [
      { label: "Dettagli", value: "Inserti in alluminio satinato" },
      { label: "Geometria", value: "Linee complanari di design" },
      { label: "Opzioni", value: "Cristalli Swarovski incastonati" },
      { label: "Anima", value: "Legno tamburato spessorato" }
    ]
  },
  compact: {
    headline: "Solido incontro tra falegnameria e design.",
    pdfCopy: "Soluzioni progettate per chi ricerca la massima affidabilità strutturale unita a un'estetica calda e tradizionale. La collezione Compact reinterpreta le classiche porte con incastri strutturali rinforzati, specchiature in rilievo e traverse di raccordo in vero legno. Rappresenta la porta solida per eccellenza, con finiture ad alto spessore stabili nel tempo.",
    techSpecs: [
      { label: "Struttura", value: "Legno massiccio con traversi" },
      { label: "Dettagli", value: "Specchiature classiche bugnate" },
      { label: "Verniciatura", value: "Finitura essenza ad alto spessore" },
      { label: "Guarnizioni", value: "Mescola espansa antirumore" }
    ]
  },
  pantografato: {
    headline: "Tridimensionalità scolpita a controllo numerico.",
    pdfCopy: "La collezione unisce il calore delle laccature tradizionali ad alto spessore a lavorazioni curvilinee tridimensionali realizzate con pantografi CNC ad altissima precisione. I motivi scavati sul pannello creano un gioco di ombre e rilievi raffinati, esaltati dalla finitura materica brevettata 'Penelope' o dalle laccature opache vellutate.",
    techSpecs: [
      { label: "Lavorazione", value: "Incisione tridimensionale CNC" },
      { label: "Finitura", value: "Laccatura poliuretanica opaca" },
      { label: "Opzione", value: "Texture esclusiva Penelope" },
      { label: "Bordi", value: "Laccati in continuo" }
    ]
  },
  filomuro: {
    headline: "Integrazione totale a parete e sicurezza certificata.",
    pdfCopy: "Concepite per sparire interamente nella parete, le porte filo muro Quadra si integrano a filo parete tramite telai invisibili in alluminio estruso. E per la sicurezza esterna, la serie blindata Rock 3 garantisce una classe di antieffrazione RC3 con abbattimento acustico certificato fino a 38dB, coniugando un design minimale a una solidità d'acciaio.",
    techSpecs: [
      { label: "Telaio", value: "Alluminio estruso scomparsa totale" },
      { label: "Classe Sicurezza", value: "Blindato Classe RC3" },
      { label: "Acustica", value: "Abbattimento acustico 30-38dB" },
      { label: "Spessore lamiera", value: "Doppia lamiera d'acciaio" }
    ]
  }
};

// Simplified static 2D Door Panel representation
function DoorPanel({ selectedFinish, collectionId }) {
  
  // Render details based on selected collection
  const renderCollectionDetails = () => {
    switch (collectionId) {
      case 'insert':
        return (
          <div className="absolute inset-0 flex flex-col justify-around py-20 pointer-events-none z-10">
            <div className="h-[4px] w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 opacity-90 border-y border-black/15 shadow-sm"></div>
            <div className="h-[4px] w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 opacity-90 border-y border-black/15 shadow-sm"></div>
            <div className="h-[4px] w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 opacity-90 border-y border-black/15 shadow-sm"></div>
          </div>
        );
      case 'compact':
        return (
          <div className="absolute inset-x-6 top-8 bottom-8 flex flex-col gap-6 pointer-events-none z-10">
            <div className="flex-1 border-[3px] border-black/30 rounded bg-black/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.45)] flex items-center justify-center">
              <div className="w-[92%] h-[92%] border border-white/5 bg-transparent"></div>
            </div>
            <div className="flex-1 border-[3px] border-black/30 rounded bg-black/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.45)] flex items-center justify-center">
              <div className="w-[92%] h-[92%] border border-white/5 bg-transparent"></div>
            </div>
          </div>
        );
      case 'pantografato':
        return (
          <div className="absolute inset-0 p-8 pointer-events-none z-10">
            <div className="w-full h-full border border-black/30 rounded shadow-[inset_0_1px_5px_rgba(0,0,0,0.35)] flex flex-col justify-center gap-12 items-center">
              <div className="w-[85%] h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.05)]"></div>
              <div className="w-[85%] h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.05)]"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="relative w-full max-w-[340px] h-[450px] md:h-[600px] rounded-sm border border-white/10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
      style={{
        background: selectedFinish.bgPattern || selectedFinish.color
      }}
    >
      {/* Light gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none z-0"></div>
      
      {/* Dynamic reflection shine overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, transparent 65%)',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Collection specific visual elements */}
      {renderCollectionDetails()}

      {/* Elegant satin steel lever handle */}
      <div className="absolute top-[50%] right-[24px] w-[6px] h-[45px] bg-neutral-800 rounded shadow-md z-30">
        {/* Handle Lever */}
        <div className="absolute top-[3px] right-0 w-[55px] h-[6px] bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 rounded-l shadow-sm transform translate-x-[-1px]"></div>
      </div>
    </div>
  );
}

export default function Configurator({ 
  selectedCol, setSelectedCol, 
  selectedFinish, setSelectedFinish, 
  onRequestQuote
}) {
  const [hasScrolledCol, setHasScrolledCol] = useState(false);
  
  const availableFinishes = finishes.filter(f => selectedCol.availableFinishes.includes(f.id));
  const docSheet = collectionDataSheets[selectedCol.id] || collectionDataSheets.flat;

  return (
    <section id="configuratore" className="py-12 md:py-32 bg-transparent text-[#f5f5f7] relative overflow-hidden min-h-screen">
      
      {/* Soft orange color highlights */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#ea5d1a]/5 opacity-30 blur-[150px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Typographic Title */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
          <div>
            <p className="text-[#ea5d1a] font-bold text-xs uppercase tracking-[0.2em] mb-2">Selettore Finiture</p>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-bold tracking-tight leading-none text-white">
              Studio <span className="text-[#ea5d1a]">Configurazione.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-sm font-light leading-relaxed">
            Seleziona la collezione Quadra e visualizza istantaneamente le finiture legno e le laccature in tempo reale.
          </p>
        </div>

        {/* Showroom split screen */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* LEFT: STATIC DOOR PREVIEW */}
          <div className="hidden lg:flex w-full lg:w-[40%] items-center justify-center bg-white/5 rounded-[1.5rem] border border-white/10 p-8 md:p-10 shadow-xl backdrop-blur-sm h-fit sticky top-32">
            <DoorPanel 
              selectedFinish={selectedFinish} 
              collectionId={selectedCol.id}
            />
          </div>

          {/* RIGHT: CONFIGURATOR TRAY & TEXT INFO */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between py-2">
            
            <div className="flex flex-col gap-6">
              
              {/* Product Info Block */}
              <div>
                <p className="text-[#ea5d1a] text-sm font-bold uppercase tracking-widest mb-2">{selectedCol.name}</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                  {docSheet.headline}
                </h3>
                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8">
                  {docSheet.pdfCopy}
                </p>
              </div>

              {/* Collections Navigation Row */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-white/90 font-bold uppercase tracking-widest">Collezioni Disponibili</p>
                  {!hasScrolledCol && (
                    <p className="flex md:hidden items-center gap-1 text-[9px] text-white/40 font-bold uppercase tracking-widest animate-pulse"><MoveHorizontal size={12} /> Scorri</p>
                  )}
                </div>
                <div 
                  className="flex overflow-x-auto scrollbar-hide gap-2 pb-2 md:pb-0 md:flex-wrap"
                  onScroll={() => { if (!hasScrolledCol) setHasScrolledCol(true); }}
                >
                  {collections.map(col => (
                    <button
                      key={col.id}
                      onClick={() => {
                        setSelectedCol(col);
                        if (!col.availableFinishes.includes(selectedFinish.id)) {
                          setSelectedFinish(finishes.find(f => f.id === col.availableFinishes[0]));
                        }
                      }}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer shrink-0 ${
                        selectedCol.id === col.id 
                          ? 'bg-white text-black border-white shadow-md' 
                          : 'bg-transparent text-white/90 border-white/20 hover:border-white/50 hover:text-white'
                      }`}
                    >
                      {col.name.replace('Collezione ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wood & Color Moodboard Plates */}
              <div>
                <p className="text-xs text-white/90 font-bold uppercase tracking-widest mb-3">Scegli la Finitura</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableFinishes.map(finish => (
                    <div 
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`relative h-20 rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 flex items-end p-3 shadow-md ${
                        selectedFinish.id === finish.id 
                          ? 'border-[#ea5d1a] scale-[1.02] shadow-lg shadow-black/40' 
                          : 'border-white/10 opacity-70 hover:opacity-100 hover:scale-[1.01]'
                      }`}
                    >
                      <div className="absolute inset-0 bg-cover bg-center" style={{ background: finish.bgPattern || finish.color }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      <div className="relative z-10 flex items-center justify-between w-full">
                        <div>
                          <h4 className="text-white font-bold text-xs leading-tight drop-shadow-md">{finish.name}</h4>
                        </div>
                        {selectedFinish.id === finish.id && (
                          <div className="w-4 h-4 rounded-full bg-[#ea5d1a] flex items-center justify-center text-white shadow">
                            <Check size={8} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Sheet */}
              <div className="mt-6 border border-white/10 rounded-xl bg-white/5 p-5 md:p-6">
                <p className="text-xs text-white/90 font-bold uppercase tracking-wider mb-4">Specifiche di Riferimento Catalogo</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 text-sm font-light">
                  {docSheet.techSpecs.map((spec, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-2 gap-1">
                      <span className="text-white/70">{spec.label}</span>
                      <span className="font-semibold text-white sm:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Request Quote Button */}
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-center lg:justify-end">
              <button 
                onClick={onRequestQuote}
                className="bg-[#ea5d1a] hover:bg-[#d04d12] text-white py-4 px-10 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#ea5d1a]/20"
              >
                Richiedi Preventivo
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
