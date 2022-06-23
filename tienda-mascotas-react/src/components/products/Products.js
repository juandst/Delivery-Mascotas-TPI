import ProductItem from "./ProductItem";

const Products = ({ productList }) => {
  const productsMapped = productList.map((product, index) => {
    return <ProductItem key={index} id={product.id} {...product.data()} />; //data() es por firebase
  });

  return <>{productsMapped.length === 0 ? <h1>No hay productos</h1> : productsMapped}</>;
};

export default Products;
