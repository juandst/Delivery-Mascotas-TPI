import useFetch from "../components/hooks/useFetch.js";
import Products from "../components/products/Products";

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
