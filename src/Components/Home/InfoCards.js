import React from "react";
import donationImg from "../../Assets/images/blood-donation.png";
import bloodBank from "../../Assets/images/bloodBank.png";
import healthcare from "../../Assets/images/healthcare.png";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const InfoData = [
    {
      title: "Blood Donation",
      img: donationImg,
      description:
        "Save a Life, Donate Blood: Become a Blood Donor Today",
    },
    {
      title: "Health Check!",
      img: healthcare,
      description:
        "Take Charge of Your Health: Schedule Your Comprehensive Health Check-Up Today",
    },
    {
      title: "Blood Bank",
      img: bloodBank,
      description:
        "Be a Hero in Someone's Life: Find Your Nearest Blood Bank and Donate Now",
    },
  ];
  return (
    <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4">
      {
        InfoData.map(info => <InfoCard img={info.img} title={info.title} description={info.description}></InfoCard>)
      }
    </div>
  );
};

export default InfoCards;
