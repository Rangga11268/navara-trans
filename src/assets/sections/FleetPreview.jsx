import React from "react";
import { Link } from "react-router-dom";
import { Bus, Users, ChevronRight, Phone, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp } from "../../utils/whatsapp";

const fleetItems = [
  {
    id: 1,
    title: "Dieng Royal Edition",
    category: "Royal Series",
    chassis: "Mercedes-Benz OH 1626 S",
    body: "Jetbus 5 SHD Adi Putro",
    capacity: "50 Seats",
    image: "/assets/img/Dieng/diengBus.webp",
    features: ["Karaoke & TV", "Coolbox & Dispenser", "Air Suspension", "Reclining Seat"],
  },
  {
    id: 2,
    title: "Bromo Executive",
    category: "Royal Series",
    chassis: "Hino RM 280 ABS",
    body: "Jetbus 5 SHD Adi Putro",
    capacity: "50 Seats",
    image: "/assets/img/bus 2 Bromo.webp",
    features: ["Full AC Denso", "Sound System HD", "Bantal & Selimut", "Bagasi Luas"],
  },
  {
    id: 3,
    title: "Hiace Commuter VIP",
    category: "VIP Minibus",
    chassis: "Toyota Hiace Commuter",
    body: "Custom Luxury Interior",
    capacity: "14 Seats",
    image: "/assets/img/hiace.webp",
    features: ["Captain Seat", "USB Port Tiap Baris", "Kabin Kedap", "City Tour"],
  },
];

const FleetPreview = () => {
  const handleDirectBook = (unitTitle) => {
    const message = `Halo Navara Trans! Saya ingin reservasi unit armada *${unitTitle}*. Mohon info ketersediaan tanggal dan penawaran tarifnya. Terima kasih!`;
    openWhatsApp(message);
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#121214] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] block mb-3">
              Fleet Specification
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Pilihan Armada <span className="text-brand-primary">Utama</span>
            </h2>
          </div>

          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-white transition-colors group"
          >
            <span>Buka Katalog Lengkap Armada</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetItems.map((bus, idx) => (
            <motion.div
              key={bus.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#18181C] border border-white/10 rounded-3xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Gold Badge */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={bus.image}
                    alt={bus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181C] via-transparent to-transparent" />
                  
                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-brand-primary border border-brand-primary/30 uppercase tracking-wider">
                      {bus.category}
                    </span>
                  </div>

                  {/* Seat Pill Bottom Right */}
                  <div className="absolute bottom-3 right-4 bg-brand-primary text-brand-black px-3.5 py-1 rounded-full text-xs font-display font-black uppercase">
                    {bus.capacity}
                  </div>
                </div>

                {/* Specs & Description */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-brand-primary transition-colors mb-2 uppercase">
                    {bus.title}
                  </h3>
                  <p className="text-xs text-white/50 font-medium mb-5">
                    {bus.chassis} • {bus.body}
                  </p>

                  {/* Feature Tag Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {bus.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="text-[11px] bg-white/5 text-white/80 font-medium px-3 py-2 rounded-xl border border-white/5 truncate"
                      >
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-white/10 mt-2">
                <Link
                  to="/fleet"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/10 text-center"
                >
                  <span>Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleDirectBook(bus.title)}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-brand-primary hover:bg-[#a87f3b] text-brand-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 text-center cursor-pointer font-display"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Sewa WA</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FleetPreview;
