const express = require('express');
const router = express.Router();

console.log("Summary route loaded");

let records = require('./recordsData');

router.get('/', (req, res) => {
  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    if (r.type === 'expense') expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  });
});

module.exports = router;