function CheckOut({ cartWithDetails }) {
  let total = 0;

  cartWithDetails.forEach((item) => {
    total += item.quantity * item.product.price;
  });

  return (
    <div>
      {/* let total = 0; */}
      {cartWithDetails.map((item) => {
        return (
          <div className="product-card">
            <h3>{item.product.title}</h3>
            <p>${item.product.price / 100}</p>
            <img src={item.product.image} alt={item.product.title} />
            <p id="desc">{item.product.description}</p>
            <div>Quantity:{item.quantity}</div>
            <div>Total:${(item.quantity * item.product.price) / 100}</div>
          </div>
        );
      })}
      <div>Grand Total:${total / 100}</div>
    </div>
  );
}

export default CheckOut;
