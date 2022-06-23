import Products from "../components/products/Products";
import firebase from "../config/firebase";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    firebase.db
      .collection("productos")
      .get()
      .then((query) => {
        setProducts(query.docs);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div>Cargando datos...</div>}
      {products && <Products productList={products} />}
    </div>
  );
};

export default Home;
