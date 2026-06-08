import React, { useState } from 'react';
import { collections } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Collections({ onCustomize }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="collezioni" className="py-20 md:py-32 bg-[#111112] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white mb-4">
            Le Collezioni
          </h2>
          <div className="w-16 h-[3px] bg-[#ea5d1a] mx-auto"></div>
          <p className="text-[#86868b] mt-6 text-lg tracking-widest uppercase mb-12">Seleziona un'etichetta</p>

          {/* EXTERNAL LABELS (TABS) */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
            {collections.map((col, index) => {
              const isActive = activeIndex === index;
              return (
                <button 
                  key={`tab-${col.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-500 border backdrop-blur-md ${
                    isActive 
                      ? 'bg-[#ea5d1a] text-white border-[#ea5d1a] shadow-[0_0_30px_rgba(234,93,26,0.3)] scale-105' 
                      : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {col.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] md:h-[600px] lg:h-[650px] gap-2 md:gap-4 overflow-hidden">
          
          {collections.map((col, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={col.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                  isActive ? 'w-full lg:w-[50%] shadow-2xl' : 'w-full lg:w-[12.5%]'
                }`}
              >
                
                {/* Background Image */}
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110 opacity-40 grayscale-[50%]'}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80";
                  }}
                />

                {/* Vertical Overlay Gradient (Only active when expanded) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-[800ms] ${isActive ? 'opacity-90' : 'opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isActive ? 'opacity-30' : 'opacity-10'}`}></div>

                {/* Content Area (Only visible when Active) */}
                <div className={`absolute bottom-0 left-0 w-full flex flex-col justify-end p-4 md:p-8 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
                  
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
                      <p className="text-white/90 font-medium leading-relaxed text-xs md:text-sm mb-6 hidden md:block drop-shadow-md">
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
