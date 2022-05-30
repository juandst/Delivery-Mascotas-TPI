import "./ProductItem.css";

const ProductItem = ({ title, price, description, image }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <div className="product-item-container">
      <img className="img-field" src={image} alt=""></img>
      <h2 className="title-field">{title}</h2>
      <h3 className="price-field">{price} $</h3>
      <h4 className="desc-field">{description}</h4>
      <button className="buy-button" onClick={buttonHandler}>
        COMPRAR
      </button>
    </div>
  );
};

export default ProductItem;
