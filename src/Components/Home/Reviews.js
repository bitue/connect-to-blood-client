import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviewsData = [
        {
            name: "Rick",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXlfi53WdBgRqfP2gwb6yrMCfV7WOCCqH48JYEzZn&s",
            description: "One of the best websites every made, Because of this website my child is alive",
            rating: 4
        },
        {
            name: "Ryan",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OgLFvvyIcNsUyyY9aycyZoaV9LTL_5IyGraC-llL&s",
            description: "One of the best websites every made, Because of this website my child is alive",
            rating: 5
        },
        {
            name: "Alan",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            description: "One of the best websites every made, Because of this website my child is alive",
            rating: 5
        }
    ]
    return (
        <>
            <h1 className="text-center my-[20px] text-5xl font-bold">
                Our <span className="text-primary">Reviews</span>
            </h1>
            <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
                {
                    reviewsData.map(review => <Review name={review.name} image={review.image} description={review.description} rating={review.rating} />)
                }

            </div>
        </>
    );
};

export default Reviews;
