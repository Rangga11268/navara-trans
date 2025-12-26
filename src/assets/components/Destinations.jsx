import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

const Destinations = () => {
  const destinationList = [
    {
      name: "Ziarah Wali 5",
      type: "Religious",
      price: "Call for Price",
      img: "/assets/img/ziarahwali5.webp",
    },
    {
      name: "Malang & Batu",
      type: "City Tour",
      price: "Best Deal",
      img: "/assets/img/malangbatu.jpg",
    },
    {
      name: "Mount Bromo",
      type: "Adventure",
      price: "Popular",
      img: "/assets/img/BromoWisata.jpg",
    },
    {
      name: "Bali Overland",
      type: "Long Trip",
      price: "4-5 Hari",
      img: "/assets/img/BaliWisata.webp",
    },
  ];

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="destinations"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gray rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-brand-black/10 pb-12">
          <div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Start Surabaya
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-4 uppercase tracking-tight">
              Trip <span className="text-brand-red">Populer</span>
            </h2>
            <p className="text-brand-black/60 text-lg max-w-xl leading-relaxed">
              Ide liburan pilihan yang lagi hits di kalangan customer kami bulan
              ini.
            </p>
          </div>
          <a
            href="/services"
            className="group flex items-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full font-display font-bold uppercase tracking-wider text-sm hover:bg-brand-red transition-all duration-300 shadow-xl"
          >
            Lihat Semua Katalog
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinationList.map((dest, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-white/90 backdrop-blur-md text-brand-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {dest.type}
                </span>
              </div>

              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-2xl font-display font-black text-white mb-2 uppercase leading-none group-hover:text-brand-red transition-colors">
                  {dest.name}
                </h3>
                <div className="flex justify-between items-end border-t border-white/20 pt-4">
                  <div>
                    <p className="text-[10px] text-white/60 font-medium uppercase tracking-widest mb-1">
                      Estimasi
                    </p>
                    <span className="text-sm text-white font-bold tracking-wide">
                      {dest.price}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-brand-black flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45">
                    <ArrowRight size={20} />
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
