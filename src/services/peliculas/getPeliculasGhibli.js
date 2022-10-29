const axios = require('axios');

const getPeliculasGhibliService = async () => {
    
    const { data }= await axios.get('https://ghibliapi.herokuapp.com/films');;
    return data;
}

module.exports = getPeliculasGhibliService;