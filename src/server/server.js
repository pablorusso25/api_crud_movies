const express     = require('express');
const cors        = require('cors');
const routes      = require('../routes/routes');
const routerError = require('../utils/middleware/routeError');
const server      = express();

server.use(express.json());
server.use(cors('*'));          // middleware a nivel aplicacion
server.use('/api', routes)
server.use(routerError)// middleware para manejo de errores aplicacion


module.exports = server;