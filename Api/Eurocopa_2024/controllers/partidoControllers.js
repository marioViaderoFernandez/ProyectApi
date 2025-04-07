const Partido = require('../models/Partido');

exports.getAllPartidos = async (req, res) => {
    try {
        const partidos = await Partido.find();
        res.render('match', { partidos });
    } catch (err) {
        console.error('Error retrieving matches:', err);
        res.status(500).send('Failed to retrieve matches');
    }
};

