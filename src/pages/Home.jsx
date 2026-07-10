import React from "react";
import Hero from "../assets/sections/Hero";
import MasalahSolusi from "../assets/sections/MasalahSolusi";
import StatsBar from "../assets/sections/StatsBar";
import Fleet from "../assets/sections/Fleet";
import BookingWidget from "../assets/sections/BookingWidget";
import Destinations from "../assets/sections/Destinations";
import Testimonials from "../assets/sections/Testimonials";
import FAQ from "../assets/sections/FAQ";
import FinalCTA from "../assets/sections/FinalCTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookingWidget />
      <MasalahSolusi />
      <StatsBar />
      <Fleet />
      <Destinations />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Home;
