import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Blogs = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    setComments([...comments, comment]);
    event.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto my-8">
        <img
          className="object-cover object-center w-full h-64"
          src="https://source.unsplash.com/random/800x600"
          alt="blog cover"
        />
        <div className="p-6">
          <h2 className="font-bold text-3xl mb-4">Blog Title</h2>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-lg">{comments.length} Comments</span>
            </div>
          </div>
          <form onSubmit={handleComment}>
            <input
              type="text"
              name="comment"
              placeholder="Write a comment"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4 text-lg"
            />
            <Link to={`/blogs/${id}`} id="blog-details-link">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-lg"
              >
                Details
              </button>
            </Link>
          </form>
          {comments.map((comment, index) => (
            <div key={index} className="mt-6">
              <p className="font-semibold text-lg">{comment}</p>
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <div className="flex items-center">
              <button onClick={handleLike} className="mr-2 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
              <span className="text-lg">{likes} Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
