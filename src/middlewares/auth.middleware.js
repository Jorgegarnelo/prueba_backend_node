const isAdmin = (req, res, next) => {
    const userRole = req.headers['x-user-role'];
    if (userRole === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Acceso denegado: solo administradores pueden realizar esta acción' });
    }
};

module.exports = { isAdmin };  