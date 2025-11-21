import React from 'react';
import { Mic2, Tv, Armchair, Star, Users, ArrowRight, Music } from 'lucide-react';

const Fleet = () => {
  return (
    <section className="py-20 bg-white" id="fleet">
       <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Navara Collection</span>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Pilihan Unit Wisata</h2>
             <p className="text-slate-600">Semua unit dilengkapi Karaoke Set, Mic Wireless, dan Coolbox untuk kenyamanan maksimal rombongan Anda.</p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
             
             {/* Main Item (Big Bus) */}
             <div className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="SHD Bus" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
                   <div className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded mb-3 w-fit">HDD / SHD / MHD</div>
                   <h3 className="text-3xl font-bold mb-2">Big Bus Series</h3>
                   <p className="text-slate-300 text-sm mb-6 line-clamp-2">Kapasitas 45/50/59 Seat. Cocok untuk rombongan besar, Ziarah, atau Study Tour. Bagasi luas tembus kiri-kanan.</p>
                   
                   <div className="flex gap-3 mb-6">
                      <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded"><Mic2 size={12} /> Karaoke</div>
                      <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded"><Tv size={12} /> 2 TV</div>
                      <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded"><Armchair size={12} /> Reclining</div>
                   </div>
                   
                   <button className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-slate-900 transition-all">Lihat Interior</button>
                </div>
             </div>

             {/* Item 2 (Medium Bus) */}
             <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
                 <img src="https://images.unsplash.com/photo-1570125909517-53cb21c89bf9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Medium Bus" />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                 <div className="absolute inset-0 p-8 flex flex-col justify-center items-start text-white">
                    <div className="flex items-center gap-2 mb-2">
                       <Star size={16} className="text-yellow-400 fill-yellow-400" />
                       <span className="font-bold text-yellow-400 text-sm">Best Seller</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">Medium Bus</h3>
                    <p className="text-slate-300 text-sm mb-4">Kapasitas 33/35 Seat. Lincah untuk rute menanjak (Bromo/Batu).</p>
                    <div className="flex gap-2">
                       {['Jetbus 3+', 'Coolbox', 'Full AC'].map(tag => (
                          <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 rounded border border-white/10">{tag}</span>
                       ))}
                    </div>
                 </div>
             </div>

             {/* Item 3 (Hiace) */}
             <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg bg-slate-100 border border-slate-200">
                <div className="p-6 h-full flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-4">
                      <Users size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Hiace / Elf</h3>
                      <p className="text-slate-500 text-sm">Kapasitas 14-19 Seat. VIP Family Trip.</p>
                   </div>
                   <div className="mt-4 flex items-center gap-2 text-orange-600 text-sm font-bold group-hover:gap-4 transition-all">
                      Cek Unit <ArrowRight size={16} />
                   </div>
                </div>
             </div>

              {/* Item 4 (Facility Highlight) */}
              <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg bg-orange-600 text-white">
                 {/* Pattern */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                 <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <Music size={32} className="mb-3 text-orange-200" />
                    <h3 className="text-xl font-black mb-1">Full Entertainment</h3>
                    <p className="text-white/80 text-xs mb-4">Youtube & Karaoke on the go.</p>
                    <div className="bg-white text-orange-600 px-3 py-1 rounded-lg text-[10px] font-bold shadow-lg">Standard Fasilitas</div>
                 </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Fleet;