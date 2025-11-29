import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Fleet", path: "/fleet" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Check if we're on home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled || isMobileMenuOpen || !isHomePage
            ? "bg-navy-900/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="group flex flex-col items-start z-50 relative"
            >
              <span className="text-xl md:text-2xl font-serif font-black tracking-tighter leading-none text-white drop-shadow-sm group-hover:tracking-normal transition-all duration-500">
                NAVARA
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-gold-500 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                TRIP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg shadow-black/5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                    isActive(link.path)
                      ? "text-navy-900 bg-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/6281113556799"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center gap-2 group border border-white/10"
              >
                <Phone
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy-900/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col min-h-full justify-start pt-24 pb-10 px-8 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="space-y-4 relative z-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-3xl font-serif font-black text-white/90 hover:text-gold-500 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-between group border-b border-white/5 pb-4">
                  {link.name}
                  <ChevronRight
                    size={24}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500"
                  />
                </span>
              </Link>
            ))}

            <div
              className={`pt-8 transform transition-all duration-500 delay-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href="https://wa.me/6281113556799"
                className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-gold-900/20"
              >
                <Phone size={20} />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
