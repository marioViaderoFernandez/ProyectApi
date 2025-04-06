const express = require('express');
const routes = require('./router');  // Importando las rutas
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Configuración para habilitar HTML (usamos EJS como motor de plantillas)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Carpeta de vistas
app.set('views', path.join(__dirname, './views'));

// Conexión con MongoDB (Asegúrate de tener MongoDB corriendo en tu máquina o en la nube)
mongoose.Promise = global.Promise;
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
