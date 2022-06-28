import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import NetContext from "../../context/NetContext";

const ProductItem = ({ id, name, price, image }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <>
      <NetContext.Consumer>
        {(context) => (
          <Card className="card-container" as={Link} to={"/product/" + id}>
            <Card.Img variant="top" src={image} width="250" height="250" />
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
