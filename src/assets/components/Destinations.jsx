import React from 'react';
import { ArrowRight } from 'lucide-react';

const Destinations = () => {
  const destinationList = [
    { name: "Ziarah Wali 5", type: "Religi", price: "Call for Price", img: "/assets/img/ziarahwali5.webp" },
    { name: "Malang & Batu", type: "City Tour", price: "Best Deal", img: "/assets/img/malangbatu.jpg" },
    { name: "Gunung Bromo", type: "Adventure", price: "Popular", img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1000&auto=format&fit=crop" },
    { name: "Bali Overland", type: "Long Trip", price: "4-5 Hari", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50" id="destinations">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
             <div className="inline-block bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Start Surabaya</div>
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Destinasi Favorit</h2>
             <p className="text-slate-500">Ide liburan populer pelanggan Navara Trans bulan ini.</p>
          </div>
          <a href="#" className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">Lihat Katalog <ArrowRight size={18} /></a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationList.map((dest, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 relative">
               <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-white z-10">
                     {dest.type}
                  </div>
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                    <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-orange-300 font-bold">{dest.price}</span>
                       <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-orange-500 transition-colors">
                          <ArrowRight size={16} />
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;