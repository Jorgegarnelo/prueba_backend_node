const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.controller');
router.get('/saludar/:nombre', testController.saludarUsuario);

module.exports = router;