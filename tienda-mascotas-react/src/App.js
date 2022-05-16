import Products from "./components/products/Products";

import "./App.css";
import "./components/products/Products.css";

const App = () => {
  const testProducts = [
    {
      id: 1,
      img: "",
      name: "Nutri Care Ad x22",
      price: 4990,
      quality: "5",
    },
    {
      id: 2,
      img: "",
      name: "Producto 2",
      price: 1234,
      quality: "5",
    },
    {
      id: 3,
      img: "",
      name: "Producto 3",
      price: 5678,
      quality: "5",
    },
  ];

  return (
    <div>
      <h2>Delivery Mascotas</h2>
      <h3>Tienda online</h3>
      <h3 className="neon-green">probando branch</h3>
      <Products productList={testProducts} />
    </div>
  );
};

export default App;
