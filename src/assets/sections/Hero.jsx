import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col pt-24 pb-8 md:pb-12 overflow-hidden bg-brand-gray">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40 bg-grid-pattern bg-[length:40px_40px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center flex-grow">
        {/* Main Typography Stagger */}
        <div className="space-y-2 mt-12 md:mt-24 mb-16 relative">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter text-brand-black uppercase">
              JOURNEY
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex items-center gap-4 md:gap-8"
          >
            <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter text-transparent text-stroke text-stroke-black uppercase">
              BEYOND
            </h1>
            <div className="hidden md:block h-[1px] flex-grow bg-brand-black/20 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-brand-black w-1/2"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter text-brand-primary uppercase">
              LIMITS<span className="text-brand-black">.</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Section: Info + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-12">
          <div className="col-span-1 md:col-span-5 relative">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img
                src="/assets/img/hero2.jpg"
                alt="Luxury Travel"
                className="w-full h-full object-cover"
                fetchPriority="high"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <motion.div
                style={{ y }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl"
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-brand-primary rounded-full">
                    <Play size={16} fill="white" />
                  </div>
                  <span className="font-display font-bold text-sm tracking-wider">
                    WATCH THE FILM
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-brand-black/70 font-medium max-w-2xl leading-relaxed"
            >
              Experience Indonesia's finest destinations with{" "}
              <span className="text-brand-black font-bold">
                Navara Premium Transport
              </span>
              . Where comfort meets heavy-duty performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/fleet"
                className="px-8 py-4 bg-brand-black text-white font-display font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all duration-300 rounded-full flex items-center gap-4 group active:scale-95"
              >
                Explore Fleet
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 px-6 border-l border-brand-black/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold font-display text-brand-black leading-none">
                    4.9/5.0
                  </span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Trusted by 1000+
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
