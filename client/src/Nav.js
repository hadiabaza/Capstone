import { Link, useHistory } from "react-router-dom";

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
  return (
    <>
      <Link to={"/"}>SackUp</Link>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>{" "}
        </>
      )}
    </>
  );
}

export default Nav;
