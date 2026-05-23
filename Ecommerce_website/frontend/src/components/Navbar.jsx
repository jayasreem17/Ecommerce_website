import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCount(cart.length);

  }, []);

  return (

    <nav
      style={{
        background: "#673ab7",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0
      }}
    >

      <h2>ShopEase 🛒</h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center"
        }}
      >

        <Link style={linkStyle} to="/">
          Home
        </Link>

        <Link style={linkStyle} to="/login">
          Login
        </Link>

        <Link style={linkStyle} to="/register">
          Register
        </Link>

        <Link style={linkStyle} to="/checkout">
          Checkout
        </Link>

        <Link style={linkStyle} to="/admin">
          Admin
        </Link>

        <Link
          style={{
            background: "white",
            color: "#673ab7",
            padding: "8px 15px",
            borderRadius: "20px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
          to="/cart"
        >
          Cart ({count})
        </Link>

      </div>

    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px"
};

export default Navbar;