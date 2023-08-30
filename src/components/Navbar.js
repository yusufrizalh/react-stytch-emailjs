import { Link } from "react-router-dom";

import { useStytchSession } from "@stytch/stytch-react";

const Navbar = ({ handleLogout }) => {
  const session = useStytchSession();

  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link
          to="/newblog"
          style={{
            color: "white",
            backgroundColor: "crimson",
            borderRadius: "10px",
          }}
        >
          New Blog
        </Link>
        {session && <Link to="/account">Account</Link>}
        {!session && <Link to="/login">Login</Link>}
        {session && (
          <button className="btn btn-md text-primary" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
