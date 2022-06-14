import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail({ id }) {
  id = useParams().id;
  const {
    data: product,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  return (
    <>
      <Link to={"/"}>
        <button>Volver</button>
      </Link>
      {error && <p>{error}</p>}
      {isLoading && <div>Cargando datos...</div>}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          <img src={product.image} alt=""></img>
        </div>
      )}
    </>
  );
}
