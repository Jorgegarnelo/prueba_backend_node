const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario.model');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email, password } });
        if (user) {
            res.json({ 
                success: true, 
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    role: user.role
                }
            });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const nuevoUsuario = await Usuario.create({ 
            username,
            email, 
            password, 
            role: role || 'user' 
        });
        res.status(201).json({
            success: true,
            user: nuevoUsuario
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        
        const nuevoUsuario = await Usuario.create({ 
            email, 
            password, 
            role: role || 'user' 
        });
        
        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente',
            user: nuevoUsuario
        });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ error: 'El email ya existe o hay un fallo en la DB' });
    }
});

module.exports = router;