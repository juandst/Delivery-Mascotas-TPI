import Products from "../components/products/Products";
import Loading from "../components/forms/Loading";
import { getProducts } from "../services/ProductServices";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts()
      .then((query) => {
        setProducts(query.docs);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <Loading />}
      {products && <Products productList={products} />}
    </div>
  );
};

export default Home;
