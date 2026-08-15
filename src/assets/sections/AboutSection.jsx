import React from "react";
import { ShieldCheck, Award, Users, Tv, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Award,
    title: "Chassis & Body Jetbus 5 SHD",
    description:
      "Armada tangguh bermesin Mercedes-Benz OH 1626 & Hino RM 280 ABS dengan suspensi udara empuk dan kabin yang senyap.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Keselamatan & Uji Dishub",
    description:
      "Perawatan rutin berkala, uji kelaikan resmi KIR, serta dilengkapi APAR, palu darurat, dan asuransi perjalanan penumpang.",
  },
  {
    icon: Users,
    title: "Driver & Kru Berpengalaman",
    description:
      "Pengemudi ramah dan profesional yang menguasai berbagai rute wisata Jawa, Bali, Madura, hingga jalur pegunungan.",
  },
  {
    icon: Tv,
    title: "Fasilitas Hiburan & Kenyamanan",
    description:
      "Dilengkapi AC dingin merata, Smart LED TV, Sound System & Mic Karaoke, dispenser air, coolbox, dan kursi reclining lega.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-brand-black/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-xs font-bold text-brand-primary uppercase tracking-wider mb-3.5"
            >
              <span>Standar Layanan Navara</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-black tracking-tight uppercase"
            >
              Kenyamanan Maksimal <br className="hidden sm:block" />
              Untuk <span className="text-brand-primary">Setiap Perjalanan</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed"
          >
            Kami mendedikasikan armada terbaik dan pelayanan terpercaya untuk mensukseskan agenda wisata, gathering, maupun kunjungan dinas Anda.
          </motion.p>
        </div>

        {/* Side-by-Side Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Real Bus Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-brand-black/10 group">
              <img
                src="/assets/img/Dieng/diengBus.webp"
                alt="Navara Trans Big Bus Dieng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Bottom Card Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-brand-black font-display font-bold text-sm sm:text-base leading-snug">
                      100% Siap Berangkat
                    </h4>
                    <p className="text-slate-500 text-xs">
                      Inspeksi kelaikan jalan menyeluruh sebelum penjemputan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Accent Floating Tag */}
            <div className="absolute -top-3 -right-3 bg-brand-primary text-white font-display font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md uppercase tracking-wider hidden sm:block">
              Jetbus 5 SHD
            </div>
          </motion.div>

          {/* Right: 4 Pillar Feature Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-gray/70 hover:bg-brand-gray border border-brand-black/5 p-6 rounded-xl transition-all hover:border-brand-primary/40 hover:shadow-sm group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-black mb-2 group-hover:text-brand-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
