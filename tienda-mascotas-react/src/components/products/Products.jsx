import React from 'react';
import ProductItem from './ProductItem';
import "./Products.css";
import "./ProductItem.css";

const Products = ({ products }) => {
  
    return (
      <div>
        <ProductItem
          id={products[0].id}
          img={products[0].img}
          name={products[0].name}
          price={products[0].price}
          quality={products[0].quality}
          action={products[0].action}

        />
        <ProductItem
        id={products[1].id}
        img={products[1].img}
        name={products[1].name}
        price={products[1].price}
        quality={products[1].quality}
        action={products[1].action}
        />
        <ProductItem
          id={products[2].id}
          img={products[2].img}
          name={products[2].name}
          price={products[2].price}
          quality={products[2].quality}
          action={products[2].action}
        />
                  
      </div>
    );
}

export default Products;