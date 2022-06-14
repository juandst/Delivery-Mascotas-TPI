import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import RoutesWeb from "./components/RoutesWeb/RoutesWeb";
import "./App.css";

const App = () => {
  const [options, setOptions] = useState([
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/login",
      label: "Login",
    },
  ]);

  return (
    <BrowserRouter>
      <nav>
        <h2>Delivery Mascotas</h2>
        <h3>Tienda online</h3>
        <Menu options={options} />
      </nav>
      <RoutesWeb />
    </BrowserRouter>
  );
};

export default App;
