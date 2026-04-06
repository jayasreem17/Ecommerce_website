const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
  res.send("Users GET working");
});

// POST
router.post('/', (req, res) => {
  res.json({
    message: "User created",
    data: req.body
  });
});

module.exports = router;