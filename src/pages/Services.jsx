import React from "react";
import TourPackages from "../assets/components/TourPackages";
import { Phone } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero for Services */}
      <div className="bg-navy-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">
            Layanan & Paket
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Temukan paket wisata impian Anda atau buat rencana perjalanan custom
            bersama kami.
          </p>
        </div>
      </div>

      <TourPackages />

      {/* Corporate Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-navy-900 mb-6">
              Layanan Korporat
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-10 text-lg">
              Kami juga melayani kebutuhan transportasi untuk perusahaan,
              instansi pemerintah, dan event organizer. Mulai dari antar-jemput
              karyawan, kunjungan kerja, hingga gathering perusahaan.
            </p>
            <button
              onClick={() =>
                openWhatsApp(
                  "Halo Navara Trip, saya ingin menanyakan layanan untuk korporat/perusahaan."
                )
              }
              className="bg-navy-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-800 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Hubungi Tim Corporate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
