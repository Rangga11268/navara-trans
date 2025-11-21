import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Budi Santoso", role: "Corporate Trip", text: "Pelayanan sangat memuaskan, bus bersih dan wangi. Driver sangat ramah!" },
  { name: "Siti Aminah", role: "Family Gathering", text: "Fasilitas karaoke bikin perjalanan ke Jogja jadi nggak berasa capek. Top!" },
  { name: "Rahmat Hidayat", role: "Study Tour", text: "Harga sangat bersaing tapi kualitas bintang lima. Recommended banget." },
  { name: "Dewi Lestari", role: "Wedding Guest", text: "Unit terbaru 2025 beneran keren. AC dingin, kursi nyaman banget." },
  { name: "Andi Wijaya", role: "Ziarah Wali", text: "Perjalanan aman dan nyaman. Crew sangat membantu lansia." },
  { name: "Maya Putri", role: "Private Charter", text: "Booking mudah, admin fast respon. Bakal langganan terus." },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">Testimoni</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Kata Mereka</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-6 whitespace-nowrap py-4">
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex-shrink-0 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-sm mb-6 italic whitespace-normal leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.role}</p>
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
