import NetContext from "../context/NetContext";
import { getProduct } from "../services/ProductServices";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = useParams().id;

  useEffect(() => {
    getProduct(id)
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
        error && <p>{error}</p>,
        isLoading && <div>Cargando datos...</div>,
        product && (
          <>
            <Link to={"/"}>
              <Button variant="warning" style={{ marginTop: "10px" }}>
                Volver
              </Button>
            </Link>
            <Card border="warning" style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
              <Card.Body>
                <Card.Img variant="top" src={product.data().image} />
                <Card.Title>{product.data().name}</Card.Title>
                <Card.Text>{product.data().description}</Card.Text>
                <Card.Footer>$ {product.data().price}</Card.Footer>
                {context.login && <Button variant="warning">COMPRAR</Button>}
              </Card.Body>
            </Card>
          </>
        )
      )}
    </NetContext.Consumer>
  );
}
