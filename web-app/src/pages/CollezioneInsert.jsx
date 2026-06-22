import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import OtherCollections from '../components/OtherCollections';
import ImageModal from '../components/ImageModal';
import { Maximize2, Sparkles, GripVertical } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const alluminioVariants = [
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
    file: 'insert-isert3-rovere-tranche.jpg',
    label: 'Mod. Insert 3 Alluminio · Rovere Tranché',
    objPos: 'right center',
  },
  {
    file: 'dettaglio%20inserto%20in%20alluminio.jpg',
    label: 'Dettaglio Inserto Alluminio',
    objPos: 'right top',
  }
];

const swarovskiVariants = [
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
    file: 'dettaglio%20inserto%20swarovsky.jpg',
    label: 'Dettaglio Inserto Swarovski',
    objPos: 'center top',
  }
];

export default function CollezioneInsert() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="pt-48 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">

        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-4 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-3">Collezione</p>
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-[#1d1d1f]">
                  INSERT
                </h1>
              </div>
              <Link
                to="/#collezioni"
                className="text-[#999] hover:text-[#555] text-xs font-bold uppercase tracking-widest transition-colors shrink-0 mt-2 md:hidden"
              >
                Indietro
              </Link>
            </div>
            
            <div className="flex flex-col items-start md:items-end justify-between h-full md:min-h-[140px]">
              <Link
                to="/#collezioni"
                className="hidden md:block text-[#999] hover:text-[#555] text-xs font-bold uppercase tracking-widest transition-colors shrink-0 mt-2"
              >
                Indietro
              </Link>

              {/* Legend (Alluminio / Swarovski) */}
              <div className="flex flex-col items-start md:items-end gap-3 mt-2 md:mt-auto pb-2">
                <span className="text-[#6e6e73] font-bold text-[10px] tracking-widest uppercase">Disponibile in due varianti d'inserto:</span>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-3 bg-[#f5f5f7] px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#e5e5e5] shadow-sm">
                    <GripVertical className="text-[#ea5d1a] w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-bold text-[10px] md:text-xs tracking-widest text-[#1d1d1f] uppercase">Alluminio</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 bg-[#f5f5f7] px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#e5e5e5] shadow-sm">
                    <Sparkles className="text-[#ea5d1a] w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-bold text-[10px] md:text-xs tracking-widest text-[#1d1d1f] uppercase">Swarovski</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-16 h-[3px] bg-[#ea5d1a] mb-6" />
          <p className="text-[#6e6e73] text-sm max-w-xl leading-relaxed">
            Personalizzazione geometrica ed eleganza. La collezione Insert si distingue per i dettagli materici inseriti con precisione millimetrica nell'anta, creando un design contemporaneo e sofisticato.
          </p>
        </div>

        {/* SEZIONE ALLUMINIO */}
        <div className="mb-10">
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-[#1d1d1f] mb-6">
            <GripVertical className="text-[#ea5d1a]" size={32} />
            Modelli con Inserto in Alluminio
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mb-8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-20">
          {alluminioVariants.map((v) => {
            const src = `${BASE}images/collezioni/${v.file}`;
            const isHov = hovered === v.file;
            return (
              <div
                key={v.file}
                onMouseEnter={() => setHovered(v.file)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setModalData({ image: src, title: v.label, subtitle: v.label.includes('Dettaglio') ? "Dettaglio" : "Variante" })}
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
                  <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">{v.label.includes('Dettaglio') ? 'Zoom' : 'Variante'}</p>
                  <h3 className="text-white font-display font-bold text-lg md:text-xl leading-tight">
                    {v.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEZIONE SWAROVSKI */}
        <div className="mb-10">
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-[#1d1d1f] mb-6">
            <Sparkles className="text-[#ea5d1a]" size={32} />
            Modelli con Inserto Swarovski
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mb-8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-20">
          {swarovskiVariants.map((v) => {
            const src = `${BASE}images/collezioni/${v.file}`;
            const isHov = hovered === v.file;
            return (
              <div
                key={v.file}
                onMouseEnter={() => setHovered(v.file)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setModalData({ image: src, title: v.label, subtitle: v.label.includes('Dettaglio') ? "Dettaglio" : "Variante" })}
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
                  <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">{v.label.includes('Dettaglio') ? 'Zoom' : 'Variante'}</p>
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
