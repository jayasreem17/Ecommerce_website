const { Sequelize } = require('sequelize');

// Initialize SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './financeDB.sqlite',
  logging: false
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Error connecting database:', err);
  }
}

module.exports = { sequelize, connectDB };