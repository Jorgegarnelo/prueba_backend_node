const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario.model');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Usuario.findOne({ where: { email, password } });
        if (user) {
            res.json({ success: true, role: user.role, email: user.email });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;