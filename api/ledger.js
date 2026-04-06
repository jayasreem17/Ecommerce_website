const express = require('express');
const router = express.Router();
const LedgerEntry = require('../entities/LedgerEntry');
const validateAuth = require('../security/validateAuth');
const permissionGuard = require('../security/permissionGuard');
const { getDashboardSummary } = require('../core/summaryService');

router.post('/', validateAuth, permissionGuard(['admin']), async (req, res) => {
  try {
    const entry = await LedgerEntry.create({ ...req.body, userId: req.user.id });
    res.json(entry);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

router.get('/', validateAuth, permissionGuard(['viewer', 'analyst', 'admin']), async (req, res) => {
  const entries = await LedgerEntry.findAll();
  res.json(entries);
});


router.get('/summary', validateAuth, permissionGuard(['analyst', 'admin']), async (req, res) => {
  const summary = await getDashboardSummary();
  res.json(summary);
});

module.exports = router;