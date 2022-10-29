const PeliculaModel = require("../../models/pelicula.model")

const getPeliculaService = async (req) => {
    
    let { titulo } = req.params;

    // console.log(titulo);
    //titulo = titulo.replace(/+/g, " "); 
    titulo = titulo.split('+').join(' ');
    const pelicula = await PeliculaModel.findOne({ titulo });
    
    if (pelicula !== null) {
        return pelicula; // devuelvo el registro de la pelicula
    }    
    else { 
        return false; // la pelicula no existe 
    }
}

module.exports = getPeliculaService;