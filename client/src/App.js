import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <Nav setUser={setUser} user={user} />
      <div>
        <Switch>
          <Route exact path="/">
            <div>Hello, {user ? user.name : "Guest"}</div>
            <Products />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route>
            Page Not Found
            <Link to="/">Back To Homepage </Link>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
