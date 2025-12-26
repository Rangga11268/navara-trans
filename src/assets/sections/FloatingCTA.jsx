import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

const FloatingCTA = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Show bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
       
       {/* Chat Bubble */}
       <div className={`absolute -top-12 right-0 bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap transition-all duration-500 ${showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Halo! Butuh bantuan? 👋
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45"></div>
       </div>

       <a
         href="https://wa.me/6281113556799?text=Halo%20Navara%20Trip%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20sewa%20bus."
         target="_blank"
         rel="noopener noreferrer"
         className="bg-green-600 text-white w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full shadow-2xl font-bold flex items-center justify-center md:gap-3 hover:bg-green-700 transition-all ring-4 ring-white/20 backdrop-blur-sm animate-pulse hover:animate-none"
         aria-label="Chat WhatsApp"
       >
          <Smartphone size={24} className="md:w-5 md:h-5" /> 
          <span className="hidden md:inline">Chat WhatsApp Admin</span>
       </a>
    </div>
  );
};

export default FloatingCTA;