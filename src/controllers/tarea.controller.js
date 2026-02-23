const Tarea = require('../models/tarea.model');
const Usuario = require('../models/Usuario.model');

exports.crearTarea = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const usuario_id = req.user.id; 
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
        const role = req.user.role;
        const userId = req.user.id;

        const includeUsuario = {
            model: Usuario,
            as: 'creador',
            attributes: ['username', 'email']
        };

        let queryOptions = {
            include: [includeUsuario]
        };

        if (role !== 'admin') {
            queryOptions.where = { usuario_id: userId };
        }

        const tareas = await Tarea.findAll(queryOptions);
        return res.json(tareas);
    } catch (error) {
        console.error('Error en obtenerTareas:', error);
        return res.status(500).json({ error: 'Error al obtener tareas' });
    }
};

exports.actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.user.role;
        const userId = req.user.id;
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
        const role = req.user.role;
        const userId = req.user.id;
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