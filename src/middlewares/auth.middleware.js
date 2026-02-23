const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'No se ha proporcionado un token' });
    }
    try {
        const tokenLimpio = token.split(" ")[1] || token;
        const decoded = jwt.verify(tokenLimpio, 'mi_clave_secreta_gijon_2026');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token no válido' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Acceso denegado: se requieren permisos de administrador' });
    }
};

module.exports = { verificarToken, isAdmin };  