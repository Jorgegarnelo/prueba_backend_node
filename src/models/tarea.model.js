const { DataTypes } = require('sequelize');
const db = require('../config/db');
const e = require('express');
const Tarea = db.define('tareas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'en progreso', 'completada'),
        defaultValue: 'pendiente'
    }
}, {
    timestamps: true
}); 

exports = module.exports = Tarea;



