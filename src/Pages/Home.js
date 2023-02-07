import React from "react";
import Hero from "../Components/Home/Hero";
import Navbar from "../Layout/Navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
