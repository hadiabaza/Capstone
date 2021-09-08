import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setUser }) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPaswordConfirmation] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, passwordConfirmation }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/");
      }
    });
  };
  return (
    <form onSubmit={handleSignup}>
      <h4>SignUp</h4>
      <label>Full Name</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
      />
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <label>Password</label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <label>Password Confirmation</label>
      <input
        value={passwordConfirmation}
        onChange={(e) => {
          setPaswordConfirmation(e.target.value);
        }}
        type="password"
        placeholder="Password Confirmation"
      />
      <button>Submit</button>
    </form>
  );
}

export default Signup;
