import NetContext from "../context/NetContext";
import Loading from "../components/forms/Loading";
import { getProduct } from "../services/ProductServices";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = useParams().id;
  const context = useContext(NetContext);

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
    error && <p>{error}</p>,
    isLoading && <Loading />,
    product && (
      <>
        <Link to={"/"}>
          <Button variant="warning" style={{ marginTop: "10px" }}>
            Volver
          </Button>
        </Link>
        <Card border="warning" style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src={product.data().image}
              style={{ maxWidth: "25%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
            <Card.Title>{product.data().name}</Card.Title>
            <Card.Text>{product.data().description}</Card.Text>
            <Card.Footer>$ {product.data().price}</Card.Footer>
            {(context.login && <Button variant="warning">COMPRAR</Button>) || (
              <Link to={"/login"}>
                <Button variant="warning" style={{ marginTop: "10px" }}>
                  INICIAR SESIÓN
                </Button>
              </Link>
            )}
          </Card.Body>
        </Card>
      </>
    )
  );
}
