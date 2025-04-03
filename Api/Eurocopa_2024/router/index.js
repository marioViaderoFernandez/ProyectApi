const express = require('express');
const router = express.Router();

// Controladores importados
const estadioController = require('../controllers/estadioController');
const grupoController = require('../controllers/grupoController');
const partidoController = require('../controllers/partidoController');
const resultadoController = require('../controllers/resultadoController');
const seleccionController = require('../controllers/seleccionController');

module.exports = () => {
    // Página principal
    router.get('/', (req, res) => {
        res.send('Bienvenido a la API de la Eurocopa!');
    });

    // Estadios
    router.get('/estadios', estadioController.getAllEstadios);  // Obtener todos los estadios
    router.get('/estadioSearch', estadioController.searchEstadio);  // Buscar estadio
    
    // Grupos
    router.get('/grupos', grupoController.getAllGrupos);  // Obtener todos los grupos
    
    // Partidos
    router.get('/partidos', partidoController.getAllPartidos);  // Obtener todos los partidos
    router.get('/partidoSearch', partidoController.searchPartido);  // Buscar partido
    
    // Resultados
    router.get('/resultados', resultadoController.getAllResultados);  // Obtener todos los resultados
    router.get('/resultadoSearch', resultadoController.searchResultado);  // Buscar resultado

    // Selecciones
    router.get('/selecciones', seleccionController.getAllSelecciones);  // Obtener todas las selecciones
    router.get('/seleccionSearch', seleccionController.searchSeleccion);  // Buscar selección

    return router;
};
