import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComment,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import NewsCard from "../Components/Home/NewsCard";

const Blogs = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get("https://pear-gifted-lamb.cyclic.app/public/getBlogs").then(res => {
      setNews(res.data.data)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-[30px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto">
          {
            news?.map(news => <NewsCard news={news} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;
