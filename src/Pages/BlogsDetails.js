import { useState } from "react";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const { id } = useParams();

  // Here you use the `id` to fetch the blog details from an API or a local data source
  const [blog, setBlog] = useState({
    id: "1",
    title: "Blog Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada libero eget lacus ultricies, sit amet pretium ex ultricies. Etiam lobortis dictum urna. Suspendisse ut libero non ante euismod vestibulum. Proin ut purus et quam euismod malesuada. Aenean ac nisl fermentum, consequat nulla vel, sollicitudin ipsum. Nulla facilisi. Nam ut dolor est. Nullam lacinia sapien vel velit aliquam, non accumsan ante elementum.",
    author: "John Doe",
    date: new Date(),
    upvotes: 0,
  });

  const handleUpvote = () => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      upvotes: prevBlog.upvotes + 1,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-4">
        <img
          src="https://avatars.githubusercontent.com/u/1069847?v=4"
          alt={blog.author}
          className="w-8 h-8 rounded-full mr-2"
        />
        <p className="text-sm text-gray-700">{blog.author}</p>
        <p className="text-sm text-gray-700 mx-4">—</p>
        <p className="text-sm text-gray-700">
          {blog.date.toLocaleDateString()}
        </p>
      </div>
      <div className="border-t border-gray-300 py-4">
        <p className="text-base leading-7">{blog.content}</p>
      </div>
      <div className="flex items-center mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={handleUpvote}
        >
          Upvote ({blog.upvotes})
        </button>
        <div className="ml-4">
          <p className="font-semibold">Comments:</p>
          <p className="mt-2">No comments yet.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
