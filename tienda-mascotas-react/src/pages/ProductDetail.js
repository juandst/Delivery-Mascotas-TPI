import firebase from "../config/firebase";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  id = useParams().id;

  useEffect(() => {
    firebase.db
      .doc("productos/" + id)
      .get()
      .then((doc) => {
        setProduct(doc);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <Link to={"/"}>
        <button>Volver</button>
      </Link>
      {error && <p>{error}</p>}
      {isLoading && <div>Cargando datos...</div>}
      {product && (
        <div>
          <h1>{product.data().name}</h1>
          <p>{product.data().description}</p>
          <p>$ {product.data().price}</p>
          <img src={product.data().image} alt=""></img>
        </div>
      )}
    </>
  );
}
