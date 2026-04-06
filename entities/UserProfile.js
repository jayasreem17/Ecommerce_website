const { DataTypes } = require('sequelize');
const { sequelize } = require('../setup/dbConnection');

const UserProfile = sequelize.define('UserProfile', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { 
    type: DataTypes.ENUM('viewer', 'analyst', 'admin'), 
    defaultValue: 'viewer' 
  },
  status: { 
    type: DataTypes.ENUM('active', 'inactive'), 
    defaultValue: 'active' 
  }
});

module.exports = UserProfile;