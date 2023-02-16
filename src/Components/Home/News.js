import React from "react";
import bloodPressureImg from "../../Assets/images/bloodPressureNews01.jpg";
import bloodTestNewsImg from "../../Assets/images/bloodTestNews02.jpg";
// import rarestBloodGroupImg from "../../Assets/images/rearestBloodGroupImg.png";
import rareBloodType from "../../Assets/images/rareBloodType.jpg";
const News = () => {
  const newsData = [
    {
      _id: "asd123213",
      title: "Can low blood pressure cause a stroke?",
      short_description: "Low blood pressure can increase the risk of stroke. Sudden drops in blood pressure can also cause transient ischemic attacks or mini- stroke...",
      img: bloodPressureImg
    },
    {
      _id: "asd123",
      title: "Can blood tests diagnose heart failure?",
      short_description: "Blood tests can help identify issues with the heart that may cause  symptoms of heart failure.Learn about types of blood tests, results, the process…",
      img: bloodTestNewsImg
    },
    {
      _id: "12344",
      title: "What are the rarest and most common blood types?",
      short_description: " What are the rarest and most common blood types by ethnicity? Read on to discover more about the different blood types and their prevalence...",
      img: rareBloodType
    }
  ]
  return (
    <>
      <h1 className="text-center my-[20px] text-5xl font-bold">
        Latest <span className="text-primary">Blog</span>
      </h1>
      <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
        {
          newsData.map(news => <div className="card card-compact rounded-b-md rounded-t-none w-96 bg-base-100 shadow-none">
            <figure>
              <img src={news.img} alt="blood pressure images" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">
                {news.title}
              </h3>
              <p>
                {news.short_description}
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://www.medicalnewstoday.com/articles/most-common-blood-type-by-race"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Read more</p>
                </a>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  );
};

export default News;
