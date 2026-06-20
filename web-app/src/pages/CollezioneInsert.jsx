import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import OtherCollections from '../components/OtherCollections';

const BASE = import.meta.env.BASE_URL;

const variants = [
  {
    file: 'insert-Mod.%2010R%20Onda%20%20Alluminio%20-%20frassino%20bianco.jpg',
    label: 'Mod. 10R Onda Alluminio · Frassino Bianco',
    objPos: 'left center',
  },
  {
    file: 'insert-Mod.%201V%20Alluminio%20%20-%20penelope.jpg',
    label: 'Mod. 1V Alluminio · Penelope',
    objPos: 'left center',
  },
  {
    file: 'insert-Mod.%201v%20Onda%20Swarovsky%20-%20olmo%20grigio.jpg',
    label: 'Mod. 1V Onda Swarovski · Olmo Grigio',
    objPos: 'right center',
  },
  {
    file: 'insert-Mod.%202v%20Onda%20Swarovsky%20-%20rovere%20spazzolato%20B.jpg',
    label: 'Mod. 2V Onda Swarovski · Rovere Spazzolato B',
    objPos: 'left center',
  },
  {
    file: 'insert-Mod.%202v%20Onda%20Swarovsky%20-%20rovere%20spazzolato.jpg',
    label: 'Mod. 2V Onda Swarovski · Rovere Spazzolato',
    objPos: 'left center',
  },
  {
    file: 'insert-isert3-rovere-tranche.jpg',
    label: 'Mod. Insert 3 Alluminio · Rovere Tranché',
    objPos: 'right center',
  },
  {
    file: 'dettaglio%20inserto%20in%20alluminio.jpg',
    label: 'Dettaglio Inserto Alluminio',
    objPos: 'right top',
  },
  {
    file: 'dettaglio%20inserto%20swarovsky.jpg',
    label: 'Dettaglio Inserto Swarovski',
    objPos: 'center top',
  },
];

export default function CollezioneInsert() {
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
                INSERT
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
            Profili in alluminio inseriti con precisione millimetrica nell'anta, con opzioni Swarovski che creano giochi di luce unici. Disponibile in {variants.length} varianti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
                  style={{ objectPosition: v.objPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">Variante</p>
                  <h3 className="text-white font-display font-bold text-lg md:text-xl leading-tight">
                    {v.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <OtherCollections currentId="insert" />
        <ContactForm collection="INSERT" />
      </div>
    </div>
  );
}
