import "./ProductItem.css";

const ProductItem = ({ id, img, name, price, quality, protein, wish }) => {
  return (
    <div className="product-item-container">
      
      <div><img src={img} width="300px" height="300px"/></div>
      <div class="container">
        
        <h3 className="upper">{name}</h3>
        <h2 className="price">${price}</h2>
        <div className="wrapper">
          <h3>{quality}</h3>
          <h3>{protein}</h3>
          <h3>{wish}</h3>
        </div>
        <button>Comprar</button>
        
      </div>
      
    </div>
  );
};

export default ProductItem;
