const PeliculaModel = require("../../models/pelicula.model")

const deletePeliculaService = async (req) => {
    
    let { titulo } = req.params;

    //console.log(titulo);
    //titulo = titulo.replace(/+/g, " "); 
    titulo = titulo.split('+').join(' ');
    const { deletedCount } = await PeliculaModel.deleteOne({ titulo: titulo });
    console.log(`Registros borrados ${deletedCount}`);
    return { deletedCount, titulo }; // devuelvo la cantidad de borrados -> 0 (ninguno) 
}

module.exports = deletePeliculaService;