import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComment,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const [upvotes, setUpvotes] = useState(10);
  const [comments, setComments] = useState(Array(3).fill(null));
  const { id } = useParams();

  const handleLike = () => {
    setUpvotes(upvotes + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto my-8">
        <img
          className="object-cover object-center w-full h-64"
          src="https://images.unsplash.com/photo-1615461065624-21b562ee5566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25vcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="blog cover"
        />
        <div className="p-6">
          <h2 className="font-bold text-2xl mb-4">
            Importance of Blood Donation
          </h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <button onClick={handleLike} className="mr-2 focus:outline-none">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-black h-4 w-4"
                />
              </button>
              <span className="text-lg">{upvotes}</span>
              <span className="text-black text-sm ml-2">Upvotes</span>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faComment}
                className="text-black h-4 w-4 mr-2"
              />
              <span className="text-lg">{comments.length}</span>
              <span className="text-black text-sm ml-2">Comments</span>
            </div>
          </div>

          <Link to={`/blogs/${id}`} id="blog-details-link">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary text-lg flex items-center"
            >
              <span className="mr-2">More</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white h-4 w-4"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
