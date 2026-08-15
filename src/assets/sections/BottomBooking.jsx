import React, { useState } from "react";
import { Bus, MapPin, Phone, Building } from "lucide-react";
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
    parts.push(`Halo Navara Trans! Saya ${form.name} mau reservasi bus pariwisata:`);
    if (form.armada) parts.push(`• Unit: ${form.armada}`);
    if (form.origin) parts.push(`• Penjemputan: ${form.origin}`);
    if (form.destination) parts.push(`• Tujuan: ${form.destination}`);
    if (form.date) parts.push(`• Tanggal: ${form.date}`);
    if (form.duration) parts.push(`• Durasi: ${form.duration} hari`);
    if (form.note) parts.push(`• Catatan: ${form.note}`);
    parts.push(`\nMohon info ketersediaan armada dan penawaran tarif terbaiknya. Terima kasih!`);

    const message = parts.join("\n");
    openWhatsApp(message);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-bold text-brand-primary uppercase tracking-widest mb-3.5"
          >
            <Bus className="w-3.5 h-3.5" />
            <span>Formulir Reservasi Resmi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-black tracking-tight mb-3 uppercase"
          >
            Wujudkan Perjalanan <span className="text-brand-primary">Impian Anda</span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Isi formulir singkat di bawah ini. Tim reservasi kami akan langsung merespon via WhatsApp untuk konfirmasi ketersediaan unit.
          </p>
        </div>

        {/* 2 Column Layout: Form (7 cols) & Company Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-brand-black/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Anda atau Komunitas"
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0812-3456-xxxx"
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Kota Penjemputan
                  </label>
                  <input
                    type="text"
                    value={form.origin}
                    onChange={(e) => setForm({ ...form, origin: e.target.value })}
                    placeholder="Cth: Surabaya / Sidoarjo"
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Kota Tujuan
                  </label>
                  <input
                    type="text"
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    placeholder="Cth: Bali / Jogja"
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Durasi (Hari)
                  </label>
                  <select
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-3 text-sm text-brand-black outline-none transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option value="">Pilih Durasi...</option>
                    <option value="1">1 Hari (PP)</option>
                    <option value="2">2 Hari 1 Malam</option>
                    <option value="3">3 Hari 2 Malam</option>
                    <option value="4">4 Hari 3 Malam</option>
                    <option value="5">5 Hari Ke Atas</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Tanggal Berangkat
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-black outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-black mb-1.5">
                    Tipe Armada Pilihan
                  </label>
                  <select
                    value={form.armada}
                    onChange={(e) => setForm({ ...form, armada: e.target.value })}
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-primary focus:bg-white rounded-lg px-3.5 py-3 text-sm text-brand-black outline-none transition-all font-medium appearance-none cursor-pointer"
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
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-[#25D366]/20 flex items-center justify-center gap-2.5 text-base cursor-pointer"
              >
                <span>Kirim Permintaan Reservasi via WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-500 pt-1">
                Layanan pelanggan aktif setiap hari &bull; Respon cepat dari tim operasional Navara
              </p>
            </form>
          </motion.div>

          {/* Right: Company Credentials & Contact Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Legal Business Card */}
            <div className="bg-white border border-brand-black/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-brand-black uppercase">
                    NAVARA TRANS
                  </h3>
                  <p className="text-brand-primary font-bold text-xs uppercase tracking-wider">
                    Premium Ground Transport & Tour
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Penyedia layanan sewa bus pariwisata eksekutif dan paket tour terpercaya dengan armada Jetbus 5 terbaru. Siap melayani rombongan keluarga, instansi, sekolah, dan corporate gathering.
              </p>

              <div className="space-y-3 pt-4 border-t border-brand-gray">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-black">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>Pool & Garasi: Surabaya & Sidoarjo, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-black">
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Hotline / WhatsApp: 0811-1355-6799</span>
                </div>
              </div>
            </div>

            {/* Direct Call Banner */}
            <div className="bg-brand-black text-white rounded-2xl p-6 shadow-md flex items-center justify-between gap-4 border border-brand-black">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-primary block">
                  Butuh Konsultasi Rute?
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  Hubungi Admin Kami
                </h4>
              </div>
              <button
                onClick={() => openWhatsApp("Halo Navara Trans! Saya butuh konsultasi rute dan ketersediaan armada bus.")}
                className="px-5 py-3 rounded-lg bg-brand-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-primary/90 transition-all shrink-0 cursor-pointer"
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
