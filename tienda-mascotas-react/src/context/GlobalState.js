import NetContext from "./NetContext";
import firebase from "../config/firebase";
import { useState } from "react";

const GlobalState = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [isAdmin, setIsAdmin] = useState(false);

  const loginUser = () => {
    setLogin(true);
    localStorage.setItem("login", true);
  };

  const logoutUser = () => {
    setLogin(false);
    localStorage.removeItem("login");
    firebase.auth.signOut();
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
        setUserAsAdmin: setUserAsAdmin,
      }}
    >
      {children}
    </NetContext.Provider>
  );
};

export default GlobalState;
