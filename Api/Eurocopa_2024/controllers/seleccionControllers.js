const Seleccion = require('../models/Seleccion');

exports.searchSeleccion = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Si la búsqueda es por ranking FIFA y es un número
        const isNumber = !isNaN(q);
        if (field === 'ranking' && isNumber) {
            query[field] = q;
        } else {
            // Búsqueda por texto (ej. nombre del país, entrenador)
            query[field] = { $regex: q, $options: 'i' };
        }

        const selecciones = await Seleccion.find(query);

        if (selecciones.length === 0) {
            return res.render('error', { message: 'No selections found' });
        }

        res.render('seleccionSearch', { selecciones });
    } catch (error) {
        console.error('Error searching selections:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getAllSelecciones = async (req, res) => {
    try {
        const selecciones = await Seleccion.find();
        res.render('seleccion', { selecciones });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve selections');
    }
}
