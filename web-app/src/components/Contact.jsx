import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="section-pad bg-[#f5f5f7]">
      <div className="max-w-[1400px] mx-auto">
        <div className="title-section">
          <h2 className="font-display">Contattaci</h2>
          <p className="text-xl text-[#86868b] font-medium mt-4">Siamo a disposizione per il tuo progetto d'interni.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Info */}
          <div className="p-8 md:p-12 h-full flex flex-col justify-center">
            <h3 className="text-4xl font-display font-bold mb-10 leading-tight">Trasforma il tuo spazio.<br/>Parla con un esperto.</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-[#1d1d1f]" />
                </div>
                <div>
                  <p className="text-sm text-[#86868b] font-bold uppercase tracking-widest mb-1">Telefono</p>
                  <p className="text-2xl font-medium text-[#1d1d1f]">+39 012 345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-[#1d1d1f]" />
                </div>
                <div>
                  <p className="text-sm text-[#86868b] font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-2xl font-medium text-[#1d1d1f]">info@quadra-porte.it</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin size={24} className="text-[#1d1d1f]" />
                </div>
                <div>
                  <p className="text-sm text-[#86868b] font-bold uppercase tracking-widest mb-1">Showroom</p>
                  <p className="text-2xl font-medium text-[#1d1d1f]">Via del Design, 42 - Milano</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bento-card p-12">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1d1d1f] mb-2 uppercase tracking-wide">Nome Completo</label>
                  <input type="text" className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#ea5d1a] transition-all font-medium" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d1d1f] mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#ea5d1a] transition-all font-medium" placeholder="mario@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#1d1d1f] mb-2 uppercase tracking-wide">Messaggio</label>
                <textarea rows="4" className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#ea5d1a] transition-all font-medium resize-none" placeholder="Descrivi il tuo progetto..."></textarea>
              </div>

              <button className="w-full bg-[#1d1d1f] text-white py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 mt-4 shadow-lg">
                Invia Richiesta <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
