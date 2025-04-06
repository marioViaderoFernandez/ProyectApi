const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./router');  // Importando las rutas

const app = express();

// Carpeta de vistas (HTML)
app.use(express.static(path.join(__dirname, 'views')));

// Conexión con MongoDB
mongoose.connect('mongodb://localhost:27017/eurocopa_2024_api')
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error de conexión con MongoDB:', error);
  });

// Definir las rutas de la aplicación
app.use('/', routes());

// Configuración para iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

