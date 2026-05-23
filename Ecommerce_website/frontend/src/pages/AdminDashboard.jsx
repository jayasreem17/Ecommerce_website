import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ padding: "20px" }}>

        <h1>Admin Dashboard 👨‍💼</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px"
          }}
        >

          <div style={cardStyle}>
            <h2>Users</h2>
            <h1>5</h1>
          </div>

          <div style={cardStyle}>
            <h2>Products</h2>
            <h1>3</h1>
          </div>

          <div style={cardStyle}>
            <h2>Orders</h2>
            <h1>10</h1>
          </div>

        </div>

      </div>

    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center"
};

export default AdminDashboard;