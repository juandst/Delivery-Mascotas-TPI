import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../App.css";

const ProductItem = ({ id, title, price, image }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <div className="product-item-container">
      <img className="img-field" src={image} alt=""></img>
      <h2 className="title-field">{title}</h2>
      <h3 className="price-field">{price} $</h3>
      <div className="button-container">
        <Button variant="warning" onClick={buttonHandler}>
          COMPRAR
        </Button>
        <Link to={"/product/" + id} style={{ textDecoration: "none" }}>
          <Button variant="warning" className="rev-button">
            VER
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
