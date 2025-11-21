import React from 'react';
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import BookingWidget from "./assets/components/BookingWidget";
import Destinations from './assets/components/Destinations';
import Fleet from './assets/components/Fleet';
import Promo from './assets/components/Promo';
import Footer from './assets/components/Footer';
import FloatingCTA from './assets/components/FloatingCTA';

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