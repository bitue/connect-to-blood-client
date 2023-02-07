import React from "react";
import instrument from "../../Assets/images/instrument.png";
import trophy from "../../Assets/images/trophy.png";
import hospital from "../../Assets/images/hospital.png";

const Stats = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-4">
        Our<span className="text-[#ED4245]"> Statistics</span>
      </h1>
      <div className="grid gap-3 lg:md:grid-cols-3 grid-cols-1 place-content-center bg-[#f1f1f1]">
        <div className="flex flex-col items-center justify-center">
          <img src={instrument} className="w-[50px]" alt="" />
          <div className="text-primary font-bold text-2xl">3 , 2 2 5</div>
          <div className="stat-title text-secondary font-bold">
            HAPPY DONORS
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img src={trophy} className="w-[50px]" alt="" />
          <div className="text-primary font-bold text-2xl">90</div>
          <div className="stat-title text-secondary font-bold">
            TOTAL AWARDS
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={hospital} className="w-[50px]" alt="" />
          <div className="text-primary font-bold text-2xl">33+</div>
          <div className="stat-title text-secondary font-bold">
            CO-OPERATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
