import React from 'react';
import img from "../../Assets/images/hero-image.png"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/css/bundle'

const Hero = () => {
    SwiperCore.use([Autoplay]);

    return (
        <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("Slide CHange")} onSwiper={(swiper) => console.log(swiper)} autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }} loop={true}>
            <SwiperSlide>
                <div className="hero pt-[30px]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} className="rounded-lg md:w-[50%]" alt="hero" />
                        <div className="lg:w-[50%]">
                            <h1 className="text-5xl font-bold lg:md:text-left text-center">Be a <span className="text-primary">Hero</span>, Donate Blood!</h1>
                            <p className="py-6 text-1xl font-normal text-[#555] lg:md:text-left text-center">Connect to Blood connects donors with local hospitals. Give the gift of life and help save lives in your community. Join us today.</p>
                            <div className="lg:md:block flex justify-center items-center">
                                <button className="btn btn-outline border-secondary text-black border-2 hover:bg-primary hover:border-primary">Become a donar!</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide>
                <div className="hero pt-[30px]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} className="rounded-lg md:w-[50%]" alt="hero" />
                        <div className="lg:w-[50%]">
                            <h1 className="text-5xl font-bold lg:md:text-left text-center"><span className="text-primary">Connect to Blood - </span>Be the Lifeline</h1>
                            <p className="py-6 text-1xl font-normal text-[#555] lg:md:text-left text-center">Connect to Blood is a platform that connects blood donors with clients in need of blood. Your contribution can be the lifeline for someone in critical condition. Sign up today and become a part of this life-saving community.</p>
                            <div className="lg:md:block flex justify-center items-center">
                                <button className="btn btn-outline border-secondary text-black border-2 hover:bg-primary hover:border-primary">Register as a donor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero pt-[30px]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} className="rounded-lg md:w-[50%]" alt="hero" />
                        <div className="lg:w-[50%]">
                            <h1 className="text-5xl font-bold lg:md:text-left text-center"><span className="text-primary">Connect to Blood - </span>Bridging the Gap</h1>
                            <p className="py-6 text-1xl font-normal text-[#555] lg:md:text-left text-center">Connect to Blood is a bridge between donors and clients, filling the gap between those who need blood and those who can give it. By donating blood, you can make a difference in someone's life. Join us in this mission to save lives.</p>
                            <div className="lg:md:block flex justify-center items-center">
                                <button className="btn btn-outline border-secondary text-black border-2 hover:bg-primary hover:border-primary">Find a Donor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;
