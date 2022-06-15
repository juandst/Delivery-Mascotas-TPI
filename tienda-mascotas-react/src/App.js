import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import RoutesWeb from "./components/RoutesWeb/RoutesWeb";
import "./App.css";

const App = () => {
  const [options, setOptions] = useState([
    {
      path: "/",
      label: "DELIVERY MASCOTAS",
    },
    {
      path: "/login",
      label: "Login",
    },
    {
      path: "/register",
      label: "Register",
    },
  ]);

  return (
    <BrowserRouter>
      <Menu options={options} />
      <RoutesWeb />
    </BrowserRouter>
  );
};

export default App;
