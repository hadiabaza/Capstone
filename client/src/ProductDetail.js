import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./products.css";

function ProductDetail({ setCart, isLoading, setIsLoading, error, setError }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/product/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((product) => setProduct(product));
      } else {
        r.json().then((errorObj) => setError(errorObj.error));
      }
      setIsLoading(false);
    });
  }, [id, setIsLoading, setError]);

  const handleAddToCart = () => {
    fetch("/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_id: id, quantity: 1 }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((cart) => setCart(cart));
      }
    });
  };

  if (isLoading) {
    return "Loading ... ";
  } else if (error) {
    return error;
  } else if (product) {
    return (
      <div className="prodcts-list">
        <div className="product-card">
          <h3>{product.title}</h3>
          <p>${product.price / 100}</p>
          <img className="spin" src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ProductDetail;
