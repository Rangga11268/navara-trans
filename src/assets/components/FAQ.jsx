import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apakah harga sewa sudah termasuk BBM & Driver?",
    answer:
      "Ya, mayoritas paket harga kami sudah All-In (Unit + BBM + Driver). Namun untuk biaya parkir, tol, dan makan driver biasanya belum termasuk. Tim kami akan memberikan rincian lengkap sebelum kamu deal.",
  },
  {
    question: "Bagaimana cara bookingnya?",
    answer:
      "Gampang banget! Cukup klik tombol WhatsApp yang ada di website, infokan tujuan, tanggal, dan jenis armada yang kamu butuhkan. Admin kami akan mengecek ketersediaan dan memberikan penawaran terbaik.",
  },
  {
    question: "Apakah bisa sewa lepas kunci (tanpa driver)?",
    answer:
      "Saat ini Navara Transport fokus pada layanan sewa dengan driver profesional. Hal ini demi keamanan unit dan kenyamanan perjalanan kamu selama di jalan.",
  },
  {
    question: "Kalau batal, apakah DP bisa kembali?",
    answer:
      "Jika pembatalan dilakukan maksimal H-7, kami bisa mengembalikan dana sebesar 50%. Namun jika pembatalan mendadak (kurang dari H-3), mohon maaf DP tidak dapat dikembalikan ya.",
  },
  {
    question: "Area layanan Navara mencakup mana saja?",
    answer:
      "Base kami ada di Surabaya, tapi kami melayani perjalanan ke seluruh Jawa dan Bali. Mau ke Malang, Bromo, Jogja, atau Bali Overland? Gas kami siap antar!",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gray rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Header Section */}
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 text-brand-red font-bold mb-6 bg-brand-red/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-brand-red/20">
              <HelpCircle size={16} /> FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-black mb-6 uppercase leading-tight">
              Paling Sering <br />{" "}
              <span className="text-brand-red">Ditanyakan.</span>
            </h2>
            <p className="text-brand-black/60 text-lg mb-8 leading-relaxed">
              Masih bingung? Cek pertanyaan umum di sini atau langsung chat
              admin kami kalau butuh info lebih detail.
            </p>
            <a
              href="https://wa.me/6281113556799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-brand-red pb-1 text-xl font-bold font-display hover:text-brand-red transition-colors"
            >
              Hubungi Kami via WA
            </a>
          </div>

          {/* Accordion Section */}
          <div className="md:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-brand-gray border transition-all duration-300 rounded-2xl overflow-hidden ${
                  activeIndex === index
                    ? "border-brand-red/20 shadow-lg bg-white"
                    : "border-transparent hover:border-brand-black/10"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-display font-bold text-lg uppercase tracking-wide transition-colors ${
                      activeIndex === index
                        ? "text-brand-red"
                        : "text-brand-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-brand-red text-white rotate-180"
                        : "bg-brand-black/5 text-brand-black"
                    }`}
                  >
                    {activeIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-brand-black/70 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
