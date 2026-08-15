import React from "react";
import { Link } from "react-router-dom";
import { Bus, Users, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp } from "../../utils/whatsapp";

const fleetItems = [
  {
    id: 1,
    title: "Dieng - Big Bus 50 Seat",
    category: "Royal Series",
    chassis: "Mercedes-Benz OH 1626 S • Jetbus 5 SHD",
    capacity: "50 Seats",
    image: "/assets/img/Dieng/diengBus.webp",
    features: ["Karaoke & TV", "Coolbox", "Dispenser Air", "Reclining Seat"],
    badge: "Flagship Unit",
  },
  {
    id: 2,
    title: "Bromo - Big Bus 50 Seat",
    category: "Royal Series",
    chassis: "Hino RM 280 ABS • Jetbus 5 SHD",
    capacity: "50 Seats",
    image: "/assets/img/bus 2 Bromo.webp",
    features: ["Full AC", "Sound System", "Bantal & Selimut", "Bagasi Luas"],
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Hiace Commuter VIP",
    category: "Minibus Series",
    chassis: "Toyota Hiace Commuter • VIP Interior",
    capacity: "14 Seats",
    image: "/assets/img/hiace.webp",
    features: ["Full AC", "Kursi Nyaman", "USB Charger", "City Tour"],
    badge: "Rombongan Kecil",
  },
];

const FleetPreview = () => {
  const handleDirectBook = (unitTitle) => {
    const message = `Halo Navara Trans! Saya ingin cek ketersediaan armada *${unitTitle}* untuk rencana perjalanan kami. Mohon info tarif dan jadwalnya. Terima kasih!`;
    openWhatsApp(message);
  };

  return (
    <section id="fleet" className="py-16 sm:py-20 lg:py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-xs font-bold text-brand-primary uppercase tracking-wider mb-3.5"
            >
              <Bus className="w-3.5 h-3.5" />
              <span>Pilihan Unit Armada</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-black tracking-tight uppercase"
            >
              Armada Bus <span className="text-brand-primary">Jetbus 5</span> Siap Jalan
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-black transition-colors group"
            >
              <span>Lihat Semua Koleksi Armada</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetItems.map((bus, idx) => (
            <motion.div
              key={bus.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-brand-black/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:border-brand-primary/40"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-brand-black">
                  <img
                    src={bus.image}
                    alt={bus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-brand-black">
                      {bus.category}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-brand-primary text-white text-[11px] font-bold shadow-md">
                      {bus.badge}
                    </span>
                  </div>

                  {/* Seat Capacity Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-bold bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md">
                    <Users className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{bus.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-black group-hover:text-brand-primary transition-colors mb-1">
                    {bus.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {bus.chassis}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {bus.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] bg-brand-gray text-brand-black font-semibold px-2.5 py-1 rounded-md border border-brand-black/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-brand-gray mt-2">
                <Link
                  to="/fleet"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-brand-gray hover:bg-slate-200 text-brand-black text-xs font-bold uppercase tracking-wider transition-all border border-brand-black/5 text-center"
                >
                  <span>Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleDirectBook(bus.title)}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/20 text-center cursor-pointer"
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
