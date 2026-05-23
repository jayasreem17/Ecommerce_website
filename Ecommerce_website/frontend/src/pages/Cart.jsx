import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (index) => {

    let updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh"
      }}
    >

      <Navbar count={cart.length} />

      <div className="container py-5">

        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          Shopping Cart
        </h2>

        <div className="row g-4">

          {/* LEFT */}

          <div className="col-lg-8">

            {cart.length === 0 ? (

              <div
                className="card border-0 shadow-sm p-5 text-center"
                style={{
                  borderRadius: "20px"
                }}
              >

                <h3>Your cart is empty 🛒</h3>

              </div>

            ) : (

              cart.map((item, index) => (

                <div
                  key={index}
                  className="card border-0 shadow-sm mb-4"
                  style={{
                    borderRadius: "20px"
                  }}
                >

                  <div className="card-body">

                    <div className="row align-items-center">

                      {/* IMAGE */}

                      <div className="col-md-3 text-center">

                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "15px"
                          }}
                        />

                      </div>

                      {/* DETAILS */}

                      <div className="col-md-6">

                        <h4
                          style={{
                            fontWeight: "bold"
                          }}
                        >
                          {item.name}
                        </h4>

                        <p
                          style={{
                            color: "gray",
                            marginTop: "10px"
                          }}
                        >
                          {item.description}
                        </p>

                        <h5
                          style={{
                            color: "#673ab7",
                            marginTop: "15px",
                            fontWeight: "bold"
                          }}
                        >
                          ₹{item.price}
                        </h5>

                      </div>

                      {/* BUTTON */}

                      <div className="col-md-3 text-center">

                        <button
                          className="btn btn-outline-danger"
                          style={{
                            borderRadius: "10px",
                            padding: "10px 20px"
                          }}
                          onClick={() => removeItem(index)}
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* RIGHT */}

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "20px",
                position: "sticky",
                top: "100px"
              }}
            >

              <div className="card-body p-4">

                <h4
                  style={{
                    fontWeight: "bold",
                    marginBottom: "25px"
                  }}
                >
                  Order Summary
                </h4>

                <div className="d-flex justify-content-between mb-3">

                  <span>Total Items</span>

                  <span>{cart.length}</span>

                </div>

                <div className="d-flex justify-content-between mb-3">

                  <span>Delivery</span>

                  <span style={{ color: "green" }}>
                    FREE
                  </span>

                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">

                  <h5>Total</h5>

                  <h5
                    style={{
                      color: "#673ab7",
                      fontWeight: "bold"
                    }}
                  >
                    ₹{total}
                  </h5>

                </div>

                <Link to="/checkout">

                  <button
                    className="btn w-100 text-white"
                    style={{
                      background: "#673ab7",
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: "bold",
                      fontSize: "17px"
                    }}
                  >
                    Proceed to Checkout
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;