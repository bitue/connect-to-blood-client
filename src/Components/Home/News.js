import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get("https://pear-gifted-lamb.cyclic.app/public/getBlogs").then(res => {
      setNews(res.data.data)
    })
  }, [])

  return (
    <>
      <h1 className="text-center my-[20px] text-5xl font-bold">
        Latest <span className="text-primary">Blog</span>
      </h1>
      <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-[20px]">
        {
          news?.map(news => <NewsCard news={news} />)
        }
      </div>
    </>
  );
};

export default News;
