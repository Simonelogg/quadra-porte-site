import React, { useState } from 'react';

export default function ContactForm({ collection }) {
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="border-t border-[#e8e8ed] mt-24 pt-20 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#ea5d1a] text-xs font-bold uppercase tracking-widest mb-3">Contatti</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1d1d1f] mb-2 tracking-tight">
          Hai interesse per la collezione{' '}
          <span className="text-[#ea5d1a]">{collection}</span>?
        </h2>
        <p className="text-[#6e6e73] text-sm mb-10 leading-relaxed">
          Scrivici per un preventivo personalizzato o per maggiori informazioni. Ti risponderemo entro 24 ore.
        </p>

        {sent ? (
          <div className="bg-[#f5f5f7] rounded-2xl p-10 text-center">
            <div className="w-12 h-12 bg-[#ea5d1a] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">Messaggio inviato!</h3>
            <p className="text-[#6e6e73] text-sm">Ti ricontatteremo al più presto.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73]">Nome e Cognome</label>
                <input
                  name="nome" value={form.nome} onChange={handle} required
                  placeholder="Mario Rossi"
                  className="border border-[#d2d2d7] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#b0b0b8] focus:outline-none focus:border-[#ea5d1a] transition-colors bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73]">Telefono</label>
                <input
                  name="telefono" value={form.telefono} onChange={handle}
                  placeholder="+39 000 000 0000"
                  className="border border-[#d2d2d7] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#b0b0b8] focus:outline-none focus:border-[#ea5d1a] transition-colors bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73]">Email</label>
              <input
                name="email" value={form.email} onChange={handle} required type="email"
                placeholder="mario@esempio.it"
                className="border border-[#d2d2d7] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#b0b0b8] focus:outline-none focus:border-[#ea5d1a] transition-colors bg-white"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73]">Messaggio</label>
              <textarea
                name="messaggio" value={form.messaggio} onChange={handle} required rows={4}
                placeholder={`Sono interessato alla collezione ${collection}...`}
                className="border border-[#d2d2d7] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#b0b0b8] focus:outline-none focus:border-[#ea5d1a] transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start mt-2 bg-[#ea5d1a] hover:bg-[#c94e15] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#ea5d1a]/20"
            >
              Invia Richiesta
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
