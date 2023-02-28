import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "../Components/Shared/Navbar";
import { AuthContext } from "../context/AuthProvider";

const BlogsDetails = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [blog, setBlog] = useState({});
  const [commentText, setCommentText] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://pear-gifted-lamb.cyclic.app/public/getBlogByBlogId?id=${id}`
      )
      .then((res) => setBlog(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleUpvote = () => {
    if (blog.upvotes >= 10) {
      setBlog((prevBlog) => ({ ...prevBlog, upvotes: prevBlog.upvotes + 1 }));
    }
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText) {
      axios
        .post(
          "https://pear-gifted-lamb.cyclic.app/comment",
          {
            blog: blog._id,
            comment: commentText,
          },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          axios
            .get(
              `https://pear-gifted-lamb.cyclic.app/public/getBlogByBlogId?id=${id}`
            )
            .then((res) => setBlog(res.data.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
      setCommentText("");
      setShowCommentForm(false);
    }
  };

  const handleComment = () => {
    setShowCommentForm(true);
    setShowComments(true); // show comments when comment form is opened
  };

  const handleCancelComment = () => {
    setShowCommentForm(false);
  };

  const { title, author, user, createdAt, img, content, comments } = blog;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="flex items-center mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/1069847?v=4"
            alt={author}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-secondary mr-[30px]">
              {user?.email?.split("@")[0]}
            </p>
            <p className="text-sm text-secondary">{createdAt?.split("T")[0]}</p>
          </div>
        </div>
        <img
          src={img}
          alt="blog cover"
          className="w-full h-64 object-cover object-center mb-4"
        />
        <div className="border-b border-gray-300 py-4">
          <p className="text-base leading-7">{content}</p>
        </div>
        <div className="flex items-center mt-4">
          <button onClick={handleUpvote} className="mr-[10px]">
            <FontAwesomeIcon icon={faThumbsUp} className="h-4 w-4 mr-2" />
            Like
          </button>
          <div className="flex items-center">
            <button onClick={handleComment} className="mr-[10px]">
              <FontAwesomeIcon icon={faComment} className="h-4 w-4 mr-2" />
              Comments
            </button>
            <span>{comments?.length || 0} Comments</span>
          </div>
        </div>
        <div class="mt-4 bg-white rounded-md shadow-lg p-4">
          {showCommentForm && (
            <form onSubmit={handleCommentSubmit} className="mt-4">
              <div className="flex items-start">
                <img
                  src="https://avatars.githubusercontent.com/u/1069847?v=4"
                  alt={author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex-1">
                  <textarea
                    value={commentText}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    className="w-full h-16 p-2 border rounded-md"
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={handleCancelComment}
                      className="text-sm text-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {comments &&
            comments.map((comment) => (
              <div class="p-4 my-4 bg-gray-100 rounded-md" key={comment._id}>
                <p class="text-gray-600 text-sm">{comment.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
