// modelo que se guardar en la base de datos
const { Schema, model } = require("mongoose");

const PeliculaSchema = new Schema(
    {
        // 1 - titulo de la pelicula - requerido
        titulo: {   
                    type: String, 
                    unique: true, 
                    required: [true, "La pelicula debe tener un titulo"] 
                },
        // 2 - genero de la pelicula - requerido
        genero: { 
                    type: String, 
                    enum: ["accion", "aventuras", "ciencia ficcion", "comedia", "documental", "drama","fantasia", "musical","suspense", "terror", "romantica"],
                    required: [true, "La pelicula debe tener un genero valido (accion, aventuras, ciencia ficcion, comedia, documental, drama, fantasia, musical, suspense, terror, romantica)"] 
                },
        // 3 - duracion en minutos maximo, 1000 mil por pelicula - requerido
        duracion:
                {   
                    type: Number, 
                    min: 1, 
                    max: 60000, 
                    required: [true, "La pelicula debe tene duracion en minutos"] 
                }, 
        // 4 - Año de estreno - requerido
        year:
            {   
                type: Number, 
                min: 1895, 
                max: 9999, 
                required: [true, "Se requiere el año de estreno de la pelicula"]
            },
        // 5 - Publico apto - requerido
        publico:
            {
                type: String, 
                enum:["ATP", "+13", "+16", "+18", "C"], 
                required: [true, "Ingrese la calificacion para tipo publico (ATP,+13,+16,+18,C)"]
            },
        // 6 - Director - Requerido
        director:
            {
                type: String, 
                required: [true, "Ingrese el director de la pelicula"]
            }, 
        //  7 - Actores - requerido
        elenco:
            { 
                type:[String], 
                validate: elenco => Array.isArray(elenco) && elenco.length > 0,
        },
        //  8 - Calificacion de 1 a 10 - opcional
        calificacion: 
            { 
                type:Number, 
                min: 1, 
                max: 10, 
                default: 1 
            },
        //  9 - Descripcion - opcional
        descripcion: 
            {   type:String, 
                default: "Sin descripción"
            },
    },
    // opciones del modelo ...
    {
        versionKey: false,
        timestamps: true,
    }
);
    
const PeliculaModel = model("Pelicula", PeliculaSchema);
module.exports = PeliculaModel;