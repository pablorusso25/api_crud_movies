const agregarPeliculaService    = require("../services/peliculas/agregarPelicula");
const getPeliculaService        = require("../services/peliculas/getPelicula")
const getTodasPeliculasService  = require("../services/peliculas/getTodasPeliculas");
const deletePeliculaService     = require("../services/peliculas/deletePelicula");
const editarPeliculaService     = require("../services/peliculas/editarPelicula");
const getPeliculasGhibliService = require("../services/peliculas/getPeliculasGhibli");

const agregarPelicula = async (req, res,next) => {
    try {
        const resp = await agregarPeliculaService(req);
        if (resp) {
            res.json({message: "Pelicula Generada con exito."})
        } else {
            res.json({message: "Ya exite la pelicula que se quiere agregar"})
        }
    } catch (error) {
        // const msg = error.message
        // res.json({message: "Ocurrió un error. " + msg})
        next(error);
    }
}

const  getPelicula = async(req,res,next) => {
    try {
        const resp = await getPeliculaService(req);    
        if (resp) {
            res.json({resp})
        } else {
            let { titulo } = req.params;
            titulo = titulo.split('+').join(' ');
            res.json({message: 'No existe la Pelicula con titulo: ' + titulo})
        }
    } catch (error) {
        next(error);
    }
}

const getTodasPeliculas = async(req,res,next) => {
    try {
        peliculas = await getTodasPeliculasService()
        res.json(peliculas);
    } catch (error) {
        next(error);
    }
}

const deletePelicula = async(req,res,next) => {
    try {
        const { deletedCount, titulo } = await deletePeliculaService(req)
        if (deletedCount === 0) 
            { res.json({message: "No se elimino la pelicula:" + titulo })}
        else 
            { res.json({message: "Pelicula eliminada con exito: " + titulo })}
    } catch (error) {
        next(error);
    }
}

const editarPelicula = async(req,res,next) => {
    try {
        const pelicula = await editarPeliculaService(req);
        if (pelicula) {
            res.json(pelicula);
        } else {
            let { titulo } = req.params;
            titulo = titulo.split('+').join(' ');
            res.json({message: 'No existe la Pelicula con titulo: ' + titulo})
        }
    } catch (error) {
        next(error);
    }
}

const getPeliculasGhibli = async(req,res,next) => {
    try {
        peliculas = await getPeliculasGhibliService();
        res.json(peliculas);
    } catch (error) {
        next(error);
    }
}

module.exports = { agregarPelicula, getPelicula, getTodasPeliculas, deletePelicula, editarPelicula, getPeliculasGhibli };