import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const TeamMemberBio = ({ teamMember }) => {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => setShowBio(!showBio);

  return (
    <div
      key={teamMember._id}
      className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800"
    >
      <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem] ">
        <img
          className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
          src={teamMember.img}
          alt={teamMember.name}
          loading="lazy"
          width="1000"
          height="667"
          style={{ border: "3px solid red" }}
        />
      </div>
      <div className="space-y-4 text-center">
        <div>
          <h4 className="text-2xl text-black ">{teamMember.name}</h4>
          <span className="block text-sm text-gray-500">
            {teamMember.title}
          </span>
        </div>
        <button
          className="mx-auto block w-max text-primary"
          onClick={toggleBio}
        >
          View Bio
        </button>
        {showBio && (
          <div className="mt-4 ">
            <p className="text-black ">Blood Type: {teamMember.blood_type}</p>
            <p className="text-black ">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
            </p>
            <p className="text-black ">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutTeam = () => {
  const teamInfo = [
    {
      _id: "ashikul123",
      name: "Md Ashikul Islam",
      title: "Team leader | Backend developer",
      email: "ashikul.islam.ugrad16@gmail.com",
      phone: "01312535319",
      blood_type: "A+",
      img: "https://avatars.githubusercontent.com/u/66092560?v=4",
    },
    {
      _id: "talha123",
      name: "Abdur Rahman Talha",
      title: "Fronted Developer",
      email: "abdurrahmantalha.dev@gmail.com",
      phone: "01325105101",
      blood_type: "B",
      img: "https://avatars.githubusercontent.com/u/66727914?v=4",
    },
    {
      _id: "jahid123",
      name: "Jahid Iqbal",
      title: "Frontend developer",
      email: "jahid.iqbal211@gmail.com",
      phone: "01624980036",
      blood_type: "AB+",
      img: "https://avatars.githubusercontent.com/u/86682069?s=400&u=3423c05c935b503cb44ca707bd39f4bcb792f214&v=4",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 text-center md:px-12">
        <div className="mb-16">
          <h1 className="text-5xl font-bold ">
            Meet Our <span className="text-[#ED4245]"> Team</span>
          </h1>
          <p className="text-gray-800 dark:text-gray-700 lg:mx-auto lg:w-8/12 mt-2">
            Join Our Mission to Give Back: Meet the Team Encouraging Blood
            Donation
          </p>
        </div>
        <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
          {teamInfo.map((teamMember) => (
            <TeamMemberBio key={teamMember._id} teamMember={teamMember} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
