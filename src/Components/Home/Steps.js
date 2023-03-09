import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import stepsAnimation from "../../Lotties/74661-checkboard-review-animation.json"


const Steps = () => {
  return (
    ///steps component
    <div className="hero pt-[30px] " data-aos="fade-up">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="lg:w-[40%]" >
          <Lottie animationData={stepsAnimation} loop={true} autoplay={true} />
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-5xl font-bold ">
            Important <span className="text-[#ED4245]"> Step</span>
          </h1>
          <ul
            class="w-100 relative m-0 list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
            data-te-stepper-init
            data-te-stepper-type="vertical">
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none ">
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-primary ">
                  1
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-[#222] after:absolute after:flex after:text-[0.8rem] after:content-[data-content]">
                  <span className="hover:underline hover:text-blue-300">Register</span> / <span className="hover:underline hover:text-blue-300">Signin</span>
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                class="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-4 pl-[3.75rem] duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none ">
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-primary ">
                  2
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-[#222] after:absolute after:flex after:text-[0.8rem] after:content-[data-content]">
                  <span className="hover:underline hover:text-blue-300">Become a donor</span>
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                class="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-4 pl-[3.75rem] duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none">
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-primary ">
                  3
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-[#222] after:absolute after:flex after:text-[0.8rem] after:content-[data-content]">
                  <span className="hover:underline hover:text-blue-300">Search for blood!</span>
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                class="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-4 pl-[3.75rem] duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px  after:content-['']">
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none">
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-primary ">
                  4
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-[#222] after:absolute after:flex after:text-[0.8rem] after:content-[data-content]">
                  <span className="hover:underline hover:text-blue-300">Finished!</span>
                </span>
              </div>

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