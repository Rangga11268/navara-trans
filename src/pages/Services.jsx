import React from "react";
import TourPackages from "../assets/sections/TourPackages";
import { Phone, Briefcase, Users, Layout, Map } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our premium transport services and tour packages custom-tailored for your needs."
      />
      <div className="pt-24 min-h-screen bg-brand-gray">
        {/* Hero for Services */}
        <section className="bg-brand-black py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/img/hero2.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-6 shadow-lg"
            >
              Layanan Kami
            </motion.span>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tight"
            >
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
                Solutions.
              </span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Temukan paket tour impianmu atau bikin itinerary custom bareng tim
              ahli kami.
            </motion.p>
          </div>
        </section>

        <TourPackages />

        {/* Corporate Services Section */}
        <section className="py-16 md:py-24 bg-brand-gray relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-brand-black/5 text-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-brand-primary/10 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full -ml-32 -mb-32 blur-[80px] group-hover:bg-brand-red/10 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

              <div className="inline-flex items-center gap-2 text-brand-red font-bold mb-8 bg-brand-red/5 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest border border-brand-red/10 shadow-sm relative z-10">
                <Briefcase size={16} /> <span>Corporate Services</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mb-6 uppercase relative z-10">
                Solusi Bisnis <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-brand-black/50">
                  Terintegrasi
                </span>
              </h2>
              <p className="text-brand-black/60 max-w-3xl mx-auto mb-12 text-lg leading-relaxed relative z-10">
                Kami juga melayani kebutuhan transportasi untuk perusahaan,
                instansi, dan event organizer. Mulai dari antar-jemput karyawan,
                kunjungan dinas, sampai gathering kantor.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 relative z-10"
              >
                {[
                  {
                    icon: Users,
                    title: "Antar Jemput Karyawan",
                    desc: "Shuttle bus nyaman & tepat waktu.",
                  },
                  {
                    icon: Layout,
                    title: "Event Logistics",
                    desc: "Transportasi untuk event skala besar.",
                  },
                  {
                    icon: Map,
                    title: "Kunjungan Dinas",
                    desc: "Armada premium untuk tamu VIP.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-brand-black/5 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 group/card text-left"
                  >
                    <div className="w-14 h-14 bg-brand-gray rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-brand-primary group-hover/card:text-white transition-all duration-300">
                      <item.icon className="w-7 h-7 text-brand-black group-hover/card:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-black uppercase mb-2 group-hover/card:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-black/50 text-sm font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp(
                    "Halo Navara Trip, saya ingin tanya soal layanan korporat."
                  )
                }
                className="bg-brand-black text-white px-10 py-5 rounded-full font-bold font-display uppercase tracking-wider hover:bg-brand-primary transition-all w-full md:w-auto inline-flex justify-center items-center gap-3 shadow-xl shadow-brand-black/20 relative z-10"
              >
                <Phone size={20} />
                Hubungi Tim Korporat
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
