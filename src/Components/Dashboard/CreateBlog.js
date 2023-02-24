import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const CreateBlog = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const { token, user } = useContext(AuthContext);
    const onSubmit = (data) => {
        data.user = user._id;
        axios.post("https://pear-gifted-lamb.cyclic.app/createBlog", data,
            {
                headers: {
                    'Content-type': "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Blog Successfuly created',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        reset()
    };


    return (
        <div className="h-[550px] w-[450px] phone-2 text-center rounded-xl bg-[#fff] mx-auto mt-[30px] shadow-xl pt-[20px]">
            <h2 className="text-2xl mt-[20px] font-bold">Create <span className="text-[#ED4245]">Blog</span></h2>
            <form action="" className="flex justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-[#222]">Blog title</span>
                    </label>
                    <input type="text" placeholder="Blog title" className="input input-bordered w-full max-w-xs border-[#222]" {...register("title", { required: true })} />

                    <label className="label mt-[20px]">
                        <span className="label-text text-[#222]">Blog description</span>
                    </label>
                    <textarea placeholder="Blog description" className="textarea textarea-bordered textarea-md w-full max-w-xs border-[#222] " {...register("content", { required: true })}  ></textarea>

                    <label className="label mt-[20px]">
                        <span className="label-text text-[#222]">Image Link</span>
                    </label>
                    <input type="url" placeholder="BLog Image" className="input input-bordered w-full max-w-xs border-[#222]" {...register("img", { required: true })} />
                    <button className="btn mt-[20px] text-[#fff]  bg-primary border-primary hover:bg-[#222] disabled:bg-[#f3f3f3]" >
                        Create Blog
                    </button>

                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
