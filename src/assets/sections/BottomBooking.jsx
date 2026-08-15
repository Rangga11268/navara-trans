import React, { useState } from "react";
import { Bus, MapPin, Phone, Building, ArrowRight, ShieldCheck } from "lucide-react";
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

const BottomBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    origin: "Surabaya",
    destination: "",
    date: "",
    duration: "",
    armada: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const parts = [];
    parts.push(`Halo Navara Trans! Saya ${form.name} ingin reservasi armada pariwisata:`);
    if (form.armada) parts.push(`• Unit: ${form.armada}`);
    if (form.origin) parts.push(`• Titik Jemput: ${form.origin}`);
    if (form.destination) parts.push(`• Tujuan: ${form.destination}`);
    if (form.date) parts.push(`• Tanggal: ${form.date}`);
    if (form.duration) parts.push(`• Durasi: ${form.duration} hari`);
    if (form.note) parts.push(`• Catatan: ${form.note}`);
    parts.push(`\nMohon info ketersediaan unit dan penawaran tarif terbaiknya. Terima kasih!`);

    const message = parts.join("\n");
    openWhatsApp(message);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#0B0B0D] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-xs font-bold text-brand-primary uppercase tracking-widest mb-4"
          >
            <span>Reservasi Resmi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.1]"
          >
            Rencanakan Perjalanan <br />
            <span className="text-brand-primary">Bersama Navara</span>
          </motion.h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Isi detail singkat di bawah ini. Tim kami akan segera merespon via WhatsApp untuk konfirmasi armada dan penyesuaian rute.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Luxury Dark Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#141417] border border-brand-primary/30 rounded-3xl p-7 sm:p-9 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Nama Pemesan / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Lengkap"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Nomor WhatsApp Aktif
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Kota Penjemputan
                  </label>
                  <input
                    type="text"
                    value={form.origin}
                    onChange={(e) => setForm({ ...form, origin: e.target.value })}
                    placeholder="Cth: Surabaya"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Kota Tujuan
                  </label>
                  <input
                    type="text"
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    placeholder="Cth: Bali / Bromo"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Durasi (Hari)
                  </label>
                  <select
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-3.5 py-3 text-sm text-white outline-none transition-all font-medium appearance-none cursor-pointer [color-scheme:dark]"
                  >
                    <option value="" className="bg-[#141417] text-white">Pilih Durasi...</option>
                    <option value="1" className="bg-[#141417] text-white">1 Hari (PP)</option>
                    <option value="2" className="bg-[#141417] text-white">2 Hari 1 Malam</option>
                    <option value="3" className="bg-[#141417] text-white">3 Hari 2 Malam</option>
                    <option value="4" className="bg-[#141417] text-white">4 Hari 3 Malam</option>
                    <option value="5" className="bg-[#141417] text-white">5 Hari Ke Atas</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Tipe Armada Pilihan
                  </label>
                  <select
                    value={form.armada}
                    onChange={(e) => setForm({ ...form, armada: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-primary rounded-xl px-3.5 py-3 text-sm text-white outline-none transition-all font-medium appearance-none cursor-pointer [color-scheme:dark]"
                  >
                    {armadaOptions.map((opt, idx) => (
                      <option key={idx} value={idx === 0 ? "" : opt} className="bg-[#141417] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-brand-primary hover:bg-[#a87f3b] text-brand-black font-display font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-primary/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <span>Kirim Permintaan via WhatsApp</span>
              </button>

              <p className="text-center text-xs text-white/40 pt-1">
                Layanan reservasi aktif 24 jam &bull; Respon cepat dari tim operasional Navara
              </p>
            </form>
          </motion.div>

          {/* Right: Executive Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Corporate Card */}
            <div className="bg-[#141417] border border-white/10 rounded-3xl p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/15 border border-brand-primary/30 text-brand-primary flex items-center justify-center font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase">
                    NAVARA TRANS
                  </h3>
                  <p className="text-brand-primary font-bold text-xs uppercase tracking-wider">
                    Executive Charter & Tour Specialist
                  </p>
                </div>
              </div>

              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Penyedia bus pariwisata eksekutif berbasis di Surabaya & Sidoarjo. Mengutamakan kenyamanan interior, ketepatan jadwal, dan keselamatan perjalanan rombongan Anda.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>Pool & Kantor: Surabaya & Sidoarjo, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Hotline / WA: 0811-1355-6799</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-gradient-to-r from-brand-primary to-[#a87f3b] text-brand-black rounded-3xl p-6 shadow-xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-black/70 block">
                  Konsultasi Cepat
                </span>
                <h4 className="font-display font-black text-lg text-brand-black uppercase">
                  Butuh Rekomendasi Rute?
                </h4>
              </div>
              <button
                onClick={() => openWhatsApp("Halo Navara Trans! Saya butuh konsultasi rute perjalanan dan armada bus.")}
                className="px-5 py-3 rounded-xl bg-brand-black text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-black/90 transition-all shrink-0 cursor-pointer"
              >
                Chat Sekarang
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default BottomBooking;
