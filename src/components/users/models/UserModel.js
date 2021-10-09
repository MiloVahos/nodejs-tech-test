const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/db')
const { USER_ROLES_LIST } = require('../../../utils/constants')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    values: USER_ROLES_LIST,
    allowNull: false,
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User