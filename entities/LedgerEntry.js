const { DataTypes } = require('sequelize');
const { sequelize } = require('../setup/dbConnection');
const UserProfile = require('./UserProfile');

const LedgerEntry = sequelize.define('LedgerEntry', {
  amount: { type: DataTypes.FLOAT, allowNull: false },
  type: { type: DataTypes.ENUM('income', 'expense'), allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  note: { type: DataTypes.STRING }
});

// Link ledger to user
LedgerEntry.belongsTo(UserProfile, { foreignKey: 'userId' });

module.exports = LedgerEntry;