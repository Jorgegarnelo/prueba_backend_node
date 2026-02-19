const { DataTypes } = require('sequelize');
const db = require('../config/db');

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
},
usuario_id: {
type: DataTypes.INTEGER,
allowNull: true
}
}, {
timestamps: true
});
module.exports = Tarea;