import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationDatas from "../../Lotties/74661-checkboard-review-animation.json"


const Steps = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDatas,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    ///steps component
    <div className="hero pt-[30px] " >
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="lg:w-[40%]" >
          <Lottie animationData={animationDatas} loop={true} autoplay={true} />
        </div>
        <div className="lg:w-[55%]">
          <h1 className="text-5xl font-bold ">
            Important <span className="text-[#ED4245]"> Step</span>
          </h1>
          <ul className="steps steps-vertical w-full">
            <li className="step step-primary ">
              <Link
                to=" "
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Register
              </Link>
            </li>
            <li className="step step-primary">
              <Link
                to=" "
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Signin
              </Link>
            </li>
            <li className="step step-primary">
              <Link
                to=" "
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Search for Blood
              </Link>
            </li>
            <li className="step step-primary">
              <Link
                to=" "
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Connect to Donor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ div>
  );
};

export default Steps;
/* 
<Lottie options={defaultOptions} />
 
 */