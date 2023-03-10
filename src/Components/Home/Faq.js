import React from "react";
import Lottie from 'lottie-react';
import animationDatas from "../../Assets/images/FAQ-img.png";
const data = [
  {
    tabIndex: 0,
    title: "How do I prepare for my donation?",
    paragraph:
      "A few days before donating, eat nutritious meals that contain iron-rich foods. The day before donation, drink plenty of fluids and get a good night’s sleep. The day of donation, drink non-caffeinated beverages such as water or juice and do not skip any meals.",
  },
  /* {
    tabIndex: 1,
    title: "How often can I donate?",
    paragraph:
      "You can typically donate blood every 56 days. However, the exact time between donations depends on several factors, such as the type of donation and your health history.",
  }, */
  {
    tabIndex: 2,
    title: "How will I feel after I donate?",
    paragraph:
      "After donating blood, some people may feel lightheaded, dizzy, or experience a headache. This is usually temporary and can be managed by drinking fluids, eating a snack, and resting. It's also normal to feel a small sting at the needle site after the needle is removed.",
  },
  {
    tabIndex: 3,
    title: "How much blood is taken?",
    paragraph:
      "For a whole blood donation, approximately 0.5 L of blood is collected. For donations of other blood products, such as platelet or plasma, the amount collected depends on your height, weight and platelet count.",
  },
  {
    tabIndex: 4,
    title: "How long will the actual donation process take?",
    paragraph:
      "The entire donation process, from registration to post-donation refreshments, takes about one hour. The actual donation takes about 5-10 minutes.",
  },
];

const Faq = () => {
  const Collapse = ({ tabIndex, title, paragraph }) => {
    return (
      <div
        tabIndex={tabIndex}
        className="collapse collapse-arrow border  bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">{title}</div>
        <div className="collapse-content">
          <p className="text-base max-w-sm overflow-auto break-words">
            {paragraph}
          </p>
        </div>
      </div>
    );
  };

  return (

    <div className="hero pt-[30px] " data-aos="fade-up">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-[50%]" >
          <img src={animationDatas} alt=""/>
        </div>
        <div className="lg:w-[60%]">
          <h1 className="text-4xl font-bold text-center my-5">
            Frequently Asked <span className="text-[#ED4245]"> Questions</span>
          </h1>

          {data.map((question) => (
            <Collapse
              key={question.tabIndex}
              tabIndex={question.tabIndex}
              title={question.title}
              paragraph={question.paragraph}
            />
          ))}
        </div>
      </div>
    </ div>
  );
};

export default Faq;
