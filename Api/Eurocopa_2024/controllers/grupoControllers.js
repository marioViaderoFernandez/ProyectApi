const Grupo = require('../models/Grupo');

// Buscar grupo por nombre o número de equipos
exports.searchGrupo = async (req, res) => {
    try {
        const { q, field } = req.query;
        const query = {};

        const isNumber = !isNaN(q);

        if (field === 'num_equipos' && isNumber) {
            query[field] = q;
        } else {
            query[field] = { $regex: q, $options: 'i' };
        }

        const grupos = await Grupo.find(query);

        if (grupos.length === 0) {
            return res.render('error', { message: 'No se encontraron grupos' });
        }

        res.render('grupoSearch', { grupos });
    } catch (error) {
        console.error('Error buscando grupos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Obtener todos los grupos
exports.getAllGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find();
        res.render('grupos', { grupos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los grupos');
    }
}
