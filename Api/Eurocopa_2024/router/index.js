const express = require('express');
const router = express.Router();

// Controladores importados
const estadioControllers = require('../controllers/estadioControllers');
const grupoControllers = require('../controllers/grupoControllers');
const partidoControllers = require('../controllers/partidoControllers');
const resultadoControllers = require('../controllers/resultadoControllers');
const seleccionControllers = require('../controllers/seleccionControllers');

// Controlador principal (para la página de inicio)
const mainControllers = require('../controllers/mainControllers');

module.exports = () => {
    // Página principal
    router.get('/', mainControllers.home);  // Muestra la página de inicio
    
    // Página de error
    router.get('/error', mainControllers.error);  // Página de error

    // **Estadios**
    router.get('/estadios', estadioControllers.getAllEstadios);  // Ver todos los estadios
    router.get('/estadioSearch', estadioControllers.searchEstadio);  // Buscar estadio

    // **Grupos**
    router.get('/grupos', grupoControllers.getAllGrupos);  // Ver todos los grupos

    // **Partidos**
    router.get('/partidos', partidoControllers.getAllPartidos);  // Ver todos los partidos
    router.get('/partidoSearch', partidoControllers.searchPartido);  // Buscar partido

    // **Resultados**
    router.get('/resultados', resultadoControllers.getAllResultados);  // Ver todos los resultados
    router.get('/resultadoSearch', resultadoControllers.searchResultado);  // Buscar resultado

    // **Selecciones**
    router.get('/selecciones', seleccionControllers.getAllSelecciones);  // Ver todas las selecciones
    router.get('/seleccionSearch', seleccionControllers.searchSeleccion);  // Buscar selección

    // Rutas para mostrar las vistas (HTML)
    router.get('/home', (req, res) => {
        res.sendFile('home.html', { root: 'views' });  // Ruta de la página de inicio
    });
    router.get('/error', (req, res) => {
        res.sendFile('error.html', { root: 'views' });  // Ruta para página de error
    });
    router.get('/group', (req, res) => {
        res.sendFile('group.html', { root: 'views' });  // Ruta para la página de grupos
    });
    router.get('/match', (req, res) => {
        res.sendFile('match.html', { root: 'views' });  // Ruta para la página de partidos
    });
    router.get('/stadium', (req, res) => {
        res.sendFile('stadium.html', { root: 'views' });  // Ruta para la página de estadios
    });
    router.get('/selection', (req, res) => {
        res.sendFile('selection.html', { root: 'views' });  // Ruta para la página de selecciones
    });
    router.get('/stadiumSearch', (req, res) => {
        res.sendFile('stadiumSearch.html', { root: 'views' });  // Ruta para búsqueda de estadios
    });
    router.get('/selectionSearch', (req, res) => {
        res.sendFile('selectionSearch.html', { root: 'views' });  // Ruta para búsqueda de selecciones
    });

    return router;
};
