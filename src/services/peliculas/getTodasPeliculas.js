const PeliculaModel = require("../../models/pelicula.model")

const getTodasPeliculasService = async () => {
    
    // obtener todas las peliculas
    const peliculas = await PeliculaModel.find();
    return peliculas;
    
}

module.exports = getTodasPeliculasService;