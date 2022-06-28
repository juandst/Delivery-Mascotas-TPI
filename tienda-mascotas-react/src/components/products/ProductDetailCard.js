import NetContext from "../../context/NetContext";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDetailCard({ product }) {
  const context = useContext(NetContext);
  return (
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
  );
}
