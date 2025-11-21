import React from 'react';
import Navbar from "@/assets/components/Navbar.jsx";
import Hero from "@/assets/components/Hero.jsx";
import BookingWidget from "@/assets/components/BookingWidget.jsx";
import Destinations from '@/assets/components/Destinations.jsx';
import Fleet from '@/assets/components/Fleet.jsx';
import Promo from '@/assets/components/Promo.jsx';
import Footer from '@/assets/components/Footer.jsx';
import FloatingCTA from '@/assets/components/FloatingCTA.jsx';

const App = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <BookingWidget />
      <Destinations />
      <Fleet />
      <Promo />
      <Footer />
      <FloatingCTA />

    </div>
  );
};

export default App;