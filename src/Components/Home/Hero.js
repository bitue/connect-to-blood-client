import React from 'react';
import img from "../../Assets/images/hero-image.png"

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="rounded-lg md:w-[50%]" alt="hero" />
                <div className="lg:w-[50%]">
                    <h1 className="text-5xl font-bold lg:md:text-left text-center">Be a <span className="text-[#ED4245]">Hero</span>, Donate Blood!</h1>
                    <p className="py-6 text-1xl font-normal text-[#555] lg:md:text-left text-center">Connect to Blood connects donors with local hospitals. Give the gift of life and help save lives in your community. Join us today.</p>
                    <div className="lg:md:block flex justify-center items-center">
                        <button className="btn btn-outline border-[#222222] border-2 hover:bg-[#ED4245] hover:border-[#ED4245] ">Become a donar!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
