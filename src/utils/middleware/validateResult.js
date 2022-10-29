const { validationResult } = require('express-validator');

const validateResultMiddkeware = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({ errores: error.array() })
    }
} 

module.exports = { validateResultMiddkeware }