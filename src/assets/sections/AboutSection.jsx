import React from "react";
import { ShieldCheck, Award, Users, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const guarantees = [
  {
    number: "01",
    title: "Chassis & Karoseri Jetbus 5 SHD",
    desc: "Menggunakan mesin Mercedes-Benz OH 1626 S & Hino RM 280 ABS dengan suspensi udara untuk kenyamanan jalan bebas getaran.",
  },
  {
    number: "02",
    title: "Uji Kelaikan Dishub & Asuransi Resmi",
    desc: "Setiap armada melewati uji KIR berkala, pemeriksaan rem & mesin menyeluruh, serta perlindungan asuransi bagi setiap penumpang.",
  },
  {
    number: "03",
    title: "Kru Profesional & Standard Pelayanan",
    desc: "Pilot dan co-pilot terlatih, ramah, dan berpengalaman puluhan tahun menguasai medan wisata Jawa, Bali, hingga rute pegunungan.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0F0F11] text-white relative overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-xs font-bold text-brand-primary uppercase tracking-widest mb-4"
          >
            <span>The Navara Standard</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.1]"
          >
            Standar Baru <br />
            <span className="text-brand-primary">Pariwisata Eksekutif</span>
          </motion.h2>
        </div>

        {/* Dual Layout: Visual Collage Left + Guarantees Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dual Image Collage (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 relative"
          >
            {/* Image 1: Exterior */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/15 shadow-2xl">
              <img
                src="/assets/img/Dieng/diengBus.webp"
                alt="Navara Bus Exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
                  Eksterior
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  Jetbus 5 SHD Royal
                </span>
              </div>
            </div>

            {/* Image 2: Interior */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/15 shadow-2xl mt-8">
              <img
                src="/assets/img/Seat.webp"
                alt="Navara Bus Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
                  Interior
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  Ergonomic Seats
                </span>
              </div>
            </div>

            {/* Center Floating Guarantee Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-black px-5 py-3 rounded-2xl font-display font-black text-xs uppercase tracking-wider shadow-2xl border border-white/20 whitespace-nowrap hidden sm:block">
              100% Ready Unit 2025
            </div>
          </motion.div>

          {/* Right: Horizontal Guarantee Rows (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {guarantees.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#161619] border border-white/10 hover:border-brand-primary/40 transition-all flex gap-5 group"
              >
                <div className="font-display font-black text-2xl text-brand-primary/60 group-hover:text-brand-primary transition-colors shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
