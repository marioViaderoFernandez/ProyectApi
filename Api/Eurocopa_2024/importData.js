const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Modelos Eurocopa
const Selection = require('./models/Selection');
const Stadium = require('./models/Stadium');
const Match = require('./models/Match');
const Group = require('./models/Group');
const Result = require('./models/Result');

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
    const selectionsData = fs.readFileSync(path.join(dataFolderPath, 'selections.json'), 'utf-8');
    await Selection.create(JSON.parse(selectionsData));

    const stadiumsData = fs.readFileSync(path.join(dataFolderPath, 'stadiums.json'), 'utf-8');
    await Stadium.create(JSON.parse(stadiumsData));

    const matchesData = fs.readFileSync(path.join(dataFolderPath, 'matches.json'), 'utf-8');
    await Match.create(JSON.parse(matchesData));

    const groupsData = fs.readFileSync(path.join(dataFolderPath, 'groups.json'), 'utf-8');
    await Group.create(JSON.parse(groupsData));

    const resultsData = fs.readFileSync(path.join(dataFolderPath, 'results.json'), 'utf-8');
    await Result.create(JSON.parse(resultsData));

    console.log('Datos importados correctamente');
    process.exit();
  } catch (err) {
    console.error('Error al importar datos:', err);
    process.exit(1);
  }
};
