const { ok, deepEqual } = require('assert')
const database = require('../database')

const DEFAULT_HERO = {
  id: 1,
  name: 'Homem de Ferro',
  powers: ['Intelligence', 'Money'],
}

describe('Star Wars API Tests', () => {
  it('should query a hero using files', async () => {
    const expected = DEFAULT_HERO

    const [result] = await database.list(1)
    deepEqual(result, expected)
  })
})
