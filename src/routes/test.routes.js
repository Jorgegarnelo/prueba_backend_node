const express = require('express');
const router = express.Router();
// Importamos el controlador
const testController = require('../controllers/test.controller');
// Definimos la ruta que utiliza el controlador
router.get('/saludar/:nombre', testController.saludarUsuario);

module.exports = router;