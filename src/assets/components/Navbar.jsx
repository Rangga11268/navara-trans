import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Armada", path: "/fleet" },
    { name: "Layanan", path: "/services" },
    { name: "Tentang", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 relative group">
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-black text-2xl tracking-tighter transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-brand-black"
                    : "text-brand-black md:text-brand-black"
                  /* Note: Assuming Hero usually needs dark logo unless hero is dark. 
                   For now, defaulting to black logo for 'Clean White' aesthetic. 
                   If Hero is dark, we might need to toggle this. */
                }`}
              >
                NAVARA
              </span>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-brand-red uppercase">
                Transport
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group overflow-hidden"
              >
                <span
                  className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isScrolled ? "text-brand-black" : "text-brand-black"
                  }`}
                >
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}

            <a
              href="https://wa.me/6281113556799"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-brand-black text-white rounded-full font-display text-xs font-bold uppercase tracking-wider hover:bg-brand-red transition-all duration-300 flex items-center gap-2 group active:scale-95"
            >
              <span>Pesan Sekarang</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-brand-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display font-black text-3xl md:text-5xl text-brand-black hover:text-transparent hover:text-stroke hover:text-stroke-black transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/6281113556799"
                  className="inline-flex items-center gap-2 border-b-2 border-brand-red pb-1 text-xl font-bold font-display"
                >
                  Yuk Ngobrol <ArrowUpRight />
                </a>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
