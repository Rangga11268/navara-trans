import React from "react";
import { ArrowRight, Star, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utils/scroll.js";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-32 lg:pb-64 overflow-hidden bg-navy-900">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/img/hero2.jpg"
          alt="Luxury Bus Travel"
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
            <Star size={14} className="text-gold-500 fill-gold-500" />
            <span className="text-gold-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Premium Bus Charter
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-white leading-tight tracking-tight animate-fade-in-up delay-100">
            Jelajahi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Keindahan
            </span>{" "}
            <br />
            Indonesia.
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed animate-fade-in-up delay-200">
            Nikmati perjalanan wisata yang aman dan nyaman dengan armada terbaru
            dari Navara Trip. Fasilitas lengkap, pelayanan ramah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-gold-500 hover:to-gold-600 transition-all transform hover:scale-105 shadow-lg shadow-gold-900/20"
              aria-label="Booking bus pariwisata sekarang"
            >
              Booking Sekarang <ArrowRight size={20} />
            </Link>
            <Link
              to="/fleet"
              className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
              aria-label="Lihat armada bus pariwisata"
            >
              Lihat Armada
            </Link>
          </div>

          {/* Stats */}
          <div className="pt-8 flex items-center gap-8 border-t border-white/10 animate-fade-in-up delay-500">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-white">
                4+
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">Unit Armada</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-white">
                Ribuan
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Pelanggan Happy
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-white">
                24/7
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Floating Booking Card (Desktop Only) */}
        <div className="hidden lg:block animate-fade-in-left delay-700">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <h3 className="text-2xl font-serif font-bold text-white mb-6 relative z-10">
              Rencanakan Perjalanan
            </h3>

            <div className="space-y-4 relative z-10">
              <div className="bg-navy-800/50 p-4 rounded-2xl border border-white/5">
                <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">
                  Tujuan
                </label>
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={20} className="text-gold-500" />
                  <span className="font-medium">Yogyakarta, Indonesia</span>
                </div>
              </div>

              <div className="bg-navy-800/50 p-4 rounded-2xl border border-white/5">
                <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">
                  Tanggal
                </label>
                <div className="flex items-center gap-3 text-white">
                  <Calendar size={20} className="text-gold-500" />
                  <span className="font-medium">Pilih Tanggal</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-white text-navy-900 py-4 rounded-xl font-bold hover:bg-gold-50 transition-colors mt-4 flex items-center justify-center"
                aria-label="Cek ketersediaan bus pariwisata"
              >
                Cek Ketersediaan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
