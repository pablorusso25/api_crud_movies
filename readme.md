# Api Peliculas CRUD - RUTAS

*NOTA 1 No utilizar espacios, remplazar espacios con "+" en metodos GET, DELETE, PUT*

*NOTA 2 : Crear metodo .env para probar* 

Archivo .env
------------------
1. PORT = numero puerto
2. DATABASE_URL = mongodb+srv://*user*:*password*@*url*/DB-Peliculas?retryWrites=true&w=majority


## Agregar pelicula - metodo POST

**POST** localhost:8080/api/pelicula

*body:*
```JSON
    {
        "titulo": "kill bill vol.1",
        "genero": "drama",
        "duracion": 119,
        "year": 2003,
        "publico": "+18",
        "director": "Quentin Tarantino",
        "elenco": [
            "Uma Thurman",
            "Lucy Liu",
            "Vivica A. Fox",
            "Daryl Hannah",
            "David Carradine"
        ],
        "calificacion": 9,
        "descripcion": "Después de despertar de un coma de cuatro años, un ex asesino se vengó del equipo de asesinos que la traicionaron.",
    }
```

## Buscar pelicula por nombre

**GET** localhost:8080/api/pelicula/kill+bill+vol.1

## Traer todas la peliculas

**GET** localhost:8080/api/pelicula

## Borrar Pelicula

**DELETE** localhost:8080/api/pelicula/el+padrino+2

## Borrar Editar Pelicula 

**PUT** localhost:8080/api/pelicula/el+padrino

*NOTA:No campos que no se envian no cambian el valor*

*body:*
```JSON
    {
        "genero": "drama",
        "duracion": 120,
        "year": 1987,
        "publico": "+13",
        "director": "Francis ford coppola",
        "elenco": ["Robert de Niro","Al Pacino", "Marlon Brando"],
        "calificacion": 9,
        "descripcion": "Una adaptación ganadora del Premio de la Academia, de la novela de Mario Puzo acerca de la familia"
    }
```

## Peliculas de estudio Ghibli - Api 

**GET** localhost:8080/api/peliculas/ghibli
