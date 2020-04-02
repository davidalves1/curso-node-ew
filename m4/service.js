const axios = require('axios')

const http = axios.create({
  baseURL: 'https://swapi.co/api'
})

const getPeople = async () => {
  const query = { format: 'json' }
  const people = await http.get('people', { query })

  return people
}

module.exports = {
  getPeople
}
