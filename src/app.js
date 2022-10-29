const app = require('./server/server');
require('dotenv').config(); // para obtener los valores de .ENV
require('./database/config'); // conexion a la base de datos
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}.`);
})