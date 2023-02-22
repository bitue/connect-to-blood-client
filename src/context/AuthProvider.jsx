import { createContext } from 'react';
import { useToken } from '../hooks/useToken';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { user, setUser, saveToken, token, loading } = useToken(); // get user info from this hooks
    // if you add any context value here just make a custom hooks then provide it the the value object
    console.log(user);
    return (
        <AuthContext.Provider value={{ user, setUser, saveToken, token, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
