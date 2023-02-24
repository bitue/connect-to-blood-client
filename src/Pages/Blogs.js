import React, { useEffect, useState } from "react";
import Navbar from "../Components/Shared/Navbar";
import axios from "axios";
import NewsCard from "../Components/Home/NewsCard";

const Blogs = () => {
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
    <div>
      {
        loading ? <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div> : <>
          <Navbar />
          <div className="flex justify-center items-center mt-[30px]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto">
              {
                news?.map(news => <NewsCard news={news} />)
              }
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Blogs;
