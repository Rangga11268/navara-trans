import React from "react";
import { Briefcase, Instagram } from "lucide-react";

const Promo = () => {
  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* New Grid Background */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-red/20 to-transparent opacity-20" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 text-brand-red font-bold mb-6 bg-brand-red/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-brand-red/20">
            <Briefcase size={16} /> Navara Corporate
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase">
            Business & <br />{" "}
            <span className="text-stroke text-transparent text-stroke-white">
              Leisure.
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
            Get special offers for Corporate Gatherings, Study Tours, or
            Pilgrimage Trips. Download our latest pricelist now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-3 bg-white hover:bg-brand-gray text-brand-black px-6 py-4 rounded-full transition-colors font-display font-bold uppercase tracking-wider text-sm">
              Download Pricelist
            </button>
            <a
              href="https://www.instagram.com/navara_trip/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full transition-colors font-display font-bold uppercase tracking-wider text-sm"
            >
              <Instagram size={18} /> @navara_trip
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-4xl font-display font-black text-white">4+</p>
              <p className="text-brand-gray text-xs font-bold uppercase tracking-wider">
                Units Ready
              </p>
            </div>
            <div>
              <p className="text-4xl font-display font-black text-white">10+</p>
              <p className="text-brand-gray text-xs font-bold uppercase tracking-wider">
                Years Exp.
              </p>
            </div>
            <div>
              <p className="text-4xl font-display font-black text-white">
                24/7
              </p>
              <p className="text-brand-gray text-xs font-bold uppercase tracking-wider">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* Visual Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-brand-red/20 rounded-[2.5rem] blur-3xl -z-10 animate-pulse"></div>
            <img
              src="/assets/img/Reservasi.jpg"
              alt="Reservasi Navara Trip"
              className="w-full h-auto rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border border-white/10 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
