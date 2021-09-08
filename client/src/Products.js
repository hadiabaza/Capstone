import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} className="product-card">
            <h3>{product.title}</h3>
            <p>${product.price / 100}</p>
            <img src={product.image} alt={product.title} />
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
