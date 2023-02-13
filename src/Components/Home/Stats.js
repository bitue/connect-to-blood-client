import React from "react";
import donor from "../../Assets/images/donor.png";
import award from "../../Assets/images/award.png";
import cooperation from "../../Assets/images/co-operation.png";

const Stats = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-6">
        Our<span className="text-[#ED4245]"> Statistics</span>
      </h1>
      <div className="grid gap-3 lg:md:grid-cols-3 grid-cols-1 place-content-center ">
        <div className="flex flex-col items-center justify-center ">
          <img src={donor} className="w-[100px] rounded-full bg-white" alt="" />
          <div class="badge badge-lg bg-[#ED4245] text-white mt-4">2,654</div>
          <div className="stat-title text-secondary font-bold">
            HAPPY DONORS
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img
            src={award}
            className="w-[100px] rounded-full bg-white "
            alt=""
          />
          <div class="badge badge-lg bg-[#ED4245] text-white mt-3">1,654</div>
          <div className="stat-title text-secondary font-bold">
            TOTAL AWARDS
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={cooperation}
            className="w-[100px] rounded-full bg-white"
            alt=""
          />
          <div class="badge badge-lg bg-[#ED4245] text-white mt-3">5,654</div>
          <div className="stat-title text-secondary font-bold">
            CO-OPERATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
