import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "../../App.css";

const ProductItem = ({ id, title, price, image }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price} $</Card.Subtitle>
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <Button variant="warning" onClick={buttonHandler}>
                  COMPRAR
                </Button>
              </Col>
              <Col>
                <Button variant="warning" as={Link} to={"/product/" + id}>
                  VER
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
