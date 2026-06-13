import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeChiSiamo() {
  return (
    <section id="chi-siamo-preview" className="py-12 md:py-32 bg-transparent relative overflow-hidden dark-section">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <p className="text-white/90 text-2xl md:text-4xl font-display font-light leading-snug tracking-tight">
          Uniamo maestria artigianale e altissima tecnologia per <span className="font-bold">ridefinire il tuo spazio.</span>
        </p>
        <Link 
          to="/chi-siamo" 
          className="inline-flex items-center gap-2 mt-8 text-[#ea5d1a] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors group"
        >
          Scopri Quadra Produzioni
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
