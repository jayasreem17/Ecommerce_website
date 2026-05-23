import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.reload();
};

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px"
        }}
      >

        <Sidebar />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            flex: 1
          }}
        >

          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;