import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Users,
  Wifi,
  Music,
  Coffee,
  Tv,
  CheckCircle2,
  Phone,
} from "lucide-react";
import {
  openWhatsApp,
  createFleetBookingMessage,
} from "../../utils/whatsapp.js";

const FleetModal = ({ isOpen, onClose, fleet }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !fleet) return null;

  // Define facilities based on category
  const facilities =
    fleet.category === "Luxury Minibus" || fleet.category === "Minibus Series"
      ? [
          { icon: <Users size={18} />, name: "Captain Seat" },
          { icon: <Wifi size={18} />, name: "Free WiFi" },
          { icon: <Coffee size={18} />, name: "Coolbox" },
          { icon: <Music size={18} />, name: "Sound System" },
        ]
      : [
          { icon: <Tv size={18} />, name: 'LED TV 32"' },
          { icon: <Music size={18} />, name: "Karaoke + DVD" },
          { icon: <Coffee size={18} />, name: "Coolbox + Dispenser" },
          { icon: <Wifi size={18} />, name: "Premium Audio" },
          { icon: <Users size={18} />, name: "Reclining Seat" },
          { icon: <CheckCircle2 size={18} />, name: "AC Full Blast" },
        ];

  const handleBooking = () => {
    const message = createFleetBookingMessage(fleet.title, fleet.capacity);
    openWhatsApp(message);
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-black/90 backdrop-blur-md z-[100] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4">
        <div
          className="bg-brand-gray w-full md:w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto shadow-2xl rounded-t-[2.5rem] rounded-b-none md:rounded-[2.5rem] flex flex-col animate-fade-in-up border border-brand-black/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image */}
          <div className="relative h-64 md:h-96 shrink-0 overflow-hidden">
            <img
              src={fleet.image}
              alt={fleet.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red hover:rotate-90 transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex items-end justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2 uppercase tracking-tight">
                    {fleet.title}
                  </h2>
                  <p className="text-brand-red font-display font-bold text-xl uppercase tracking-widest">
                    {fleet.capacity}
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-end">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    {fleet.category}
                  </span>
                  {fleet.note && (
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        fleet.note.includes("June")
                          ? "bg-brand-red text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {fleet.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 space-y-10">
            {/* Description */}
            <div>
              <h3 className="text-xl font-display font-black text-brand-black mb-4 uppercase tracking-wide">
                About This Unit
              </h3>
              <p className="text-brand-black/70 leading-relaxed text-lg font-medium">
                {fleet.category === "Luxury Minibus" ||
                fleet.category === "Minibus Series"
                  ? `${fleet.title} is the perfect choice for small groups or family trips. With a capacity of ${fleet.capacity}, this unit offers maximum comfort with modern facilities and optimal fuel efficiency.`
                  : `${fleet.title} is our latest fleet addition with a capacity of ${fleet.capacity}. Equipped with premium entertainment and first-class comfort, perfect for long-distance trips, study tours, or corporate gatherings.`}
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-xl font-display font-black text-brand-black mb-6 uppercase tracking-wide">
                Facilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-brand-black/5 hover:border-brand-red/20 hover:shadow-lg transition-all gap-3 text-center group"
                  >
                    <div className="text-brand-black group-hover:text-brand-red transition-colors">
                      {React.cloneElement(facility.icon, { size: 24 })}
                    </div>
                    <span className="text-xs font-bold text-brand-black uppercase tracking-wider">
                      {facility.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-brand-black p-8 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-display font-black text-white mb-6 uppercase tracking-wide relative z-10">
                Specifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                    Capacity
                  </p>
                  <p className="font-display font-bold text-white text-lg">
                    {fleet.capacity}
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                    Year
                  </p>
                  <p className="font-display font-bold text-white text-lg">
                    {fleet.year || "2023-2024"}
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                    Type
                  </p>
                  <p className="font-display font-bold text-white text-lg">
                    {fleet.category}
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                    Condition
                  </p>
                  <p className="font-display font-bold text-brand-red text-lg">
                    Prime Condition
                  </p>
                </div>
                {fleet.specs && (
                  <>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                        Chassis
                      </p>
                      <p className="font-display font-bold text-white text-lg">
                        {fleet.specs.chassis}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                        Body
                      </p>
                      <p className="font-display font-bold text-white text-lg">
                        {fleet.specs.body}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Gallery */}
            {fleet.gallery && (
              <div>
                <h3 className="text-xl font-display font-black text-brand-black mb-6 uppercase tracking-wide">
                  Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {fleet.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden h-40 md:h-56 group relative shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${fleet.title} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-brand-black/5">
              <button
                onClick={handleBooking}
                className="flex-1 bg-brand-red text-white py-5 rounded-full font-bold font-display uppercase tracking-wider shadow-xl hover:bg-red-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 text-sm"
              >
                <Phone size={20} />
                Book via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="sm:w-auto px-10 bg-white text-brand-black border border-brand-black/10 py-5 rounded-full font-bold font-display uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default FleetModal;
