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

exports.crearTarea = async (titulo, descripcion) => {
    try {
        const nuevaTarea = await Tarea.create({ titulo, descripcion });     
        return nuevaTarea;
    } catch (error) {
        console.error('Error al crear tarea:', error);
        throw error;
    }
};

exports.obtenerTareas = async () => {
    try {
        const tareas = await Tarea.findAll(); 
        return tareas;
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        throw error;
    }
};  

exports.actualizarTarea = async (id, datosActualizados) => {
    try {
        const tarea = await Tarea.findByPk(id); 
        if (!tarea) {
            throw new Error('Tarea no encontrada');
        }
        await tarea.update(datosActualizados); 
        return tarea;
    } catch (error) {
        console.error('Error al actualizar tarea:', error);
        throw error;
    }   
};

exports.eliminarTarea = async (id) => { 
    try {
        const tarea = await Tarea.findByPk(id);
        if (!tarea) {
            throw new Error('Tarea no encontrada');
        }   
        await tarea.destroy();
        return true;
    } catch (error) {
        console.error('Error al eliminar tarea:', error);
        throw error;
    }   
};
    
