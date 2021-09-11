const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'someUser', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});