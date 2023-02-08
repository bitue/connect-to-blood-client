import React from 'react';
import img from "../../Assets/images/about.jpg"

const About = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt="" className="rounded-lg w-[60%]" />
                    <div className="w-[40%]">
                        <h1 className="text-5xl font-bold">About US</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor debitis aliquam incidunt nam? Impedit delectus provident dolorem dolor. Cupiditate inventore doloremque minus maiores ullam, harum voluptate voluptas saepe, quae a nisi reiciendis odit aspernatur! Facere commodi praesentium doloribus, eveniet esse soluta eius velit odio quos pariatur veniam minus. Minima, vitae!</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;
