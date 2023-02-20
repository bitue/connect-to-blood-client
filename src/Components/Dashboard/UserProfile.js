import React, { useState } from 'react';

const UserProfile = () => {
    const [isEditing, setEditing] = useState(false)
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="text-center text-[30px] my-[20px]">My Profile</h2>
            <div className="w-[95%] shadow-xl rounded-lg h-auto py-[40px] bg-[#fff] flex justify-center items-center">
                {
                   isEditing
                }
            </div>
        </div>
    );
};

export default UserProfile;
