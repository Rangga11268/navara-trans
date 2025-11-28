import React from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-navy-900 pt-12 pb-8 md:pt-20 md:pb-10 border-t border-white/5"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/img/logoNoBg.png"
                alt="Navara Trans Logo"
                className="w-14 md:w-16 h-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-black text-white leading-none">
                  NAVARA
                </span>
                <span className="text-[8px] md:text-[10px] font-bold text-gold-500 uppercase tracking-widest">
                  TRIP
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed pr-4 text-sm md:text-base">
              Partner transportasi wisata terpercaya di Jawa Timur. Garasi &
              Kantor pusat kami berlokasi strategis di Surabaya Selatan untuk
              melayani penjemputan area Gerbangkertosusila.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/navara_trip/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors"
                aria-label="Instagram Navara Trip"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors"
                aria-label="Facebook Navara Trip"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:info@navaratrip.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-colors"
                aria-label="Email Navara Trip"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 md:mb-6">
              Unit Sewa
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-gold-500 transition-colors"
                >
                  Big Bus SHD (45-59)
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-gold-500 transition-colors"
                >
                  Medium Bus (30-35)
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-gold-500 transition-colors"
                >
                  Hiace / Elf Long
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="hover:text-gold-500 transition-colors"
                >
                  Luxury Bus
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 md:mb-6">
              Layanan
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Sewa Harian
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Paket Study Tour
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Ziarah Wali
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Antar Jemput Bandara
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 md:mb-6">
              Kantor & Garasi
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-500 mt-1 shrink-0" />
                <span>Jl. Merr Boulevard No. 22, Rungkut, Surabaya</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone size={16} className="text-gold-500" />
                <a
                  href="https://wa.me/6281113556799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  0811-3556-799 (WA)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500" />
                <a
                  href="mailto:info@navaratrip.com"
                  className="hover:text-gold-500 transition-colors"
                >
                  info@navaratrip.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium text-center md:text-left">
          <p>&copy; 2025 PT Sasmito Navara Trip. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
