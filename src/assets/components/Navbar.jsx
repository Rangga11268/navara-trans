import React, { useState, useEffect } from 'react';
import { Bus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Armada', href: '#fleet' },
    { name: 'Destinasi', href: '#destinations' },
    { name: 'Paket Wisata', href: '#packages' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer z-50">
          <div className={`p-2.5 rounded-xl transition-all duration-500 ${isScrolled ? 'bg-orange-600' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
            <Bus className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight leading-none text-white drop-shadow-sm">
              NAVARA
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500 drop-shadow-sm">
              Pariwisata
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-slate-900/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white hover:font-bold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full group-hover:left-0 duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
           <div className="flex flex-col text-right mr-2 text-white">
              <span className="text-[10px] uppercase text-slate-400 font-bold">Hotline 24 Jam</span>
              <span className="text-sm font-bold font-mono tracking-wide">031-8899-1234</span>
           </div>
           <button className="bg-white text-slate-900 hover:bg-orange-500 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg">
            Cek Harga
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2 bg-white/10 rounded-lg backdrop-blur-sm active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
         {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-bold text-white hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-1 bg-slate-800 rounded-full"></div>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold w-3/4">Hubungi Marketing</button>
      </div>
    </nav>
  );
};

export default Navbar;