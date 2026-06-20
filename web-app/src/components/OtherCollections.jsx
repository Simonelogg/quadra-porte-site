import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../data';

export default function OtherCollections({ currentId }) {
  const others = collections.filter(c => c.id !== currentId && c.route);

  return (
    <div className="border-t border-[#e8e8ed] mt-16 pt-14">
      <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-2">Scopri</p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1d1d1f] mb-8 tracking-tight">
        Esplora le altre collezioni
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {others.map(c => (
          <Link
            key={c.id}
            to={c.route}
            className="relative overflow-hidden rounded-2xl group block"
            style={{ aspectRatio: '3 / 4' }}
          >
            <img
              src={c.image}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-display font-bold text-base md:text-lg leading-tight">
                {c.name.replace('Collezione ', '')}
              </h3>
              <p className="text-white/60 text-[10px] mt-1 font-medium uppercase tracking-widest group-hover:text-[#ea5d1a] transition-colors">
                Scopri →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
