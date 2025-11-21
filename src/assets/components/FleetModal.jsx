import React, { useEffect } from 'react';
import { X, Users, Wifi, Music, Coffee, Tv, CheckCircle2, Phone } from 'lucide-react';
import { openWhatsApp, createFleetBookingMessage } from '../../utils/whatsapp.js';

const FleetModal = ({ isOpen, onClose, fleet }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !fleet) return null;

  // Define facilities based on category
  const facilities = fleet.category === 'Luxury Minibus' || fleet.category === 'Minibus Series'
    ? [
        { icon: <Users size={18} />, name: 'Captain Seat' },
        { icon: <Wifi size={18} />, name: 'WiFi Gratis' },
        { icon: <Coffee size={18} />, name: 'Coolbox' },
        { icon: <Music size={18} />, name: 'Sound System' }
      ]
    : [
        { icon: <Tv size={18} />, name: 'TV LED 32"' },
        { icon: <Music size={18} />, name: 'Karaoke + DVD' },
        { icon: <Coffee size={18} />, name: 'Coolbox + Dispenser' },
        { icon: <Wifi size={18} />, name: 'Audio Premium' },
        { icon: <Users size={18} />, name: 'Reclining Seat' },
        { icon: <CheckCircle2 size={18} />, name: 'AC Full Blast' }
      ];

  const handleBooking = () => {
    const message = createFleetBookingMessage(fleet.title, fleet.capacity);
    openWhatsApp(message);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image */}
          <div className="relative h-64 md:h-80 rounded-t-3xl overflow-hidden">
            <img 
              src={fleet.image} 
              alt={fleet.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{fleet.title}</h2>
                  <p className="text-orange-400 font-bold text-lg">{fleet.capacity}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                    {fleet.category}
                  </span>
                  {fleet.note && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${fleet.note.includes('June') ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>
                      {fleet.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {fleet.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tentang Unit Ini</h3>
              <p className="text-slate-600 leading-relaxed">
                {fleet.category === 'Luxury Minibus' || fleet.category === 'Minibus Series'
                  ? `${fleet.title} adalah pilihan sempurna untuk perjalanan keluarga atau grup kecil. Dengan kapasitas ${fleet.capacity}, unit ini menawarkan kenyamanan maksimal dengan fasilitas modern dan efisiensi bahan bakar yang optimal.`
                  : `${fleet.title} merupakan armada terbaru kami dengan kapasitas ${fleet.capacity}. Dilengkapi dengan fasilitas entertainment dan kenyamanan kelas satu, cocok untuk perjalanan wisata jarak jauh, study tour, maupun corporate gathering.`
                }
              </p>
            </div>

            {/* Facilities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fasilitas</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {facilities.map((facility, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    <div className="text-orange-500">
                      {facility.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{facility.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Spesifikasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-500 text-sm mb-1">Kapasitas</p>
                  <p className="font-bold text-slate-900">{fleet.capacity}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Tahun</p>
                  <p className="font-bold text-slate-900">2023-2024</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Tipe</p>
                  <p className="font-bold text-slate-900">{fleet.category}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Kondisi</p>
                  <p className="font-bold text-green-600">Prima & Terawat</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBooking}
                className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Book Unit Ini via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="sm:w-auto px-8 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetModal;
