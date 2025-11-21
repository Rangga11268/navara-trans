import React from 'react';
import { Briefcase, Instagram, BadgeCheck } from 'lucide-react';

const Promo = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-orange-500 font-bold mb-6 bg-orange-500/10 px-4 py-2 rounded-full text-sm">
                 <Briefcase size={18} /> Navara Corporate
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Solusi Perjalanan Bisnis & Wisata.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                 Dapatkan penawaran khusus untuk Corporate Gathering, Study Tour Sekolah, atau Ziarah Wali. 
                 Download Pricelist terbaru kami sekarang.
              </p>
              <div className="flex gap-4">
                 <button className="flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl transition-colors font-bold">
                    Download Pricelist (PDF)
                 </button>
                 <button className="flex items-center gap-3 bg-transparent border border-slate-700 text-white hover:bg-slate-800 px-6 py-3 rounded-xl transition-colors font-bold">
                    <Instagram /> @navara_trip
                 </button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                 <div>
                    <p className="text-3xl font-bold text-white">4+</p>
                    <p className="text-slate-500 text-xs">Unit Ready</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-white">1th</p>
                    <p className="text-slate-500 text-xs">Pengalaman</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-slate-500 text-xs">Support</p>
                 </div>
              </div>
           </div>

           {/* Visual Illustration */}
           <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-2xl -z-10"></div>
                  <img 
                    src="/assets/img/Reservasi.jpg" 
                    alt="Reservasi Navara Trans" 
                    className="w-full h-auto rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border border-white/10"
                  />
              </div>
           </div>
       </div>
    </section>
  );
};

export default Promo;