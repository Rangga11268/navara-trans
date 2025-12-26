import React from "react";
import TourPackages from "../assets/sections/TourPackages";
import { Phone, Briefcase, Users, Layout, Map } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our premium transport services and tour packages custom-tailored for your needs."
      />
      <div className="pt-24 min-h-screen bg-brand-gray">
        {/* Hero for Services */}
        <div className="bg-brand-black py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/img/hero2.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tight animate-fade-in-up delay-100">
              Premium{" "}
              <span className="text-transparent text-stroke text-stroke-white">
                Solutions
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up delay-200">
              Temukan paket tour impianmu atau bikin itinerary custom bareng tim
              ahli kami.
            </p>
          </div>
        </div>

        <TourPackages />

        {/* Corporate Services Section */}
        <section className="py-24 bg-brand-gray relative">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-brand-black/5 text-center relative overflow-hidden group hover:border-brand-black/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-red/10 transition-colors"></div>

              <div className="inline-flex items-center gap-2 text-brand-red font-bold mb-6 bg-brand-red/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-brand-red/20">
                <Briefcase size={16} /> Corporate
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mb-6 uppercase">
                Layanan Korporat
              </h2>
              <p className="text-brand-black/70 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                Kami juga melayani kebutuhan transportasi untuk perusahaan,
                instansi, dan event organizer. Mulai dari antar-jemput karyawan,
                kunjungan dinas, sampai gathering kantor.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="p-6 bg-brand-gray rounded-2xl border border-brand-black/5">
                  <Users className="w-8 h-8 text-brand-black mx-auto mb-3" />
                  <h3 className="font-display font-bold text-brand-black uppercase text-sm">
                    Antar Jemput Karyawan
                  </h3>
                </div>
                <div className="p-6 bg-brand-gray rounded-2xl border border-brand-black/5">
                  <Layout className="w-8 h-8 text-brand-black mx-auto mb-3" />
                  <h3 className="font-display font-bold text-brand-black uppercase text-sm">
                    Event Logistics
                  </h3>
                </div>
                <div className="p-6 bg-brand-gray rounded-2xl border border-brand-black/5">
                  <Map className="w-8 h-8 text-brand-black mx-auto mb-3" />
                  <h3 className="font-display font-bold text-brand-black uppercase text-sm">
                    Kunjungan Dinas
                  </h3>
                </div>
              </div>

              <button
                onClick={() =>
                  openWhatsApp(
                    "Halo Navara Trip, saya ingin tanya soal layanan korporat."
                  )
                }
                className="bg-brand-black text-white px-8 py-4 rounded-full font-bold font-display uppercase tracking-wider hover:bg-brand-red hover:scale-105 transition-all w-full md:w-auto flex justify-center items-center gap-3 shadow-lg shadow-brand-black/20"
              >
                <Phone size={20} />
                Hubungi Tim Korporat
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
