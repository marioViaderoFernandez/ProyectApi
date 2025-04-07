const express = require('express');
const router = express.Router();

// Controladores importados
const estadioControllers = require('../controllers/estadioControllers');
const grupoControllers = require('../controllers/grupoControllers');
const partidoControllers = require('../controllers/partidoControllers');
const seleccionControllers = require('../controllers/seleccionControllers');

// Controlador principal (para la página de inicio)
const mainControllers = require('../controllers/mainControllers');

module.exports = () => {
    // Página principal
    router.get('/', mainControllers.home);  // Muestra la página de inicio
    
    // Página de error
    router.get('/error', mainControllers.error);  // Página de error

    // **Estadios**
    router.get('/stadium', estadioControllers.getAllEstadios);  // Ver todos los estadios
    router.get('/stadiumSearch', estadioControllers.searchEstadio);  // Buscar estadio

    // **Grupos**
    router.get('/group', grupoControllers.getAllGrupos);  // Ver todos los grupos
    router.get('/groupSearch', grupoControllers.searchGrupo);  // Buscar grupo

    // **Partidos**
    router.get('/match', partidoControllers.getAllPartidos);  // Ver todos los partidos
    
    // **Selecciones**
    router.get('/selection', seleccionControllers.getAllSelecciones);  // Ver todas las selecciones
    router.get('/selectionSearch', seleccionControllers.searchSeleccion);  // Buscar selección

   
    return router;
};
