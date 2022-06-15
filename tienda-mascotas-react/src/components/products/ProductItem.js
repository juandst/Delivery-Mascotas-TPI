import { Link } from "react-router-dom";
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
      <button className="buy-button" onClick={buttonHandler}>
        COMPRAR
      </button>
      <Link to={"/product/" + id} style={{ textDecoration: "none" }}>
        <button className="rev-button">EXAMINAR</button>
      </Link>
    </div>
  );
};

export default ProductItem;
