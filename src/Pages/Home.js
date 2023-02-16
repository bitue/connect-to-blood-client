import React from "react";
import About from "../Components/Home/About";
import Hero from "../Components/Home/Hero";
import InfoCards from "../Components/Home/InfoCards";
import News from "../Components/Home/News";
import Navbar from "../Components/Shared/Navbar";
import Stats from "../Components/Home/Stats";
import Faq from "../Components/Home/Faq";
import Reviews from "../Components/Home/Reviews";
import Steps from "../Components/Home/Steps";

const Home = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <Navbar />
      <Hero />
      <About />
      <InfoCards />
      <News />
      <Reviews />
      <Stats />
      <Steps />
      <Faq />
    </div>
  );
};

export default Home;
