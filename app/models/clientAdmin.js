const Sequelize = require('sequelize');
const db = require('../util/database');

// Create ClientAdmin table
const ClientAdmin = db.define('client_admin',{
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
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = ClientAdmin;