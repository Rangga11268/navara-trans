import React, { useState } from "react";
import { fleetData } from "../data/fleetData";
import { ArrowRight, Filter } from "lucide-react";
import FleetModal from "./assets/components/FleetModal";

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
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-navy-900 mb-6">
            Armada <span className="text-gold-600">Kami</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Pilihan unit terbaik untuk kenyamanan perjalanan Anda. Dari Big Bus
            mewah hingga Hiace yang lincah.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-lg scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              onClick={() => handleFleetClick(item)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-navy-900">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="text-gold-500 font-bold text-sm">
                      {item.capacity}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FleetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fleet={selectedFleet}
      />
    </div>
  );
};

export default Fleet;
