import Loading from "../components/forms/Loading";
import { getProduct } from "../services/ProductServices";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetailCard from "../components/products/ProductDetailCard";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = useParams().id;

  useEffect(() => {
    getProduct(id)
      .then((doc) => {
        setProduct(doc);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  return (
    <>
      {error && { error }}
      {isLoading && <Loading />}
      {product && <ProductDetailCard product={product} />}
    </>
  );
}
