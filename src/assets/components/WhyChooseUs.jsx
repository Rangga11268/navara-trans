import React from 'react';
import { Calendar, Star, Shield, Wallet, Clock, Award, Bus, UserCheck, Music } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-6 tracking-tight">
            Lebih Dari Sekadar <span className="text-orange-600">Perjalanan</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Standar baru pariwisata dengan armada terbaru dan pelayanan kelas atas.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">
          
          {/* 1. Main Highlight - Armada 2025 (Large: 2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl hover:shadow-orange-900/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-orange-400 mb-6">
                <Bus size={32} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
                  New Arrival
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Armada Terbaru <br/>
                  <span className="text-orange-500">Tahun 2025</span>
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Nikmati pengalaman berkendara dengan unit-unit terbaru yang menjamin keamanan, kenyamanan, dan teknologi terkini.
                </p>
              </div>
            </div>
            {/* Decorative Number */}
            <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-white/5 leading-none select-none">
              25
            </div>
          </div>

          {/* 2. Fasilitas Sultan (Tall: 1x2) */}
          <div className="md:col-span-1 md:row-span-2 bg-orange-50 rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-orange-100 transition-colors duration-500 border border-orange-100">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 group-hover:bg-white flex items-center justify-center text-orange-600 mb-6 transition-colors">
                <Star size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fasilitas Sultan</h3>
              <ul className="space-y-4 text-slate-600 flex-1">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                    <Music size={14} />
                  </div>
                  <span className="text-sm font-medium">Karaoke & TV LED</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Coolbox & Dispenser</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Bantal & Selimut</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Reclining Seat</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Driver (Wide: 1x1) */}
          <div className="md:col-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
              <UserCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Driver Pro</h3>
            <p className="text-slate-500 text-sm">Berpengalaman, ramah, dan mengutamakan keselamatan.</p>
          </div>

          {/* 4. Harga (Wide: 1x1) */}
          <div className="md:col-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-4">
              <Wallet size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Harga Jujur</h3>
            <p className="text-slate-500 text-sm">Transparan tanpa biaya tersembunyi. Best value guarantee.</p>
          </div>

          {/* 5. Support (Wide: 2x1) */}
          <div className="md:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-8 flex items-center justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Layanan 24/7</h3>
              <p className="text-slate-400 text-sm max-w-xs">Tim support kami siap membantu perencanaan perjalanan Anda kapanpun.</p>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Clock size={32} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
