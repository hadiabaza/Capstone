import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import CheckOut from "./Checkout";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // when app loads, get all products and put them in state

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // getting user

  useEffect(() => {
    fetch("/product").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch("/show").then((r) => {
      if (r.ok) {
        r.json().then((product) => setCart(product));
      } else {
        r.json().then((errorObj) => setError(errorObj.error));
      }
      setIsLoading(false);
    });
  }, [setCart, setIsLoading, setError]);

  const cartWithDetails = cart.map((item) => {
    item.product = products.find((product) => product.id === item.product_id);
    return item;
  });
  console.log(cartWithDetails);

  return (
    <div className="content">
      <Nav setUser={setUser} user={user} />
      <div>
        <Switch>
          <Route exact path="/">
            <div>
              {user ? (
                <Products products={products} />
              ) : (
                <Login setUser={setUser} />
              )}
            </div>

            {/* <Login setUser={setUser} /> */}
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/product/:id">
            <ProductDetail
              error={error}
              setError={setError}
              isloading={isLoading}
              setIsLoading={setIsLoading}
              setCart={setCart}
            />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart
              error={error}
              isLoading={isLoading}
              cartWithDetails={cartWithDetails}
              setCart={setCart}
            />
          </Route>
          <Route path="/checkout">
            <CheckOut cartWithDetails={cartWithDetails} />
          </Route>

          <Route>
            Page Not Found
            <Link to="/">Back To Homepage </Link>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
