const express = require('express');
const app = express();
const testRoutes = require('./routes/test.routes'); 
const tareaRoutes = require('./routes/tarea.routes');
const usuarioRoutes = require('./routes/usuario.routes');


app.use(express.json());    


app.use('/api', testRoutes);

app.use('/api/tareas', tareaRoutes);

app.use('/api/usuarios', usuarioRoutes);

module.exports = app;