
// en este archivo realizamos la conexion a la base de datos
const mongoose = require('mongoose'); // para la conexion a la base de datos
require('dotenv').config(); // para traerlos los valores de .env

const DATABASE = process.env.DATABASE_URL || '';
const hora = new Date();

(async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log(`Base de datos conectada HORA: ${hora.toLocaleString()}`);
    } catch (error) {
        console.log(error);
    }
})();

module.exports = mongoose; // exporamos moongoose para usarlo en el app.js y obtener la conexion