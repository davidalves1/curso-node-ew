const { ok, deepEqual } = require('assert')
const database = require('../database')

const DEFAULT_HERO = {
  id: 1,
  name: 'Homem de Ferro',
  powers: ['Intelligence', 'Money'],
}

describe('Heroes API Tests', () => {
  before(async () => {
    await database.create(DEFAULT_HERO)
  })

  it('should query a hero using files', async () => {
    const expected = DEFAULT_HERO

    const [result] = await database.list(DEFAULT_HERO.id)
    deepEqual(result, expected)
  })

  it('should add a new hero to database', async () => {
    const expected = DEFAULT_HERO

    await database.create(DEFAULT_HERO)
    const [result] = await database.list(DEFAULT_HERO.id)

    deepEqual(result, expected)
  })
})
