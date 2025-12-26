import React from "react";
import { Phone } from "lucide-react";

const FloatingWA = () => {
  return (
    <a
      href="https://wa.me/6281113556799"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={28} className="fill-white" />
      <span className="absolute right-full mr-4 bg-white text-brand-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat With Us
      </span>
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>
    </a>
  );
};

export default FloatingWA;
