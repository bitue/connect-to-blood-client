import React from "react";
import "boxicons";

const InfoCards = () => {
  return (
    <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="pt-10">
          <box-icon size="54px" color="#ED4245" name="donate-blood"></box-icon>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[24px] pb-2">Blood Donation</h2>
          <p>Save a Life, Donate Blood: Become a Blood Donor Today</p>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="pt-10">
          <box-icon size="54px" color="#ED4245" name="body"></box-icon>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[24px] pb-2">Health Check!</h2>
          <p>
            Take Charge of Your Health: Schedule Your Comprehensive Health
            Check-Up Today
          </p>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="pt-10">
          <box-icon size="54px" color="#ED4245" name="clinic"></box-icon>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[24px] pb-2">Blood Bank</h2>
          <p>
            Be a Hero in Someone's Life: Find Your Nearest Blood Bank and Donate
            Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
