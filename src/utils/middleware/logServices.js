const logAlta = (req,res,next) => {
    const hora = new Date();
    const {titulo} = req.body;
    
    // si tiene mas de 2 espacios el titulo esta mal, validamos que no quede mas de un espacio
    const resp = titulo.includes('  '); 
    
    if (resp)
    {
        res.status(403).send({
        descripcion : 'No include mas de dos espacios entre palabras para titulos de peliculas'
        })
    }
    else {
        console.log(`Tratando de insertar la pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
        next();
    }
}

const logBaja = (req,res,next) => {
    const hora = new Date();
    const {titulo} = req.params;

    // usar "+" en lugar de espacios " "
    // agregamos la validacion para eso
    const resp = titulo.includes(' ');
    if (resp)
    {
        res.status(403);
        res.json({message: "Utilice '+' en lugar de espacios para las busquedas"})
    } 
    else {
        console.log(`Tratando borrar pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
        next();
    }

}

const logGetPelicula = (req,res,next) => {
    
    const hora = new Date();
    let {titulo} = req.params;
    
    // usar "+" en lugar de espacios " "
    // agregamos la validacion para eso
    const resp = titulo.includes(' ');
    if (resp)
    {
        res.status(403);
        res.json({message: "Utilice '+' en lugar de espacios para las busquedas"})
    } 
    else 
    {
        // log de hora de consulta ...
        titulo = titulo.split('+').join(' ');
        console.log(`Consultando por la pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
        next();
    }

}

const logTodasPeliculas = (req,res,next) => {
    const hora = new Date();
    console.log(`Levantando todas las peliculas a las: ${hora.toLocaleString()}`);
    next();
}

const editLogPelicula = (req,res,next) => {
    
    const hora = new Date();
    let { titulo } = req.params;

    // usar "+" en lugar de espacios " "
    // agregamos la validacion para eso
    const resp = titulo.includes(' ');
    if (resp)
    {
        res.status(403);
        res.json({message: "Utilice '+' en lugar de espacios para las busquedas"})
    } 
    else
    {

        // log de hora de consulta ...
        titulo = titulo.split('+').join(' ');   
        console.log(`Editanto pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
        next();

    }
}

module.exports = { logAlta, logBaja, logGetPelicula, logTodasPeliculas, editLogPelicula }