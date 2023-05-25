import { createContext, useState } from "react";
import { googleLogout } from "@react-oauth/google";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const handleSignOut = () => {
    googleLogout();
    setUser(null);
    localStorage.setItem("USER", null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleSignOut }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
