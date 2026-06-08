import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Absolute Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
          alt="Quadra Porte Hero" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        {/* Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfbfd]/20 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center flex flex-col items-center anim-fade-up px-4 pt-10">
        
        <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-display font-bold tracking-tighter leading-[0.95] mb-8 text-white drop-shadow-xl">
          L'Arte di Dividere <br /> ed <span className="text-[#ea5d1a]">Unire Spazi.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md">
          Strutture d'avanguardia, complanarità assoluta e design d'autore per interni esclusivi.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#configuratore" className="bg-[#ea5d1a] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1d1d1f] transition-all shadow-lg">
            Configura la tua Porta
          </a>
          <a href="#collezioni" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all shadow-sm border border-white/20">
            Esplora Collezioni
          </a>
        </div>
      </div>
    </section>
  );
}
