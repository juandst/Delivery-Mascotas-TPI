import NetContext from "./NetContext";
import { useState } from "react";
import { signOutUser } from "../services/UsersServices";

const GlobalState = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [isAdmin, setIsAdmin] = useState(false);

  const loginUser = (uid) => {
    if (uid === "B1HJgC4yj1R6GMHH5hRxnmL3ZjC3") setUserAsAdmin();
    setLogin(true);
    localStorage.setItem("login", true);
  };

  const logoutUser = () => {
    setLogin(false);
    localStorage.removeItem("login");
    signOutUser();
    if (isAdmin) setIsAdmin(false);
  };

  const setUserAsAdmin = () => {
    setIsAdmin(true);
  };

  return (
    <NetContext.Provider
      value={{
        login: login,
        loginUser: loginUser,
        logoutUser: logoutUser,
        isAdmin: isAdmin,
      }}
    >
      {children}
    </NetContext.Provider>
  );
};

export default GlobalState;
