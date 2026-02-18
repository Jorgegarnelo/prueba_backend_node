const express = require('express');
const app = express();

// Importamos las rutas organizadas
const testRoutes = require('./routes/test.routes'); 

// Middleware para parsear JSON
app.use(express.json());    

// Usamos las rutas organizadas
app.use('/api', testRoutes);

module.exports = app;   