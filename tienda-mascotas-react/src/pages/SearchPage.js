import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductItem from "../components/products/ProductItem";
import Loading from "../components/forms/Loading";
import { getProducts } from "../services/ProductServices";

const SearchPage = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((query) => {
        for (let i = 0; i < query.docs.length; i++) {
          if (query.docs[i].data().name.toLowerCase().includes(params.params)) {
            setFilteredProducts((prev) => [...prev, query.docs[i].data()]);
            console.log("FILTERED: " + filteredProducts);
          }
        }
        console.log(query.docs[0].data().name);
        setProducts(query);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [params.params]);

  const productsMapped = filteredProducts.map((product, index) => {
    return <ProductItem key={index} id={product.id} {...product} />; //data() es por firebase
  });

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Loading />}
      {products && (
        <>
          <p>
            <strong>Buscando: </strong>
            {params.params}
          </p>
          <Container className="product-item-container">{productsMapped}</Container>
        </>
      )}
    </>
  );
};

export default SearchPage;

//query es una promesa
//query.docs es un array de productos
//query.docs[0].data() es un objeto con los datos del producto
//query.docs[0].data().name es el nombre del producto
//etc
