const path = require('path');  // Asegúrate de importar 'path'

// Controlador para la página de inicio
exports.home = (req, res) => {
    res.sendFile(path.resolve('views', 'home.html'));  // Ruta de la página de inicio
};

// Controlador para la página de error
exports.error = (req, res) => {
    res.sendFile(path.resolve('views', 'error.html'));  // Ruta para la página de error
};
