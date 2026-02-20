const Usuario = require('../models/Usuario.model');


exports.register = async (req, res) => {
    try {
        
        const { username, email, password, role } = req.body; 
        const nuevoUsuario = await Usuario.create({
            username, 
            email,
            password,
            role: role || 'user'
        });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || usuario.password !== password) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        res.json({
            token: 'fake-jwt-token',
            user: {
                id: usuario.id,
                email: usuario.email,
                role: usuario.role
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el login' });
    }
};