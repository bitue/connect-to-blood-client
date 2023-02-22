import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const NewsCard = ({ news }) => {
     const blogLike = () => {

     }
     return (
          <div className="card card-compact rounded-b-md rounded-t-none w-96 bg-base-100 shadow-none h-[auto]">
               <figure>
                    <img src={news?.img} alt="blood pressure images" className="h-[100%] w-[100%]" />
               </figure>
               <div className="card-body">
                    <h3 className="card-title">
                         {news?.title}
                    </h3>
                    <p>
                         {news?.content}
                    </p>
                    <div className="card-actions justify-between mt-[20px] items-center w-[95%] mx-auto">
                         <p>
                              <button>
                                   <FontAwesomeIcon icon={faThumbsUp} className="text-[20px]  mr-[10px]" />
                                   Like
                              </button>
                         </p>
                         <p className="text-right">
                              {news?.createdAt.split("T")[0]}
                         </p>
                    </div>
                    <div className="w-[95%] flex justify-center items-center mx-auto text-center">
                         <p>{news.comments[0]?.comment}</p>
                    </div>
                    <button class="btn text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222]">
                         Read More
                    </button>
               </div>
          </div>
     );
};

export default NewsCard;