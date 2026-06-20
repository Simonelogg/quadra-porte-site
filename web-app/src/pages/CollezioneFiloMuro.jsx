import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import OtherCollections from '../components/OtherCollections';

const BASE = import.meta.env.BASE_URL;

const variants = [
  // Filo Muro interni
  {
    file: 'filomuro/filomuro-verde.jpg',
    label: 'Filo Muro · Verde',
    objPos: 'center center',
    cat: 'Filo Muro',
  },
  {
    file: 'filomuro/filomuro-bianco-floreale.jpg',
    label: 'Filo Muro · Bianco',
    objPos: 'left center',
    cat: 'Filo Muro',
  },
  {
    file: 'filomuro/filomuro-bordo-doppia.jpg',
    label: 'Filo Muro · Bordò Doppia Anta',
    objPos: 'center center',
    cat: 'Filo Muro',
  },
  {
    file: 'filomuro/filomuro-blu-geometrico.jpg',
    label: 'Filo Muro · Blu Geometrico',
    objPos: 'left center',
    cat: 'Filo Muro',
  },
  {
    file: 'filomuro/filomuro-verde-salvia.jpg',
    label: 'Filo Muro · Verde Salvia',
    objPos: 'right center',
    cat: 'Filo Muro',
  },
  // Blindate
  {
    file: 'filomuro/rock3-standard.jpg',
    label: 'Rock 3 · Standard',
    objPos: 'left center',
    cat: 'Blindata',
  },
  {
    file: 'filomuro/rock3-filomuro.jpg',
    label: 'Rock 3 · Filo Muro',
    objPos: 'left center',
    cat: 'Blindata',
  },
  {
    file: 'filomuro/rock3-arco.jpg',
    label: 'Rock 3 · Arco',
    objPos: 'center center',
    cat: 'Blindata',
  },
  {
    file: 'filomuro/rock3-luce.jpg',
    label: 'Rock 3 · Luce',
    objPos: 'center center',
    cat: 'Blindata',
  },
  {
    file: 'filomuro/rock3-2ante.jpg',
    label: 'Rock 3 · 2 Ante Asimmetriche',
    objPos: 'center center',
    cat: 'Blindata',
  },
];

export default function CollezioneFiloMuro() {
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
              <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-[#1d1d1f] leading-none">
                FILO MURO<br /><span className="text-[#6e6e73]">&amp; BLINDATE</span>
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
            Porte filo muro progettate per sparire nella parete con telai invisibili in alluminio, e porte blindate Rock 3 con classe antieffrazione RC3, abbattimento acustico fino a 38 dB e trasmittanza termica certificata.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {variants.map((v) => {
            const src = `${BASE}images/${v.file}`;
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
                  <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">{v.cat}</p>
                  <h3 className="text-white font-display font-bold text-base md:text-lg leading-tight">
                    {v.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <OtherCollections currentId="filomuro" />
        <ContactForm collection="FILO MURO & BLINDATE" />
      </div>
    </div>
  );
}
