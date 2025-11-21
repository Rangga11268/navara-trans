import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

const FloatingCTA = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
       <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-3 hover:bg-green-700 transition-colors ring-4 ring-white/20 backdrop-blur-sm">
          <Smartphone size={18} /> Chat WhatsApp Admin
       </button>
    </div>
  );
};

export default FloatingCTA;