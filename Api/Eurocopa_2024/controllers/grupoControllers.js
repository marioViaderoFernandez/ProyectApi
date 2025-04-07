const Grupo = require('../models/Grupo');

// Buscar grupo por nombre de selección
exports.searchGrupo = async (req, res) => {
    try {
        const { q } = req.query;

        const grupos = await Grupo.find({
            'selection_name': { $regex: q, $options: 'i' }
        });

        if (grupos.length === 0) {
            return res.render('error', { message: 'No se encontró ningún grupo con esa selección' });
        }

        res.render('groupSearch', { grupos });
    } catch (error) {
        console.error('Error buscando grupo por selección:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Obtener todos los grupos
exports.getAllGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find();
        res.render('group', { grupos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los grupos');
    }
}
