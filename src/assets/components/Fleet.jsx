import React, { useState } from 'react';
import { Mic2, Tv, Armchair, Star, Users, ArrowRight, Music, Wifi, Coffee, Battery, CalendarClock } from 'lucide-react';
import { openWhatsApp, createGeneralInquiryMessage } from '../../utils/whatsapp.js';
import FleetModal from './FleetModal.jsx';

const fleetData = [
  {
    id: 1,
    title: "Dieng",
    category: "Royal Series",
    capacity: "50 Seats",
    image: "/assets/img/Dieng/diengBus.webp",
    tags: ["Karaoke", "Coolbox", "Dispenser"],
    note: "Ready Now",
    year: "2025",
    specs: {
      chassis: "Mercedes Benz OH 1626 S",
      body: "Jetbus 5 SHD"
    },
    gallery: [
      "/assets/img/Dieng/diengBus.webp",
      "/assets/img/Dieng/Dieng2.webp",
      "/assets/img/Dieng/Dieng3.webp",
      "/assets/img/Dieng/Dieng4.webp",
      "/assets/img/Dieng/Dieng5.webp",
      "/assets/img/Dieng/Dieng6.webp"
    ]
  },
  {
    id: 2,
    title: "Bromo",
    category: "Royal Series",
    capacity: "50 Seats",
    image: "/assets/img/bus 2 Bromo.webp",
    tags: ["Best Seller", "Lincah", "Full AC"],
    note: "Ready Now",
    year: "2025",
    specs: {
      chassis: "Hino RM 280 ABS",
      body: "Jetbus 5 SHD"
    },
    gallery: [
      "/assets/img/Bromo/Bromo1.webp",
      "/assets/img/Bromo/Bromo2.webp"
    ]
  },
  {
    id: 3,
    title: "Agung",
    category: "Royal Series",
    capacity: "50 Seats",
    image: "/assets/img/Bus 3.jpg",
    tags: ["Captain Seat", "Private", "Luxury"],
    note: "Ready Now",
    year: "2025",
    specs: {
      chassis: "Hino RM 280 ABS",
      body: "Jetbus 5 SHD"
    }
  },
  {
    id: 4,
    title: "Ciremai",
    category: "Royal Series",
    capacity: "50 Seats",
    image: "/assets/img/bus1Dieng.webp",
    tags: ["Economical", "Comfort", "Group"],
    note: "Ready Now",
    year: "2025",
    specs: {
      chassis: "Hino RM 280 ABS",
      body: "Jetbus 5 SHD"
    }
  },
  {
    id: 5,
    title: "Hiace Commuter",
    category: "Minibus Series",
    capacity: "14 Seats",
    image: "/assets/img/hiace.jpg",
    tags: ["Compact", "City Tour", "Family"],
    note: "Ready Now",
    year: "2023-2024"
  },
  {
    id: 6,
    title: "Hiace Premio",
    category: "Luxury Minibus",
    capacity: "12 Seats",
    image: "/assets/img/hiace.jpg",
    tags: ["Luxury", "Spacious", "VIP"],
    note: "Ready Now",
    year: "2023-2024"
  }
];

const Fleet = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFleetClick = (fleet) => {
    setSelectedFleet(fleet);
    setIsModalOpen(true);
  };

  const handleCTAClick = () => {
    const message = createGeneralInquiryMessage();
    openWhatsApp(message);
  };

  return (
    <>
      <section className="py-24 bg-slate-50" id="fleet">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs bg-orange-100 px-4 py-2 rounded-full">Navara Collection</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-6 tracking-tight">
                  Armada <span className="text-orange-600">Pilihan</span>
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed">
                  Kombinasi sempurna antara kenyamanan Big Bus dan fleksibilitas Hiace untuk segala kebutuhan perjalanan Anda.
               </p>
            </div>

            {/* MASONRY / GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
               
               {/* 1. Featured Video Card (Top Left, 2x2) */}
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

               {/* Fleet Cards */}
               <FleetCard item={fleetData[0]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[0])} />
               <FleetCard item={fleetData[1]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[1])} />
               <FleetCard item={fleetData[2]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[2])} />

               {/* Interior Card */}
               <div className="relative rounded-[2rem] overflow-hidden group shadow-xl ring-1 ring-black/5">
                  <img src="/assets/img/Seat.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Interior Comfort" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                          <Armchair size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Premium Comfort</h3>
                      <p className="text-white/80 text-sm mt-2">Ergonomic Seats & Spacious Legroom</p>
                  </div>
               </div>

               <FleetCard item={fleetData[3]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[3])} />
               <FleetCard item={fleetData[4]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[4])} />
               <FleetCard item={fleetData[5]} activeCard={activeCard} setActiveCard={setActiveCard} onClick={() => handleFleetClick(fleetData[5])} />

               {/* CTA Card */}
               <div 
                 onClick={handleCTAClick}
                 className="relative rounded-[2rem] overflow-hidden group shadow-xl bg-orange-600 flex flex-col items-center justify-center text-center p-8 cursor-pointer hover:bg-orange-700 transition-colors"
               >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                      <CalendarClock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Jauh Hari</h3>
                  <p className="text-white/80 text-sm mb-6">Amankan unit pilihan Anda untuk liburan mendatang.</p>
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-colors">
                      Hubungi Kami
                  </button>
               </div>

            </div>
         </div>
      </section>

      {/* Fleet Modal */}
      <FleetModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fleet={selectedFleet}
      />
    </>
  );
};

const FleetCard = ({ item, activeCard, setActiveCard, onClick }) => (
    <div 
        className="relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2"
        onMouseEnter={() => setActiveCard(item.id)}
        onMouseLeave={() => setActiveCard(null)}
        onClick={onClick}
    >
        <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {item.category}
            </div>
            {item.note && (
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.note.includes('June') ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>
                    {item.note}
                </div>
            )}
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
);

export default Fleet;