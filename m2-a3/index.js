// Criando própria implementação do array map
const service = require('../service')

Array.prototype.customMap = function (callback) {
  const items = []

  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index)
    items.push(result)
  }

  return items
}

const main = async () => {
  const response = await service.getPeople()

  const names = response.data.results.map((item, index) => `${index}. ${item.name}`)
  const newNames = response.data.results.customMap((item, index) => `${index}. ${item.name}`)

  console.log('Map', names)
  console.log('NewMap', newNames)
}

main()
