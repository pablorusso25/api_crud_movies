const express = require("express");
const router = express.Router();

// controllers ...
const { agregarPelicula, 
        getPelicula,
        getTodasPeliculas,
        deletePelicula,
        editarPelicula,
        getPeliculasGhibli,
        } = require("../controller/peliculaController");

// middleware express validator ....
const { validateAgregar, 
        validateTituloPelicula,
        validateEditar,
} = require("../utils/middleware/validate");

// middleware log ....
const { logAlta, 
        logGetPelicula,
        logTodasPeliculas,
        logBaja,
        editLogPelicula
} = require("../utils/middleware/logServices")

// Rutas ...
router.post("/pelicula", validateAgregar, logAlta, agregarPelicula);
router.get("/pelicula/:titulo", validateTituloPelicula, logGetPelicula, getPelicula);
router.get("/pelicula", getTodasPeliculas, logTodasPeliculas);
router.delete("/pelicula/:titulo",validateTituloPelicula, logBaja, deletePelicula);
router.put("/pelicula/:titulo", validateTituloPelicula, validateEditar, editLogPelicula, editarPelicula);
router.get("/peliculas/ghibli", getPeliculasGhibli);

module.exports = router;
