const Sequelize = require('sequelize');
const db = require('../util/database');

// Create Company table
const Company = db.define('company',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Company;