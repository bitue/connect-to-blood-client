import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    console.log(news)
    return (
        <div className="card card-compact rounded-b-md rounded-t-none w-96 bg-base-100 shadow-none h-[480px] mr-[18px] mt-[26px]">
            <figure>
                <img src={news?.img} alt="blood pressure images" className="h-[250px] object-cover   bg-center w-[100%]" />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{news?.title}</h3>
                <p>{news?.content}</p>
                <div className="card-actions justify-between mt-[20px] items-center w-[95%] mx-auto">
                    <p>
                        {news?.user?.email.split("@")[0]}
                    </p>
                    <p className="text-right">{news?.createdAt.split('T')[0]}</p>
                </div>


                <Link to={`/blogs/${news?._id}`} className="w-[100%]">
                    <button class="btn w-[100%] text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222]">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
