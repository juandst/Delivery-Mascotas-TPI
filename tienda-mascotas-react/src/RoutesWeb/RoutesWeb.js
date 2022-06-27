import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductAlta from "../pages/ProductAlta";
import ProductEdit from "../pages/ProductEdit";
import NetContext from "../context/NetContext";
import { useContext } from "react";

const RoutesWeb = () => {
  const context = useContext(NetContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      {!context.login && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      {context.isAdmin && (
        <>
          <Route path="/product/alta" element={<ProductAlta />} />
          <Route path="/product/edit/:id" element={<ProductEdit />} />
        </>
      )}
    </Routes>
  );
};

export default RoutesWeb;
