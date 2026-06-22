import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, title, subtitle }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300">
      <div 
        className="absolute inset-0 cursor-zoom-out" 
        onClick={onClose}
      />
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-colors"
      >
        <X size={24} />
      </button>
      
      <div className="relative z-[105] max-w-[90vw] max-h-[90vh] flex flex-col items-center pointer-events-none">
        <img 
          src={imageSrc} 
          alt={title || "Ingrandimento"} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
        />
        {title && (
          <div className="mt-4 text-center pointer-events-auto">
            <h3 className="text-white font-display text-2xl font-bold tracking-wider">{title}</h3>
            {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
