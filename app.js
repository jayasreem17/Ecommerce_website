// app.js
const express = require('express');
const app = express();

// ----------------------------
// 1️⃣ Middleware
// ----------------------------
app.use(express.json());

// ----------------------------
// 2️⃣ Import routes
// ----------------------------
const userRoutes = require('./api/users');
const recordRoutes = require('./api/records');
const summaryRoutes = require('./api/summary');  // summary route

// ----------------------------
// 3️⃣ Use routes
// ----------------------------
app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/summary', summaryRoutes);

// ----------------------------
// 4️⃣ Root route
// ----------------------------
app.get('/', (req, res) => {
  res.send("Server running");
});

// ----------------------------
// 5️⃣ Start server
// ----------------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log("APP RUNNING");
  console.log(`Server started on port ${PORT}`);
});