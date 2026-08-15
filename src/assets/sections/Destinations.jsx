import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const destinationList = [
  {
    name: "Bali Overland",
    description: "Pantai Pandawa, Kuta, Bedugul & Tanah Lot",
    price: "4-5 Hari Trip",
    img: "/assets/img/BaliWisata.webp",
  },
  {
    name: "Gunung Bromo",
    description: "Sunrise Penanjakan, Kawah Bromo & Pasir Berbisik",
    price: "Midnight / 2D1N",
    img: "/assets/img/BromoWisata.webp",
  },
  {
    name: "Yogyakarta",
    description: "Malioboro, Candi Prambanan & HeHa Sky View",
    price: "3D2N Favorit",
    img: "/assets/img/jogja.webp",
  },
  {
    name: "Malang & Kota Batu",
    description: "Jatim Park Group, Museum Angkut & Petik Apel",
    price: "City Tour 2D1N",
    img: "/assets/img/malangbatu.webp",
  },
  {
    name: "Ziarah Wali 5 & 9",
    description: "Wisata Religi Sunan Ampel, Giri, Bonang, Drajat, Malik Ibrahim",
    price: "Rute Religi",
    img: "/assets/img/ziarahwali5.webp",
  },
];

const Destinations = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-t border-brand-black/10" id="destinations">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-xs font-bold text-brand-primary uppercase tracking-wider mb-3.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Rute & Destinasi Favorit</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-black tracking-tight uppercase"
            >
              Destinasi Wisata <span className="text-brand-primary">Paling Diminati</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed"
          >
            Siap melayani penjemputan dari Surabaya, Sidoarjo, Gresik, dan sekitarnya dengan rute wisata fleksibel sesuai itinerary Anda.
          </motion.p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationList.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden border border-brand-black/10 group h-64 sm:h-72 shadow-sm hover:shadow-lg transition-all duration-300 ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <div>
                  <span className="text-brand-primary text-[11px] font-bold uppercase tracking-wider block mb-1">
                    {dest.price}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm line-clamp-2 max-w-lg">
                    {dest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
