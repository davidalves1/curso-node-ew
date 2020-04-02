const { readFile } = require('fs')
const { promisify } = require('util')

const asyncReadFile = promisify(readFile)

class Database {
  constructor() {
    this.FILE_NAME = 'heros.json'
  }

  async readDatabse() {
    const file = await asyncReadFile(this.FILE_NAME, 'utf8')

    return JSON.parse(file.toString())
  }

  writeDatabase() {

  }

  async list(id = null) {
    const heroes = await this.readDatabse()

    return heroes.filter(hero => id ? hero.id === id : true)
  }
}

module.exports = new Database()
