const Resultado = require('../models/Resultado');

exports.searchResultado = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        // Verificar si q es un número
        const isNumber = !isNaN(q);

        if (field === 'goles_local' && isNumber) {
            query[field] = q;
        } else if (field === 'goles_visitante' && isNumber) {
            query[field] = q;
        } else {
            // Búsqueda por texto (ej. equipo, estadio)
            query[field] = { $regex: q, $options: 'i' };
        }

        const resultados = await Resultado.find(query);
        
        if (resultados.length === 0) {
            return res.render('error', { message: 'No results found' });
        }

        res.render('resultadoSearch', { resultados });
    } catch (error) {
        console.error('Error searching results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getAllResultados = async (req, res) => {
    try {
        const resultados = await Resultado.find();
        res.render('resultado', { resultados });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve results');
    }
}
