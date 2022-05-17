import Products from "./components/products/Products";
import "./App.css";


const App = () => {
  const testProducts = [
    {
      id: 1,
      img: "https://puppis.vteximg.com.br/arquivos/ids/179813-1000-1000/7613287031082_1.png?v=637570861386330000",
      name: "Proplan Adult MB x15",
      price: 7890,
      quality: "5",
      protein: 28,
      wish: "co",
    },
    {
      id: 2,
      img: "https://puppis.vteximg.com.br/arquivos/ids/172420-1000-1000/138005-1.jpg?v=637350101648700000",
      name: "Eukanuba Adult MB x15",
      price: 1234,
      quality: "5",
      protein: 27,
      wish: "co",
    },
    {
      id: 3,
      img: "https://puppis.vteximg.com.br/arquivos/ids/176760-600-600/156157.jpg?v=637556935573830000",
      name: "Royal Medium Adult x15",
      price: 5678,
      quality: "5",
      protein: 26,
      wish: "co",
    },
  ];

  return (
    <div>
      <h1 class="upper">Delivery Mascotas</h1>
      <h2 className="neon-green upper">Tienda online</h2>
      <Products productList={testProducts} />
    </div>
  );
};

export default App;
