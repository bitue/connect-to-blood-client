import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className="hero min-h-screen" data-aos="fade-up">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className="text-center lg:text-left w-[40%] ">
                        <h1 className="text-5xl font-bold">Contact <span className="text-primary">Us!</span></h1>
                        <p className="py-6">Have a concern? Have a question? Have something to report about? Contact us now!</p>
                    </div>
                    <div className="card w-[50%] flex-shrink-0 max-w-sm shadow-2xl bg-base-100 mr-[30px] ">
                        <div className="card-body text-secondary">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#333]">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered border-[#f1f1f1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#333]">Name</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered border-[#f1f1f1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#333]">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-secondary border-[#f1f1f1]" placeholder="Your Message "></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ContactUs;