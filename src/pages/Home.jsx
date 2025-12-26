import React from "react";
import Hero from "../assets/sections/Hero";
import BookingWidget from "../assets/sections/BookingWidget";
import Destinations from "../assets/sections/Destinations";
import Testimonials from "../assets/sections/Testimonials";
import Fleet from "../assets/sections/Fleet";
import Promo from "../assets/sections/Promo";
import FAQ from "../assets/sections/FAQ";
import TrustedMarquee from "../assets/sections/TrustedMarquee";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookingWidget />
      <TrustedMarquee />
      <Destinations />
      <Promo />
      <Fleet />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
