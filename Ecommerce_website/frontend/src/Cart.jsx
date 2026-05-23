import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "10px"
          }}>
            <h3>{item.name} - ₹{item.price}</h3>

            <button onClick={() => removeItem(i)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      <button
        onClick={() => navigate("/checkout")}
        style={{ marginTop: "10px" }}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;