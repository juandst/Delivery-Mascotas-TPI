import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../products/ProductDetail";

const RoutesWeb = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="*"
          element={
            <div>
              <p>🤔🤔🤔🤔</p>
              <p>Algo salió mal</p>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default RoutesWeb;
