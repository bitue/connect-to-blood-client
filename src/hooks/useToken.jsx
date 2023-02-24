import axios from 'axios';

import { useEffect, useState } from 'react';

export const useToken = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const saveToken = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const clearToken = () => {
        localStorage.removeItem('token');
        setToken('');
        //setUser(null);
    };

    const getData = async () => {
        try {
            if (!token) {
                return;
            }
            setLoading(true); // got the token so loading is on to fetch user
            const res = axios.get('https://pear-gifted-lamb.cyclic.app/public/getUserByToken', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const user = (await res).data;
            setUser(user);
            setLoading(false); // got user or not but loading now false ;
        } catch (err) {
            // unauthorized user !!! need to add frontend page that unAuthorized msg !
            console.log(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, [token]);

    // console.log(token);

    return { token, saveToken, clearToken, user, setUser, setToken, loading };
};
