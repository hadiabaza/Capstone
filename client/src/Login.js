import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // console.log({ setUser });
  const handleLogin = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          history.push("/");
        });
      } else {
        response.json().then(({ errors }) => setErrors(errors));
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <h4>Login</h4>
      <label>Email</label>
      <input
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
      <div>{errors}</div>
    </form>
  );
}

export default Login;
