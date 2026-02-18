const Tarea = require('../models/tarea.model');

exports.crearTarea = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const nuevaTarea = await Tarea.create({ titulo, descripcion });
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error('Error al crear tarea:', error);
        res.status(500).json({ error: 'Error al crear tarea' });
    }
};

exports.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
};  

exports.actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, estado } = req.body;
        const tarea = await Tarea.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        tarea.titulo = titulo || tarea.titulo;
        tarea.descripcion = descripcion || tarea.descripcion;
        tarea.estado = estado || tarea.estado;
        await tarea.save();
        res.json(tarea);
    } catch (error) {
        console.error('Error al actualizar tarea:', error);
        res.status(500).json({ error: 'Error al actualizar tarea' });
    }
};

exports.eliminarTarea = async (req, res) => {   
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }   
        await tarea.destroy();
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        console.error('Error al eliminar tarea:', error);
        res.status(500).json({ error: 'Error al eliminar tarea' });
    }   
};


