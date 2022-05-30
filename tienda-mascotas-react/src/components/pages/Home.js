import useFetch from "../utils/useFetch.js";
import Products from "../products/Products.js";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products/");
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div>Cargando datos...</div>}
      {products && <Products productList={products} />}
    </div>
  );
};

export default Home;
