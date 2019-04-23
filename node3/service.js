const { get } = require('axios');


const URL = `https://swapi.co/api/people`;

const obterPessoas = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`;
    return await get(url);
}



module.exports = {
    obterPessoas
}