import ProductItem from "./ProductItem";
import { Container } from "react-bootstrap";
import "../../App.css";

const Products = ({ productList }) => {
  const productsMapped = productList.map((product) => {
    return <ProductItem key={product.id} {...product} />;
  });

  return (
    <>
      {productsMapped.length === 0 ? <h1>No hay productos</h1> : productsMapped}
    </>
  );
};

export default Products;
