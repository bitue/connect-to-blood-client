import React from 'react';
import img from "../../Assets/images/about.jpg"

const About = () => {
    return (
        <>
            <div className="hero">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center items-center w-[50%]">
                        <h2 className="text-4xl text-center">About <span className="text-primary">US</span></h2>
                        <p className="mt-[20px] px-[30px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto corporis in omnis, ea officia ullam aliquam ratione consequatur, rerum dolores cupiditate facere, excepturi nulla cum maxime rem alias doloremque quas sed maiores obcaecati necessitatibus. In eligendi, repellendus harum aut iste optio esse laudantium tempora quibusdam labore facilis dolor tenetur autem.</p>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </>

    );
};

export default About;
