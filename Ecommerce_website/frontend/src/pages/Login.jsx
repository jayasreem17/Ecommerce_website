import Navbar from "../components/Navbar";

function Login() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      <Navbar />

      <div
        style={{
          width: "400px",
          margin: "50px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px"
        }}
      >

        <h2>Login Here</h2>

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Login
        </button>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#673ab7",
  color: "white",
  border: "none"
};

export default Login;