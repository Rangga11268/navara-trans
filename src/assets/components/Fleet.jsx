import React, { useState } from 'react';
import { Mic2, Tv, Armchair, Star, Users, ArrowRight, Music, Wifi, Coffee, Battery } from 'lucide-react';

const fleetData = [
  {
    id: 1,
    title: "Big Bus HDD",
    category: "Luxury Series",
    capacity: "45 - 50 Seats",
    image: "/assets/img/bus11.webp",
    tags: ["Karaoke", "Coolbox", "Dispenser"],
    featured: true,
    size: "large" // spans 2 cols, 2 rows
  },
  {
    id: 2,
    title: "Medium Bus",
    category: "Navigator Series",
    capacity: "31 - 35 Seats",
    image: "/assets/img/storiesdown.co_navara_trip_ppf.jpeg",
    tags: ["Best Seller", "Lincah", "Full AC"],
    featured: false,
    size: "medium" // spans 2 cols
  },
  {
    id: 3,
    title: "Hiace Premio",
    category: "VIP Class",
    capacity: "14 Seats",
    image: "https://images.unsplash.com/photo-1570125909517-53cb21c89bf9?q=80&w=2070&auto=format&fit=crop", // Placeholder until we have a specific one, or reuse existing
    tags: ["Captain Seat", "Private", "Luxury"],
    featured: false,
    size: "small"
  },
  {
    id: 4,
    title: "Hiace Commuter",
    category: "Executive",
    capacity: "15 Seats",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop",
    tags: ["Economical", "Comfort", "Group"],
    featured: false,
    size: "small"
  },
  {
    id: 5,
    title: "Big Bus SHD",
    category: "Royal Series",
    capacity: "50 - 59 Seats",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    tags: ["Toilet", "Smoking Area", "Legrest"],
    featured: false,
    size: "medium"
  }
];

const Fleet = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-24 bg-slate-50" id="fleet">
       <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs bg-orange-100 px-4 py-2 rounded-full">Navara Collection</span>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-6 tracking-tight">
                Armada <span className="text-orange-600">Pilihan</span>
             </h2>
             <p className="text-slate-600 text-lg leading-relaxed">
                Setiap unit dirancang untuk kenyamanan maksimal dengan fasilitas hiburan lengkap. 
                Perjalanan jauh terasa dekat bersama Navara.
             </p>
          </div>

          {/* MASONRY / GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
             
             {/* Featured Video Card */}
             <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-2xl ring-1 ring-black/5">
                 <video 
                    src="/assets/video/Dieng.mp4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-10 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <Music size={20} />
                        </div>
                        <span className="text-white/80 font-medium tracking-wide">Onboard Experience</span>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-2">Full Entertainment</h3>
                    <p className="text-slate-300 max-w-md">Nikmati perjalanan dengan fasilitas Karaoke, TV LED, dan Sound System premium di setiap armada kami.</p>
                 </div>
             </div>

             {/* Dynamic Fleet Cards */}
             {fleetData.map((item) => (
                <div 
                    key={item.id}
                    className={`relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2
                        ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                        ${item.size === 'medium' ? 'md:col-span-2' : ''}
                        ${item.size === 'small' ? 'md:col-span-1' : ''}
                    `}
                    onMouseEnter={() => setActiveCard(item.id)}
                    onMouseLeave={() => setActiveCard(null)}
                >
                    <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="absolute top-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            {item.category}
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-orange-400 font-medium text-sm mb-4">{item.capacity}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] bg-white/10 text-slate-200 px-2.5 py-1 rounded-lg border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className={`flex items-center gap-2 text-white font-bold text-sm transition-all duration-300 ${activeCard === item.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                            Lihat Detail <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
             ))}

             {/* Call to Action Card */}
             <div className="md:col-span-1 bg-orange-600 rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <Users size={32} className="mb-4 text-orange-200" />
                    <h3 className="text-2xl font-black leading-tight mb-2">Butuh Unit Lain?</h3>
                    <p className="text-orange-100 text-sm">Kami memiliki jaringan partner luas untuk kebutuhan spesifik Anda.</p>
                </div>
                <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors relative z-10">
                    Hubungi Kami
                </button>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Fleet;