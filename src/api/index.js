// Modulos requeridos
const axios = require('axios').default;
const apiUrl = 'https://rickandmortyapi.com/api';

// Funcion para obtener datos
async function getAll() {
  const response = await axios.get(`${apiUrl}/character`)
  return response;
}
async function getChar(id) {
  const response = axios.get(`${apiUrl}/character/` + id);
  return response
}

export default {
  getAll,
  getChar
};
