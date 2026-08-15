import React, { useState } from "react";
import { Star, MapPin, Send, Bus, Calendar, Compass, Shield } from "lucide-react";
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

    const message = `Halo Navara Trans! Saya ${form.name} ingin cek ketersediaan dan tarif sewa ${form.armada || "bus pariwisata"} untuk tujuan ${form.destination || "wisata"} pada tanggal ${form.date || "yang ditentukan"}. Mohon informasinya. Terima kasih!`;
    openWhatsApp(message);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-24 bg-brand-black overflow-hidden">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/img/hero2.webp"
          alt="Navara Luxury Fleet"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/80 to-brand-black" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Luxury Typography (7 cols) */}
          <div className="lg:col-span-7">
            {/* Top Minimal Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-brand-primary/30 backdrop-blur-md mb-6"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-brand-primary fill-brand-primary" />
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-wider">
                4.9/5.0 Luxury Travel Standard
              </span>
              <span className="w-1 h-1 rounded-full bg-brand-primary" />
              <span className="text-xs text-white/70">Surabaya & Sidoarjo</span>
            </motion.div>

            {/* Giant Luxury Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] uppercase mb-6"
            >
              SEWA BUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#e5bc7a] to-white">
                EXECUTIVE CLASS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-8"
            >
              Layanan transportasi pariwisata berkelas di Jawa Timur. Menghadirkan armada Jetbus 5 SHD dengan suspensi udara, kabin senyap, dan kru profesional.
            </motion.p>

            {/* Micro Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg"
            >
              <div>
                <div className="font-display font-black text-2xl text-brand-primary">2025</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Unit Jetbus 5</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-white">50 Seat</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Royal Series</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-brand-primary">100%</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Uji Kelaikan</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dark Bronze Luxury Reservation Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#121214] border border-brand-primary/30 rounded-3xl p-7 sm:p-9 shadow-2xl relative">
              {/* Corner Bronze Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Title */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary block mb-1">
                    Direct Booking
                  </span>
                  <h3 className="font-display font-bold text-xl text-white uppercase">
                    Cek Tarif & Jadwal
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                  <Bus className="w-5 h-5" />
                </div>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Nama Pemesan / Perusahaan
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Contoh: Bpk. Dharmawan"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Tanggal Berangkat
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all font-medium [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Kota Tujuan
                    </label>
                    <input
                      type="text"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      placeholder="Cth: Bromo / Bali"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Pilihan Armada
                    </label>
                    <select
                      value={form.armada}
                      onChange={(e) => setForm({ ...form, armada: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-3.5 py-3 text-sm text-white outline-none transition-all font-medium appearance-none cursor-pointer [color-scheme:dark]"
                    >
                      {armadaOptions.map((opt, idx) => (
                        <option key={idx} value={idx === 0 ? "" : opt} className="bg-[#121214] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 bg-brand-primary hover:bg-[#a87f3b] text-brand-black font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-primary/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <p className="text-center text-xs text-white/50 pt-1">
                  Konsultasi rute & penyesuaian kebutuhan rombongan gratis.
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
