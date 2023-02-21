import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const CreateBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //   const [likes, setLikes] = useState(0);
  //   const [dislikes, setDislikes] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
  };

  //   const handleLike = () => {
  //     setLikes((prevLikes) => prevLikes + 1);
  //   };

  //   const handleDislike = () => {
  //     setDislikes((prevDislikes) => prevDislikes + 1);
  //   };

  const handleClear = () => {
    reset();
    // setLikes(0);
    // setDislikes(0);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-white  shadow-xl rounded-[20px] ">
        <h2 className="text-3xl text-center mb-[20px] font-medium">
          Creating a <span className="text-primary">blog</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="border-secondary ">
          <div className="form-control w-full max-w-xs  ">
            <input
              type="text"
              {...register("user", {
                required: "User name is required",
              })}
              className="input border-secondary mb-[20px] w-[400px] max-w-xs"
              placeholder="Creator"
            />
            {errors.title && (
              <p className="text-red-600">{errors.user?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs ">
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
              })}
              className="input border-secondary mb-[20px] w-[400px] max-w-xs"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-red-600">{errors.title?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <textarea
              {...register("content", {
                required: "Content is required",
              })}
              className="textarea textarea-bordered border-secondary w-full max-w-xs"
              placeholder="Content Minimum 100 Words"
            ></textarea>
            {errors.content && (
              <p className="text-red-600">{errors.content?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs  text-[#222] mt-4">
            <input
              type="file"
              {...register("file")}
              className="file-input file-input-bordered file-input-sm border-secondary mb-[20px] w-[400px] max-w-xs"
            />
          </div>

          <div className="flex justify-between">
            <input
              className="btn btn-accent  mt-4 bg-blue-500 w-full  text-white"
              value="Submit"
              type="submit"
              style={{ backgroundColor: "#3B82F6", borderColor: "#3B82F6" }}
            />
          </div>

          <div className="flex justify-between ">
            <button
              className="btn  btn-primary w-full mt-2"
              type="button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>

        {/* <div className="flex justify-between mt-4">
          <button
            className="btn btn-sm btn-outline btn-white bg-blue-500 "
            type="button"
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="ml-2 ">{likes}</span>
          </button>
          <button
            className="btn btn-sm btn-outline btn-primary"
            type="button"
            onClick={handleDislike}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            <span className="ml-2">{dislikes}</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CreateBlog;
