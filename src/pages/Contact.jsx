import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, subject, message } = formData;

    const whatsappMessage = `
*New Inquiry via Website*
------------------------
*Name:* ${name}
*Phone:* ${phone}
*Subject:* ${subject}
------------------------
*Message:*
${message}
        `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6281113556799?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Navara Trans for premium bus charter services in Surabaya and beyond."
      />

      <div className="pt-32 pb-20 bg-brand-gray min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Text & Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display font-black text-6xl md:text-8xl text-brand-black leading-none mb-6">
                  YUK <br />
                  <span className="text-brand-red">NGOBROL.</span>
                </h1>
                <p className="text-xl text-brand-black/70 font-medium max-w-md">
                  Siap buat jalan-jalan? Kita siap bantu rencanain tripmu biar
                  makin asik.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="group">
                  <a
                    href="https://wa.me/6281113556799"
                    target="_blank"
                    className="block p-6 bg-white border border-brand-black/5 rounded-2xl hover:border-brand-black/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-brand-gray rounded-full">
                        <Phone className="text-brand-black" size={24} />
                      </div>
                      <ArrowUpRight className="text-brand-black/30 group-hover:text-brand-red transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-1">
                      WhatsApp / Call
                    </h3>
                    <p className="text-brand-black/60 text-sm">0811-3556-799</p>
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-brand-black/5 rounded-2xl">
                    <div className="p-3 bg-brand-gray w-fit rounded-full mb-4">
                      <MapPin className="text-brand-black" size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      Kantor
                    </h3>
                    <p className="text-brand-black/60 text-sm">
                      Jl. Merr Boulevard No. 22, Rungkut, Surabaya
                    </p>
                  </div>

                  <a
                    href="mailto:info@navaratrip.com"
                    className="p-6 bg-white border border-brand-black/5 rounded-2xl group hover:border-brand-black/20 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-brand-gray w-fit rounded-full">
                        <Mail className="text-brand-black" size={24} />
                      </div>
                      <ArrowUpRight className="text-brand-black/30 group-hover:text-brand-red transition-colors" />
                    </div>

                    <h3 className="font-display font-bold text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-brand-black/60 text-sm">
                      info@navaratrip.com
                    </p>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-brand-black/5 h-fit"
            >
              <h3 className="font-display font-bold text-2xl mb-8">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-black/50">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Kamu"
                      className="w-full bg-brand-gray border-none rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-brand-red/20 focus:text-brand-black transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-black/50">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="081..."
                      className="w-full bg-brand-gray border-none rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-brand-red/20 focus:text-brand-black transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-black/50">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tanya harga / Booking"
                    className="w-full bg-brand-gray border-none rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-brand-red/20 focus:text-brand-black transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-black/50">
                    Pesan
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritain rencana trip kamu..."
                    className="w-full bg-brand-gray border-none rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-brand-red/20 focus:text-brand-black transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-black text-white font-display font-bold uppercase tracking-widest rounded-xl hover:bg-brand-red transition-colors duration-300 shadow-lg shadow-brand-red/20"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
