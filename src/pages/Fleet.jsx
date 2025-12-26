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

      <div className="pt-24 pb-24 bg-brand-gray min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h1 className="font-display font-black text-5xl md:text-7xl text-brand-black leading-none mb-4">
                ARMADA <br /> <span className="text-brand-red">PREMIUM.</span>
              </h1>
              <p className="text-brand-black/60 font-medium max-w-lg">
                Pilih kendaraan yang pas buat perjalananmu itu penting banget.
                Kita punya banyak pilihan unit premium yang bisa disesuaikan
                sama kebutuhanmu.
              </p>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-black text-white border-brand-black"
                      : "bg-transparent text-brand-black/50 border-brand-black/10 hover:border-brand-black/40 hover:text-brand-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
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
                  <div className="bg-white rounded-[2rem] overflow-hidden border border-brand-black/5 hover:border-brand-black/10 transition-all duration-500 hover:shadow-2xl relative">
                    {/* Image Container */}
                    <div className="relative h-[280px] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/ opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                      {/* Tag */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex justify-between items-end mb-4">
                        <div>
                          <h3 className="font-display font-bold text-2xl text-brand-black mb-1">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-brand-black/50 text-sm font-medium">
                            <Car size={14} />
                            <span>{item.capacity}</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-brand-black/5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase bg-brand-gray text-brand-black/60 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
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
