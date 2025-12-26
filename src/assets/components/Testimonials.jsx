import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Budi Santoso",
    role: "Corporate Trip",
    text: "Pelayanan sangat memuaskan, bus bersih dan wangi. Driver sangat ramah!",
  },
  {
    name: "Siti Aminah",
    role: "Family Gathering",
    text: "Fasilitas karaoke bikin perjalanan ke Jogja jadi nggak berasa capek. Top!",
  },
  {
    name: "Rahmat Hidayat",
    role: "Study Tour",
    text: "Harga sangat bersaing tapi kualitas bintang lima. Recommended banget.",
  },
  {
    name: "Dewi Lestari",
    role: "Wedding Guest",
    text: "Unit terbaru 2025 beneran keren. AC dingin, kursi nyaman banget.",
  },
  {
    name: "Andi Wijaya",
    role: "Ziarah Wali",
    text: "Perjalanan aman dan nyaman. Crew sangat membantu lansia.",
  },
  {
    name: "Maya Putri",
    role: "Private Charter",
    text: "Booking mudah, admin fast respon. Bakal langganan terus.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mt-2 uppercase">
          Trusted by Thousands.
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-gray to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-gray to-transparent z-10"></div>

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-6 whitespace-nowrap py-4">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-brand-black/5 flex-shrink-0 hover:border-brand-black/20 transition-all duration-300"
            >
              <div className="flex gap-1 text-brand-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-black/70 text-lg mb-8 italic whitespace-normal leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center text-white font-display font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-black font-display uppercase tracking-wide text-sm">
                    {review.name}
                  </h4>
                  <p className="text-brand-black/40 text-xs font-bold uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
