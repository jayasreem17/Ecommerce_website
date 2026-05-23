function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        background: "white",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#673ab7",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;