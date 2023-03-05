import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css';
const InfoCard = (data) => {
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(data)
    return (
        <div className="card w-96 bg-base-100 shadow-md mr-[20px] lg:md:mb-[0px] mb-[10px]" data-aos={data.dataAos}>
            <figure className="pt-10">
                <img
                    className="w-14"
                    src={data.img}
                    alt="blood donation img"
                ></img>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[24px] pb-2">
                    {data.title}
                </h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
