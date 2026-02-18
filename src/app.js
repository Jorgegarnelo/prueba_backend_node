const express = require('express');
const app = express();
const testRoutes = require('./routes/test.routes'); 
const tareaRoutes = require('./routes/tarea.routes');

// Middleware para parsear JSON
app.use(express.json());    

// Usamos las rutas organizadas
app.use('/api', testRoutes);

app.use('/api/tareas', tareaRoutes);

module.exports = app;   