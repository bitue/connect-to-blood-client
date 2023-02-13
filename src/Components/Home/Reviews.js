import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <>
            <h1 className="text-center my-[20px] text-5xl font-bold">
                Our <span className="text-primary">Reviews</span>
            </h1>
            <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
                <Review name="Someone" image="https://images.pexels.com/photos/2912166/pexels-photo-2912166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis sequi sit, repudiandae iusto cupiditate modi culpa officiis aut magni delectus aperiam, perspiciatis repellendus vero! Provident quae reiciendis vel et!" rating={5}></Review>
                <Review name="Someone" image="https://images.pexels.com/photos/2912166/pexels-photo-2912166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis sequi sit, repudiandae iusto cupiditate modi culpa officiis aut magni delectus aperiam, perspiciatis repellendus vero! Provident quae reiciendis vel et!" rating={5}></Review>
                <Review name="Someone" image="https://images.pexels.com/photos/2912166/pexels-photo-2912166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis sequi sit, repudiandae iusto cupiditate modi culpa officiis aut magni delectus aperiam, perspiciatis repellendus vero! Provident quae reiciendis vel et!" rating={4}></Review>
            </div>
        </>
    );
};

export default Reviews;
