import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ProductItemIfLogin from "./items/ProductItemIfLogin";

const ProductItem = ({ id, name, price, image }) => {
  return (
    <>
      <Card className="card-container">
        <Card.Body as={Link} to={`/product/${id}`} style={{ textDecoration: "none", color: "black" }}>
          <Card.Img variant="top" src={image} width="250" height="250" />
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price} $</Card.Subtitle>
        </Card.Body>
        <ProductItemIfLogin id={id} />
      </Card>
    </>
  );
};

export default ProductItem;
