import React, { useState } from 'react';
import { finishes } from '../data';

export default function FinishSection({ ids }) {
  const [hovered, setHovered] = useState(null);
  const tiles = ids.map(id => finishes.find(f => f.id === id)).filter(Boolean);

  return (
    <div className="border-t border-[#e8e8ed] mt-16 pt-14">
      <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-2">Finiture</p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1d1d1f] mb-8 tracking-tight">
        Altre finiture disponibili
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {tiles.map(f => (
          <div
            key={f.id}
            onMouseEnter={() => setHovered(f.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-xl overflow-hidden cursor-default border border-[#d2d2d7]"
            style={{ aspectRatio: '1 / 1' }}
          >
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                backgroundImage: `url(${f.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: f.color,
                transform: hovered === f.id ? 'scale(1.06)' : 'scale(1)',
              }}
            />
            <div className={`absolute inset-0 bg-black/0 transition-all duration-300 ${hovered === f.id ? 'bg-black/40' : ''}`} />
            <div className={`absolute inset-0 flex items-end p-2 transition-opacity duration-300 ${hovered === f.id ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-white text-[10px] font-bold leading-tight">{f.name}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#b0b0b8] text-[11px] mt-4">Passa il cursore su ogni tile per vedere il nome della finitura.</p>
    </div>
  );
}
