import ProductItem from "./ProductItem";
import "./Products.css";
import "./ProductItem.css";

const Products = ({ productList }) => {
  const productsMapped = productList.map((product) => {
    return <ProductItem key={product.id} {...product} />;
  });

  return (
    <div>
      {productsMapped.length === 0 ? <h1>No hay productos</h1> : productsMapped}
    </div>
  );
};

export default Products;
