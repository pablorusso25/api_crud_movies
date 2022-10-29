const routerError  = (req,res) => {
    res.status(404).json(
        {
            error: -1,
            descripcion : `Error en la Ruta: ${req.url}, validad que este bien escrita. El metodo ${req.method} no fue implementado`
        }
    )
}

module.exports = routerError;