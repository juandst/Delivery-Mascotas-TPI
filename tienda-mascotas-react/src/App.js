import Products from "./components/products/Products";
import "./App.css";
import FaHeart from "react-icons/fa";
import  delivery  from './assets/img/delivery2.png';




const App = () => {
  const testProducts = [
    {
      id: 1,
      img: "https://puppis.vteximg.com.br/arquivos/ids/179813-1000-1000/7613287031082_1.png?v=637570861386330000" ,
      name: "Proplan Adult MB x15",
      price: 7890,
      quality: "",
      protein: 28,
      wish: "",
    },
    {
      id: 2,
      img: "https://puppis.vteximg.com.br/arquivos/ids/172420-1000-1000/138005-1.jpg?v=637350101648700000",
      name: "Eukanuba Adult MB x15",
      price: 1234,
      quality: "FaHeart",
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
      <div className="brand"> 
      <img src={ delivery } width="80px" height="auto" className="left"/>
      <div className="upper name">Delivery Mascotas</div>
        <div className="neon-green upper desc">Tienda online</div>
      </div>
      <Products productList={testProducts} />
      <svg data-testid="FavoriteIcon"></svg>

      
      
  
    </div>
  );
};

export default App;
