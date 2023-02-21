import { createContext } from "react";
import { useToken } from "../Hooks/useToken";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const { user, setUser, saveToken } = useToken(); // get user info from this hooks
  // if you add any context value here just make a custom hooks then provide it the the value object
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
