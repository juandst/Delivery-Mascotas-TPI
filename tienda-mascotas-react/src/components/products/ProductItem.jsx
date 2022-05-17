import "./ProductItem.css";
import { FaStar }  from 'react-icons/fa';
import { FaHeart }  from 'react-icons/fa';

const ProductItem = ({ id, img, name, price, quality, protein, wish }) => {
  return (
    <div className="product-item-container">
      
      <div><img src={img} width="300px" height="300px" alt="Product" /></div>
      <h3 className="upper">{name}</h3>
      <div class="container">
        
      
        <h2 className="price">${price}</h2>
        <div className="wrapper">
          <p className="star"><FaStar /> <FaStar /> <FaStar /></p>
          <p className="protein">{protein}</p>
          <p className="wish"><FaHeart /></p>
          
        </div>
        
        
        <button className="upper">Comprar</button>
        
      </div>
      
    </div>
  );
};

export default ProductItem;
