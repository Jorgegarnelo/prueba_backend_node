require('dotenv').config();
const app = require('./src/app');
const db = require('./src/config/db');
require('./src/models/tarea.model');

const PORT = process.env.PORT || 3000;


db.sync({force: false}) 
    .then(() => {
        console.log('✅ Base de datos sincronizada');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error al sincronizar:', err);
    });

