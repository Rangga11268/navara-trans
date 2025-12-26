import React, { useState } from "react";
import { fleetData } from "../data/fleetData";
import { ArrowUpRight, Filter, Car } from "lucide-react";
import FleetModal from "../assets/sections/FleetModal";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const Fleet = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Royal Series",
    "Minibus Series",
    "Luxury Minibus",
  ];

  const filteredFleet =
    activeCategory === "All"
      ? fleetData
      : fleetData.filter((item) => item.category === activeCategory);

  const handleFleetClick = (fleet) => {
    setSelectedFleet(fleet);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Our Fleet"
        description="Explore our premium bus charter fleet. From Luxury Big Buses to comfortable Hiace commuters."
      />

      <div className="pt-24 pb-16 md:pb-24 bg-brand-gray min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header & Filter */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block py-1 px-3 rounded-full bg-brand-black/5 border border-brand-black/10 text-brand-black text-xs font-bold uppercase tracking-widest mb-6"
              >
                Our Collection
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display font-black text-5xl md:text-7xl text-brand-black leading-tight mb-6"
              >
                ARMADA <br />{" "}
                <span className="text-brand-primary">PREMIUM.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-brand-black/60 font-medium text-lg leading-relaxed max-w-lg"
              >
                Setiap perjalanan punya cerita. Pilih kendaraan terbaik kami
                untuk menemani setiap kilometer momen berhargamu.
              </motion.p>
            </div>

            {/* Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-auto"
            >
              <div className="flex flex-wrap justify-center md:justify-start gap-3 bg-white p-2 rounded-3xl md:rounded-full border border-brand-black/5 shadow-sm w-full md:w-fit">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex-grow md:flex-grow-0 ${
                      activeCategory === cat
                        ? "bg-brand-black text-white shadow-lg shadow-brand-black/20"
                        : "bg-transparent text-brand-black/50 hover:bg-brand-gray hover:text-brand-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredFleet.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleFleetClick(item)}
                  className="group cursor-pointer"
                >
                  {/* Card */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-brand-black/5 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 relative h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-[320px] overflow-hidden bg-brand-gray/50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Tag */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full z-10 shadow-sm border border-white/20">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-display font-bold text-2xl text-brand-black mb-2 leading-tight group-hover:text-brand-primary transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-brand-black/50 text-sm font-bold uppercase tracking-wide">
                            <Car size={16} className="text-brand-primary" />
                            <span>{item.capacity}</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-brand-gray flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-45">
                          <ArrowUpRight size={22} />
                        </div>
                      </div>

                      <div className="mt-auto pt-6 border-t border-brand-black/5 flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase bg-brand-gray text-brand-black/60 px-3 py-1.5 rounded-lg border border-brand-black/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-[10px] font-bold uppercase bg-brand-gray text-brand-black/60 px-3 py-1.5 rounded-lg border border-brand-black/5">
                            +{item.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <FleetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fleet={selectedFleet}
        />
      </div>
    </>
  );
};

export default Fleet;
