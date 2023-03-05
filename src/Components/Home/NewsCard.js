import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-96">
      <div className="h-48 overflow-hidden">
        <img
          src={news?.img}
          alt="blood pressure images"
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{news?.title}</h3>
        <p
          className="text-gray-700 text-base mb-4 truncate"
          style={{ maxHeight: "6em" }}
        >
          {news?.content}
        </p>

        <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
          <div className="flex items-center">
            <p className="text-gray-600 font-medium text-sm">
              {news?.user?.email.split("@")[0]}
            </p>
          </div>

          <p className="text-gray-400">
            {new Date(news?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <Link
          to={`/blogs/${news?._id}`}
          className="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
