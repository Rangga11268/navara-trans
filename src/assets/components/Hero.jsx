import React from 'react';
import { MapPin, Instagram, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-[100vh] md:min-h-[850px] flex items-center overflow-hidden bg-slate-950 pt-20 md:pt-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
          alt="Navara Tourism Bus" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 flex flex-col gap-6 animate-in slide-in-from-bottom-10 duration-1000">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                #1 Sewa Bus Surabaya
              </div>
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300 text-xs font-bold backdrop-blur-md flex items-center gap-1">
                <MapPin size={10} className="text-red-500 fill-red-500" /> Start from Surabaya & Sidoarjo
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
              Liburan Seru <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Tanpa Ribet.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl border-l-4 border-orange-600 pl-6">
              Solusi transportasi wisata premium untuk rombongan Anda. 
              Unit terbaru, kru ramah, dan siap mengantar ke seluruh destinasi Jawa-Bali dari Surabaya.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-1 flex items-center gap-3 group">
                <Instagram size={20} /> Cek Galeri Trip
              </button>
              <button className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3">
                 <PlayCircle size={20} className="text-orange-500 group-hover:scale-110 transition-transform" /> Video Unit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 animate-bounce">
         <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
         <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;