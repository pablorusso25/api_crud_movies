const PeliculaModel = require("../../models/pelicula.model");

const editarPeliculaService = async (req) => {
    
    let { titulo } = req.params;
    let { 
            genero, 
            publico,
            year,
            director,
            duracion,
            elenco,
            calificacion,
            descripcion, 
        } = req.body;

    titulo = titulo.split('+').join(' ');
    const updatePelicula = await PeliculaModel.findOne({ titulo });
    
    if (updatePelicula !== null) {
        
        if(genero)
            { updatePelicula.genero   = genero };
        
        if(publico)
            { updatePelicula.publico  = publico };
        
        if(year)
            { updatePelicula.year     = year };
        
        if(director)
            { updatePelicula.director = director };
        
        if(duracion)
            { updatePelicula.duracion = duracion };
        
        if(elenco)
            { updatePelicula.elenco = elenco };

        if(calificacion)
            { updatePelicula.calificacion = calificacion };

        if(descripcion)
            { updatePelicula.descripcion = descripcion };

        await updatePelicula.save();
        return updatePelicula; 
    }    
    else { 
        return false; // no se encontro la pelicula
    }
};

module.exports = editarPeliculaService;