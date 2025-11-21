import React, { useState, useEffect } from 'react';
import { Bus, Menu, X, Phone, ChevronRight, Instagram, Facebook, Mail } from 'lucide-react';

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Armada', href: '#fleet' },
    { name: 'Destinasi', href: '#destinations' },
    { name: 'Paket Wisata', href: '#packages' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer z-50 relative">
            <img 
              src="/assets/img/logoNoBg.png" 
              alt="Navara Trans Logo" 
              className="w-10 md:w-12 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white drop-shadow-sm group-hover:tracking-normal transition-all duration-500">
                NAVARA
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500 drop-shadow-sm group-hover:text-white transition-colors duration-300">
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
            className="md:hidden text-white z-50 p-2 bg-white/10 rounded-xl backdrop-blur-sm active:scale-95 transition-transform border border-white/10 hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-over Drawer */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-slate-950 z-[70] shadow-2xl border-l border-white/10 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-8">
             <div className="flex items-center gap-3">
                <img src="/assets/img/logoNoBg.png" alt="Logo" className="w-8 h-auto" />
                <span className="text-lg font-black text-white tracking-tighter">NAVARA</span>
             </div>
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
             >
                <X size={20} />
             </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto space-y-2">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block p-4 rounded-xl text-lg font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-orange-500 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
             <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-900/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> Hubungi Marketing
             </button>
             
             <div className="flex justify-center gap-6 text-slate-500">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
             </div>
             
             <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest">
                © 2024 Navara Trans
             </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;