import React from 'react';
import { MessageSquareText, Ruler, Truck, ShieldCheck } from 'lucide-react';

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
        {/* Base dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Smooth Fusion Gradient: Fades the image seamlessly into the pure black 3D space below */}
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-10" />
        
        {/* Top shadow for header contrast */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center flex flex-col items-center anim-fade-up px-4 pt-10">
        
        <h1 className="text-[2.75rem] leading-[1] sm:text-6xl md:text-[6rem] lg:text-[8rem] font-display font-bold tracking-tighter md:leading-[0.95] mb-6 md:mb-8 text-white drop-shadow-xl">
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

      {/* ── ADVANCED TECH SERVICES HUD (Bottom Right) ── */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col gap-4">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-[#ea5d1a]/20 blur-[60px] pointer-events-none rounded-full" />
        
        <div className="relative bg-[#0c0c0d]/60 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ea5d1a] animate-pulse" />
            <p className="text-[#ea5d1a] text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">Quadra Service</p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#ea5d1a] group-hover:text-white group-hover:border-[#ea5d1a] group-hover:scale-110 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)]">
              <MessageSquareText size={18} />
            </div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Consulenza</span>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#ea5d1a] group-hover:text-white group-hover:border-[#ea5d1a] group-hover:scale-110 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)]">
              <Ruler size={18} />
            </div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Progettazione</span>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#ea5d1a] group-hover:text-white group-hover:border-[#ea5d1a] group-hover:scale-110 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)]">
              <Truck size={18} />
            </div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Trasporto e Consegna</span>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#ea5d1a] group-hover:text-white group-hover:border-[#ea5d1a] group-hover:scale-110 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)]">
              <ShieldCheck size={18} />
            </div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Garanzia e Post Vendita</span>
          </div>
        </div>
      </div>
    </section>
  );
}
