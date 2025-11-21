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
                    <Instagram /> @navaratrans.sby
                 </button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                 <div>
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-slate-500 text-xs">Unit Ready</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-white">10th</p>
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
              <div className="relative w-[320px] h-[400px] bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-8 flex flex-col gap-4 rotate-3 hover:rotate-0 transition-all">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                     <div>
                        <p className="text-slate-400 text-xs">INVOICE</p>
                        <p className="text-white font-bold">#NVR-BOOK-001</p>
                     </div>
                     <BadgeCheck className="text-green-500" />
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Unit</span>
                        <span className="text-white font-bold">1x Big Bus SHD (50s)</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Tujuan</span>
                        <span className="text-white font-bold">Malang - Batu City Tour</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Durasi</span>
                        <span className="text-white font-bold">2 Hari 1 Malam</span>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-xl mt-4">
                        <div className="flex justify-between items-center">
                           <span className="text-slate-400 text-xs">Total Harga</span>
                           <span className="text-orange-500 font-bold text-xl">Rp 6.xxx.xxx</span>
                        </div>
                     </div>
                     <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold mt-2">Book Now</button>
                  </div>
              </div>
           </div>
       </div>
    </section>
  );
};

export default Promo;