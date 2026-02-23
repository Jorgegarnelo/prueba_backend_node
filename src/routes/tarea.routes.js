const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const { verificarToken, isAdmin } = require('../middlewares/auth.middleware');

router.get('/', verificarToken, tareaController.obtenerTareas);
router.post('/', verificarToken, tareaController.crearTarea);
router.put('/:id', verificarToken, tareaController.actualizarTarea);
router.delete('/:id', verificarToken, isAdmin, tareaController.eliminarTarea);

module.exports = router;