import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import RoutesWeb from "./components/RoutesWeb/RoutesWeb";
import "./App.css";

const App = () => {
  const [options, setOptions] = useState([
    {
      path: "/login",
      label: "Ingresar",
    },
    {
      path: "/register",
      label: "Registrarse",
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
