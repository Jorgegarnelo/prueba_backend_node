const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const { isAdmin } = require('../middlewares/auth.middleware');


router.get('/', tareaController.obtenerTareas);


router.post('/', tareaController.crearTarea);


router.put('/:id', tareaController.actualizarTarea);


router.delete('/:id', isAdmin, tareaController.eliminarTarea);

module.exports = router;