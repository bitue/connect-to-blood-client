import React, { useEffect } from 'react';
import img from "../../Assets/images/about.jpg"
import AOS from "aos"
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="hero" data-aos="fade-up">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt="" className="rounded-lg lg:md:w-[60%]" />
                    <div className="lg:md:w-[40%] lg:md:text-left text-center">
                        <h1 className="text-5xl font-bold">About US</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor debitis aliquam incidunt nam? Impedit delectus provident dolorem dolor. Cupiditate inventore doloremque minus maiores ullam, harum voluptate voluptas saepe, quae a nisi reiciendis odit aspernatur! Facere commodi praesentium doloribus, eveniet esse soluta eius velit odio quos pariatur veniam minus. Minima, vitae!</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;
