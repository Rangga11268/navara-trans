import React from "react";
import { motion } from "framer-motion";
import { Star, Bus, Clock, Award } from "lucide-react";

const stats = [
  { icon: Bus, value: "4+", label: "Units Ready" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Fast Response" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StatsBar = () => {
  return (
    <div className="bg-brand-black py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-primary/5 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <stat.icon size={22} className="text-brand-primary" />
              </div>
              <p className="text-3xl md:text-5xl font-display font-black text-white leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBar;
