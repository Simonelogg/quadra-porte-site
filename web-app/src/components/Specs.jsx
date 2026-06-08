import React from 'react';
import { Award, Sparkles, Shield } from 'lucide-react';

export default function Specs() {
  return (
    <section id="tecnologia" className="section-pad">
      <div className="max-w-[1400px] mx-auto">
        <div className="title-section">
          <h2 className="font-display">Ingegneria & Qualità</h2>
          <p className="text-xl text-[#86868b] font-medium mt-4">Soluzioni tecniche avanzate per prestazioni superiori.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="grid gap-6">
            <div className="bento-card p-10 flex flex-col md:flex-row items-start md:items-center gap-8 bento-hover">
              <div className="w-20 h-20 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] flex-shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-3">Telaio Idrorepellente</h3>
                <p className="text-[#86868b] leading-relaxed text-lg">Strato di 3mm di HDF idrofugo sull'intero perimetro. Eccezionale resistenza all'umidità e stabilità strutturale nel tempo.</p>
              </div>
            </div>

            <div className="bento-card p-10 flex flex-col md:flex-row items-start md:items-center gap-8 bento-hover">
              <div className="w-20 h-20 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] flex-shrink-0">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-3">Coprifili Folding</h3>
                <p className="text-[#86868b] leading-relaxed text-lg">Alette con piegatura a sistema folding. Precisione costruttiva millimetrica che evita micro-crepe nei punti critici.</p>
              </div>
            </div>

            <div className="bento-card p-10 flex flex-col md:flex-row items-start md:items-center gap-8 bento-hover">
              <div className="w-20 h-20 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] flex-shrink-0">
                <Shield size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-3">Sicurezza Certificata</h3>
                <p className="text-[#86868b] leading-relaxed text-lg">Certificazioni anti-intrusione RC3, isolamento acustico top di gamma e ottima trasmittanza termica.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="bento-card p-10 flex flex-col justify-center items-center text-center bg-[#1d1d1f] text-white">
              <span className="text-6xl font-display font-bold mb-4">RC 3</span>
              <span className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Antieffrazione</span>
            </div>
            <div className="bento-card p-10 flex flex-col justify-center items-center text-center">
              <span className="text-6xl font-display font-bold mb-4 text-[#1d1d1f]">38dB</span>
              <span className="text-sm text-[#86868b] font-bold uppercase tracking-widest">Isolamento</span>
            </div>
            <div className="bento-card p-10 flex flex-col justify-center items-center text-center">
              <span className="text-6xl font-display font-bold mb-4 text-[#1d1d1f]">1.97</span>
              <span className="text-sm text-[#86868b] font-bold uppercase tracking-widest">Trasmittanza</span>
            </div>
            <div className="bento-card p-10 flex flex-col justify-center items-center text-center bg-[#ea5d1a] text-white">
              <span className="text-6xl font-display font-bold mb-4">100%</span>
              <span className="text-sm text-white/80 font-bold uppercase tracking-widest">Made in Italy</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
