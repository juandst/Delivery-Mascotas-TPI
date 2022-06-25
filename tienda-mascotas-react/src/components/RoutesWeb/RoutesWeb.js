import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ProductDetail from "../../pages/ProductDetail";
import ProductAlta from "../../pages/ProductAlta";
import ProductEdit from "../../pages/ProductEdit";
import NotFound from "../../pages/NotFound";
import NetContext from "../../context/NetContext";

const RoutesWeb = () => {
  return (
    <NetContext.Consumer>
      {(context) => (
        <Routes>
          <Route path="/" element={<Home />} />
          {!context.login && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route path="/product/:id" element={<ProductDetail />} />
          {context.isAdmin && (
            <>
              <Route path="/product/alta" element={<ProductAlta />} />
              <Route path="/product/edit/:id" element={<ProductEdit />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </NetContext.Consumer>
  );
};

export default RoutesWeb;
