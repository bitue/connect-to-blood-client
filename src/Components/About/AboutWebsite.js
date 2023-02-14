import React from "react";
import AboutWebsiteImg from "../../Assets/images/aboutWebsitermg.png";
import "./AboutWebsite.css";
const AboutWebsite = () => {
  return (
    <>
      <div className="about_website_parent">
        <h1 className="about_website_header">
          Connecting <span>Donors</span> and <span>Receivers</span> for Life
        </h1>
        <div className="about_website_content">
          <div className="about_website_text">
            <p>
              Our <span>blood donation</span> website connects donors and
              receivers, making it easier for them to find each other. Donors
              can create a profile with their blood type, location, and
              availability, while receivers can find donors who match their
              requirements quickly and easily. Our platform provides a secure
              messaging system for communication between donors and receivers,
              allowing them to arrange blood donation. We aim to make the blood
              donation process simple and efficient, giving potential receivers
              the opportunity to receive the help they need in a timely manner.
              Our website provides an online space for giving and receiving
              blood, and we hope to make a positive impact on our community.
            </p>
          </div>
          <div className="about_website_img">
            <img src={AboutWebsiteImg} alt="images for about web site" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWebsite;
