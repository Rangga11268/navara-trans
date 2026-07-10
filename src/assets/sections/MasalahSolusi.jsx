import React from "react";
import {
  Search,
  DollarSign,
  Bus,
  ClipboardList,
  UserCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Search,
    problem: "Bingung cari bus pariwisata terpercaya?",
    solution:
      "Armada baru 2023-2025, ribuan pelanggan puas, izin resmi & terjamin.",
  },
  {
    icon: DollarSign,
    problem: "Harga sewa bus gak transparan?",
    solution:
      "All-in pricing, tanpa biaya hidden, harga bersaing & negotiable.",
  },
  {
    icon: Bus,
    problem: "Takut bus tua, kotor, gak nyaman?",
    solution:
      "Armada terawat, full AC, kursi ergonomis, karaoke, TV, coolbox.",
  },
  {
    icon: ClipboardList,
    problem: "Ribet atur itinerary & akomodasi?",
    solution:
      "Paket tour lengkap (hotel, makan, tiket) + custom itinerary.",
  },
  {
    icon: UserCheck,
    problem: "Driver gak profesional / ugal-ugalan?",
    solution:
      "Driver berpengalaman, safety driving, sopan & helpful.",
  },
  {
    icon: Zap,
    problem: "Susah booking & lama respon?",
    solution:
      "Fast response 24/7 via WA, proses booking cuma 3 menit.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MasalahSolusi = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gray rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-brand-primary font-bold bg-brand-primary/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-brand-primary/20 mb-6"
          >
            <Sparkles size={14} /> Masalah & Solusi
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6 uppercase tracking-tight"
          >
            Ada Masalah?{" "}
            <span className="text-brand-primary">Ada Solusinya.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-brand-black/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Setiap masalah perjalanan pasti ada jalan keluarnya. Langsung aja
            cocokin masalah kamu sama solusi dari Navara Trans di bawah ini.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 bg-brand-gray rounded-[2rem] border border-brand-black/5 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-brand-primary/10 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-black mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={26} />
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">
                  Masalah
                </div>
                <h3 className="font-display font-bold text-lg text-brand-black mb-4 leading-snug">
                  {item.problem}
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-brand-black/10" />
                  <ArrowRight
                    size={16}
                    className="text-brand-primary group-hover:translate-x-1 transition-transform"
                  />
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2">
                  Solusi
                </div>
                <p className="text-brand-primary font-semibold text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MasalahSolusi;
