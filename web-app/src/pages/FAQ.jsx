import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { CheckCircle, AlertTriangle, Info, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    cat: 'Cerniere & Regolazioni',
    q: 'Come si regola la cerniera anuba a scomparsa?',
    a: 'La cerniera anuba è regolabile su 3 assi (verticale ±3mm, orizzontale ±2mm, profondità ±1.5mm) tramite le viti di regolazione laterali. Per la regolazione verticale, agire sulla vite superiore della cerniera con brugola da 4mm. Per quella orizzontale, allentare le viti di fissaggio e scorrere il corpo cerniera. Verificare sempre che il battente non strisci sul pavimento dopo la regolazione.',
  },
  {
    cat: 'Serrature & Chiusure',
    q: 'Con quale frequenza va lubrificata la serratura?',
    a: 'Si consiglia la lubrificazione della serratura con olio spray specifico (non WD-40) ogni 12 mesi o in presenza di resistenza al giro della chiave. Per le porte scorrevoli, verificare e lubrificare le rotaie con grasso al silicone ogni 6 mesi. Mai usare oli vegetali o grassi animali che attraggono polvere e corrodono i meccanismi.',
  },
  {
    cat: 'Pulizia & Superfici',
    q: 'Come si pulisce la finitura laccata lucida?',
    a: 'Le superfici laccate lucide vanno pulite con panno in microfibra morbida leggermente inumidito con acqua tiepida. Evitare assolutamente prodotti abrasivi, acidi o a base di solventi (acetone, alcool). Per macchie ostinate, usare detergente neutro ph7 diluito al 1%, applicare e rimuovere immediatamente senza lasciare asciugare. Le graffiature superficiali possono essere ridotte con lucido per carrozzeria a grana fine.',
  },
  {
    cat: 'Sistema Magic Scorrevole',
    q: 'Il sistema scorrevole Magic richiede manutenzione del binario?',
    a: 'Il binario del sistema Magic è integrato e non richiede lubrificazione ordinaria. È tuttavia consigliata una pulizia del canale di scorrimento ogni 6 mesi per rimuovere polvere e detriti. In caso di scorrimento irregolare, verificare che i rulli inferiori siano puliti e che il pannello non sia deformato. Per problemi strutturali, contattare sempre il rivenditore autorizzato Quadra.',
  },
  {
    cat: 'Rototraslante',
    q: 'Come si regola il sistema rototraslante?',
    a: 'Il sistema rototraslante utilizza un perno di traslazione che può richiedere regolazione dopo i primi 30 giorni di utilizzo (assestamento). Il perno è regolabile in altezza di ±5mm tramite il dado di bloccaggio superiore. In caso di strisciamento sul pavimento, la regolazione va eseguita da personale qualificato. Non forzare mai il meccanismo in presenza di resistenza anomala.',
  },
  {
    cat: 'Garanzia & Assistenza',
    q: 'Cosa copre la garanzia Quadra?',
    a: 'Tutti i prodotti Quadra S.r.l. sono coperti da garanzia legale di conformità di 24 mesi dalla data di acquisto. La garanzia copre difetti di materiale e fabbricazione, escludendo i danni da uso improprio o mancata manutenzione. Per richiedere assistenza tecnica in garanzia, contattare il rivenditore di zona con scontrino/fattura d\'acquisto.',
  },
  {
    cat: 'Pulizia & Superfici',
    q: 'Come si mantiene la finitura in rovere naturale?',
    a: 'Le finiture in rovere naturale vanno pulite con un panno asciutto o leggermente inumidito. Evitare il contatto prolungato con acqua stagnante. È consigliata la stesura di cera specifica per legno ogni 12 mesi per preservare il colore e la texture del legno. Evitare l\'esposizione diretta a fonti di calore intense (termosifoni a contatto, caminetti ravvicinati).',
  },
  {
    cat: 'Installazione',
    q: 'È possibile installare una porta Quadra su contropareti in cartongesso?',
    a: 'Sì, le porte Quadra sono progettate per l\'installazione su murature tradizionali e contropareti in cartongesso. Per il cartongesso è richiesta una struttura portante rinforzata (profilo UW da 75mm minimo) nel vano di posa. Il telaio va ancorato ai montanti verticali con viti da cartongesso da 70mm. Per i modelli scorrevoli, verificare la portata della trave di supporto prima dell\'installazione.',
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

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection="" />

      {/* ── HERO ── */}
      <div 
        className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/flat.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay molto opaco per far leggere il testo */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Effetto luce arancione sfocato per dare profondità */}
        <div className="absolute top-0 left-[-5%] w-[600px] h-[600px] bg-[#ea5d1a]/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Assistenza Tecnica</p>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none text-white mb-8">
            FAQ &amp;<br /><span className="text-[#ea5d1a]">Manutenzione.</span>
          </h1>
          <div className="w-20 h-[2px] bg-[#ea5d1a] mb-8" />
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
            Tutte le risposte alle domande più comuni, il piano di manutenzione programmata e le avvertenze tecniche per le tue porte Quadra.
          </p>
        </div>
      </div>

      {/* ── DARK BAND ── */}
      <div className="bg-[#0c0c0d] py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-sm font-light tracking-wide">
            Documentazione tecnica ufficiale Quadra S.r.l. — aggiornata al catalogo 2026.
          </p>
          <div className="flex items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Manutenzione &amp; Assistenza</span>
          </div>
        </div>
      </div>

      {/* ── PIANO DI MANUTENZIONE ── */}
      <div className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-2">Documentazione Tecnica</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1d1d1f]">Piano di Manutenzione Programmata</h2>
            <p className="text-[#444] text-base font-light mt-3 max-w-2xl">
              Le porte Quadra sono progettate per durare oltre 20 anni. Segui il piano di manutenzione per garantire prestazioni ottimali nel tempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {maintenanceSteps.map((s, i) => (
              <div key={i} className="bg-[#f5f5f7] rounded-2xl p-7 border border-[#e0e0e0]">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}80` }}
                  />
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: s.color }}>
                    {s.interval}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {s.tasks.map((t, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#333] font-light leading-relaxed">
                      <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: s.color }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
            <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-amber-700 mb-1">Attenzione all'Umidità</h4>
              <p className="text-amber-800/70 text-sm font-light leading-relaxed">
                Sebbene il telaio Quadra in HDF idrofugo garantisca elevata resistenza all'umidità, evitare l'esposizione prolungata ad ambienti con umidità relativa superiore all'80%. In caso di allagamenti o infiltrazioni, contattare immediatamente il rivenditore per una verifica strutturale prima di continuare l'utilizzo.
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-700 mb-1">Garanzia Prodotto — 24 mesi</h4>
              <p className="text-blue-800/70 text-sm font-light leading-relaxed">
                Tutti i prodotti Quadra S.r.l. sono coperti da garanzia legale di conformità di 24 mesi dalla data di acquisto. La garanzia copre difetti di materiale e fabbricazione, escludendo i danni da uso improprio o mancata manutenzione. Per assistenza: <strong>assistenza@quadraporte.it</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ACCORDION ── */}
      <div className="py-20 px-6 md:px-12 bg-[#f5f5f7]">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading centrato */}
          <div className="text-center mb-14">
            <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-wider mb-3">Domande Frequenti</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1d1d1f] mb-4">Hai domande?<br />Abbiamo le risposte.</h2>
            <div className="w-16 h-[2px] bg-[#ea5d1a] mx-auto mb-4" />
            <p className="text-[#555] text-base font-light max-w-xl mx-auto">Tutto quello che devi sapere sulla cura, la regolazione e l'utilizzo delle tue porte Quadra.</p>
          </div>

          {/* Accordion centrato nella pagina */}
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left cursor-pointer hover:bg-[#f5f5f7] transition-colors gap-4"
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#ea5d1a] block mb-1">{item.cat}</span>
                    <span className="text-base font-semibold text-[#1d1d1f] leading-snug">{item.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-[#ea5d1a] shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-[#e0e0e0] mb-4" />
                    <p className="text-[#333] text-sm font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-20 px-6 md:px-12 bg-white border-t border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1d1d1f] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Non hai trovato risposta?</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed max-w-lg">
                Il nostro team tecnico è disponibile per rispondere a qualsiasi domanda sulla tua porta Quadra. Scrivici o chiamaci.
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
          <p className="text-[#aaa] text-sm">L'arte di dividere ed unire spazi.</p>
          <div className="flex gap-6 text-sm font-bold text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-white/40 text-xs">&copy; 2026 Quadra S.r.l. • P.IVA 01981950858 • Contrada Gigara s.n.c., 93100 Caltanissetta (CL)</p>
        </div>
      </footer>
    </div>
  );
}
