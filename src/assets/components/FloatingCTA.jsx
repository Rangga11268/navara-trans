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
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
       
       {/* Chat Bubble */}
       <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap transition-all duration-500 ${showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Halo! Butuh bantuan liburan? 👋
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
       </div>

       <a
         href="https://wa.me/6281113556799?text=Halo%20Navara%20Trans%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20sewa%20bus."
         target="_blank"
         rel="noopener noreferrer"
         className="bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-3 hover:bg-green-700 transition-colors ring-4 ring-white/20 backdrop-blur-sm animate-pulse hover:animate-none"
       >
          <Smartphone size={18} /> Chat WhatsApp Admin
       </a>
    </div>
  );
};

export default FloatingCTA;