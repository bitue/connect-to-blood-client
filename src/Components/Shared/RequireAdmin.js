import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const RequireAdmin = ({ children }) => {
    const { user, token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token === null) {
            navigate("/login")
        }
    }, [user, token])

    if (user?.role === "admin") {
        return (
            <div>
                {children}
            </div>
        );
    }

    return null;
};

export default RequireAdmin;
