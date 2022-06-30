import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Products from "../components/products/Products";
import Loading from "../components/forms/Loading";
import { getProducts } from "../services/ProductServices";

export default function SearchPage() {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts()
      .then((query) => {
        setProducts(query.docs);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

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
          <Container className="product-item-container">
            <Products productList={products} />
          </Container>
        </>
      )}
    </>
  );
}
