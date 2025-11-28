import React from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-navy-900 mb-8 animate-fade-in-up delay-100">
            Partner Perjalanan <br />{" "}
            <span className="text-gold-600">Terpercaya Anda</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed animate-fade-in-up delay-200">
            Navara Trans adalah perusahaan penyedia layanan transportasi
            pariwisata yang berbasis di Surabaya. Kami berdedikasi untuk
            memberikan pengalaman perjalanan yang aman, nyaman, dan tak
            terlupakan bagi setiap pelanggan.
          </p>
        </div>
      </div>

      {/* Stats / Features */}
      <div className="bg-navy-900 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-fade-in-up delay-100">
              <Shield className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">
                Aman & Nyaman
              </h3>
              <p className="text-slate-400 text-sm">
                Armada terawat dan driver berpengalaman.
              </p>
            </div>
            <div className="p-6 animate-fade-in-up delay-200">
              <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">
                Pelayanan Premium
              </h3>
              <p className="text-slate-400 text-sm">
                Fasilitas lengkap untuk kenyamanan Anda.
              </p>
            </div>
            <div className="p-6 animate-fade-in-up delay-300">
              <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">
                Tim Profesional
              </h3>
              <p className="text-slate-400 text-sm">
                Siap membantu kebutuhan perjalanan Anda.
              </p>
            </div>
            <div className="p-6 animate-fade-in-up delay-400">
              <Clock className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Tepat Waktu</h3>
              <p className="text-slate-400 text-sm">
                Jadwal perjalanan yang terencana dengan baik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/img/hero2.jpg"
              alt="Navara Trans Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900">
              Visi & Misi
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-lift animate-scale-in delay-100">
                <h3 className="font-bold text-gold-600 mb-2">Visi</h3>
                <p className="text-slate-600">
                  Menjadi perusahaan transportasi pariwisata terdepan di
                  Indonesia yang mengutamakan keselamatan, kenyamanan, dan
                  kepuasan pelanggan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-lift animate-scale-in delay-200">
                <h3 className="font-bold text-gold-600 mb-2">Misi</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Menyediakan armada yang berkualitas dan terawat.</li>
                  <li>Memberikan pelayanan yang ramah dan profesional.</li>
                  <li>Mengutamakan keselamatan dalam setiap perjalanan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
