import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import OtherCollections from '../components/OtherCollections';
import ImageModal from '../components/ImageModal';
import { Maximize2 } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const variants = [
  // Filo Muro interni
  {
    file: 'filomuro/filomuro-verde.jpg',
    label: 'Rasomuro · Verde',
    objPos: 'center center',
    cat: 'Rasomuro',
  },
  {
    file: 'filomuro/filomuro-bianco-floreale.jpg',
    label: 'Rasomuro · Bianco',
    objPos: 'left center',
    cat: 'Rasomuro',
  },
  {
    file: 'filomuro/filomuro-bordo-doppia.jpg',
    label: 'Rasomuro · Bordò Doppia Anta',
    objPos: 'center center',
    cat: 'Rasomuro',
  },
  {
    file: 'filomuro/filomuro-blu-geometrico.jpg',
    label: 'Rasomuro · Blu Geometrico',
    objPos: 'left center',
    cat: 'Rasomuro',
  },
  {
    file: 'filomuro/filomuro-verde-salvia.jpg',
    label: 'Rasomuro · Verde Salvia',
    objPos: 'right center',
    cat: 'Rasomuro',
  }
];

export default function CollezioneRasomuro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="pt-48 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">

        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-3">Collezione</p>
              <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-[#1d1d1f] leading-none">
                RASOMURO
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
            Porte filo muro progettate per sparire nella parete con telai invisibili in alluminio, per un design puro ed essenziale senza interruzioni architettoniche.
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
                onClick={() => setModalData({ image: src, title: v.label, subtitle: v.cat })}
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
                
                {/* Zoom Icon */}
                <div className={`absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/90 transition-all duration-300 ${isHov ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <Maximize2 size={16} />
                </div>

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

        <OtherCollections currentId="rasomuro" />
        <ContactForm collection="RASOMURO" />
      </div>

      {modalData && (
        <ImageModal
          isOpen={!!modalData}
          onClose={() => setModalData(null)}
          imageSrc={modalData.image}
          title={modalData.title}
          subtitle={modalData.subtitle}
        />
      )}
    </div>
  );
}
