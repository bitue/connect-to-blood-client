import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navbar from '../Components/Shared/Navbar';

const BlogsDetails = () => {
    const { id } = useParams();

    // Here you use the `id` to fetch the blog details from an API or a local data source
    const [blog, setBlog] = useState();

    useEffect(() => {
        axios
            .get(`https://pear-gifted-lamb.cyclic.app/public/getBlogByBlogId?id=${id}`)
            .then((res) => setBlog(res.data.data))
            .catch((error) => console.log(error));
    }, []);

    const handleUpvote = () => {
        if (blog.upvotes >= 10) {
            setBlog((prevBlog) => ({
                ...prevBlog,
                upvotes: prevBlog.upvotes + 1
            }));
        }
    };
    console.log(blog);

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
                <div className="flex items-center mb-4">
                    <img
                        src="https://avatars.githubusercontent.com/u/1069847?v=4"
                        alt={blog?.author}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-secondary mr-[30px]">
                            {blog?.user?.email.split('@')[0]}
                        </p>
                        <p className="text-sm text-secondary">{blog?.createdAt.split('T')[0]}</p>
                    </div>
                </div>
                <img
                    src={blog?.img}
                    alt="blog cover"
                    className="w-full h-64 object-cover object-center mb-4"
                />
                <div className="border-b border-gray-300 py-4">
                    <p className="text-base leading-7">{blog?.content}</p>
                </div>
                <div className="flex items-center mt-4">
                    <button onClick={handleUpvote} className="mr-[10px]">
                        <FontAwesomeIcon icon={faThumbsUp} className="h-4 w-4 mr-2" />
                        Like
                    </button>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faComment} className="text-black h-4 w-4 mr-2" />
                        <span className="text-lg">{blog?.comments?.length}</span>
                        <span className="text-black text-sm ml-2">Comments</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsDetails;
