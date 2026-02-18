exports.saludarUsuario = (req, res) => {
    const nombreUsuario = req.params.nombre;
    res.json({
        mensaje: `Hola ${nombreUsuario}, ahora desde un controlador organizado`,
        status: "success"
    });
}

