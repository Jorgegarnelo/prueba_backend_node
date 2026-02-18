const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');

router.get('/', tareaController.obtenerTareas);

router.post('/', tareaController.crearTarea);

module.exports = router;