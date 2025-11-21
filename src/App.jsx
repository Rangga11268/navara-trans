import React from 'react';
import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import BookingWidget from "./assets/Components/BookingWidget";
import Destinations from './assets/Components/Destinations';
import Fleet from './assets/Components/Fleet';
import Promo from './assets/Components/Promo';
import Footer from './assets/Components/Footer';
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