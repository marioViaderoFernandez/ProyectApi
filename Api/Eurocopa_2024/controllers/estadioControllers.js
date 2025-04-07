const Estadio = require('../models/Estadio');

// Buscar estadio por nombre o nombre de selección
exports.searchEstadio = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        if (field === 'selection_name') {
            query[field] = { $regex: q, $options: 'i' }; // Búsqueda por selección (no sensible a mayúsculas)
        } else {
            query[field] = { $regex: q, $options: 'i' }; // Búsqueda por nombre de estadio, si se elige esa opción
        }

        const estadios = await Estadio.find(query);

        if (estadios.length === 0) {
            return res.render('error', { message: 'No se encontraron estadios para esa selección' });
        }

        res.render('stadiumSearch', { estadios });
    } catch (error) {
        console.error('Error buscando estadios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Obtener todos los estadios
exports.getAllEstadios = async (req, res) => {
    try {
        const estadios = await Estadio.find();
        res.render('stadium', { estadios });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los estadios');
    }
}
