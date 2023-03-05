import React from 'react';

const InfoCard = (data) => {
    return (
        <div className="card w-96 bg-base-100 shadow-lg mr-[20px] lg:md:mb-[0px] mb-[10px]">
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
