import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NewsCard from '../Home/NewsCard';

const YourArticles = () => {
     const [news, setNews] = useState([])
     const { user, token } = useContext(AuthContext);
     console.log(token)

     useEffect(() => {
          axios.get(`https://pear-gifted-lamb.cyclic.app/getBlogsByUserId?id=${user._id}`, {
               headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${token}`
               }
          }).then(data => setNews(data.data))
               .catch(error => console.log(error))
     }, [news])
     // console.log(news)

     return (
          <div>
               <h2 className="text-center mt-[30px] text-3xl">Your Articles</h2>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-[20px] gap-10 place-items-center">
                    {
                         news?.map(news =>
                              <NewsCard news={news} />)
                    }

               </div>
          </div>
     );
};

export default YourArticles;