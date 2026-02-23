const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario.model');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email, password } });
        
        if (user) {
            const token = jwt.sign(
                { id: user.id, role: user.role }, 
                'mi_clave_secreta_gijon_2026', 
                { expiresIn: '24h' }
            );

            res.json({ 
                success: true, 
                token: token,
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
            message: 'Usuario creado correctamente',
            user: nuevoUsuario
        });
    } catch (error) {
        res.status(500).json({ error: 'El email ya existe o hay un fallo en la DB' });
    }
});

module.exports = router;