import React from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp.js";

const TourPackages = () => {
  const tourPackages = [
    {
      id: 1,
      name: "Bali Overland Adventure",
      duration: "4 Hari 3 Malam",
      destination: "Bali",
      price: "Mulai 4.5 jt",
      image: "/assets/img/BaliWisata.webp",
      rating: 4.9,
      participants: "Min. 20 pax",
      highlights: [
        "Hotel bintang 4",
        "Transportasi PP",
        "Tour guide berpengalaman",
        "Tiket wisata included",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Ziarah Wali 5",
      duration: "3 Hari 2 Malam",
      destination: "Jawa Tengah & Jawa Timur",
      price: "Mulai 2.8 jt",
      image: "/assets/img/ziarahwali5.webp",
      rating: 5.0,
      participants: "Min. 25 pax",
      highlights: [
        "Penginapan nyaman",
        "Makan 6x",
        "Panduan religi",
        "Air mineral",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Bromo Midnight Tour",
      duration: "2 Hari 1 Malam",
      destination: "Gunung Bromo",
      price: "Mulai 1.5 jt",
      image: "/assets/img/BromoWisata.jpg",
      rating: 4.8,
      participants: "Min. 15 pax",
      highlights: [
        "Sunrise Bromo",
        "Jeep & Guide",
        "Hotel Probolinggo",
        "Sarapan",
      ],
      popular: true,
    },
    {
      id: 4,
      name: "Yogyakarta Heritage",
      duration: "3 Hari 2 Malam",
      destination: "Yogyakarta",
      price: "Mulai 2.2 jt",
      image: "/assets/img/jogja.jpg",
      rating: 4.7,
      participants: "Min. 20 pax",
      highlights: [
        "Borobudur & Prambanan",
        "Malioboro tour",
        "Hotel bintang 3",
        "Makan 6x",
      ],
      popular: false,
    },
    {
      id: 5,
      name: "Malang Batu Spectacular",
      duration: "3 Hari 2 Malam",
      destination: "Malang & Batu",
      price: "Mulai 2.5 jt",
      image: "/assets/img/malangbatu.jpg",
      rating: 4.8,
      participants: "Min. 20 pax",
      highlights: [
        "Jatim Park 2 & 3",
        "Museum Angkut",
        "Hotel Batu",
        "Wisata petik apel",
      ],
      popular: true,
    },
    {
      id: 6,
      name: "Paket Custom",
      duration: "Fleksibel",
      destination: "Sesuai Keinginan",
      price: "Hubungi Kami",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
      rating: 5.0,
      participants: "Fleksibel",
      highlights: [
        "Destinasi pilihan sendiri",
        "Itinerary custom",
        "Budget sesuai",
        "Konsultasi gratis",
      ],
      popular: false,
      custom: true,
    },
  ];

  const handleInquiry = (packageName) => {
    const message = `Halo Navara Trip! 👋\n\nSaya tertarik dengan paket wisata:\n*${packageName}*\n\nMohon info lebih lanjut untuk:\n- Harga detail\n- Itinerary lengkap\n- Tanggal keberangkatan tersedia\n\nTerima kasih! 🙏`;
    openWhatsApp(message);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      id="packages"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold-100 text-gold-600 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            Paket Wisata Terbaik
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-navy-900 mb-4">
            Jelajahi Indonesia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">
              Bersama Kami
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Paket tour lengkap dengan transportasi, penginapan, dan tour guide
            berpengalaman. Harga terjangkau untuk rombongan!
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 ${
                pkg.custom ? "ring-2 ring-gold-500 ring-offset-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star size={12} className="fill-white" /> Populer
                </div>
              )}

              {/* Custom Badge */}
              {pkg.custom && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-navy-500 to-navy-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ✨ Best Choice
                </div>
              )}

              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent"></div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <p className="text-xs text-slate-500 font-medium">
                    Harga Per Orang
                  </p>
                  <p className="text-xl font-black text-gold-600">
                    {pkg.price}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-black text-navy-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gold-500" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      {pkg.rating}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-slate-700 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-slate-400" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-slate-400" />
                    {pkg.participants}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {pkg.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleInquiry(pkg.name)}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02] ${
                    pkg.custom
                      ? "bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 shadow-lg"
                      : "bg-navy-900 text-white hover:bg-gold-600 shadow-md"
                  }`}
                >
                  <Phone size={18} />
                  {pkg.custom ? "Konsultasi Gratis" : "Tanya Ketersediaan"}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gold-50 to-gold-100 rounded-3xl p-8 md:p-12 border border-gold-200">
          <h3 className="text-2xl md:text-3xl font-serif font-black text-navy-900 mb-3">
            Ada Destinasi Impian Lain?
          </h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Kami bisa buatkan paket custom sesuai keinginan Anda! Tentukan
            sendiri destinasi, budget, dan durasi perjalanan.
          </p>
          <button
            onClick={() => handleInquiry("Paket Custom - Konsultasi")}
            className="bg-gold-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gold-700 transition-colors inline-flex items-center gap-2"
          >
            <Phone size={20} />
            Hubungi Marketing Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
