import React from "react";
import Hero from "../assets/components/Hero";
import BookingWidget from "../assets/Components/BookingWidget";
import Destinations from "../assets/components/Destinations";
import Testimonials from "../assets/components/Testimonials";
import Fleet from "../assets/Components/Fleet";
import Promo from "../assets/Components/Promo";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookingWidget />
      <Destinations />
      <Promo />
      <Fleet />
      <Testimonials />
    </main>
  );
};

export default Home;
