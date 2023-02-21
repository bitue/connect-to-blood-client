import React, { useState } from 'react';

const UserProfile = () => {
    const [isEditing, setEditing] = useState(false)
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="text-center text-[30px] my-[20px]">My Profile</h2>
            <div className="w-[95%] shadow-xl rounded-lg h-auto py-[40px] bg-[#fff] flex justify-center items-center">
                {
                    isEditing ? <>
                        <div className="flex justify-between items-center w-[100%] mx-[40px]">
                            <div className="w-[50%] flex justify-center items-center flex-col">
                                <img className="border-[2px] radius-full w-[150px] h-[150px] rounded-full hover:opacity-[0.3] transition-opacity" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80" alt="" />
                                <button className="mt-[20px] bg-[#ED4245] text-white text-[18px] py-[16px] px-[16px] rounded-md">Edit profile</button>
                            </div>
                            <div className="w-[50%] flex justify-center items-center flex-col">
                                <h2 className="text-2xl">My Profile</h2>
                                <form className="flex justify-center items-center flex-col">
                                    <input type="text" value="HueByte" class="input w-full max-w-xs border-b-[2px] border-black mt-[20px]" />
                                    <input type="email" value="HueByte@gmail.com" class="input w-full max-w-xs border-[2px] border-black mt-[20px]" />
                                    <input type="password" value="HueByte" class="input w-full max-w-xs border-[2px] border-black mt-[20px]" />
                                </form>
                            </div>
                        </div>
                    </> :
                        <div className="flex justify-between items-center w-[100%] mx-[40px]">
                            <div className="w-[50%] flex justify-center items-center flex-col">
                                <img className="border-[2px] radius-full w-[150px] h-[150px] rounded-full hover:opacity-[0.3] transition-opacity" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80" alt="" />
                                <button className="mt-[20px] bg-[#ED4245] text-white text-[18px] py-[16px] px-[16px] rounded-md" onClick={() => setEditing(true)}>Edit profile</button>
                            </div>
                            <div className="w-[50%] flex justify-center items-center flex-col">
                                <h2 className="text-2xl">My Profile</h2>
                                <form className="flex justify-center items-center flex-col">
                                    <input type="text" value="HueByte" class="input w-full max-w-xs border-b-[2px] border-black border-t-0 border-l-0 border-r-0 rounded-none mt-[20px]" readOnly/>
                                    <input type="email" value="HueByte@gmail.com" class="input w-full max-w-xs border-b-[2px] border-black border-t-0 border-l-0 border-r-0 rounded-none mt-[20px]" readOnly />
                                    <input type="password" value="HueByte" class="input w-full max-w-xs border-b-[2px] border-black border-t-0 border-l-0 border-r-0 rounded-none mt-[20px]" />
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default UserProfile;
