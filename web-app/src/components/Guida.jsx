import React, { useState } from 'react';
import { Wrench, CheckCircle, AlertTriangle, Info, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: 'Come si regola la cerniera anuba a scomparsa?',
    a: 'La cerniera anuba è regolabile su 3 assi (verticale ±3mm, orizzontale ±2mm, profondità ±1.5mm) tramite le viti di regolazione laterali. Per la regolazione verticale, agire sulla vite superiore della cerniera con brugola da 4mm. Per quella orizzontale, allentare le viti di fissaggio e scorrere il corpo cerniera. Verificare sempre che il battente non strisci sul pavimento dopo la regolazione.',
  },
  {
    q: 'Con quale frequenza va lubrificata la serratura?',
    a: 'Si consiglia la lubrificazione della serratura con olio spray specifico (non WD-40) ogni 12 mesi o in presenza di resistenza al giro della chiave. Per le porte scorrevoli, verificare e lubrificare le rotaie con grasso al silicone ogni 6 mesi. Mai usare oli vegetali o grassi animali che attraggono polvere e corrodono i meccanismi.',
  },
  {
    q: 'Come si pulisce la finitura laccata lucida?',
    a: 'Le superfici laccate lucide vanno pulite con panno in microfibra morbida leggermente inumidito con acqua tiepida. Evitare assolutamente prodotti abrasivi, acidi o a base di solventi (acetone, alcool). Per macchie ostinate, usare detergente neutro ph7 diluito al 1%, applicare e rimuovere immediatamente senza lasciare asciugare. Le graffiature superficiali possono essere ridotte con lucido per carrozzeria a grana fine.',
  },
  {
    q: 'Il sistema scorrevole Magic richiede manutenzione del binario?',
    a: 'Il binario del sistema Magic è integrato e non richiede lubrificazione ordinaria. È tuttavia consigliata una pulizia del canale di scorrimento ogni 6 mesi per rimuovere polvere e detriti. In caso di scorrimento irregolare, verificare che i rulli inferiori siano puliti e che il pannello non sia deformato. Per problemi strutturali, contattare sempre il rivenditore autorizzato Quadra.',
  },
  {
    q: 'Come si regola il sistema rototraslante?',
    a: 'Il sistema rototraslante utilizza un perno di traslazione che può richiedere regolazione dopo i primi 30 giorni di utilizzo (assestamento). Il perno è regolabile in altezza di ±5mm tramite il dado di bloccaggio superiore. In caso di strisciamento sul pavimento, la regolazione va eseguita da personale qualificato. Non forzare mai il meccanismo in presenza di resistenza anomala.',
  },
];

const maintenanceSteps = [
  {
    interval: 'Mensile',
    color: '#10b981',
    tasks: [
      'Ispezionare visivamente guarnizioni perimetrali',
      'Verificare il corretto funzionamento del sistema di chiusura',
      'Pulire superfici con panno in microfibra',
    ],
  },
  {
    interval: 'Semestrale',
    color: '#f59e0b',
    tasks: [
      'Lubrificare rotaie scorrevoli con grasso al silicone',
      'Verificare il serraggio delle viti cerniera',
      'Pulire il canale binario dei sistemi scorrevoli',
      'Controllare la tenuta delle guarnizioni',
    ],
  },
  {
    interval: 'Annuale',
    color: '#ea5d1a',
    tasks: [
      'Lubrificazione serratura con olio spray dedicato',
      'Regolazione fine delle cerniere su 3 assi',
      'Verifica strutturale pannello e telaio',
      'Sostituzione guarnizioni se deteriorate',
      'Controllo generale da tecnico autorizzato',
    ],
  },
];

export default function Guida() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="guida" className="py-24 md:py-32 bg-[#0c0c0d] text-white relative overflow-hidden">
      
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#ea5d1a]/5 blur-[100px] pointer-events-none rounded-full z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">Documentazione Tecnica</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-6">
            Manutenzione<br /><span className="text-[#ea5d1a]">&amp; Cura.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mb-6" />
          <p className="text-white/50 text-base font-light leading-relaxed max-w-2xl">
            Le porte Quadra sono progettate per durare nel tempo. Seguire le indicazioni tecniche di manutenzione garantisce prestazioni ottimali per oltre 20 anni di utilizzo continuativo.
          </p>
        </div>

        {/* Maintenance schedule */}
        <div className="mb-20">
          <h3 className="text-xl font-display font-bold mb-8">Piano di Manutenzione Programmata</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {maintenanceSteps.map((s, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: s.color }}>
                    {s.interval}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {s.tasks.map((t, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/60 font-light leading-relaxed">
                      <CheckCircle size={13} className="text-white/30 shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Warning box */}
        <div className="flex items-start gap-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-20">
          <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-400 mb-1">Attenzione all'Umidità</h4>
            <p className="text-white/50 text-xs font-light leading-relaxed">
              Sebbene il telaio Quadra in HDF idrofugo garantisca elevata resistenza all'umidità, evitare l'esposizione prolungata ad ambienti con umidità relativa superiore all'80%. In caso di allagamenti o infiltrazioni, contattare immediatamente il rivenditore per una verifica strutturale prima di continuare l'utilizzo.
            </p>
          </div>
        </div>

        {/* Info box */}
        <div className="flex items-start gap-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-20">
          <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-blue-400 mb-1">Garanzia Prodotto</h4>
            <p className="text-white/50 text-xs font-light leading-relaxed">
              Tutti i prodotti Quadra S.r.l. sono coperti da garanzia legale di conformità di 24 mesi dalla data di acquisto. La garanzia copre difetti di materiale e fabbricazione, escludendo i danni da uso improprio o mancata manutenzione secondo le istruzioni fornite. Per assistenza: assistenza@quadraporte.it
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          <h3 className="text-xl font-display font-bold mb-8">Domande Tecniche Frequenti</h3>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/3 transition-colors"
                >
                  <span className="text-sm font-semibold text-white pr-4">{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#ea5d1a] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <div className="h-[1px] bg-white/5 mb-4" />
                    <p className="text-white/50 text-xs font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
