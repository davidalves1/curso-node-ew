const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

class Database {
  constructor() {
    this.FILE_NAME = 'heros.json'
  }

  async readDatabse() {
    const file = await asyncReadFile(this.FILE_NAME, 'utf8')
    return JSON.parse(file.toString())
  }

  async writeDatabase(data) {
    await asyncWriteFile(this.FILE_NAME, JSON.stringify(data))
    return true
  }

  async list(id = null) {
    const heroes = await this.readDatabse()

    return heroes.filter(hero => id ? hero.id === id : true)
  }

  async create(data) {
    const result = await this.writeDatabase(data)

    return result
  }
}

module.exports = new Database()
