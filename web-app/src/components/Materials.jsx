import React, { useState } from 'react';
import { finishes } from '../data';

export default function Materials() {
  const [hoveredFinish, setHoveredFinish] = useState(null);

  return (
    <section id="materiali" className="py-12 md:py-20 bg-[#0a0a0b] relative overflow-hidden">
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
              Palette <span className="text-[#ea5d1a]">Materica.</span>
            </h2>
          </div>
          
          <div className="text-center md:text-right max-w-sm">
            {hoveredFinish ? (
              <div className="animate-fade-in">
                <h4 className="text-[#ea5d1a] font-bold text-sm uppercase tracking-widest">{hoveredFinish.name}</h4>
                <p className="text-white/60 text-xs mt-1">{hoveredFinish.description}</p>
              </div>
            ) : (
              <p className="text-white/30 text-xs italic">
                Scegli e scopri le nostre finiture esclusive.
              </p>
            )}
          </div>
        </div>

        {/* ULTRA-COMPACT PALETTE ACCORDION */}
        <div className="flex w-full h-[120px] md:h-[180px] gap-1 md:gap-2 group/palette relative">
          
          {/* Overlay instruction that fades out on hover */}
          {!hoveredFinish && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <div className="bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold text-xs tracking-widest uppercase border border-white/10 shadow-lg flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ea5d1a]"></span>
                Interagisci con le finiture
              </div>
            </div>
          )}

          {finishes.map((finish, index) => {
            const isHovered = hoveredFinish?.id === finish.id;
            
            return (
              <div 
                key={finish.id}
                onMouseEnter={() => setHoveredFinish(finish)}
                onMouseLeave={() => setHoveredFinish(null)}
                className={`relative cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg ${
                  isHovered ? 'flex-[6] md:flex-[4] border border-white/20' : 'flex-[1] border border-transparent'
                }`}
                style={{ background: finish.bgPattern || finish.color }}
              >
                {/* Subtle depth and lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70"></div>

                {/* Content inside the expanded color slice */}
                <div className={`absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end transition-opacity duration-500 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap tracking-wider">
                      {finish.name}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
