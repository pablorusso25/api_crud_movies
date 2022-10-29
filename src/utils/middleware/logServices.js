const logAlta = (req,res,next) => {
    const hora = new Date();
    const {titulo} = req.params;
    console.log(`Tratando de insertar la pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
    next();
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

    console.log(`Tratando borrar pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
    next();
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
    
    // log de hora de consulta ...
    titulo = titulo.split('+').join(' ');
    console.log(`Consultando por la pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
    next();
}

const logTodasPeliculas = (req,res,next) => {
    const hora = new Date();
    console.log(`Levantando todas las peliculas a las: ${hora.toLocaleString()}`);
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

    // log de hora de consulta ...
    titulo = titulo.split('+').join(' ');   
    console.log(`Editanto pelicula --> ${titulo} a las ${hora.toLocaleString()}`);
    next();
}

module.exports = { logAlta, logBaja, logGetPelicula, logTodasPeliculas, editLogPelicula }