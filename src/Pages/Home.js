import React from "react";
import About from "../Components/Home/About";
import Hero from "../Components/Home/Hero";
import InfoCards from "../Components/Home/InfoCards";
import News from "../Components/Home/News";
import Navbar from "../Layout/Navbar/Navbar";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <Navbar />
      <Hero />
      <About />
      <InfoCards />
      <Stats />
      <News />
    </div>
  );
};

export default Home;
