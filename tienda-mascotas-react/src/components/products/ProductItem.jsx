import React from 'react';
import Products from './Products';
import './ProductItem.css';

const ProductItem = ({ id, img, name, price, quality, action }) => {
  return (
    <div className='product-item-container'>
        <h3>{id}</h3>
        <h3>{img}</h3>
        <h2>{name}</h2>    
        <h3>{price}</h3>    
        <h3>{quality}</h3>    
        <h3>{action}</h3>    
    </div>
  );
}

export default ProductItem