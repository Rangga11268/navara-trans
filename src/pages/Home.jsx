import React from "react";
import Hero from "../assets/sections/Hero";
import AboutSection from "../assets/sections/AboutSection";
import FleetPreview from "../assets/sections/FleetPreview";
import Destinations from "../assets/sections/Destinations";
import BottomBooking from "../assets/sections/BottomBooking";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FleetPreview />
      <Destinations />
      <BottomBooking />
    </main>
  );
};

export default Home;
