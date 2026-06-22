import React, { useState } from 'react';
import { finishes } from '../data';
import ImageModal from './ImageModal';
import { Maximize2 } from 'lucide-react';

const row1 = finishes.slice(0, 9);
const row2 = finishes.slice(9, 18);
const lastTile = finishes[18];

function Tile({ finish, active, onToggle, onEnlarge, style = {} }) {
  const isActive = active?.id === finish.id;
  return (
    <div
      onClick={() => onEnlarge(finish)}
      onMouseEnter={() => onToggle(finish)}
      onMouseLeave={() => onToggle(null)}
      className={`relative cursor-pointer rounded-xl overflow-hidden shadow-md transition-all duration-300 select-none ${
        isActive
          ? 'scale-[1.04] border border-white/30 shadow-[0_0_20px_rgba(234,93,26,0.3)] z-10'
          : 'border border-transparent'
      }`}
      style={{
        backgroundImage: `url(${finish.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: finish.color,
        ...style,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Zoom Icon */}
      <div className={`absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1 rounded-full text-white/90 transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <Maximize2 size={12} />
      </div>

      <div className={`absolute bottom-0 left-0 right-0 px-1.5 py-1.5 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white font-bold text-[8px] sm:text-[9px] md:text-[10px] leading-tight tracking-wide block truncate">
          {finish.name}
        </span>
      </div>
    </div>
  );
}

export default function Materials() {
  const [active, setActive] = useState(null);
  const [modalData, setModalData] = useState(null);

  const toggle = (finish) => setActive(finish);
  const enlarge = (finish) => setModalData({ image: finish.image, title: finish.name, subtitle: finish.description });

  return (
    <section id="materiali" className="py-10 md:py-32 bg-transparent text-white relative overflow-hidden dark-section">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-10 gap-3">
          <div>
            <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-widest mb-1">Finiture</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
              Palette <span className="text-[#ea5d1a]">Materica.</span>
            </h2>
          </div>
          <div className="min-h-[36px] flex flex-col justify-center sm:text-right">
            {active ? (
              <div>
                <h4 className="text-[#ea5d1a] font-bold text-xs uppercase tracking-widest">{active.name}</h4>
                <p className="text-white/60 text-xs mt-0.5">{active.description}</p>
              </div>
            ) : (
              <p className="text-white/30 text-[11px] italic">
                {('ontouchstart' in window) ? 'Tocca una finitura per scoprirla.' : 'Passa sopra una finitura per scoprirla.'}
              </p>
            )}
          </div>
        </div>

        <div className="sm:hidden">
          <div className="grid grid-cols-3 gap-1.5">
            {finishes.slice(0, -1).map((finish) => (
              <Tile
                key={finish.id}
                finish={finish}
                active={active}
                onToggle={toggle}
                onEnlarge={enlarge}
                style={{ aspectRatio: '1 / 1.3' }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-1.5">
            <Tile
              finish={lastTile}
              active={active}
              onToggle={toggle}
              onEnlarge={enlarge}
              style={{ aspectRatio: '1 / 1.3', width: 'calc(33.333% - 5px)' }}
            />
          </div>
        </div>

        {/* Desktop: 9 + 9 + 1 centrato */}
        <div className="hidden sm:block space-y-2">
          <div className="grid grid-cols-9 gap-2">
            {row1.map((finish) => (
              <Tile
                key={finish.id}
                finish={finish}
                active={active}
                onToggle={toggle}
                onEnlarge={enlarge}
                style={{ aspectRatio: '1 / 1.4' }}
              />
            ))}
          </div>
          <div className="grid grid-cols-9 gap-2">
            {row2.map((finish) => (
              <Tile
                key={finish.id}
                finish={finish}
                active={active}
                onToggle={toggle}
                onEnlarge={enlarge}
                style={{ aspectRatio: '1 / 1.4' }}
              />
            ))}
          </div>
          {/* Ultimo centrato sotto entrambe le righe */}
          <div className="flex justify-center">
            <Tile
              finish={lastTile}
              active={active}
              onToggle={toggle}
              onEnlarge={enlarge}
              style={{ aspectRatio: '1 / 1.4', width: 'calc(11.11% - 4px)' }}
            />
          </div>
        </div>

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
    </section>
  );
}
