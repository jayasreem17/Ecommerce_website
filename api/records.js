const express = require('express');
const router = express.Router();

let records = require('./recordsData');

// Role middleware
function checkRole(allowedRoles) {
  return (req, res, next) => {
    const role = req.headers.role;

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
}

// GET all records 
router.get('/', checkRole(['admin', 'analyst', 'viewer']), (req, res) => {
  let filtered = records;

  if (req.query.type) {
    filtered = filtered.filter(r => r.type === req.query.type);
  }

  if (req.query.category) {
    filtered = filtered.filter(r => r.category === req.query.category);
  }

  res.json(filtered);
});

// CREATE record
router.post('/', checkRole(['admin']), (req, res) => {
  const { amount, type, category } = req.body;

  if (!amount || !type) {
    return res.status(400).json({ message: "Amount and type required" });
  }

  const newRecord = {
    id: records.length + 1,
    amount,
    type,
    category
  };

  records.push(newRecord);
  res.json(newRecord);
});

// UPDATE record
router.put('/:id', checkRole(['admin']), (req, res) => {
  const id = parseInt(req.params.id);

  const record = records.find(r => r.id === id);

  if (!record) {
    return res.status(404).json({ message: "Record not found" });
  }

  Object.assign(record, req.body);

  res.json(record);
});

// DELETE record
router.delete('/:id', checkRole(['admin']), (req, res) => {
  const id = parseInt(req.params.id);

  records = records.filter(r => r.id !== id);

  res.json({ message: "Record deleted" });
});

module.exports = router;