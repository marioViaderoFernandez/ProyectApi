const Seleccion = require('../models/Seleccion');

// Buscar selección por nombre del entrenador
exports.searchSeleccion = async (req, res) => {
    try {
        const { q } = req.query;

        // Buscar por el campo 'coach' ignorando mayúsculas y minúsculas
        const selecciones = await Seleccion.find({
            coach: { $regex: q, $options: 'i' }
        });

        if (selecciones.length === 0) {
            return res.render('error', { message: 'No se encontraron selecciones con ese entrenador' });
        }

        res.render('selectionSearch', { selecciones });
    } catch (error) {
        console.error('Error buscando selecciones por entrenador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Mostrar todas las selecciones
exports.getAllSelecciones = async (req, res) => {
    try {
        const selecciones = await Seleccion.find();
        res.render('selection', { selecciones });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las selecciones');
    }
};
