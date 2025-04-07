const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Modelos Eurocopa
const Selection = require('./models/Seleccion');
const Stadium = require('./models/Estadio');
const Match = require('./models/Partido');
const Group = require('./models/Grupo');

// Ruta de los archivos JSON con los datos
const dataFolderPath = path.resolve(__dirname, 'data');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/eurocopa_2024_api')
  .then(() => {
    console.log('Conectado a MongoDB');
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.log('Base de datos eliminada');
    return importData();
  })
  .catch((err) => {
    console.error('Error al conectar o eliminar la base de datos:', err);
    process.exit(1);
  });

// Función para importar datos
const importData = async () => {
  try {
    const selectionsData = fs.readFileSync(path.join(dataFolderPath, 'selecciones.json'), 'utf-8');
    await Seleccion.create(JSON.parse(seleccionesData));

    const stadiumsData = fs.readFileSync(path.join(dataFolderPath, 'estadios.json'), 'utf-8');
    await Estadio.create(JSON.parse(estadiosData));

    const matchesData = fs.readFileSync(path.join(dataFolderPath, 'partidos.json'), 'utf-8');
    await Partido.create(JSON.parse(partidosData));

    const groupsData = fs.readFileSync(path.join(dataFolderPath, 'grupos.json'), 'utf-8');
    await Grupo.create(JSON.parse(gruposData));

    

    console.log('Datos importados correctamente');
    process.exit();
  } catch (err) {
    console.error('Error al importar datos:', err);
    process.exit(1);
  }
};
