import React from "react";
import bloodPressureImg from "../../Assets/images/bloodPressureNews01.jpg";
import bloodTestNewsImg from "../../Assets/images/bloodTestNews02.jpg";
import rarestBloodGroupImg from "../../Assets/images/rearestBloodGroupImg.png";
const News = () => {
  return (
    <>
      <h1 className="text-center my-[20px] text-3xl font-bold">
        Latest <span className="text-primary">News</span>
      </h1>
      <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
        <div className="card rounded-b-md rounded-t-none card-compact w-80 bg-base-100 shadow-none">
          <figure>
            <img src={bloodPressureImg} alt="blood pressure images" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">
              Can low blood pressure cause a stroke?
            </h3>
            <p>
              Low blood pressure can increase the risk of stroke. Sudden drops
              in blood pressure can also cause transient ischemic attacks or
              mini-stroke...
            </p>
            <div className="card-actions justify-end">
              <a href="https://www.medicalnewstoday.com/articles/can-low-blood-pressure-cause-a-stroke">
                <p>Read more</p>
              </a>
            </div>
          </div>
        </div>
        <div className="card rounded-b-md rounded-t-none card-compact w-80 bg-base-100 shadow-none">
          <figure>
            <img src={bloodTestNewsImg} alt="blood pressure images" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">
              Can blood tests diagnose heart failure?
            </h3>
            <p>
              Blood tests can help identify issues with the heart that may cause
              symptoms of heart failure. Learn about types of blood tests,
              results, the process…
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://www.medicalnewstoday.com/articles/blood-test-for-heart-failure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Read more</p>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact rounded-b-md rounded-t-none w-80 bg-base-100 shadow-none">
          <figure>
            <img src={rarestBloodGroupImg} alt="blood pressure images" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">
              What are the rarest and most common blood types?
            </h3>
            <p>
              What are the rarest and most common blood types by ethnicity? Read
              on to discover more about the different blood types and their
              prevalence...
            </p>
            <div className="card-actions justify-end">
              <a href="https://www.medicalnewstoday.com/articles/most-common-blood-type-by-race">
                <p>Read more</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
