import React from 'react';
import { collections, finishes, openings } from '../data';
import { DoorOpen, RotateCw, MoveRight, TrendingUp, BookOpen, Check, Play, Pause } from 'lucide-react';

const iconMap = {
  DoorOpen: <DoorOpen size={20} />,
  RotateCw: <RotateCw size={20} />,
  MoveRight: <MoveRight size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  BookOpen: <BookOpen size={20} />
};

// Volumetric CSS 3D Door Panel Component
function DoorPanel({ 
  width, 
  height, 
  depth = 20, 
  selectedFinish, 
  hasHandle = false, 
  hasOblo = false, 
  hasFlushPull = false,
  hasKnob = false,
  hasHinges = false,
  hingesSide = 'left',
  hasShadow = false,
  isDoorOpen = false,
  children
}) {
  const halfDepth = depth / 2;

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, transformStyle: 'preserve-3d', position: 'relative' }}>
      
      {/* DYNAMIC SHADOW CAST ON THE FLOOR - optimized with radial gradient to avoid layout thrashing and repaints from blur filters */}
      {hasShadow && (
        <div 
          className="absolute bottom-0 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0)_70%)]"
          style={{ 
            transformOrigin: 'top', 
            transform: 'rotateX(-90deg) translateZ(0.1px)',
            opacity: isDoorOpen ? 0.6 : 0,
            transition: 'opacity 1.6s ease',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        ></div>
      )}

      {/* FRONT FACE */}
      <div 
        className="absolute inset-0 w-full h-full border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
        style={{
          background: selectedFinish.bgPattern || selectedFinish.color,
          transform: `translateZ(${halfDepth}px)`,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>
        {/* Oblò (Circular glass window) */}
        {hasOblo && (
          <div className="w-[70px] h-[70px] rounded-full border-2 border-neutral-700 bg-cyan-900/30 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] flex items-center justify-center">
            <div className="w-[66px] h-[66px] rounded-full border border-cyan-400/20 bg-gradient-to-tr from-transparent to-white/15"></div>
          </div>
        )}
      </div>

      {/* BACK FACE */}
      <div 
        className="absolute inset-0 w-full h-full shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center"
        style={{
          background: selectedFinish.bgPattern || selectedFinish.color,
          transform: `rotateY(180deg) translateZ(${halfDepth}px)`,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Oblò (Circular glass window) */}
        {hasOblo && (
          <div className="w-[70px] h-[70px] rounded-full border-2 border-neutral-800 bg-cyan-950/30 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]"></div>
        )}
      </div>

      {/* LEFT EDGE */}
      <div 
        className="absolute top-0 h-full border-y border-white/5"
        style={{
          width: `${depth}px`,
          left: `-${halfDepth}px`,
          transform: 'rotateY(-90deg)',
          background: selectedFinish.color,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        {/* Metal Hinges on Left Edge */}
        {hasHinges && hingesSide === 'left' && (
          <>
            <div className="absolute top-[15%] right-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-l-sm shadow-xl"></div>
            <div className="absolute top-[50%] right-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-l-sm shadow-xl"></div>
            <div className="absolute bottom-[15%] right-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-l-sm shadow-xl"></div>
          </>
        )}
      </div>

      {/* RIGHT EDGE */}
      <div 
        className="absolute top-0 h-full border-y border-white/5"
        style={{
          width: `${depth}px`,
          right: `-${halfDepth}px`,
          transform: 'rotateY(90deg)',
          background: selectedFinish.color,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/20"></div>
        {/* Metal Hinges on Right Edge */}
        {hasHinges && hingesSide === 'right' && (
          <>
            <div className="absolute top-[15%] left-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-r-sm shadow-xl"></div>
            <div className="absolute top-[50%] left-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-r-sm shadow-xl"></div>
            <div className="absolute bottom-[15%] left-0 w-[4px] h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-r-sm shadow-xl"></div>
          </>
        )}
      </div>

      {/* TOP EDGE */}
      <div 
        className="absolute left-0 w-full" 
        style={{ 
          height: `${depth}px`, 
          top: `-${halfDepth}px`, 
          transform: 'rotateX(90deg)', 
          background: selectedFinish.color,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* BOTTOM EDGE */}
      <div 
        className="absolute left-0 w-full" 
        style={{ 
          height: `${depth}px`, 
          bottom: `-${halfDepth}px`, 
          transform: 'rotateX(-90deg)', 
          background: selectedFinish.color,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* 3D LEVER HANDLE */}
      {hasHandle && (
        <div 
          className="absolute top-[50%] right-[30px] w-[8px] h-[55px] bg-neutral-800 rounded-sm"
          style={{ transform: `translateZ(${halfDepth + 0.2}px) translateY(-50%)`, transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-md"></div>
          {/* Handle Lever */}
          <div className="absolute top-2 left-0 h-[8px] bg-gradient-to-b from-gray-200 to-gray-400 shadow-xl rounded-l-full"
               style={{ width: '90px', transformOrigin: 'right', transform: 'translateZ(14px) translateX(-100%)' }}
          ></div>
          {/* Handle Stem */}
          <div className="absolute top-2 left-0 w-[14px] h-[8px] bg-gray-500"
               style={{ transformOrigin: 'right', transform: 'rotateY(-90deg) translateZ(8px) translateX(-100%)' }}
          ></div>
        </div>
      )}

      {/* FLUSH RECESSED PULL HANDLE (For sliding Magic door) */}
      {hasFlushPull && (
        <div 
          className="absolute top-[50%] right-[25px] w-[18px] h-[55px] rounded-md border border-neutral-800 bg-neutral-900 flex items-center justify-center shadow-md"
          style={{ transform: `translateZ(${halfDepth + 0.3}px) translateY(-50%)`, backfaceVisibility: 'hidden' }}
        >
          {/* Recessed Cup */}
          <div className="w-[8px] h-[40px] rounded bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,1)]"></div>
        </div>
      )}

      {/* BIFOLD KNOB (For Libro) */}
      {hasKnob && (
        <div 
          className="absolute top-[50%] right-[10px] w-[12px] h-[12px] rounded-full bg-gradient-to-tr from-neutral-600 to-neutral-400 shadow-lg"
          style={{ transform: `translateZ(${halfDepth + 0.3}px) translateY(-50%)`, transformStyle: 'preserve-3d' }}
        >
          {/* Knob Stem */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[10px] bg-neutral-700" style={{ transform: 'translateZ(-5px)' }}></div>
        </div>
      )}

      {children}
    </div>
  );
}

export default function Configurator({ 
  selectedCol, setSelectedCol, 
  selectedFinish, setSelectedFinish, 
  selectedOpening, setSelectedOpening,
  isDoorOpen, setIsDoorOpen,
  onRequestQuote
}) {
  
  const availableFinishes = finishes.filter(f => selectedCol.availableFinishes.includes(f.id));
  const availableOpenings = openings.filter(o => selectedCol.availableOpenings.includes(o.id));

  // Volumetric CSS 3D Mechanics with Z-Origin to prevent frame clipping
  // Door thickness is 40px (Z from -20px to +20px). Front face is at +20px.
  const getDoorMechanics = () => {
    if (selectedOpening.id === 'magic') {
      return {
        transform: isDoorOpen ? 'translateZ(32px) translateX(102%)' : 'translateZ(32px) translateX(0px)',
        origin: '50% 50% 0px'
      };
    }
    
    if (selectedOpening.id === 'rototraslante') {
      return {
        transform: isDoorOpen ? 'translateX(-35%) rotateY(-90deg)' : 'translateX(0px) rotateY(0deg)',
        origin: '35% 50% 10px'
      };
    }
    
    // Default (battente)
    return {
      transform: isDoorOpen ? 'rotateY(-90deg) translateZ(0px)' : 'rotateY(0deg) translateZ(0px)',
      origin: '0px 50% 10px'
    };
  };

  const mechanics = getDoorMechanics();

  return (
    <section id="configuratore" className="py-20 md:py-32 bg-[#111112] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#ea5d1a] opacity-5 blur-[150px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-[4rem] font-display font-bold tracking-tighter text-white mb-4">
            Studio <span className="text-[#ea5d1a]">Configurazione.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#ea5d1a] mb-6"></div>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-medium">
            Simulatore Volumetrico in Tempo Reale. Esplora le cinematiche d'apertura con vera fisica 3D.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: TRUE 3D STAGE */}
          <div className="w-full lg:w-[55%] relative min-h-[600px] lg:min-h-[850px] flex items-center justify-center bg-black/20 rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
            
            {/* Stage Floor and Lights */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="absolute bottom-0 w-[80%] h-[150px] bg-white/5 blur-[50px] rounded-[100%] transform perspective-[500px] rotateX(60deg)"></div>
              <div className="absolute top-[30%] w-[400px] h-[400px] bg-[#ea5d1a]/10 blur-[100px] rounded-full"></div>
            </div>

            {/* THE 3D SCENE CONTAINER */}
            <div 
              className="relative w-full max-w-[340px] h-[700px] perspective-[2000px] z-10"
              style={{ perspectiveOrigin: '70% 30%' }}
            >
              
              {/* THE WALL & FRAME */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: 'rotateX(3deg) rotateY(-25deg)', // Enhanced 3D angle
                  transition: 'transform 1s ease-out',
                  willChange: 'transform'
                }}
              >
                
                {/* Outer Wall (Backdrop) pushed slightly back to Z=19.8px to prevent z-fighting with frame/door */}
                <div className="absolute -inset-[800px] border-[800px] border-[#18181a] opacity-95 shadow-2xl" style={{ transform: 'translateZ(19.8px)' }}>
                   {/* Subtle wall texture */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                {/* THE DOOR FRAME (STIPITE) - creating an 80px deep hole backwards from Z=20px */}
                {/* Left Frame Wall */}
                <div className="absolute left-0 top-0 h-full bg-[#0a0a0b] shadow-[inset_-20px_0_40px_rgba(0,0,0,0.9)]" style={{ width: '80px', transformOrigin: 'left', transform: 'translateZ(20px) rotateY(-90deg)' }}></div>
                {/* Right Frame Wall */}
                <div className="absolute right-0 top-0 h-full bg-[#2a2a2c] shadow-[inset_20px_0_40px_rgba(0,0,0,0.9)]" style={{ width: '80px', transformOrigin: 'right', transform: 'translateZ(20px) rotateY(90deg)' }}></div>
                {/* Top Frame Wall */}
                <div className="absolute top-0 left-0 w-full bg-[#1a1a1c] shadow-[inset_0_-20px_40px_rgba(0,0,0,0.9)]" style={{ height: '80px', transformOrigin: 'top', transform: 'translateZ(20px) rotateX(90deg)' }}></div>
                {/* Floor track (Threshold) */}
                <div className="absolute bottom-0 left-0 w-full bg-[#050505]" style={{ height: '80px', transformOrigin: 'bottom', transform: 'translateZ(20px) rotateX(-90deg)' }}>
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10"></div>
                </div>

                {/* THE VOLUMETRIC DOOR ASSEMBLY */}
                {selectedOpening.id === 'saloon' ? (
                  <>
                    {/* LEFT LEAF */}
                    <div 
                      className="absolute cursor-pointer group"
                      style={{
                        left: '2px',
                        top: '3px',
                        transformOrigin: '0px 50% 10px',
                        transform: isDoorOpen ? 'rotateY(-90deg) translateZ(0px)' : 'rotateY(0deg) translateZ(0px)',
                        transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.2, 1)',
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                      onClick={() => setIsDoorOpen(!isDoorOpen)}
                    >
                      <DoorPanel 
                        width={166} 
                        height={694} 
                        selectedFinish={selectedFinish} 
                        hasOblo={true}
                        hasHinges={true}
                        hingesSide="left"
                        hasShadow={true}
                        isDoorOpen={isDoorOpen}
                      />
                    </div>
                    {/* RIGHT LEAF */}
                    <div 
                      className="absolute cursor-pointer group"
                      style={{
                        right: '2px',
                        top: '3px',
                        transformOrigin: '166px 50% 10px',
                        transform: isDoorOpen ? 'rotateY(90deg) translateZ(0px)' : 'rotateY(0deg) translateZ(0px)',
                        transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.2, 1)',
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                      onClick={() => setIsDoorOpen(!isDoorOpen)}
                    >
                      <DoorPanel 
                        width={166} 
                        height={694} 
                        selectedFinish={selectedFinish} 
                        hasOblo={true}
                        hasHinges={true}
                        hingesSide="right"
                        hasShadow={true}
                        isDoorOpen={isDoorOpen}
                      />
                    </div>
                  </>
                ) : selectedOpening.id === 'libro' ? (
                  /* BIFOLD DOOR */
                  <div 
                    className="absolute cursor-pointer group"
                    style={{
                      left: '2px',
                      top: '3px',
                      transformOrigin: '0px 50% 10px',
                      transform: isDoorOpen ? 'rotateY(-80deg) translateZ(0px)' : 'rotateY(0deg) translateZ(0px)',
                      transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.2, 1)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                    onClick={() => setIsDoorOpen(!isDoorOpen)}
                  >
                    <DoorPanel 
                      width={166} 
                      height={694} 
                      selectedFinish={selectedFinish}
                      hasHinges={true}
                      hingesSide="left"
                      hasShadow={true}
                      isDoorOpen={isDoorOpen}
                    >
                      {/* Nested Right Panel (Folds relative to Left Panel) */}
                      <div
                        className="absolute top-0"
                        style={{
                          left: '166px',
                          transformOrigin: '0px 50% 10px',
                          transform: isDoorOpen ? 'rotateY(150deg) translateZ(0px)' : 'rotateY(0deg) translateZ(0px)',
                          transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.2, 1)',
                          transformStyle: 'preserve-3d',
                          willChange: 'transform'
                        }}
                      >
                        <DoorPanel 
                          width={166} 
                          height={694} 
                          selectedFinish={selectedFinish}
                          hasKnob={true}
                          hasShadow={true}
                          isDoorOpen={isDoorOpen}
                        />
                      </div>
                    </DoorPanel>
                  </div>
                ) : (
                  /* SINGLE PANEL (Battente, Rototraslante, Magic) */
                  <div 
                    className="absolute cursor-pointer group"
                    style={{
                      left: '2px',
                      top: '3px',
                      transformOrigin: mechanics.origin,
                      transform: mechanics.transform,
                      transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.2, 1)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                    onClick={() => setIsDoorOpen(!isDoorOpen)}
                  >
                    <DoorPanel 
                      width={336} 
                      height={694} 
                      selectedFinish={selectedFinish} 
                      hasHandle={selectedOpening.id !== 'magic'}
                      hasFlushPull={selectedOpening.id === 'magic'}
                      hasHinges={selectedOpening.id === 'battente'}
                      hingesSide="left"
                      hasShadow={true}
                      isDoorOpen={isDoorOpen}
                    />
                  </div>
                )}
              </div>

              {/* Interaction Overlay */}
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-center w-full z-50">
                <button 
                  onClick={() => setIsDoorOpen(!isDoorOpen)}
                  className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full text-white font-bold text-xs uppercase tracking-widest hover:bg-[#ea5d1a] hover:border-[#ea5d1a] transition-all shadow-2xl"
                >
                  {isDoorOpen ? <Pause size={16} /> : <Play size={16} />}
                  {isDoorOpen ? 'Chiudi Porta' : 'Aziona Cinematica'}
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT: LUXURY CONTROL PANEL */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8">
            
            {/* Step 1: Collection */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[#ea5d1a] font-bold text-[10px] uppercase tracking-widest mb-2">Parametro 01</p>
                  <h3 className="text-white font-display text-2xl font-bold">Collezione Architettonica</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {collections.map(col => (
                  <button
                    key={col.id}
                    onClick={() => {
                      setSelectedCol(col);
                      if (!col.availableFinishes.includes(selectedFinish.id)) setSelectedFinish(finishes.find(f => f.id === col.availableFinishes[0]));
                      if (!col.availableOpenings.includes(selectedOpening.id)) setSelectedOpening(openings.find(o => o.id === col.availableOpenings[0]));
                    }}
                    className={`px-5 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all border ${
                      selectedCol.id === col.id 
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                        : 'bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {col.name.replace('Collezione ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Finishes */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[#ea5d1a] font-bold text-[10px] uppercase tracking-widest mb-2">Parametro 02</p>
                  <h3 className="text-white font-display text-2xl font-bold">Essenza Materica</h3>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold text-xs uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10">{selectedFinish.name}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {availableFinishes.map(finish => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                      selectedFinish.id === finish.id ? 'ring-2 ring-white ring-offset-4 ring-offset-[#111112] scale-110 shadow-xl' : 'hover:scale-105 border border-white/10 opacity-70 hover:opacity-100'
                    }`}
                    style={{ background: finish.bgPattern || finish.color }}
                    title={finish.name}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-white/10"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Openings */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[#ea5d1a] font-bold text-[10px] uppercase tracking-widest mb-2">Parametro 03</p>
                  <h3 className="text-white font-display text-2xl font-bold">Cinematica d'Apertura</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableOpenings.map(op => {
                  const isSelected = selectedOpening.id === op.id;
                  return (
                    <div 
                      key={op.id}
                      onClick={() => {
                        setSelectedOpening(op);
                        setIsDoorOpen(true);
                      }}
                      className={`cursor-pointer p-4 rounded-xl border transition-all duration-500 flex flex-col gap-3 group ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#ea5d1a]/20 to-black/50 border-[#ea5d1a]/50 shadow-[inset_0_0_20px_rgba(234,93,26,0.1)]' 
                          : 'bg-black/20 border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-[#ea5d1a] text-white shadow-[0_0_15px_rgba(234,93,26,0.4)]' : 'bg-white/5 text-white/40 group-hover:text-white/80'}`}>
                          {iconMap[op.icon]}
                        </div>
                        <h4 className={`font-bold text-sm tracking-wide ${isSelected ? 'text-white' : 'text-white/60'}`}>{op.name}</h4>
                      </div>
                      {isSelected && (
                        <div className="animate-fade-in pl-11">
                           <p className="text-white/50 text-[11px] leading-relaxed">{op.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Final Action */}
            <div className="mt-2">
              <button 
                onClick={onRequestQuote}
                className="w-full relative overflow-hidden group bg-white text-black py-6 rounded-[2rem] font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] text-sm uppercase tracking-widest"
              >
                <div className="absolute inset-0 bg-[#ea5d1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Richiedi Preventivo Configurazione
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
