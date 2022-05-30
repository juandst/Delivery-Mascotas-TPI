import { useEffect, useState } from "react";
import Products from "../products/Products.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Products productList={products} />
    </div>
  );
};

export default Home;
