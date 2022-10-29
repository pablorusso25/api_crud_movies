const { check, param } = require('express-validator');
const { validateResultMiddkeware } = require('./validateResult');

const arrayGenero = ["accion", "aventuras", "ciencia ficcion", "comedia", "documental", "drama","fantasia", "musical","suspense", "terror", "romantica"];
const arrayPublico = ["ATP", "+13", "+16", "+18", "C"];

const validateAgregar = [
    // *********************************************************************
    check('titulo') 
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('No debe ser vacio')
    // validar que se envie en minusculas
    .isLowercase()
    .withMessage('Enviar sin mayusculas')
    // quitar espacio en blanco a la derecha - delante
    // quitar espacio en blanco a la izquierda - detras
    .trim(),

    // ********************************************************************
    check('genero')
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('No debe ser vacio')   
    // validar que este dentro del rango de categorias
    .custom((value) => {
        if(arrayGenero.indexOf(value) > -1) {
            return true;
        } else {
            throw new Error('El se espera valor: accion, aventuras, ciencia ficcion, comedia, documental, drama, fantasia, musical, suspense, terror, romantica');
        }
    }),

    // ********************************************************************
    check('duracion')
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')   
    // validar que se un numero entre 1 y 60000
    .isInt({ min: 1, max: 60000 })
    .withMessage('Debe ser numero entero entre 1 y 60000 minutos'),

    // ********************************************************************
    check('year')
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio') 
    // validar que se un numero entre 1895 y 9999
    .isInt({ min: 1895, max: 9999 })
    .withMessage('Debe ser numero entero entre 1895 y 9999 minutos'),  

    // ******************************************************************** 
    check('publico')
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')  
     // validar que se envie en minusculas
    .isUppercase()
    .withMessage('Valor en Mayusculas')   
    // validar que este dentro del rango publico
    .custom((value) => {
        if(arrayPublico.indexOf(value) > -1) {
            return true;
        } else {
            throw new Error('El se espera valor: ATP,+13,+16,+18,C');
        }
    }),    

    // ******************************************************************** 
    check('director')
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')  
    // validar logitud
    .isLength({min: 1, max: 100})
    .withMessage('Nombre maximo 100')
    // quitar espacio en blanco a la derecha - delante
    // quitar espacio en blanco a la izquierda - detras
    .trim(), 

    // ******************************************************************** 
    check('elenco')
    .custom((actores) => {
        if(Array.isArray(actores) && actores.length > 0) 
        {
            actores.forEach((element) => {
                if ( typeof element !== 'string' || element.length === 0 )
                {
                    throw new Error('Formato actor no valido, vacio o numerico');
                }
            });
            
            // actores ok
            return true;
        } else {
            throw new Error('Se espera un arreglo de actores --> ["acto1", "actor2" ...]');
        }
    }),      

    // ********************************************************************
    check('calificacion').optional()
    // validar que se un numero entre 1 y 60000
    .isInt({ min: 1, max: 10 })
    .withMessage('Se espera un entero de 1 a 10'),

    // ********************************************************************
    check('descripcion').optional()
    // quitar espacio en blanco a la derecha - delante
    // quitar espacio en blanco a la izquierda - detras
    .trim(),
    // detallo los errores ...
    (req, res, next) => {
        validateResultMiddkeware(req, res, next)
    }
]

const validateTituloPelicula = [
    param('titulo')
    .isLowercase()
    .withMessage('Enviar sin mayusculas')
    // quitar espacios al los laterales
    .trim(),
    // detallo los errores ...
    (req, res, next) => {
            validateResultMiddkeware(req, res, next)
    }
]

const validateEditar = [

    // ********************************************************************
    check('genero').optional()
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('No debe ser vacio')   
    // validar que este dentro del rango de categorias
    .custom((value) => {
        if(arrayGenero.indexOf(value) > -1) {
            return true;
        } else {
            throw new Error('El se espera valor: accion, aventuras, ciencia ficcion, comedia, documental, drama, fantasia, musical, suspense, terror, romantica');
        }
    }),

    // ********************************************************************
    check('duracion').optional()
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')   
    // validar que se un numero entre 1 y 60000
    .isInt({ min: 1, max: 60000 })
    .withMessage('Debe ser numero entero entre 1 y 60000 minutos'),

    // ********************************************************************
    check('year').optional()
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio') 
    // validar que se un numero entre 1895 y 9999
    .isInt({ min: 1895, max: 9999 })
    .withMessage('Debe ser numero entero entre 1895 y 9999 minutos'),  

    // ******************************************************************** 
    check('publico').optional()
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')  
     // validar que se envie en minusculas
    .isUppercase()
    .withMessage('Valor en Mayusculas')   
    // validar que este dentro del rango publico
    .custom((value) => {
        if(arrayPublico.indexOf(value) > -1) {
            return true;
        } else {
            throw new Error('El se espera valor: ATP,+13,+16,+18,C');
        }
    }),    

    // ******************************************************************** 
    check('director').optional()
    // validar exista ...
    .exists()
    .withMessage('Debe existir el campo')
    // validar que no este vacio
    .not()
    .isEmpty()
    .withMessage('Campo no debe ser vacio')  
    // validar logitud
    .isLength({min: 1, max: 100})
    .withMessage('Nombre maximo 100')
    // quitar espacio en blanco a la derecha - delante
    // quitar espacio en blanco a la izquierda - detras
    .trim(), 
    
    // ******************************************************************** 
    check('elenco').optional()
    .custom((actores) => {
        if(Array.isArray(actores) && actores.length > 0) 
        {
            actores.forEach((element) => {
                if ( typeof element !== 'string' || element.length === 0 )
                {
                    throw new Error('Formato actor no valido, vacio o numerico');
                }
            });
            // actores ok
            return true;
        } else {
            throw new Error('Se espera un arreglo de actores --> ["acto1", "actor2" ...]');
        }
    }),      

    // ********************************************************************
    check('calificacion').optional()
    // validar que se un numero entre 1 y 60000
    .isInt({ min: 1, max: 10 })
    .withMessage('Se espera un entero de 1 a 10'),

    // ********************************************************************
    check('descripcion').optional()
    // quitar espacio en blanco a la derecha - delante
    // quitar espacio en blanco a la izquierda - detras
    .trim(),
    // detallo los errores ...
    (req, res, next) => {
        validateResultMiddkeware(req, res, next)
    }
]

module.exports = { validateAgregar, validateTituloPelicula, validateEditar }