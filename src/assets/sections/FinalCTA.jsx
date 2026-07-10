import React from "react";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Bus,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Bus,
    title: "Pilih Armada",
    desc: "Tentukan unit sesuai kebutuhan rombongan kamu.",
  },
  {
    icon: Calendar,
    title: "Tentukan Jadwal",
    desc: "Pilih tanggal dan durasi perjalanan kamu.",
  },
  {
    icon: MessageCircle,
    title: "Konfirmasi via WA",
    desc: "Admin kami akan konfirmasi ketersediaan & harga.",
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

const FinalCTA = () => {
  const handleBooking = () => {
    openWhatsApp(
      "Halo Navara Trip! Saya mau booking bus. Bantu info ketersediaan & harga dong!"
    );
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-gray rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-30 -ml-20 -mb-20" />

          <div className="relative z-10">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold bg-brand-primary/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-brand-primary/20 mb-6">
                <Sparkles size={14} /> Siap Berangkat?
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase leading-tight">
                Waktunya <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
                  Trip Impian Kamu.
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                Cuma butuh 3 langkah mudah buat wujudin perjalanan seru
                bareng Navara Trans.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-brand-primary/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <step.icon size={28} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-brand-primary text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl mb-2 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <button
                onClick={handleBooking}
                className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold font-display uppercase tracking-wider text-sm shadow-xl hover:bg-white hover:text-brand-black transition-all inline-flex items-center gap-3 group/btn active:scale-95"
              >
                <Phone size={20} />
                Hubungi Kami di WhatsApp
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
              <p className="text-white/30 text-xs font-bold uppercase tracking-wider mt-6">
                Fast response 24/7 • Gratis konsultasi
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
