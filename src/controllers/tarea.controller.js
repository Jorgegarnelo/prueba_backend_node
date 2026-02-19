const Tarea = require('../models/tarea.model');

exports.crearTarea = async (req, res) => {
    try {
        const { titulo, descripcion, usuario_id } = req.body;
        const nuevaTarea = await Tarea.create({
            titulo,
            descripcion,
            usuario_id
        });
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al crear tarea' });
    }
};

exports.obtenerTareas = async (req, res) => {
    try {
        const role = req.headers['x-user-role'];
        const userId = req.headers['x-user-id'];
        if (role === 'admin') {
            const tareas = await Tarea.findAll();
            return res.json(tareas);
        }
        const tareas = await Tarea.findAll({ where: { usuario_id: userId } });
        return res.json(tareas);
    } catch (error) {
        return res.status(500).json({ error: 'Error' });
    }
};

exports.actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.headers['x-user-role'];
        const userId = req.headers['x-user-id'];
        const tarea = await Tarea.findByPk(id);

        if (!tarea) return res.status(404).json({ error: 'No existe' });


        if (role !== 'admin' && tarea.usuario_id != userId) {
            return res.status(403).json({ error: 'No tienes permiso para editar esto' });
        }

        await tarea.update(req.body);
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar' });
    }
};

exports.eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.headers['x-user-role'];
        const userId = req.headers['x-user-id'];
        const tarea = await Tarea.findByPk(id);

        if (!tarea) return res.status(404).json({ error: 'No existe' });


        if (role !== 'admin' && tarea.usuario_id != userId) {
            return res.status(403).json({ error: 'No tienes permiso para borrar esto' });
        }

        await tarea.destroy();
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
};


