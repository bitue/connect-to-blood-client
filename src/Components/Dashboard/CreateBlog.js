import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const CreateBlog = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const { token, user } = useContext(AuthContext);
    const [blogStatus, setBlogStatus] = useState('');

    console.log(token, 'create blog');
    const onSubmit = (data) => {
        console.log(data, ' blog data from ');
        data.user = user._id;

        const isReady = window.confirm('Are you sure you want to post this blog?');
        if (isReady) {
            fetch('https://pear-gifted-lamb.cyclic.app/createBlog', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((result) => {
                    // console.log(result);
                    if (result.message) {
                        setBlogStatus(result.message);
                    }
                });
            reset();
        }
    };

    const getErrorMessage = (name) => {
        return errors[name] && <p className="text-red-600">{errors[name].message}</p>;
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-20 px-10 bg-gray-100">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl text-center mb-6 font-medium py-4">
                    Creating a <span className="text-primary">blog</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="border-secondary px-8 pb-8">
                    <div className="form-control mb-6">
                        <input
                            type="text"
                            {...register('title', { required: 'Title is required' })}
                            className="input border-secondary w-full p-2 rounded-lg bg-gray-50 shadow-md"
                            placeholder="Title"
                        />
                        {getErrorMessage('title')}
                    </div>

                    <div className="form-control mb-6">
                        <textarea
                            {...register('content', { required: 'Content is required' })}
                            className="textarea textarea-bordered border-secondary w-full p-2 rounded-lg bg-gray-50 shadow-md"
                            placeholder="Content Minimum 100 Words"
                        />
                        {getErrorMessage('content')}
                    </div>

                    <div className="form-control mb-6">
                        <input
                            type="text"
                            {...register('url', { required: 'Image url is required' })}
                            placeholder="Give Image URL here"
                            className="file-input file-input-bordered file-input-sm  border-secondary w-full p-2 rounded-lg bg-gray-50 shadow-md"
                        />
                        {getErrorMessage('url')}
                    </div>

                    <div className="flex justify-between">
                        <input
                            className="btn btn-primary btn-sm w-[200px] text-white place-content-center py-2 rounded-lg"
                            value="Submit"
                            type="submit"
                        />
                    </div>
                </form>
                <div>
                    <p className="text-primary">{blogStatus ? blogStatus : ''}</p>
                    {/* modal use kore aita koray jai vai ,, aita try koiren  */}
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;
