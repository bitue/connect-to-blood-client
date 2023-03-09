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
                        <p className="py-6">At Connect To Blood, we're committed to saving lives through the power of blood donation. Our mission is to provide a safe, reliable, and convenient way for donors to give blood and for patients to receive the life-saving transfusions they need. With a dedicated team of staff and volunteers, as well as partnerships with leading organizations in the healthcare industry, we're working to create a world where every patient has access to the blood products they need.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;
