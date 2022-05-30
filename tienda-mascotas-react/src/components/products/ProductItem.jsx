import "./ProductItem.css";

const ProductItem = ({ id, img, name, price, quality }) => {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <div className="product-item-container">
      <h3>{img}</h3>
      <h2>{name}</h2>
      <h3 className="price">{price}</h3>
      <h3>{quality}</h3>
      <button onClick={buttonHandler}>Comprar</button>
    </div>
  );
};

export default ProductItem;
