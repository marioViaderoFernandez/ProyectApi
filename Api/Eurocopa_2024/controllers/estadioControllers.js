const Estadio = require('../models/Estadio');

// Buscar estadio por nombre o capacidad
exports.searchEstadio = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        const isNumber = !isNaN(q);

        if (field === 'capacity' && isNumber) {
            query[field] = q;
        } else {
            query[field] = { $regex: q, $options: 'i' };
        }

        const estadios = await Estadio.find(query);

        if (estadios.length === 0) {
            return res.render('error', { message: 'No se encontraron estadios' });
        }

        res.render('estadioSearch', { estadios });
    } catch (error) {
        console.error('Error buscando estadios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Obtener todos los estadios
exports.getAllEstadios = async (req, res) => {
    try {
        const estadios = await Estadio.find();
        res.render('estadios', { estadios });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los estadios');
    }
}
