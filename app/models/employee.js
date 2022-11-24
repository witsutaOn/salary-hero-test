const Sequelize = require('sequelize');
const db = require('../util/database');

// Create Employee table
const Employee = db.define('employee',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    companyId:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = Employee;