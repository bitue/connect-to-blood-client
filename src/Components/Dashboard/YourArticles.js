import React, { useEffect, useState } from 'react';

const YourArticles = () => {
     const [news, setNews] = useState([])

     useEffect(() => {
          fetch("https://pear-gifted-lamb.cyclic.app/public/getBlogs")
               .then(res => res.json())
               .then(data => setNews(data.data))
     }, [news])

     return (
          <div>
               <h2 className="text-center mt-[30px] text-3xl">Your Articles</h2>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-[20px] gap-10 place-items-center">
                    {
                         news?.map(news =>
                              <div className="card card-compact  rounded-b-md rounded-t-none w-96 bg-base-100 shadow-none h-[auto]">
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
                                        <div className="card-actions justify-between mt-[20px] items-center">
                                             <p>
                                                  {news?.createdAt.split("T")[0]}
                                             </p>
                                             <button class="btn text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222]">
                                                  Read More
                                             </button>
                                        </div>
                                   </div>
                              </div>)
                    }

               </div>
          </div>
     );
};

export default YourArticles;