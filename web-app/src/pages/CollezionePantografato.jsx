import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import FinishSection from '../components/FinishSection';
import ContactForm from '../components/ContactForm';
import OtherCollections from '../components/OtherCollections';

const BASE = import.meta.env.BASE_URL;

const variants = [
  {
    file: 'laccato%20pantografato%20classico%20mod121%20con%20decoro.jpg',
    label: 'Classico con Decoro',
    objPos: 'center center',
  },
  {
    file: 'laccato%20pantografato%20mod107.jpg',
    label: 'Avorio · Pannelli Curvi',
    objPos: 'left center',
  },
  {
    file: 'laccato%20pantografato%20mod124.jpg',
    label: 'Avorio Paglierino · Doppio Pannello',
    objPos: 'right center',
  },
  {
    file: 'laccato%20pantografato%20mod129.jpg',
    label: 'Bianco Opaco · Quattro Pannelli',
    objPos: 'left center',
  },
];

export default function CollezionePantografato() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="pt-48 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">

        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-3">Collezione</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-[#1d1d1f]">
                PANTOGRAFATO
              </h1>
            </div>
            <Link
              to="/#collezioni"
              className="text-[#999] hover:text-[#555] text-xs font-bold uppercase tracking-widest transition-colors shrink-0 mt-2"
            >
              Indietro
            </Link>
          </div>
          <div className="w-16 h-[3px] bg-[#ea5d1a] mb-6" />
          <p className="text-[#6e6e73] text-sm max-w-xl leading-relaxed">
            Incisioni tridimensionali effettuate con macchinari a controllo numerico (CNC). Disegni geometrici e curvilinei scolpiscono la porta dando carattere ad ogni ambiente. Disponibile in {variants.length} modelli.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {variants.map((v) => {
            const src = `${BASE}images/collezioni/${v.file}`;
            const isHov = hovered === v.file;
            return (
              <div
                key={v.file}
                onMouseEnter={() => setHovered(v.file)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={src}
                  alt={v.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHov ? 'scale-105' : 'scale-100'}`}
                  style={{ objectPosition: v.objPos || 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">Modello</p>
                  <h3 className="text-white font-display font-bold text-lg md:text-xl leading-tight">
                    {v.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <FinishSection ids={['avorio-opaco', 'bianco-opaco', 'penelope']} />
        <OtherCollections currentId="pantografato" />
        <ContactForm collection="PANTOGRAFATO" />
      </div>
    </div>
  );
}
