import React from 'react';
import { ArrowRight, Star, Calendar, MapPin } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll.js';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-32 lg:pb-64 overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/img/hero2.jpg" 
          alt="Luxury Bus Travel" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
            <Star size={14} className="text-orange-500 fill-orange-500" />
            <span className="text-orange-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Premium Bus Charter</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight animate-fade-in-up delay-100">
            Jelajahi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Keindahan</span> <br/>
            Indonesia.
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed animate-fade-in-up delay-200">
            Nikmati perjalanan wisata yang aman dan nyaman dengan armada terbaru dari Navara Trip. Fasilitas lengkap, pelayanan ramah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <button 
              onClick={() => scrollToSection('booking', 120)}
              className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20"
              aria-label="Booking bus pariwisata sekarang"
            >
              Booking Sekarang <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('fleet', 100)}
              className="bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              aria-label="Lihat armada bus pariwisata"
            >
              Lihat Armada
            </button>
          </div>

          {/* Stats */}
          <div className="pt-8 flex items-center gap-8 border-t border-white/10 animate-fade-in-up delay-500">
             <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">4+</h2>
                <p className="text-slate-400 text-xs md:text-sm">Unit Armada</p>
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">Ribuan</h2>
                <p className="text-slate-400 text-xs md:text-sm">Pelanggan Happy</p>
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">24/7</h2>
                <p className="text-slate-400 text-xs md:text-sm">Support</p>
             </div>
          </div>
        </div>

        {/* Floating Booking Card (Desktop Only) */}
        <div className="hidden lg:block animate-fade-in-left delay-700">
           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Rencanakan Perjalanan</h3>
              
              <div className="space-y-4 relative z-10">
                 <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                    <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">Tujuan</label>
                    <div className="flex items-center gap-3 text-white">
                       <MapPin size={20} className="text-orange-500" />
                       <span className="font-medium">Yogyakarta, Indonesia</span>
                    </div>
                 </div>

                 <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                    <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">Tanggal</label>
                    <div className="flex items-center gap-3 text-white">
                       <Calendar size={20} className="text-orange-500" />
                       <span className="font-medium">Pilih Tanggal</span>
                    </div>
                 </div>

                 <button 
                   onClick={() => scrollToSection('booking', 120)}
                   className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors mt-4"
                   aria-label="Cek ketersediaan bus pariwisata"
                 >
                    Cek Ketersediaan
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;