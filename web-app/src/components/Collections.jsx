import React, { useState } from 'react';
import { collections } from '../data';
import { ArrowRight, MoveHorizontal } from 'lucide-react';

export default function Collections({ onCustomize }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <section id="collezioni" className="pt-8 pb-12 lg:py-32 bg-transparent relative overflow-hidden">
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white mb-4">
            Le Collezioni
          </h2>
          <div className="w-16 h-[3px] bg-[#ea5d1a] mx-auto"></div>
          <p className="text-[#86868b] mt-6 text-lg tracking-widest uppercase mb-12 hidden lg:block">Seleziona un'etichetta</p>

          {/* Mobile Swipe Hint */}
          {!hasScrolled && (
            <div className="flex items-center justify-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mt-4 mb-8 lg:hidden animate-pulse">
              <MoveHorizontal size={14} /> Scorri per esplorare
            </div>
          )}

          {/* EXTERNAL LABELS (TABS) - Hidden on Mobile */}
          <div className="hidden lg:flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
            {collections.map((col, index) => {
              const isActive = activeIndex === index;
              return (
                <button 
                  key={`tab-${col.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-500 border backdrop-blur-md ${
                    isActive 
                      ? 'bg-[#ea5d1a] text-white border-[#ea5d1a] shadow-[0_0_30px_rgba(234,93,26,0.3)] scale-105' 
                      : 'bg-white/5 text-white/75 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {col.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div 
          className="flex flex-row w-full h-[450px] md:h-[600px] lg:h-[650px] gap-4 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory scrollbar-hide"
          onScroll={() => { if (!hasScrolled) setHasScrolled(true); }}
        >
          
          {collections.map((col, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={col.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group snap-center flex-shrink-0 ${
                  isActive ? 'w-[85vw] sm:w-[60vw] lg:w-[50%] shadow-2xl' : 'w-[85vw] sm:w-[60vw] lg:w-[12.5%]'
                }`}
              >
                
                {/* Background Image */}
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-100 lg:scale-110 opacity-70 lg:opacity-40 lg:grayscale-[50%]'}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80";
                  }}
                />

                {/* Vertical Overlay Gradient (Always active on mobile, conditional on desktop) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-[800ms] ${isActive ? 'opacity-90' : 'opacity-90 lg:opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isActive ? 'opacity-30' : 'opacity-30 lg:opacity-10'}`}></div>

                {/* Content Area (Always visible on mobile, conditionally visible on desktop) */}
                <div className={`absolute bottom-0 left-0 w-full flex flex-col justify-end p-5 md:p-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-20 lg:pointer-events-none'}`}>
                  
                  <div className="flex flex-col items-start w-full">
                    
                    {/* Title */}
                    <div className="relative flex items-center w-full mb-4">
                      <div className="h-[2px] bg-[#ea5d1a] mr-3 shrink-0 w-8"></div>
                      <h3 className="text-white font-display text-3xl md:text-5xl font-bold tracking-tighter drop-shadow-lg">
                        {col.name}
                      </h3>
                    </div>
                    
                    {/* Expanded Details */}
                    <div className="w-full max-w-[450px]">
                      <p className="text-[#ea5d1a] font-bold text-xs uppercase tracking-widest mb-3">
                        {col.tagline}
                      </p>
                      <p className="text-white/90 font-medium leading-relaxed text-sm mb-6 drop-shadow-md">
                        {col.description}
                      </p>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onCustomize(col);
                        }}
                        className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold hover:bg-[#ea5d1a] hover:border-[#ea5d1a] transition-all uppercase tracking-widest group/btn shadow-lg text-xs"
                      >
                        Configura Modello
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

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
