import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../../Lotties/74661-checkboard-review-animation.json"


const Steps = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    ///steps component
    <div className="hero pt-[30px] " >
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-[40%]" >
          <Lottie options={defaultOptions} />
        </div>
        <div className="lg:w-[60%]">
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