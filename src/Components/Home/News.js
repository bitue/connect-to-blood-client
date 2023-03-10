import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://pear-gifted-lamb.cyclic.app/public/getBlogs").then(res => {
      setNews(res.data.data)
      setLoading(false)
    })
  }, [])

  return (
    <div data-aos="fade-up">
      {
        loading ? <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div> : <>
          <h1 className="text-center mt-[40px] mb-[-6px] text-5xl font-bold">
            Latest <span className="text-primary">Blog</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1  mt-[20px]">
              {
                news?.map((news, index) => index < 3 && (<NewsCard news={news} />))
              }
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default News;
