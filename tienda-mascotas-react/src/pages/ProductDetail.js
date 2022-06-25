import firebase from "../config/firebase";
import NetContext from "../context/NetContext";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = useParams().id;

  useEffect(() => {
    firebase.db
      .doc("productos/" + id)
      .get()
      .then((doc) => {
        setProduct(doc);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  return (
    <NetContext.Consumer>
      {(context) => (
        (
          <Link to={"/"}>
            <button>Volver</button>
          </Link>
        ),
        error && <p>{error}</p>,
        isLoading && <div>Cargando datos...</div>,
        product && (
          <div>
            <h1>{product.data().name}</h1>
            <p>{product.data().description}</p>
            <p>$ {product.data().price}</p>
            <img src={product.data().image} alt=""></img>
            {context.login && <Button variant="warning">COMPRAR</Button>}
          </div>
        )
      )}
    </NetContext.Consumer>
  );
}
