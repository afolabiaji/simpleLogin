const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
})

User.sync();

module.exports = User;