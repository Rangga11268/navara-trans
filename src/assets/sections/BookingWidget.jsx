import React, { useState } from "react";
import {
  Bus,
  Map,
  MapPin,
  Calendar,
  Phone,
  Briefcase,
  ShieldCheck,
  Users,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";
import {
  openWhatsApp,
  createCharterBookingMessage,
  createTourInquiryMessage,
} from "../../utils/whatsapp.js";

const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState("charter"); // 'charter' or 'tour'
  const [isLoading, setIsLoading] = useState(false);

  // Charter form state
  const [charterData, setCharterData] = useState({
    pickup: "Surabaya (Kota/Bandara)",
    destination: "Bali (Overland)",
    date: "",
    unit: "Big Bus (50/59 Seat)",
  });

  // Handle charter form change
  const handleCharterChange = (field, value) => {
    setCharterData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle charter booking
  const handleCharterBooking = () => {
    if (!charterData.date) {
      alert("⚠️ Please select a date first");
      return;
    }

    setIsLoading(true);

    // Format date to Indonesian
    const formattedDate = new Date(charterData.date).toLocaleDateString(
      "id-ID",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    const message = createCharterBookingMessage({
      ...charterData,
      date: formattedDate,
    });

    setTimeout(() => {
      openWhatsApp(message);
      setIsLoading(false);
    }, 500);
  };

  // Handle tour inquiry
  const handleTourInquiry = () => {
    setIsLoading(true);
    const message = createTourInquiryMessage();

    setTimeout(() => {
      openWhatsApp(message);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div
      className="container mx-auto px-6 relative z-20 mt-0 lg:-mt-16 mb-20"
      id="booking"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/40 p-2 max-w-6xl mx-auto">
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-brand-black/5">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 p-1 bg-brand-gray rounded-xl w-full md:w-fit overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("charter")}
              className={`flex items-center gap-2 text-xs font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-wider ${
                activeTab === "charter"
                  ? "bg-brand-black text-white shadow-md"
                  : "text-brand-black/50 hover:text-brand-black"
              }`}
            >
              <Bus size={16} /> Charter Bus
            </button>
            <button
              onClick={() => setActiveTab("tour")}
              className={`flex items-center gap-2 text-xs font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-wider ${
                activeTab === "tour"
                  ? "bg-brand-black text-white shadow-md"
                  : "text-brand-black/50 hover:text-brand-black"
              }`}
            >
              <Map size={16} /> Open Trip
            </button>
          </div>

          {/* Form Content */}
          {activeTab === "charter" ? (
            <div className="flex flex-col lg:flex-row gap-6 items-end">
              {/* Pick-up & Destination */}
              <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto flex-1">
                <div className="bg-brand-gray border border-transparent focus-within:border-brand-black/10 focus-within:bg-white rounded-xl px-4 py-3 flex-1 transition-all group w-full">
                  <label className="text-[10px] uppercase font-bold text-brand-black/40 mb-1 tracking-wider block">
                    Pick Up
                  </label>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-brand-primary" />
                    <select
                      className="bg-transparent font-bold text-brand-black w-full outline-none appearance-none text-sm"
                      value={charterData.pickup}
                      onChange={(e) =>
                        handleCharterChange("pickup", e.target.value)
                      }
                    >
                      <option>Surabaya (Kota/Bandara)</option>
                      <option>Sidoarjo</option>
                      <option>Gresik</option>
                      <option>Malang</option>
                    </select>
                  </div>
                </div>

                <div className="bg-brand-gray border border-transparent focus-within:border-brand-black/10 focus-within:bg-white rounded-xl px-4 py-3 flex-1 transition-all group w-full">
                  <label className="text-[10px] uppercase font-bold text-brand-black/40 mb-1 tracking-wider block">
                    Destination
                  </label>
                  <div className="flex items-center gap-3">
                    <Map size={18} className="text-brand-primary" />
                    <select
                      className="bg-transparent font-bold text-brand-black w-full outline-none appearance-none text-sm"
                      value={charterData.destination}
                      onChange={(e) =>
                        handleCharterChange("destination", e.target.value)
                      }
                    >
                      <option>Bali (Overland)</option>
                      <option>Yogyakarta</option>
                      <option>Malang - Batu</option>
                      <option>Bromo</option>
                      <option>Ziarah Wali 5</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Bus Type */}
              <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto lg:basis-1/3">
                <div className="bg-brand-gray border border-transparent focus-within:border-brand-black/10 focus-within:bg-white rounded-xl px-4 py-3 flex-1 transition-all group">
                  <label className="text-[10px] uppercase font-bold text-brand-black/40 mb-1 tracking-wider block">
                    Date
                  </label>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-brand-primary" />
                    <input
                      type="date"
                      className="bg-transparent font-bold text-brand-black w-full outline-none text-sm uppercase"
                      value={charterData.date}
                      onChange={(e) =>
                        handleCharterChange("date", e.target.value)
                      }
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <div className="bg-brand-gray border border-transparent focus-within:border-brand-black/10 focus-within:bg-white rounded-xl px-4 py-3 flex-1 transition-all group">
                  <label className="text-[10px] uppercase font-bold text-brand-black/40 mb-1 tracking-wider block">
                    Unit
                  </label>
                  <div className="flex items-center gap-3">
                    <Bus size={18} className="text-brand-primary" />
                    <select
                      className="bg-transparent font-bold text-brand-black w-full outline-none appearance-none text-sm"
                      value={charterData.unit}
                      onChange={(e) =>
                        handleCharterChange("unit", e.target.value)
                      }
                    >
                      <option>Big Bus (50/59)</option>
                      <option>Medium (33)</option>
                      <option>Hiace (14)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleCharterBooking}
                disabled={isLoading}
                className="w-full lg:w-auto bg-brand-black hover:bg-brand-primary text-white px-8 py-4 rounded-xl font-display font-medium uppercase tracking-widest shadow-lg shadow-brand-black/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 h-full min-w-[180px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>CHECK NOW</>
                )}
              </button>
            </div>
          ) : (
            // Tour Package Form
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-6 bg-brand-gray rounded-2xl border border-brand-black/5">
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-full text-brand-primary shadow-sm">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h4 className="font-display font-black text-xl text-brand-black mb-1">
                    Need a Full Tour Package?
                  </h4>
                  <p className="text-sm text-brand-black/60 font-medium">
                    We handle Itinerary, Hotels, and Meals for you.
                  </p>
                </div>
              </div>
              <button
                onClick={handleTourInquiry}
                disabled={isLoading}
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:bg-cyan-700 transition-all w-full md:w-auto flex items-center justify-center gap-2 active:scale-95"
              >
                {isLoading ? "PROCESSING..." : "CONSULT VIA WA"}{" "}
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
