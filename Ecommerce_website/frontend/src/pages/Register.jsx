import Navbar from "../components/Navbar";

function Register() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      <Navbar />

      <div
        style={{
          width: "450px",
          margin: "50px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px"
        }}
      >

        <h2>Register Here</h2>

        <input type="text" placeholder="Name" style={inputStyle} />

        <input type="email" placeholder="Email" style={inputStyle} />

        <input type="password" placeholder="Password" style={inputStyle} />

        <textarea
          placeholder="Address"
          style={{
            width: "100%",
            padding: "12px",
            height: "100px"
          }}
        />

        <button style={buttonStyle}>
          Register
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
  border: "none",
  marginTop: "15px"
};

export default Register;