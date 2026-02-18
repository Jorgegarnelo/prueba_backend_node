const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    'prueba',    
    'root',      
    '',          
    {       
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = db;