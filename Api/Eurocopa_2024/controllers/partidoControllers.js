const Partido = require('../models/Partido');

exports.getAllPartidos = async (req, res) => {
    try {
        const partidos = await Partido.find();
        res.render('partidos', { partidos });
    } catch (err) {
        console.error('Error retrieving matches:', err);
        res.status(500).send('Failed to retrieve matches');
    }
};

exports.searchPartido = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q es un número
        const isNumber = !isNaN(q);

        // Si el campo es 'fecha' y q es un número, buscar por coincidencia exacta
        if (field === 'fecha' && isNumber) {
            query[field] = q;
        } else {
            // De lo contrario, buscar como texto
            query[field] = { $regex: q, $options: 'i' };
        }

        const partidos = await Partido.find(query);

        if (partidos.length === 0) {
            return res.render('error', { message: 'No matches found' });
        }
        
        res.render('partidoSearch', { partidos });
    } catch (error) {
        console.error('Error searching matches:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
