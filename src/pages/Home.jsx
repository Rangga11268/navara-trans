import React from "react";
import Hero from "../assets/components/Hero";
import BookingWidget from "../assets/components/BookingWidget";
import Destinations from "../assets/components/Destinations";
import Testimonials from "../assets/components/Testimonials";
import Fleet from "../assets/components/Fleet";
import Promo from "../assets/components/Promo";
import FAQ from "../assets/components/FAQ";
import TrustedMarquee from "../assets/components/TrustedMarquee";

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
