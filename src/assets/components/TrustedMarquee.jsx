import React from "react";
import { Star } from "lucide-react";

const TrustedMarquee = () => {
  return (
    <div className="bg-brand-black py-4 overflow-hidden relative z-20 border-b border-white/10">
      <div className="flex w-max animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-white/50 font-display font-bold uppercase tracking-[0.2em] text-sm whitespace-nowrap">
              Trusted by Thousands
            </span>
            <Star size={12} className="text-brand-primary fill-brand-primary" />
            <span className="text-white/50 font-display font-bold uppercase tracking-[0.2em] text-sm whitespace-nowrap">
              Premium Service
            </span>
            <Star size={12} className="text-brand-primary fill-brand-primary" />
            <span className="text-white/50 font-display font-bold uppercase tracking-[0.2em] text-sm whitespace-nowrap">
              Best in Class
            </span>
            <Star size={12} className="text-brand-primary fill-brand-primary" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedMarquee;
