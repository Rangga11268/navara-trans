import React from "react";
import { Shield, Award, Users, Clock } from "lucide-react";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Navara Trans, your trusted partner for premium bus charter services."
      />
      <div className="pt-24 pb-20 bg-brand-gray">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">
              Tentang Kami
            </span>
            <h1 className="font-display font-black text-4xl md:text-6xl text-brand-black mb-8 animate-fade-in-up delay-100 uppercase">
              Partner Perjalanan <br />{" "}
              <span className="text-brand-red">Terpercaya Kamu</span>
            </h1>
            <p className="text-brand-black/70 text-lg leading-relaxed animate-fade-in-up delay-200">
              Navara Trans adalah penyedia layanan transportasi pariwisata
              berbasis di Surabaya. Kita dedikasi banget buat kasih pengalaman
              perjalanan yang aman, nyaman, dan tak terlupakan buat setiap
              customer.
            </p>
          </div>
        </div>

        {/* Stats / Features */}
        <div className="bg-brand-black py-16 mb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <Shield className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="text-white font-display font-bold text-xl mb-2">
                  Aman & Nyaman
                </h3>
                <p className="text-white/60 text-sm">
                  Armada terawat dan driver berpengalaman.
                </p>
              </div>
              <div className="p-6">
                <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="text-white font-display font-bold text-xl mb-2">
                  Layanan Premium
                </h3>
                <p className="text-white/60 text-sm">
                  Fasilitas lengkap buat kenyamananmu.
                </p>
              </div>
              <div className="p-6">
                <Users className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="text-white font-display font-bold text-xl mb-2">
                  Tim Profesional
                </h3>
                <p className="text-white/60 text-sm">
                  Siap bantu kebutuhan trip kamu.
                </p>
              </div>
              <div className="p-6">
                <Clock className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="text-white font-display font-bold text-xl mb-2">
                  Tepat Waktu
                </h3>
                <p className="text-white/60 text-sm">
                  Jadwal perjalanan tertata rapi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/img/hero2.jpg"
                alt="Navara Trans Team"
                className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-black text-brand-black uppercase">
                Visi & Misi
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-black/5 hover:border-brand-black/20 transition-all">
                  <h3 className="font-display font-bold text-brand-red mb-2 uppercase">
                    Visi
                  </h3>
                  <p className="text-brand-black/70">
                    Menjadi perusahaan transportasi pariwisata terdepan di
                    Indonesia, mengutamakan keselamatan, kenyamanan, dan
                    kepuasan pelanggan.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-black/5 hover:border-brand-black/20 transition-all">
                  <h3 className="font-display font-bold text-brand-red mb-2 uppercase">
                    Misi
                  </h3>
                  <ul className="list-disc list-inside text-brand-black/70 space-y-2">
                    <li>Menyediakan armada berkualitas dan terawat.</li>
                    <li>Memberikan pelayanan ramah dan profesional.</li>
                    <li>Mengutamakan keselamatan dalam setiap perjalanan.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
