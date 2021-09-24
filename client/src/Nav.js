import { Link, useHistory } from "react-router-dom";
import "./nav.css";
function Nav({ setUser, user }) {
  const history = useHistory();

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
  };

  const openCart = () => {
    history.push("/shoppingcart");
  };

  const checkOut = () => {
    history.push("/checkout");
  };

  return (
    <div className="nav">
      <Link className="logo" to={"/"}>
        SackUp
      </Link>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/shoppingcart">
            <button className="cart" onClick={openCart}>
              Shopping Cart
            </button>
          </Link>
          <Link to="/checkout">
            <button onClick={checkOut}>Check Out</button>
          </Link>
        </>
      ) : (
        <>
          {/* <Link to={"/login"}>Login</Link> */}
          <Link to={"/signup"}>Signup</Link>
        </>
      )}
    </div>
  );
}

export default Nav;
