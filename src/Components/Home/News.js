import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://pear-gifted-lamb.cyclic.app/public/getBlogs")
      .then(res => res.json())
      .then(data => setNews(data.data))
  }, [news])

  console.log(news)
  return (
    <>
      <h1 className="text-center my-[20px] text-5xl font-bold">
        Latest <span className="text-primary">Blog</span>
      </h1>
      <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
        {
          news?.map(news => <div className="card card-compact rounded-b-md rounded-t-none w-96 bg-base-100 shadow-none h-[auto]">
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
    </>
  );
};

export default News;
