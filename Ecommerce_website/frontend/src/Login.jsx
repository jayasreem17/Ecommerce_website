function Login() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login Page 🔐</h2>
      <input placeholder="Username" />
      <br /><br />
      <input placeholder="Password" type="password" />
      <br /><br />
      <button>Login</button>
    </div>
  );
}

export default Login;