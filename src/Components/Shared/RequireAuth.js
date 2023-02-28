import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from './Navbar';

const RequireAuth = ({ children }) => {
    const { token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;