import Products from "./components/products/Products";
import "./App.css";

const App = () => {
  const testProducts = [
    {
      id: 1,
      img: "",
      name: "Proplan Adult Complete x15",
      price: 7890,
      quality: "5",
    },
    {
      id: 2,
      img: "",
      name: "Medium Adult x15",
      price: 1234,
      quality: "5",
    },
    {
      id: 3,
      img: "",
      name: "Eukanuba Adult MB x15",
      price: 5678,
      quality: "5",
    },
  ];

  return (
    <div>
      <nav>
        <h2>Delivery Mascotas</h2>
        <h3>Tienda online</h3>
      </nav>
      <Products productList={testProducts} />
    </div>
  );
};

export default App;
