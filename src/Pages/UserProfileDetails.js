import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfileDetails = () => {
    const { userId } = useParams()
    console.log(userId)
    return (
        <div>
            
        </div>
    );
};

export default UserProfileDetails;