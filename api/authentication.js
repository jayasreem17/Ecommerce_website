const express = require('express');
const router = express.Router();
const UserProfile = require('../entities/UserProfile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: 'Email & password required' });

  try {
    const user = await UserProfile.findOne({ where: { email } });
    if (!user) return res.status(401).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Wrong password' });

    const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    res.json({
      msg: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;