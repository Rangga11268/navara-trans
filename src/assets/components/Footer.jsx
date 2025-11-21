import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100" id="contact">
      <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
               <div className="flex items-center gap-3">
                  <img 
                    src="/assets/img/logoNoBg.png" 
                    alt="Navara Trans Logo" 
                    className="w-16 h-auto object-contain"
                  />
                  <div className="flex flex-col">
                     <span className="text-2xl font-black text-slate-900 leading-none">NAVARA</span>
                     <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Surabaya</span>
                  </div>
               </div>
               <p className="text-slate-500 leading-relaxed pr-4">
                  Partner transportasi wisata terpercaya di Jawa Timur. 
                  Garasi & Kantor pusat kami berlokasi strategis di Surabaya Selatan untuk melayani penjemputan area Gerbangkertosusila.
               </p>
               <div className="flex gap-4">
                  <a href="https://www.instagram.com/navara_trip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                     <Instagram size={18} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                     <Facebook size={18} />
                  </a>
                  <a href="mailto:info@navaratrip.com" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                     <Mail size={18} />
                  </a>
               </div>
            </div>
            
            <div>
               <h4 className="font-bold text-slate-900 mb-6">Unit Sewa</h4>
               <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#fleet" className="hover:text-orange-600">Big Bus SHD (45-59)</a></li>
                  <li><a href="#fleet" className="hover:text-orange-600">Medium Bus (30-35)</a></li>
                  <li><a href="#fleet" className="hover:text-orange-600">Hiace / Elf Long</a></li>
                  <li><a href="#fleet" className="hover:text-orange-600">Luxury Bus</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-slate-900 mb-6">Layanan</h4>
               <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#booking" className="hover:text-orange-600">Sewa Harian</a></li>
                  <li><a href="#booking" className="hover:text-orange-600">Paket Study Tour</a></li>
                  <li><a href="#booking" className="hover:text-orange-600">Ziarah Wali</a></li>
                  <li><a href="#booking" className="hover:text-orange-600">Antar Jemput Bandara</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-slate-900 mb-6">Kantor & Garasi</h4>
               <ul className="space-y-4 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                     <MapPin size={16} className="text-orange-600 mt-1 shrink-0"/> 
                     <span>Jl. Merr Boulevard No. 22, Rungkut, Surabaya</span>
                  </li>
                  <li className="flex items-center gap-2">
                     <Smartphone size={16} className="text-orange-600"/> 
                     <a href="https://wa.me/6281113556799" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">0811-3556-799 (WA)</a>
                  </li>
                  <li className="flex items-center gap-2">
                     <Mail size={16} className="text-orange-600"/> 
                     <a href="mailto:info@navaratrip.com" className="hover:text-orange-600">info@navaratrip.com</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <p>&copy; 2025 PT Navara Pariwisata Surabaya. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-slate-900">Privacy</a>
               <a href="#" className="hover:text-slate-900">Terms</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;