import React from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-brand-black pt-32 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-[0.03]">
        <h1 className="font-display font-black text-[25vw] text-white leading-[0.7] text-center tracking-tighter">
          NAVARA
        </h1>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/assets/img/logoNoBg.png"
                alt="Navara Logo"
                className="w-14 h-14 object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black text-white leading-none tracking-tighter uppercase">
                  NAVARA
                </span>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] ml-0.5">
                  Transport
                </span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed pr-4 text-sm font-medium max-w-sm">
              Your trusted tourism transport partner in East Java. Our central
              garage & office is strategically located in Surabaya to serve the
              greater region.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/navara_trip/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram Navara Trip"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook Navara Trip"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@navaratrip.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-110 transition-all duration-300"
                aria-label="Email Navara Trip"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Our Fleet
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-brand-red transition-colors flex items-center gap-2 group"
                >
                  Big Bus SHD (45-59)
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-brand-red transition-colors flex items-center gap-2 group"
                >
                  Medium Bus (30-35)
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-brand-red transition-colors flex items-center gap-2 group"
                >
                  Hiace / Elf Long
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                >
                  Luxury Bus
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                >
                  Daily Charter
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                >
                  Study Tour
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                >
                  Religious Trip
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                >
                  Airport Transfer
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Office & Garage
            </h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-brand-primary mt-0.5 shrink-0"
                />
                <span>Jl. Merr Boulevard No. 22, Rungkut, Surabaya</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={18} className="text-brand-primary shrink-0" />
                <a
                  href="https://wa.me/6281113556799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0811-3556-799 (WA)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <a
                  href="mailto:info@navaratrip.com"
                  className="hover:text-white transition-colors"
                >
                  info@navaratrip.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-bold uppercase tracking-widest text-center md:text-left">
          <p>&copy; 2025 PT Sasmito Navara Trip. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
