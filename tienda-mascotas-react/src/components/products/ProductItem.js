import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import NetContext from "../../context/NetContext";
import "../../App.css";

const ProductItem = ({ id, name, price, image }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <>
      <NetContext.Consumer>
        {(context) => (
          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{price} $</Card.Subtitle>
              <Container>
                <Row className="justify-content-md-center">
                  {context.login && (
                    <>
                      <Col>
                        <Button variant="warning" onClick={buttonHandler}>
                          COMPRAR
                        </Button>
                      </Col>
                      {context.isAdmin && (
                        <Col>
                          <Button variant="warning" as={Link} to={"/product/edit/" + id}>
                            EDITAR
                          </Button>
                        </Col>
                      )}
                    </>
                  )}

                  <Col>
                    <Button variant="warning" as={Link} to={"/product/" + id}>
                      VER
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        )}
      </NetContext.Consumer>
    </>
  );
};

export default ProductItem;
