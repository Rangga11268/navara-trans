import React from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
} from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp.js";

const TourPackages = () => {
  const tourPackages = [
    {
      id: 1,
      name: "Bali Overland Adventure",
      duration: "4 Hari 3 Malam",
      destination: "Bali",
      price: "Mulai 4.5jt",
      image: "/assets/img/BaliWisata.webp",
      rating: 4.9,
      participants: "Min. 20 pax",
      highlights: [
        "Hotel Bintang 4",
        "Transportasi PP",
        "Guide Berpengalaman",
        "Tiket Wisata All-in",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Ziarah Wali 5",
      duration: "3 Hari 2 Malam",
      destination: "Jawa Tengah & Jawa Timur",
      price: "Mulai 2.8jt",
      image: "/assets/img/ziarahwali5.webp",
      rating: 5.0,
      participants: "Min. 25 pax",
      highlights: [
        "Penginapan Nyaman",
        "Makan 6x",
        "Panduan Religi",
        "Air Mineral",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Bromo Midnight Tour",
      duration: "2 Hari 1 Malam",
      destination: "Gunung Bromo",
      price: "Mulai 1.5jt",
      image: "/assets/img/BromoWisata.webp",
      rating: 4.8,
      participants: "Min. 15 pax",
      highlights: [
        "Bromo Sunrise",
        "Jeep & Guide",
        "Hotel Probolinggo",
        "Breakfast",
      ],
      popular: true,
    },
    {
      id: 4,
      name: "Yogyakarta Heritage",
      duration: "3 Hari 2 Malam",
      destination: "Yogyakarta",
      price: "Mulai 2.2jt",
      image: "/assets/img/jogja.webp",
      rating: 4.7,
      participants: "Min. 20 pax",
      highlights: [
        "Borobudur & Prambanan",
        "Malioboro Tour",
        "Hotel Bintang 3",
        "Makan 6x",
      ],
      popular: false,
    },
    {
      id: 5,
      name: "Malang Batu Seru",
      duration: "3 Hari 2 Malam",
      destination: "Malang & Batu",
      price: "Mulai 2.5jt",
      image: "/assets/img/malangbatu.webp",
      rating: 4.8,
      participants: "Min. 20 pax",
      highlights: [
        "Jatim Park 2 & 3",
        "Museum Angkut",
        "Hotel di Batu",
        "Petik Apel",
      ],
      popular: true,
    },
    {
      id: 6,
      name: "Custom Package",
      duration: "Fleksibel",
      destination: "Terserah Kamu",
      price: "Hubungi Kami",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
      rating: 5.0,
      participants: "Bebas",
      highlights: [
        "Pilih Destinasi Sendiri",
        "Itinerary Custom",
        "Budget Bisa Diatur",
        "Free Konsultasi",
      ],
      popular: false,
      custom: true,
    },
  ];

  const handleInquiry = (packageName) => {
    const message = `Halo Navara Trip! 👋\n\nSaya tertarik dengan paket wisata:\n*${packageName}*\n\nBoleh minta info lengkap soal:\n- Harga detail\n- Itinerary lengkap\n- Tanggal yang available\n\nMakasih! 🙏`;
    openWhatsApp(message);
  };

  return (
    <section
      className="py-16 md:py-24 bg-brand-gray relative overflow-hidden"
      id="packages"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs bg-brand-red/10 px-4 py-2 rounded-full border border-brand-red/20">
            Top Destinations
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mt-6 mb-6 tracking-tight uppercase">
            Explore <span className="text-brand-red">Indonesia</span>
          </h2>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Complete tour packages with premium transport, accommodation, and
            expert guides. Affordable for groups!
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-black/5 hover:-translate-y-2 ${
                pkg.custom ? "ring-1 ring-brand-red" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 bg-brand-red text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                  <Star size={12} className="fill-white" /> Popular
                </div>
              )}

              {/* Custom Badge */}
              {pkg.custom && (
                <div className="absolute top-4 left-4 z-20 bg-brand-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Sparkles size={12} /> Best Choice
                </div>
              )}

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Price Tag */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider mb-1">
                    Harga / Orang
                  </p>
                  <p className="text-2xl font-display font-black text-white">
                    {pkg.price}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-black text-brand-black mb-3 uppercase leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-brand-black/60">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-brand-red" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-brand-red fill-brand-red"
                      />
                      {pkg.rating}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-brand-black/80 pb-6 border-b border-brand-black/5">
                  <div className="flex items-center gap-2 bg-brand-gray px-3 py-1.5 rounded-lg">
                    <Calendar size={16} className="text-brand-black" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2 bg-brand-gray px-3 py-1.5 rounded-lg">
                    <Users size={16} className="text-brand-black" />
                    {pkg.participants}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-brand-black/70 font-medium"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand-red mt-0.5 shrink-0"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleInquiry(pkg.name)}
                  className={`w-full py-4 rounded-full font-bold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] ${
                    pkg.custom
                      ? "bg-brand-black text-white hover:bg-brand-red shadow-lg shadow-brand-black/20"
                      : "bg-brand-gray text-brand-black hover:bg-brand-black hover:text-white"
                  }`}
                >
                  <Phone size={18} />
                  {pkg.custom ? "Free Consultation" : "Cek Ketersediaan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-brand-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase">
              Dreaming of Somewhere Else?
            </h3>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg">
              We can create a custom package just for you! Decide your own
              destination, budget, and travel duration.
            </p>
            <button
              onClick={() => handleInquiry("Custom Package - Consultation")}
              className="bg-brand-red text-white px-10 py-5 rounded-full font-bold font-display uppercase tracking-wider text-sm shadow-xl hover:bg-white hover:text-brand-black transition-all inline-flex items-center gap-3"
            >
              <Phone size={20} />
              Contact Our Marketing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
