import NetContext from "../../../context/NetContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import BuyButton from "./BuyButton";

export default function ProductItemIfLogin({ id }) {
  const context = useContext(NetContext);
  return (
    <>
      {context.login && (
        <Card.Footer>
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <BuyButton />
              </Col>
              {context.isAdmin && (
                <Col>
                  <Button variant="warning" as={Link} to={"/product/edit/" + id}>
                    EDITAR
                  </Button>
                </Col>
              )}
            </Row>
          </Container>
        </Card.Footer>
      )}
    </>
  );
}
