import React from 'react';
import Navbar from "@/assets/components/Navbar.jsx";
import Hero from "@/assets/components/Hero.jsx";
import BookingWidget from "@/assets/components/BookingWidget.jsx";
import WhyChooseUs from '@/assets/components/WhyChooseUs.jsx';
import Destinations from '@/assets/components/Destinations.jsx';
import TourPackages from '@/assets/components/TourPackages.jsx';
import Fleet from '@/assets/components/Fleet.jsx';
import Promo from '@/assets/components/Promo.jsx';
import Testimonials from '@/assets/components/Testimonials.jsx';
import Footer from '@/assets/components/Footer.jsx';
import FloatingCTA from '@/assets/components/FloatingCTA.jsx';
import Reveal from '@/assets/components/Reveal.jsx';

const App = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <Reveal width="100%">
        <BookingWidget />
      </Reveal>

      <Reveal width="100%">
        <WhyChooseUs />
      </Reveal>

      <Reveal width="100%">
        <Destinations />
      </Reveal>

      <Reveal width="100%">
        <TourPackages />
      </Reveal>

      <Reveal width="100%">
        <Fleet />
      </Reveal>

      <Reveal width="100%">
        <Promo />
      </Reveal>

      <Reveal width="100%">
        <Testimonials />
      </Reveal>

      <Footer />
      <FloatingCTA />

    </div>
  );
};

export default App;