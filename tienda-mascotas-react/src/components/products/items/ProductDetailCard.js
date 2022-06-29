import NetContext from "../../../context/NetContext";
import BuyButton from "./BuyButton";
import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDetailCard({ product }) {
  const context = useContext(NetContext);
  return (
    <>
      <Link to={"/"}>
        <Button variant="warning" style={{ margin: "10px" }}>
          Volver
        </Button>
      </Link>
      <Card border="warning" style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{product.data().name}</Card.Title>
              <Card.Text>{product.data().description}</Card.Text>
            </Col>
            <Col>
              <Card.Img variant="top" src={product.data().image} alt="IMG" className="img-details" />
            </Col>
          </Row>
          <Card.Footer>$ {product.data().price}</Card.Footer>
          {(context.login && <BuyButton />) || (
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
