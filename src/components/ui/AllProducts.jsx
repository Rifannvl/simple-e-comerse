import { useEffect, useState } from "react";
import CardProduts from "../block/CardProduts";

export default function AllProducts() {
  const [product, setProduct] = useState([]);
  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.products);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container py-10 grid md:grid-cols-1 lg:grid-cols-3 gap-4">
      {product.map((product) => {
        return <CardProduts key={product.id} product={product} />;
      })}
    </section>
  );
}
