const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const { isAdmin } = require('../middlewares/auth.middleware');


router.get('/', tareaController.obtenerTareas);

// Cualquiera puede crear una tarea (o podrías poner isAdmin si quisieras)
router.post('/', tareaController.crearTarea);

// SOLO el admin puede actualizar una tarea
router.put('/:id', isAdmin, tareaController.actualizarTarea);

// SOLO el admin puede eliminar una tarea
router.delete('/:id', isAdmin, tareaController.eliminarTarea);

module.exports = router;