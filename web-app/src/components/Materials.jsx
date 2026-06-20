import React, { useState } from 'react';
import { finishes } from '../data';

const row1 = finishes.slice(0, 9);
const centerTile = finishes[9];
const row2 = finishes.slice(10);

function Tile({ finish, hoveredFinish, setHoveredFinish, className = '', style = {} }) {
  const isHovered = hoveredFinish?.id === finish.id;
  return (
    <div
      onMouseEnter={() => setHoveredFinish(finish)}
      onMouseLeave={() => setHoveredFinish(null)}
      className={`relative cursor-pointer rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
        isHovered ? 'scale-105 border border-white/30 shadow-[0_0_20px_rgba(234,93,26,0.25)]' : 'border border-transparent'
      } ${className}`}
      style={{
        backgroundImage: `url(${finish.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: finish.color,
        ...style
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 p-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white font-bold text-[9px] md:text-[10px] leading-tight tracking-wide block truncate">
          {finish.name}
        </span>
      </div>
    </div>
  );
}

export default function Materials() {
  const [hoveredFinish, setHoveredFinish] = useState(null);

  return (
    <section id="materiali" className="py-12 md:py-32 bg-transparent text-white relative overflow-hidden dark-section">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
              Palette <span className="text-[#ea5d1a]">Materica.</span>
            </h2>
          </div>
          <div className="text-center md:text-right max-w-sm min-h-[48px] flex flex-col justify-center">
            {hoveredFinish ? (
              <div className="animate-fade-in">
                <h4 className="text-[#ea5d1a] font-bold text-sm uppercase tracking-widest">{hoveredFinish.name}</h4>
                <p className="text-white/60 text-xs mt-1">{hoveredFinish.description}</p>
              </div>
            ) : (
              <p className="text-white/30 text-xs italic">Passa sopra una finitura per scoprirla.</p>
            )}
          </div>
        </div>

        {/* Mobile: flex-wrap centrato, 3 per riga, ultimo tile centrato */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2">
          {finishes.map((finish) => (
            <div key={finish.id} style={{ width: 'calc(33.333% - 6px)' }}>
              <Tile finish={finish} hoveredFinish={hoveredFinish} setHoveredFinish={setHoveredFinish}
                style={{ aspectRatio: '1 / 1.3', width: '100%' }} />
            </div>
          ))}
        </div>

        {/* Desktop: 9 + 1 centrato + 9 */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-9 gap-2 mb-2">
            {row1.map((finish) => (
              <Tile key={finish.id} finish={finish} hoveredFinish={hoveredFinish} setHoveredFinish={setHoveredFinish}
                style={{ aspectRatio: '1 / 1.4' }} />
            ))}
          </div>
          <div className="flex justify-center mb-2">
            <Tile
              finish={centerTile}
              hoveredFinish={hoveredFinish}
              setHoveredFinish={setHoveredFinish}
              style={{ aspectRatio: '1 / 1.4', width: 'calc(11.11% - 4px)' }}
            />
          </div>
          <div className="grid grid-cols-9 gap-2">
            {row2.map((finish) => (
              <Tile key={finish.id} finish={finish} hoveredFinish={hoveredFinish} setHoveredFinish={setHoveredFinish}
                style={{ aspectRatio: '1 / 1.4' }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
