import Navbar from "../components/Navbar";

function Checkout() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <Navbar count={cart.length} />

      <div className="container mt-5">

        <div className="row">

          {/* LEFT SIDE */}

          <div className="col-md-7">

            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "15px"
              }}
            >

              <div
                className="card-header text-white"
                style={{
                  background: "#673ab7"
                }}
              >

                <h3>Billing Details</h3>

              </div>

              <div className="card-body">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control mb-3"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                />

                <textarea
                  placeholder="Delivery Address"
                  className="form-control mb-3"
                  rows="4"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="form-control mb-3"
                />

                <button
                  className="btn btn-lg w-100 text-white"
                  style={{
                    background: "#673ab7"
                  }}
                >
                  Place Order
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="col-md-5">

            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "15px"
              }}
            >

              <div
                className="card-header text-white"
                style={{
                  background: "#673ab7"
                }}
              >

                <h3>Order Summary</h3>

              </div>

              <div className="card-body">

                {cart.length === 0 ? (

                  <h5>Your cart is empty 🛒</h5>

                ) : (

                  cart.map((item, index) => (

                    <div
                      key={index}
                      className="d-flex align-items-center mb-3"
                      style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "10px"
                      }}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginRight: "15px"
                        }}
                      />

                      <div>

                        <h6>{item.name}</h6>

                        <p
                          style={{
                            margin: 0,
                            color: "gray"
                          }}
                        >
                          {item.description}
                        </p>

                        <h5>₹{item.price}</h5>

                      </div>

                    </div>

                  ))

                )}

                <hr />

                <div
                  className="d-flex justify-content-between"
                >

                  <h4>Total</h4>

                  <h4
                    style={{
                      color: "#673ab7"
                    }}
                  >
                    ₹{total}
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;