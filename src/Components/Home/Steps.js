import React from "react";
import { Link } from "react-router-dom";
import teacher from "../../Assets/images/727-removebg-preview.png";

const Steps = () => {
  return (
    ///steps component
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col lg:flex-row w-full">
        <img src={teacher} />
        <div className="w-[50%]">
          <div className="lg:md:mt-[200px]">
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
      </div>
    </div>
  );
};

export default Steps;
