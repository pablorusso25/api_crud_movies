const PeliculaModel = require("../../models/pelicula.model");

const agregarPeliculaService = async (req) => {
        
        const pelicula = req.body;
        const {titulo} = pelicula;
        
        // busco si el titulo de la pelicula ya esta registrado en la base de datos
        const registro =  await PeliculaModel.findOne({ titulo });

        if (registro === null)
        {
            const newPelicula = new PeliculaModel(pelicula);
            await newPelicula.save();
            return true;
        }
        else
        {
            // No agrego la pelicula porque ya existe
            return false;
        }

    };

module.exports = agregarPeliculaService;