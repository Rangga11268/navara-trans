import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-navy-900 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-slate-600 text-lg">
            Siap merencanakan perjalanan Anda? Hubungi kami untuk konsultasi
            gratis atau kunjungi kantor kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover-lift animate-scale-in delay-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-900 mb-2">
              Telepon / WhatsApp
            </h3>
            <p className="text-slate-500 mb-4">Siap melayani 24 Jam</p>
            <a
              href="https://wa.me/6281113556799"
              className="text-gold-600 font-bold hover:underline"
            >
              0811-3556-799
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover-lift animate-scale-in delay-200">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-900 mb-2">
              Alamat Kantor
            </h3>
            <p className="text-slate-500 mb-4">Kunjungi kami di Surabaya</p>
            <p className="text-navy-900 font-medium">
              Jl. Merr Boulevard No. 22, Rungkut, Surabaya
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover-lift animate-scale-in delay-300">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-900 mb-2">
              Email
            </h3>
            <p className="text-slate-500 mb-4">
              Kirim penawaran atau pertanyaan
            </p>
            <a
              href="mailto:info@navaratrip.com"
              className="text-gold-600 font-bold hover:underline"
            >
              info@navaratrip.com
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.385502669263!2d112.77587637500055!3d-7.310506692696956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa5160000001%3A0x5677610000000000!2sSurabaya!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.5rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-all"
                    placeholder="0812..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-all"
                  placeholder="Tanya Harga / Booking"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-all resize-none"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold hover:bg-gold-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
