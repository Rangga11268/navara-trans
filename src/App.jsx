import React from 'react';
import Navbar from "./assets/Components/Navbar.jsx";
import Hero from "./assets/Components/Hero.jsx";
import BookingWidget from "./assets/Components/BookingWidget.jsx";
import Destinations from './assets/Components/Destinations.jsx';
import Fleet from './assets/Components/Fleet.jsx';
import Promo from './assets/Components/Promo.jsx';
import Footer from './assets/Components/Footer.jsx';
import FloatingCTA from './assets/Components/FloatingCTA.jsx';

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