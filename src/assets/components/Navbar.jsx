import React, { useState, useEffect } from 'react';
import { Bus, Menu, X, Phone, ChevronRight } from 'lucide-react';

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
      className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer z-50">
          <img 
            src="/assets/img/logoNoBg.png" 
            alt="Navara Trans Logo" 
            className="w-12 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-white drop-shadow-sm group-hover:tracking-normal transition-all duration-500">
              NAVARA
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500 drop-shadow-sm group-hover:text-white transition-colors duration-300">
              TRANS
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-1 bg-slate-950/50 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 transition-all duration-500 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2 bg-white/10 rounded-xl backdrop-blur-sm active:scale-95 transition-transform border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-3xl font-black text-white hover:text-orange-500 transition-all transform hover:scale-110"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-1 bg-slate-800 rounded-full my-4"></div>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold w-3/4 shadow-xl shadow-orange-900/20 active:scale-95 transition-all">
            Hubungi Marketing
          </button>
      </div>
    </nav>
  );
};

export default Navbar;