import React, { useState } from 'react';
import { Bus, Map, MapPin, Calendar, Phone, Briefcase, ShieldCheck, Users, CheckCircle2, Loader2 } from 'lucide-react';
import { openWhatsApp, createCharterBookingMessage, createTourInquiryMessage } from '../../utils/whatsapp';

const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState('charter'); // 'charter' or 'tour'
  const [isLoading, setIsLoading] = useState(false);
  
  // Charter form state
  const [charterData, setCharterData] = useState({
    pickup: 'Surabaya (Kota/Bandara)',
    destination: 'Bali (Overland)',
    date: '',
    unit: 'Big Bus (50/59 Seat)'
  });

  // Handle charter form change
  const handleCharterChange = (field, value) => {
    setCharterData(prev => ({ ...prev, [field]: value }));
  };

  // Handle charter booking
  const handleCharterBooking = () => {
    // Validate date
    if (!charterData.date) {
      alert('⚠️ Mohon pilih tanggal terlebih dahulu');
      return;
    }

    setIsLoading(true);
    
    // Format date to Indonesian
    const formattedDate = new Date(charterData.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const message = createCharterBookingMessage({
      ...charterData,
      date: formattedDate
    });

    // Small delay for loading state visibility
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
    <div className="container mx-auto px-4 relative z-20 mt-0 lg:-mt-16 mb-20" id="booking">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 p-2 border border-white/50 ring-1 ring-slate-200/50 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-slate-100 pb-4">
            <button 
              onClick={() => setActiveTab('charter')}
              className={`flex items-center gap-2 text-sm font-bold pb-4 -mb-4 border-b-2 transition-all ${activeTab === 'charter' ? 'text-orange-600 border-orange-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            >
              <Bus size={18} /> Sewa Bus Pariwisata
            </button>
            <button 
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 text-sm font-bold pb-4 -mb-4 border-b-2 transition-all ${activeTab === 'tour' ? 'text-orange-600 border-orange-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            >
              <Map size={18} /> Paket Open Trip
            </button>
          </div>

          {/* Form Content */}
          {activeTab === 'charter' ? (
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Pick-up & Destination */}
              <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto flex-1">
                 <div className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-200 rounded-xl px-4 py-3 flex-1 transition-colors group cursor-pointer w-full">
                    <label className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-orange-500 block mb-1 tracking-wider">Jemput Di</label>
                    <div className="flex items-center gap-3">
                       <MapPin size={20} className="text-slate-400 group-hover:text-orange-500" />
                       <select 
                         className="bg-transparent font-bold text-slate-800 w-full outline-none cursor-pointer appearance-none"
                         value={charterData.pickup}
                         onChange={(e) => handleCharterChange('pickup', e.target.value)}
                       >
                          <option>Surabaya (Kota/Bandara)</option>
                          <option>Sidoarjo</option>
                          <option>Gresik</option>
                          <option>Malang</option>
                       </select>
                    </div>
                 </div>

                 <div className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-200 rounded-xl px-4 py-3 flex-1 transition-colors group cursor-pointer w-full">
                    <label className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-orange-500 block mb-1 tracking-wider">Tujuan Wisata</label>
                    <div className="flex items-center gap-3">
                       <Map size={20} className="text-orange-500" />
                       <select 
                         className="bg-transparent font-bold text-slate-800 w-full outline-none cursor-pointer appearance-none"
                         value={charterData.destination}
                         onChange={(e) => handleCharterChange('destination', e.target.value)}
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
                 <div className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-200 rounded-xl px-4 py-3 flex-1 transition-colors group cursor-pointer">
                    <label className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-orange-500 block mb-1 tracking-wider">Tanggal</label>
                    <div className="flex items-center gap-3">
                       <Calendar size={20} className="text-slate-400 group-hover:text-orange-500" />
                       <input 
                         type="date" 
                         className="bg-transparent font-bold text-slate-800 w-full outline-none cursor-pointer text-sm"
                         value={charterData.date}
                         onChange={(e) => handleCharterChange('date', e.target.value)}
                         min={new Date().toISOString().split('T')[0]}
                       />
                    </div>
                 </div>
                 <div className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-200 rounded-xl px-4 py-3 flex-1 transition-colors group cursor-pointer">
                    <label className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-orange-500 block mb-1 tracking-wider">Unit</label>
                    <div className="flex items-center gap-3">
                       <Bus size={20} className="text-slate-400 group-hover:text-orange-500" />
                       <select 
                         className="bg-transparent font-bold text-slate-800 w-full outline-none cursor-pointer appearance-none"
                         value={charterData.unit}
                         onChange={(e) => handleCharterChange('unit', e.target.value)}
                       >
                          <option>Big Bus (50/59 Seat)</option>
                          <option>Medium Bus (33 Seat)</option>
                          <option>Hiace Premium (14 Seat)</option>
                       </select>
                    </div>
                 </div>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleCharterBooking}
                disabled={isLoading}
                className="w-full lg:w-auto bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-900/10 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 h-full min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                 {isLoading ? (
                   <>
                     <Loader2 size={18} className="animate-spin" />
                     Memproses...
                   </>
                 ) : (
                   <>
                     <Phone size={18} />
                     Hubungi Kami
                   </>
                 )}
              </button>
            </div>
          ) : (
            // Tour Package Form
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
               <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                     <Briefcase size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900">Butuh Paket Tour Lengkap?</h4>
                     <p className="text-sm text-slate-600">Kami bantu atur Itinerary, Hotel, dan Konsumsi.</p>
                  </div>
               </div>
               <button 
                 onClick={handleTourInquiry}
                 disabled={isLoading}
                 className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-colors w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    'Konsultasi Gratis via WA'
                  )}
               </button>
            </div>
          )}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-500 font-medium text-sm md:text-base">
         <div className="flex items-center gap-2"><ShieldCheck className="text-green-500" size={18} /> Unit Tahun 2023-2024</div>
         <div className="flex items-center gap-2"><Users className="text-blue-500" size={18} /> Crew Pariwisata Berpengalaman</div>
         <div className="flex items-center gap-2"><CheckCircle2 className="text-orange-500" size={18} /> Izin Kemenhub Resmi</div>
      </div>
    </div>
  );
};

export default BookingWidget;