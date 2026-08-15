import React, { useState } from "react";
import { Star, MapPin, Send, Bus } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp } from "../../utils/whatsapp";

const armadaOptions = [
  "Pilih Armada...",
  "Big Bus 50 Seat - Dieng (Mercedes-Benz OH 1626)",
  "Big Bus 50 Seat - Bromo (Hino RM 280 ABS)",
  "Big Bus 50 Seat - Agung (Hino RM 280 ABS)",
  "Hiace Commuter 14 Seat",
  "Hiace Premio 12 Seat",
];

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    armada: "",
  });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const message = `Halo Navara Trans! Saya ${form.name} mau cek ketersediaan dan tarif sewa ${form.armada || "bus pariwisata"} untuk tujuan ${form.destination || "wisata"} pada tanggal ${form.date || "yang ditentukan"}. Mohon infonya. Terima kasih!`;
    openWhatsApp(message);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-brand-black">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/img/hero2.webp"
          alt="Navara Trans Luxury Bus"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Trust (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/15 text-xs font-semibold text-white backdrop-blur-md">
                <Star className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
                <span>4.9 / 5.0 Rating Kepuasan Wisatawan</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-brand-primary/20 border border-brand-primary/30 text-xs font-semibold text-brand-primary backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pool Surabaya & Sidoarjo</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.12] mb-5 uppercase"
            >
              Sewa Bus Pariwisata <br className="hidden sm:block" />
              <span className="text-brand-primary">
                Premium & Berkelas
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-8 font-sans"
            >
              Hadirkan kenyamanan perjalanan rombongan dengan armada terbaru Jetbus 5 SHD, chassis Mercedes-Benz & Hino, AC dingin merata, dan pengemudi profesional.
            </motion.p>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-semibold text-white/90"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>Jetbus 5 SHD Terbaru</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>Full Karaoke & Dispenser</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span>Inspeksi Keselamatan Berkala</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Quick Booking Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-brand-black">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-gray">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary block">
                    Formulir Reservasi Cepat
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-brand-black">
                    Cek Tarif & Jadwal
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Bus className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Nama Pemesan / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Contoh: Ibu Rina (Komunitas)"
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-2.5 sm:py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1.5">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-2.5 sm:py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1.5">
                      Tanggal Berangkat
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-2.5 sm:py-3 text-sm text-brand-black outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1.5">
                      Kota Tujuan
                    </label>
                    <input
                      type="text"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      placeholder="Cth: Bromo / Bali"
                      className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-2.5 sm:py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1.5">
                      Tipe Armada
                    </label>
                    <select
                      value={form.armada}
                      onChange={(e) => setForm({ ...form, armada: e.target.value })}
                      className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3 py-2.5 sm:py-3 text-sm text-brand-black outline-none transition-all font-medium appearance-none cursor-pointer"
                    >
                      {armadaOptions.map((opt, idx) => (
                        <option key={idx} value={idx === 0 ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-[#25D366]/20 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Cek Harga & Jadwal via WhatsApp</span>
                </button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  Konsultasi rute dan anggaran perjalanan gratis bersama tim kami.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
