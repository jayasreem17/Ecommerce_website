const LedgerEntry = require('../entities/LedgerEntry');

// Simple dashboard summary
async function getDashboardSummary() {
  const all = await LedgerEntry.findAll();

  const income = all.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const expense = all.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);

  let categoryTotals = {};
  all.forEach(e => {
    categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryTotals
  };
}

module.exports = { getDashboardSummary };