import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ShopEase 🛒 Products</h1>

      <button onClick={() => navigate("/cart")}>
        Go to Cart
      </button>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{
            border: "1px solid #ddd",
            padding: "10px",
            width: "220px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <img src={p.image} alt={p.name} width="100%" height="150px" />

            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <h4>₹{p.price}</h4>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;