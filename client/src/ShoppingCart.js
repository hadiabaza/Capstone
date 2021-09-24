// import { useHistory } from "react-router";
import "./products.css";

function ShoppingCart({ setCart, cartWithDetails, isLoading, error }) {
  // const history = useHistory();
  const removeFromCart = (id) => {
    fetch(`/cart/remove/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((cart) => setCart(cart));
      }
    });
  };
  console.log(cartWithDetails);
  if (isLoading) {
    return "Loading ...";
  } else if (error) {
    return error;
  } else if (cartWithDetails) {
    return (
      <div>
        {cartWithDetails.map((item) => {
          return (
            <div className="product-card">
              <h3>{item.product.title}</h3>
              <p id="desc">${item.product.price / 100}</p>
              <img
                className="spin"
                src={item.product.image}
                alt={item.product.title}
              />
              <p>{item.product.description}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
              <div>Quantity:{item.quantity}</div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCart;
