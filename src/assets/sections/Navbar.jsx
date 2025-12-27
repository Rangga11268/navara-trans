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

  const navLinksLeft = [
    { name: "Beranda", path: "/" },
    { name: "Armada", path: "/fleet" },
    { name: "Layanan", path: "/services" },
  ];

  const navLinksRight = [
    { name: "Tentang", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="relative flex items-center justify-between px-6 py-3 bg-white text-brand-black rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-6xl transition-all duration-300 backdrop-blur-sm bg-white/90 border border-white/40">
          {/* Mobile Menu Button (Left on Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-brand-black hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Nav (Desktop) */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-start">
            {navLinksLeft.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-widest text-brand-black/70 hover:text-brand-black hover:bg-black/5 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-0 mx-auto md:mx-4 shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/assets/img/logoNoBg.png"
                alt="Navara Logo"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-xl tracking-tighter text-brand-black">
                  NAVARA
                </span>
                <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-brand-primary uppercase">
                  Transport
                </span>
              </div>
            </Link>
          </div>

          {/* Right Nav (Desktop) */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-end">
            {navLinksRight.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-widest text-brand-black/70 hover:text-brand-black hover:bg-black/5 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/6281113556799"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-brand-black text-white rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group hover:bg-brand-primary hover:scale-105 active:scale-95 shadow-lg shadow-brand-black/20"
            >
              <span>Pesan</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Placeholder (Right) to balance Flex */}
          <div className="md:hidden w-10"></div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 md:hidden text-brand-black"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {[...navLinksLeft, ...navLinksRight].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-display font-black text-4xl hover:text-brand-primary transition-colors">
                      {link.name}
                    </span>
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
                  className="px-8 py-4 bg-brand-black text-white rounded-full font-display font-bold text-lg uppercase tracking-wider flex items-center gap-2"
                >
                  Yuk Ngobrol <ArrowUpRight />
                </a>
              </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
