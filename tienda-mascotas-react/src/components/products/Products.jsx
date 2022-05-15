import React from 'react';
import ProductItem from './ProductItem';
import "./Products.css";
import "./ProductItem.css";

const Products = ({ dProducts }) => {
  
    return (
      <div>
        <ProductItem
          id={dProducts[0].id}
          img={dProducts[0].img}
          name={dProducts[0].name}
          price={dProducts[0].price}
          quality={dProducts[0].quality}
          action={dProducts[0].action}

        />
        <ProductItem
        id={dProducts[1].id}
        img={dProducts[1].img}
        name={dProducts[1].name}
        price={dProducts[1].price}
        quality={dProducts[1].quality}
        action={dProducts[1].action}
        />
        <ProductItem
          id={dProducts[2].id}
          img={dProducts[2].img}
          name={dProducts[2].name}
          price={dProducts[2].price}
          quality={dProducts[2].quality}
          action={dProducts[2].action}        />
      </div>
    );
}

export default Products;